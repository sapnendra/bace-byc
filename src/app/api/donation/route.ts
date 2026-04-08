import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import dbConnect from "@/lib/mongodb";
import Donation from "@/models/Donation";
import { donationSchema } from "@/lib/validations/donation";
import { uploadImage } from "@/lib/cloudinary";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

export const runtime = "nodejs";

type RateLimitEntry = {
  count: number;
  windowStart: number;
};

const WINDOW_MS = 60_000;
const MAX_REQUESTS_PER_WINDOW = 5;
const requestStore = new Map<string, RateLimitEntry>();

function getDayStart(date = new Date()): Date {
  const d = new Date(date);
  d.setHours(0, 0, 0, 0);
  return d;
}

function buildDateFilter(filter: string | null): Record<string, unknown> | undefined {
  if (filter === "today") {
    return { $gte: getDayStart() };
  }

  if (filter === "month") {
    const start = new Date();
    start.setDate(1);
    start.setHours(0, 0, 0, 0);
    return { $gte: start };
  }

  return undefined;
}

function escapeCsvField(value: string | number): string {
  const field = String(value ?? "");
  if (field.includes(",") || field.includes("\n") || field.includes('"')) {
    return `"${field.replace(/"/g, '""')}"`;
  }
  return field;
}

function getClientIp(request: NextRequest): string {
  const forwardedFor = request.headers.get("x-forwarded-for");
  if (forwardedFor) {
    return forwardedFor.split(",")[0].trim();
  }

  return request.headers.get("x-real-ip") || "unknown";
}

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const existing = requestStore.get(ip);

  if (!existing || now - existing.windowStart > WINDOW_MS) {
    requestStore.set(ip, { count: 1, windowStart: now });
    return false;
  }

  if (existing.count >= MAX_REQUESTS_PER_WINDOW) {
    return true;
  }

  existing.count += 1;
  return false;
}

async function generateDonationId(): Promise<string> {
  const year = new Date().getFullYear();
  const yearStart = new Date(year, 0, 1);
  const yearEnd = new Date(year + 1, 0, 1);

  const yearlyCount = await Donation.countDocuments({
    createdAt: {
      $gte: yearStart,
      $lt: yearEnd,
    },
  });

  const serial = String(yearlyCount + 1).padStart(4, "0");
  return `BACE-${year}-${serial}`;
}

export async function GET(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user || (session.user as any).role !== "admin") {
      return NextResponse.json(
        {
          success: false,
          message: "Unauthorized",
        },
        { status: 401 },
      );
    }

    await dbConnect();

    const { searchParams } = new URL(request.url);
    const search = (searchParams.get("search") || "").trim();
    const filter = searchParams.get("filter") || "all";
    const page = Math.max(parseInt(searchParams.get("page") || "1", 10), 1);
    const limit = Math.min(
      Math.max(parseInt(searchParams.get("limit") || "20", 10), 1),
      100,
    );
    const sort = searchParams.get("sort") || "newest";
    const format = searchParams.get("format") || "json";

    const query: any = {};

    const dateFilter = buildDateFilter(filter);
    if (dateFilter) {
      query.createdAt = dateFilter;
    }

    if (search) {
      query.$or = [
        { name: { $regex: search, $options: "i" } },
        { email: { $regex: search, $options: "i" } },
        { mobile: { $regex: search, $options: "i" } },
      ];
    }

    if (format === "csv") {
      const csvData = await Donation.find(query)
        .sort({ createdAt: -1 })
        .select("name email mobile amount createdAt")
        .lean();

      const header = "Name,Email,Mobile,Amount,Date";
      const rows = csvData.map((item) => {
        const date = new Date(item.createdAt).toISOString();
        return [
          escapeCsvField(item.name),
          escapeCsvField(item.email),
          escapeCsvField(item.mobile),
          escapeCsvField(item.amount),
          escapeCsvField(date),
        ].join(",");
      });

      const csv = [header, ...rows].join("\n");
      return new NextResponse(csv, {
        status: 200,
        headers: {
          "Content-Type": "text/csv; charset=utf-8",
          "Content-Disposition": `attachment; filename=donations-${new Date().toISOString().slice(0, 10)}.csv`,
        },
      });
    }

    const sortQuery: Record<string, 1 | -1> =
      sort === "highest"
        ? { amount: -1, createdAt: -1 }
        : { createdAt: -1 };

    const skip = (page - 1) * limit;

    const [donations, total, totalSummary, todaySummary, recentDonors] =
      await Promise.all([
        Donation.find(query).sort(sortQuery).skip(skip).limit(limit).lean(),
        Donation.countDocuments(query),
        Donation.aggregate([
          {
            $group: {
              _id: null,
              totalAmount: { $sum: "$amount" },
              totalDonors: { $sum: 1 },
            },
          },
        ]),
        Donation.aggregate([
          {
            $match: {
              createdAt: {
                $gte: getDayStart(),
              },
            },
          },
          {
            $group: {
              _id: null,
              todayAmount: { $sum: "$amount" },
            },
          },
        ]),
        Donation.countDocuments({
          createdAt: {
            $gte: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000),
          },
        }),
      ]);

    const stats = {
      totalAmount: totalSummary[0]?.totalAmount || 0,
      totalDonors: totalSummary[0]?.totalDonors || 0,
      todayAmount: todaySummary[0]?.todayAmount || 0,
      recentDonations: recentDonors || 0,
    };

    return NextResponse.json({
      success: true,
      data: donations,
      stats,
      pagination: {
        page,
        limit,
        total,
        totalPages: Math.ceil(total / limit),
      },
    });
  } catch (error) {
    console.error("Donation fetch error:", error);
    return NextResponse.json(
      {
        success: false,
        message: "Failed to fetch donations",
      },
      { status: 500 },
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const clientIp = getClientIp(request);
    if (isRateLimited(clientIp)) {
      return NextResponse.json(
        {
          success: false,
          message: "Too many requests. Please try again in a minute.",
        },
        { status: 429 },
      );
    }

    const formData = await request.formData();

    const rawData = {
      name: String(formData.get("name") || ""),
      mobile: String(formData.get("mobile") || ""),
      email: String(formData.get("email") || ""),
      amount: String(formData.get("amount") || ""),
    };

    const validatedData = donationSchema.parse(rawData);

    const screenshot = formData.get("screenshot");
    if (!(screenshot instanceof File)) {
      return NextResponse.json(
        {
          success: false,
          message: "Payment screenshot is required",
        },
        { status: 400 },
      );
    }

    if (!screenshot.type.startsWith("image/")) {
      return NextResponse.json(
        {
          success: false,
          message: "Only image files are allowed for screenshot",
        },
        { status: 400 },
      );
    }

    const maxSizeInBytes = 5 * 1024 * 1024;
    if (screenshot.size > maxSizeInBytes) {
      return NextResponse.json(
        {
          success: false,
          message: "Screenshot must be less than 5MB",
        },
        { status: 400 },
      );
    }

    const arrayBuffer = await screenshot.arrayBuffer();
    const base64Image = Buffer.from(arrayBuffer).toString("base64");
    const dataUri = `data:${screenshot.type};base64,${base64Image}`;

    const { url } = await uploadImage(dataUri, "bace-donations");

    await dbConnect();

    let donation = null;
    let retries = 0;

    while (!donation && retries < 5) {
      const donationId = await generateDonationId();

      try {
        donation = await Donation.create({
          ...validatedData,
          screenshotUrl: url,
          donationId,
        });
      } catch (error: any) {
        // Retry on unique key collision in case of high concurrency.
        if (error?.code === 11000 && error?.keyPattern?.donationId) {
          retries += 1;
          continue;
        }
        throw error;
      }
    }

    if (!donation) {
      throw new Error("Failed to generate unique donation ID");
    }

    return NextResponse.json(
      {
        success: true,
        message: "Donation recorded successfully. Thank you for your support!",
        data: {
          id: donation._id,
          donationId: donation.donationId,
          name: donation.name,
          amount: donation.amount,
          createdAt: donation.createdAt,
        },
      },
      { status: 201 },
    );
  } catch (error: unknown) {
    console.error("Donation submission error:", error);

    if (error instanceof Error && error.message.toLowerCase().includes("upload")) {
      return NextResponse.json(
        {
          success: false,
          message: error.message,
        },
        { status: 503 },
      );
    }

    if (error && typeof error === "object" && "name" in error && error.name === "ZodError") {
      const zodError = error as { issues?: unknown };
      return NextResponse.json(
        {
          success: false,
          message: "Validation failed",
          errors: zodError.issues,
        },
        { status: 400 },
      );
    }

    return NextResponse.json(
      {
        success: false,
        message: "Failed to submit donation",
      },
      { status: 500 },
    );
  }
}

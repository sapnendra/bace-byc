import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { z } from "zod";
import dbConnect from "@/lib/mongodb";
import Gallery from "@/models/Gallery";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { uploadImage } from "@/lib/cloudinary";
import { GALLERY_CATEGORIES, GALLERY_SIZES } from "@/types/gallery";

export const runtime = "nodejs";

function isMongoAvailabilityError(error: unknown) {
  const message = error instanceof Error ? error.message : String(error || "");
  return (
    message.includes("MongoServerSelectionError") ||
    message.includes("MongoNetworkError") ||
    message.includes("EAI_AGAIN")
  );
}

const createGallerySchema = z.object({
  title: z.string().trim().min(2).max(120),
  category: z.enum(GALLERY_CATEGORIES),
  gradient: z.string().trim().min(5).max(80),
  size: z.enum(GALLERY_SIZES),
  isPublished: z.boolean(),
  sortOrder: z.number().int().min(0).max(10000),
});

async function requireAdminSession() {
  const session = await getServerSession(authOptions);
  if (!session?.user || (session.user as any).role !== "admin") {
    return null;
  }
  return session;
}

export async function GET(request: NextRequest) {
  try {
    const session = await requireAdminSession();
    if (!session) {
      return NextResponse.json({ success: false, message: "Unauthorized" }, { status: 401 });
    }

    await dbConnect();
    const { searchParams } = new URL(request.url);
    const search = (searchParams.get("search") || "").trim();
    const category = (searchParams.get("category") || "all").trim();

    const query: Record<string, unknown> = {};
    if (search) {
      query.title = { $regex: search, $options: "i" };
    }
    if (category !== "all") {
      query.category = category;
    }

    const items = await Gallery.find(query)
      .sort({ sortOrder: 1, createdAt: -1 })
      .lean();

    return NextResponse.json({
      success: true,
      data: items,
    });
  } catch (error) {
    console.error("Admin gallery fetch error:", error);

    if (isMongoAvailabilityError(error)) {
      return NextResponse.json(
        { success: false, message: "Database is temporarily unreachable. Try again shortly." },
        { status: 503 },
      );
    }

    return NextResponse.json(
      { success: false, message: "Failed to fetch gallery items" },
      { status: 500 },
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const session = await requireAdminSession();
    if (!session) {
      return NextResponse.json({ success: false, message: "Unauthorized" }, { status: 401 });
    }

    const formData = await request.formData();

    const rawPayload = {
      title: String(formData.get("title") || ""),
      category: String(formData.get("category") || ""),
      gradient: String(formData.get("gradient") || ""),
      size: String(formData.get("size") || ""),
      isPublished: String(formData.get("isPublished") || "true") === "true",
      sortOrder: Number(formData.get("sortOrder") || 0),
    };

    const payload = createGallerySchema.parse(rawPayload);
    const files = formData.getAll("images").filter((value) => value instanceof File) as File[];

    if (files.length === 0) {
      return NextResponse.json(
        { success: false, message: "At least one image is required" },
        { status: 400 },
      );
    }

    const maxFiles = 10;
    if (files.length > maxFiles) {
      return NextResponse.json(
        { success: false, message: "Maximum 10 images are allowed" },
        { status: 400 },
      );
    }

    const maxSize = 6 * 1024 * 1024;
    for (const file of files) {
      if (!file.type.startsWith("image/")) {
        return NextResponse.json(
          { success: false, message: "Only image files are allowed" },
          { status: 400 },
        );
      }

      if (file.size > maxSize) {
        return NextResponse.json(
          { success: false, message: "Each image must be less than 6MB" },
          { status: 400 },
        );
      }
    }

    const uploads = await Promise.all(
      files.map(async (file) => {
        const arrayBuffer = await file.arrayBuffer();
        const base64 = Buffer.from(arrayBuffer).toString("base64");
        const dataUri = `data:${file.type};base64,${base64}`;
        return uploadImage(dataUri, "bace-gallery");
      }),
    );

    await dbConnect();

    const created = await Gallery.create({
      ...payload,
      images: uploads.map((item) => ({ url: item.url, publicId: item.publicId })),
      createdBy: (session.user as any).id,
      updatedBy: (session.user as any).id,
    });

    return NextResponse.json(
      {
        success: true,
        message: "Gallery item created",
        data: created,
      },
      { status: 201 },
    );
  } catch (error: unknown) {
    console.error("Admin gallery create error:", error);

    if (error && typeof error === "object" && "name" in error && error.name === "ZodError") {
      return NextResponse.json(
        { success: false, message: "Validation failed" },
        { status: 400 },
      );
    }

    if (isMongoAvailabilityError(error)) {
      return NextResponse.json(
        { success: false, message: "Database is temporarily unreachable. Try again shortly." },
        { status: 503 },
      );
    }

    const message = error instanceof Error ? error.message : "Failed to create gallery item";
    return NextResponse.json({ success: false, message }, { status: 500 });
  }
}

import { NextRequest, NextResponse } from "next/server";
import Alumni from "@/models/Alumni";
import connectDB from "@/lib/mongodb";

export async function GET(request: NextRequest) {
  try {
    await connectDB();

    const { searchParams } = new URL(request.url);
    const search = searchParams.get("search");
    const years = searchParams.get("years")?.split(",").filter(Boolean);
    const courses = searchParams.get("courses")?.split(",").filter(Boolean);
    const colleges = searchParams.get("colleges")?.split(",").filter(Boolean);
    const page = parseInt(searchParams.get("page") || "1");
    const limit = parseInt(searchParams.get("limit") || "12");

    const query: any = { status: "approved" };

    // Search by name or company
    if (search) {
      query.$or = [
        { name: { $regex: search, $options: "i" } },
        { company: { $regex: search, $options: "i" } },
      ];
    }

    // Filter by years
    if (years && years.length > 0) {
      query.passingYear = { $in: years.map(String) };
    }

    // Filter by courses
    if (courses && courses.length > 0) {
      query.course = { $in: courses };
    }

    // Filter by colleges
    if (colleges && colleges.length > 0) {
      query.college = { $in: colleges };
    }

    const skip = (page - 1) * limit;

    const [alumni, total] = await Promise.all([
      Alumni.find(query)
        .sort({ passingYear: -1, createdAt: -1 })
        .skip(skip)
        .limit(limit)
        .lean(),
      Alumni.countDocuments(query),
    ]);

    return NextResponse.json({
      alumni,
      pagination: {
        page,
        limit,
        total,
        totalPages: Math.ceil(total / limit),
        hasMore: skip + alumni.length < total,
      },
    });
  } catch (error) {
    console.error("Fetch public alumni error:", error);
    return NextResponse.json(
      { error: "Failed to fetch alumni" },
      { status: 500 },
    );
  }
}

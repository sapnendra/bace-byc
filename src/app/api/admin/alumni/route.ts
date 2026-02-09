import { NextRequest, NextResponse } from "next/server";
import Alumni from "@/models/Alumni";
import connectDB from "@/lib/mongodb";
import { alumniStatusUpdateSchema } from "@/lib/validations/alumni";

// GET - Fetch all alumni with optional filters
export async function GET(request: NextRequest) {
  try {
    await connectDB();

    const { searchParams } = new URL(request.url);
    const status = searchParams.get("status");
    const search = searchParams.get("search");
    const page = parseInt(searchParams.get("page") || "1");
    const limit = parseInt(searchParams.get("limit") || "10");

    const query: any = {};

    // Filter by status
    if (status && status !== "all") {
      query.status = status;
    }

    // Search by name or company
    if (search) {
      query.$or = [
        { name: { $regex: search, $options: "i" } },
        { company: { $regex: search, $options: "i" } },
      ];
    }

    const skip = (page - 1) * limit;

    const [alumni, total] = await Promise.all([
      Alumni.find(query).sort({ createdAt: -1 }).skip(skip).limit(limit).lean(),
      Alumni.countDocuments(query),
    ]);

    return NextResponse.json({
      alumni,
      pagination: {
        page,
        limit,
        total,
        totalPages: Math.ceil(total / limit),
      },
    });
  } catch (error) {
    console.error("Fetch alumni error:", error);
    return NextResponse.json(
      { error: "Failed to fetch alumni" },
      { status: 500 },
    );
  }
}

// PATCH - Update alumni status
export async function PATCH(request: NextRequest) {
  try {
    await connectDB();

    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id");

    if (!id) {
      return NextResponse.json(
        { error: "Alumni ID is required" },
        { status: 400 },
      );
    }

    const body = await request.json();
    const { status } = alumniStatusUpdateSchema.parse(body);

    const alumni = await Alumni.findByIdAndUpdate(
      id,
      { status },
      { new: true, runValidators: true },
    );

    if (!alumni) {
      return NextResponse.json({ error: "Alumni not found" }, { status: 404 });
    }

    return NextResponse.json({
      success: true,
      message: `Alumni ${status} successfully`,
      alumni,
    });
  } catch (error: any) {
    console.error("Update alumni error:", error);

    if (error.name === "ZodError") {
      return NextResponse.json(
        { error: "Invalid status value" },
        { status: 400 },
      );
    }

    return NextResponse.json(
      { error: "Failed to update alumni" },
      { status: 500 },
    );
  }
}

// DELETE - Delete alumni submission
export async function DELETE(request: NextRequest) {
  try {
    await connectDB();

    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id");

    if (!id) {
      return NextResponse.json(
        { error: "Alumni ID is required" },
        { status: 400 },
      );
    }

    const alumni = await Alumni.findByIdAndDelete(id);

    if (!alumni) {
      return NextResponse.json({ error: "Alumni not found" }, { status: 404 });
    }

    // TODO: Delete images from Cloudinary if needed

    return NextResponse.json({
      success: true,
      message: "Alumni deleted successfully",
    });
  } catch (error) {
    console.error("Delete alumni error:", error);
    return NextResponse.json(
      { error: "Failed to delete alumni" },
      { status: 500 },
    );
  }
}

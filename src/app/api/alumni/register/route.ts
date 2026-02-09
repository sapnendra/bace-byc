import { NextRequest, NextResponse } from "next/server";
import { alumniRegistrationSchema } from "@/lib/validations/alumni";
import Alumni from "@/models/Alumni";
import connectDB from "@/lib/mongodb";

export async function POST(request: NextRequest) {
  try {
    await connectDB();

    const body = await request.json();

    // Validate data
    const validatedData = alumniRegistrationSchema.parse(body);

    // Create new alumni submission
    const alumni = await Alumni.create({
      ...validatedData,
      status: "pending",
    });

    return NextResponse.json(
      {
        success: true,
        message: "Alumni registration submitted successfully",
        alumniId: alumni._id,
      },
      { status: 201 },
    );
  } catch (error: any) {
    console.error("Alumni registration error:", error);

    if (error.name === "ZodError") {
      return NextResponse.json(
        { error: "Validation failed", details: error.errors },
        { status: 400 },
      );
    }

    return NextResponse.json(
      { error: "Failed to submit alumni registration" },
      { status: 500 },
    );
  }
}

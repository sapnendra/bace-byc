import { NextRequest, NextResponse } from "next/server";
import dbConnect from "@/lib/mongodb";
import Registration from "@/models/Registration";
import { registrationSchema } from "@/lib/validations/registration";

export async function POST(request: NextRequest) {
  try {
    // Parse request body
    const body = await request.json();

    // Validate data with Zod
    const validatedData = registrationSchema.parse(body);

    // Connect to MongoDB
    await dbConnect();

    // Create new registration
    const registration = await Registration.create(validatedData);

    // Return success response
    return NextResponse.json(
      {
        success: true,
        message: "Registration submitted successfully",
        data: {
          id: registration._id,
        },
      },
      { status: 201 },
    );
  } catch (error: any) {
    console.error("Registration error:", error);

    // Handle Zod validation errors
    if (error.name === "ZodError") {
      return NextResponse.json(
        {
          success: false,
          message: "Validation failed",
          errors: error.errors,
        },
        { status: 400 },
      );
    }

    // Handle MongoDB errors
    if (error.code === 11000) {
      return NextResponse.json(
        {
          success: false,
          message: "A registration with this email already exists",
        },
        { status: 409 },
      );
    }

    // Generic error response
    return NextResponse.json(
      {
        success: false,
        message: "Internal server error",
      },
      { status: 500 },
    );
  }
}

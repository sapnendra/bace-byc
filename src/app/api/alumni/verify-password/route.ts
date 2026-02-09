import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const { password } = await request.json();

    // Verify password against environment variable
    const correctPassword = process.env.ALUMNI_REGISTRATION_PASSWORD;

    if (!correctPassword) {
      return NextResponse.json(
        { error: "Password not configured" },
        { status: 500 },
      );
    }

    if (password === correctPassword) {
      return NextResponse.json({ success: true });
    } else {
      return NextResponse.json(
        { error: "Incorrect password" },
        { status: 401 },
      );
    }
  } catch (error) {
    console.error("Password verification error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    );
  }
}

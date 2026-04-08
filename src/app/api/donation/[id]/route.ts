import { NextRequest, NextResponse } from "next/server";
import mongoose from "mongoose";
import { getServerSession } from "next-auth";
import dbConnect from "@/lib/mongodb";
import Donation from "@/models/Donation";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

type RouteContext = {
  params: Promise<{ id: string }>;
};

export async function DELETE(_request: NextRequest, context: RouteContext) {
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

    const { id } = await context.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return NextResponse.json(
        {
          success: false,
          message: "Invalid donation ID",
        },
        { status: 400 },
      );
    }

    const deleted = await Donation.findByIdAndDelete(id);

    if (!deleted) {
      return NextResponse.json(
        {
          success: false,
          message: "Donation not found",
        },
        { status: 404 },
      );
    }

    return NextResponse.json({
      success: true,
      message: "Donation deleted successfully",
    });
  } catch (error) {
    console.error("Donation delete error:", error);
    return NextResponse.json(
      {
        success: false,
        message: "Failed to delete donation",
      },
      { status: 500 },
    );
  }
}

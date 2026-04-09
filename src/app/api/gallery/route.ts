import { NextResponse } from "next/server";
import dbConnect from "@/lib/mongodb";
import Gallery from "@/models/Gallery";

export const runtime = "nodejs";
const CACHE_CONTROL = "public, s-maxage=120, stale-while-revalidate=600";

function isMongoAvailabilityError(error: unknown) {
  const message = error instanceof Error ? error.message : String(error || "");
  const code =
    typeof error === "object" && error !== null && "code" in error
      ? String((error as { code?: unknown }).code || "")
      : "";

  return (
    message.includes("MongoServerSelectionError") ||
    message.includes("MongoNetworkError") ||
    message.includes("EAI_AGAIN") ||
    message.includes("ESERVFAIL") ||
    code === "EAI_AGAIN" ||
    code === "ESERVFAIL"
  );
}

export async function GET() {
  try {
    await dbConnect();

    const items = await Gallery.find({ isPublished: true })
      .select("title category gradient size images sortOrder createdAt")
      .sort({ sortOrder: 1, createdAt: -1 })
      .lean();

    return NextResponse.json(
      {
        success: true,
        data: items,
      },
      {
        headers: {
          "Cache-Control": CACHE_CONTROL,
        },
      },
    );
  } catch (error) {
    console.error("Public gallery fetch error:", error);

    if (isMongoAvailabilityError(error)) {
      return NextResponse.json(
        {
          success: false,
          message: "Gallery is temporarily unavailable. Please try again shortly.",
        },
        { status: 503 },
      );
    }

    return NextResponse.json(
      {
        success: false,
        message: "Failed to fetch gallery",
      },
      { status: 500 },
    );
  }
}

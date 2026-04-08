import { NextRequest, NextResponse } from "next/server";
import mongoose from "mongoose";
import { getServerSession } from "next-auth";
import { z } from "zod";
import dbConnect from "@/lib/mongodb";
import Gallery from "@/models/Gallery";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { deleteMultipleImages } from "@/lib/cloudinary";
import { GALLERY_CATEGORIES, GALLERY_SIZES } from "@/types/gallery";

const updateSchema = z.object({
  title: z.string().trim().min(2).max(120).optional(),
  category: z.enum(GALLERY_CATEGORIES).optional(),
  gradient: z.string().trim().min(5).max(80).optional(),
  size: z.enum(GALLERY_SIZES).optional(),
  isPublished: z.boolean().optional(),
  sortOrder: z.number().int().min(0).max(10000).optional(),
});

async function requireAdminSession() {
  const session = await getServerSession(authOptions);
  if (!session?.user || (session.user as any).role !== "admin") {
    return null;
  }
  return session;
}

type RouteContext = {
  params: Promise<{ id: string }>;
};

function isMongoAvailabilityError(error: unknown) {
  const message = error instanceof Error ? error.message : String(error || "");
  return (
    message.includes("MongoServerSelectionError") ||
    message.includes("MongoNetworkError") ||
    message.includes("EAI_AGAIN")
  );
}

export async function PATCH(request: NextRequest, context: RouteContext) {
  try {
    const session = await requireAdminSession();
    if (!session) {
      return NextResponse.json({ success: false, message: "Unauthorized" }, { status: 401 });
    }

    const { id } = await context.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return NextResponse.json(
        { success: false, message: "Invalid gallery item ID" },
        { status: 400 },
      );
    }

    const body = await request.json();
    const payload = updateSchema.parse(body);

    await dbConnect();

    const updated = await Gallery.findByIdAndUpdate(
      id,
      {
        $set: {
          ...payload,
          updatedBy: (session.user as any).id,
        },
      },
      { new: true },
    );

    if (!updated) {
      return NextResponse.json(
        { success: false, message: "Gallery item not found" },
        { status: 404 },
      );
    }

    return NextResponse.json({ success: true, data: updated });
  } catch (error: unknown) {
    console.error("Admin gallery update error:", error);

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

    return NextResponse.json(
      { success: false, message: "Failed to update gallery item" },
      { status: 500 },
    );
  }
}

export async function DELETE(_request: NextRequest, context: RouteContext) {
  try {
    const session = await requireAdminSession();
    if (!session) {
      return NextResponse.json({ success: false, message: "Unauthorized" }, { status: 401 });
    }

    const { id } = await context.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return NextResponse.json(
        { success: false, message: "Invalid gallery item ID" },
        { status: 400 },
      );
    }

    await dbConnect();
    const deleted = await Gallery.findByIdAndDelete(id).lean();

    if (!deleted) {
      return NextResponse.json(
        { success: false, message: "Gallery item not found" },
        { status: 404 },
      );
    }

    const publicIds = (deleted.images || [])
      .map((image: { publicId?: string }) => image.publicId)
      .filter((value: string | undefined): value is string => Boolean(value));

    if (publicIds.length > 0) {
      try {
        await deleteMultipleImages(publicIds);
      } catch (error) {
        console.error("Gallery image cleanup error:", error);
      }
    }

    return NextResponse.json({
      success: true,
      message: "Gallery item deleted",
    });
  } catch (error) {
    console.error("Admin gallery delete error:", error);

    if (isMongoAvailabilityError(error)) {
      return NextResponse.json(
        { success: false, message: "Database is temporarily unreachable. Try again shortly." },
        { status: 503 },
      );
    }

    return NextResponse.json(
      { success: false, message: "Failed to delete gallery item" },
      { status: 500 },
    );
  }
}

import mongoose, { Document, Schema } from "mongoose";
import { GALLERY_CATEGORIES, GALLERY_SIZES } from "@/types/gallery";

export interface IGalleryImage {
  url: string;
  publicId?: string;
}

export interface IGallery extends Document {
  title: string;
  category: string;
  gradient: string;
  size: "short" | "tall";
  images: IGalleryImage[];
  isPublished: boolean;
  sortOrder: number;
  createdBy?: mongoose.Types.ObjectId;
  updatedBy?: mongoose.Types.ObjectId;
  createdAt: Date;
  updatedAt: Date;
}

const GalleryImageSchema = new Schema<IGalleryImage>(
  {
    url: {
      type: String,
      required: true,
      trim: true,
    },
    publicId: {
      type: String,
      trim: true,
    },
  },
  { _id: false },
);

const GallerySchema = new Schema<IGallery>(
  {
    title: {
      type: String,
      required: [true, "Title is required"],
      trim: true,
      maxlength: [120, "Title cannot exceed 120 characters"],
    },
    category: {
      type: String,
      required: [true, "Category is required"],
      enum: GALLERY_CATEGORIES,
      index: true,
    },
    gradient: {
      type: String,
      required: [true, "Gradient is required"],
      trim: true,
      maxlength: [80, "Gradient cannot exceed 80 characters"],
    },
    size: {
      type: String,
      required: [true, "Size is required"],
      enum: GALLERY_SIZES,
      default: "short",
    },
    images: {
      type: [GalleryImageSchema],
      required: [true, "At least one image is required"],
      validate: {
        validator: (value: IGalleryImage[]) => Array.isArray(value) && value.length > 0,
        message: "At least one image is required",
      },
    },
    isPublished: {
      type: Boolean,
      default: true,
      index: true,
    },
    sortOrder: {
      type: Number,
      default: 0,
      index: true,
    },
    createdBy: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    updatedBy: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  },
  {
    timestamps: true,
  },
);

GallerySchema.index({ isPublished: 1, sortOrder: 1, createdAt: -1 });

export default mongoose.models.Gallery || mongoose.model<IGallery>("Gallery", GallerySchema);

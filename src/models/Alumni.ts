import mongoose, { Schema, Document } from "mongoose";

export interface IAlumni extends Document {
  name: string;
  currentPosition: string;
  company: string;
  passingYear: number;
  course: string;
  college: string;
  fieldOfStudy?: string;
  bio?: string;
  socialLinks?: {
    linkedin?: string;
    github?: string;
  };
  images: string[];
  status: "pending" | "approved" | "rejected";
  createdAt: Date;
  updatedAt: Date;
}

const AlumniSchema: Schema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
      trim: true,
      maxlength: [100, "Name cannot exceed 100 characters"],
    },
    currentPosition: {
      type: String,
      required: [true, "Current position is required"],
      trim: true,
      maxlength: [150, "Position cannot exceed 150 characters"],
    },
    company: {
      type: String,
      required: [true, "Company name is required"],
      trim: true,
      maxlength: [150, "Company name cannot exceed 150 characters"],
    },
    passingYear: {
      type: Number,
      required: [true, "Passing year is required"],
      min: [1990, "Passing year must be after 1990"],
      max: [2100, "Passing year must be before 2100"],
    },
    course: {
      type: String,
      required: [true, "Course is required"],
      trim: true,
      maxlength: [100, "Course name cannot exceed 100 characters"],
    },
    college: {
      type: String,
      required: [true, "College name is required"],
      trim: true,
      maxlength: [200, "College name cannot exceed 200 characters"],
    },
    fieldOfStudy: {
      type: String,
      trim: true,
      maxlength: [100, "Field of study cannot exceed 100 characters"],
    },
    bio: {
      type: String,
      trim: true,
      maxlength: [500, "Bio cannot exceed 500 characters"],
    },
    socialLinks: {
      linkedin: {
        type: String,
        trim: true,
        validate: {
          validator: function (v: string) {
            if (!v) return true;
            return /^https?:\/\/(www\.)?linkedin\.com\/.+/.test(v);
          },
          message: "Please provide a valid LinkedIn URL",
        },
      },
      github: {
        type: String,
        trim: true,
        validate: {
          validator: function (v: string) {
            if (!v) return true;
            return /^https?:\/\/(www\.)?github\.com\/.+/.test(v);
          },
          message: "Please provide a valid GitHub URL",
        },
      },
    },
    images: {
      type: [String],
      required: [true, "At least one image is required"],
      validate: {
        validator: function (v: string[]) {
          return v && v.length >= 1 && v.length <= 3;
        },
        message: "Please provide between 1 and 3 images",
      },
    },
    status: {
      type: String,
      enum: ["pending", "approved", "rejected"],
      default: "pending",
    },
  },
  {
    timestamps: true,
  },
);

// Indexes for better query performance
AlumniSchema.index({ passingYear: -1 }); // Sort by latest year
AlumniSchema.index({ course: 1 }); // Filter by course
AlumniSchema.index({ status: 1 }); // Filter by status
AlumniSchema.index({ college: 1 }); // Filter by college
AlumniSchema.index({ name: "text", company: "text" }); // Text search

export default mongoose.models.Alumni ||
  mongoose.model<IAlumni>("Alumni", AlumniSchema);

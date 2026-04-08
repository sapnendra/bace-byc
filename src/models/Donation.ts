import mongoose, { Document, Schema } from "mongoose";

export interface IDonation extends Document {
  name: string;
  mobile: string;
  email: string;
  amount: number;
  screenshotUrl: string;
  donationId: string;
  createdAt: Date;
}

const DonationSchema: Schema = new Schema({
  name: {
    type: String,
    required: [true, "Name is required"],
    trim: true,
    maxlength: [120, "Name cannot exceed 120 characters"],
  },
  mobile: {
    type: String,
    required: [true, "Mobile number is required"],
    trim: true,
    match: [/^[0-9]{10}$/, "Mobile number must be 10 digits"],
    index: true,
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    trim: true,
    lowercase: true,
    index: true,
  },
  amount: {
    type: Number,
    required: [true, "Amount is required"],
    min: [1, "Amount must be greater than 0"],
  },
  screenshotUrl: {
    type: String,
    required: [true, "Payment screenshot is required"],
    trim: true,
  },
  donationId: {
    type: String,
    required: [true, "Donation ID is required"],
    trim: true,
    unique: true,
    index: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    index: true,
  },
});

DonationSchema.index({ email: 1, createdAt: -1 });

export default mongoose.models.Donation ||
  mongoose.model<IDonation>("Donation", DonationSchema);

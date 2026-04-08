"use client";

import { useRef, useState } from "react";
import { z } from "zod";
import { donationSchema } from "@/lib/validations/donation";
import { CheckCircle2, Download, Loader2, UploadCloud } from "lucide-react";
import DonationReceipt from "@/components/receipt/DonationReceipt";
import { generateReceiptPdf } from "@/lib/utils/generateReceipt";

type DonationFormData = {
  name: string;
  mobile: string;
  email: string;
  amount: string;
  screenshot: File | null;
};

const initialData: DonationFormData = {
  name: "",
  mobile: "",
  email: "",
  amount: "",
  screenshot: null,
};

type ReceiptData = {
  donationId: string;
  name: string;
  amount: number;
  createdAt: string;
};

export default function DonationForm() {
  const [formData, setFormData] = useState<DonationFormData>(initialData);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitError, setSubmitError] = useState<string>("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const [receiptData, setReceiptData] = useState<ReceiptData | null>(null);
  const [isDownloadingReceipt, setIsDownloadingReceipt] = useState(false);
  const receiptRef = useRef<HTMLDivElement | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setFormData((prev) => ({ ...prev, screenshot: file }));

    if (errors.screenshot) {
      setErrors((prev) => ({ ...prev, screenshot: "" }));
    }
  };

  const validateForm = () => {
    try {
      donationSchema.parse({
        name: formData.name,
        mobile: formData.mobile,
        email: formData.email,
        amount: formData.amount,
      });

      if (!formData.screenshot) {
        setErrors((prev) => ({ ...prev, screenshot: "Screenshot is required" }));
        return false;
      }

      if (!formData.screenshot.type.startsWith("image/")) {
        setErrors((prev) => ({ ...prev, screenshot: "Please upload an image file" }));
        return false;
      }

      setErrors({});
      return true;
    } catch (error: unknown) {
      const fieldErrors: Record<string, string> = {};

      if (error instanceof z.ZodError) {
        error.issues.forEach((issue) => {
          const path = issue.path?.[0];
          if (typeof path === "string") {
            fieldErrors[path] = issue.message;
          }
        });
      }

      setErrors(fieldErrors);
      return false;
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    setSubmitStatus("idle");
    setSubmitError("");

    try {
      const payload = new FormData();
      payload.append("name", formData.name);
      payload.append("mobile", formData.mobile);
      payload.append("email", formData.email);
      payload.append("amount", formData.amount);
      payload.append("screenshot", formData.screenshot as File);

      const response = await fetch("/api/donation", {
        method: "POST",
        body: payload,
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(result.message || "Failed to submit donation");
      }

      setReceiptData({
        donationId: result.data.donationId,
        name: result.data.name,
        amount: result.data.amount,
        createdAt: result.data.createdAt,
      });
      setSubmitStatus("success");
      setFormData(initialData);
      setErrors({});
    } catch (error) {
      console.error("Donation submit failed", error);
      setSubmitError(error instanceof Error ? error.message : "Failed to submit donation");
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleDownloadReceipt = async () => {
    if (!receiptRef.current || !receiptData || isDownloadingReceipt) {
      return;
    }

    setIsDownloadingReceipt(true);
    try {
      await generateReceiptPdf(receiptRef.current, receiptData.donationId);
    } catch (error) {
      console.error("Receipt download failed", error);
    } finally {
      setIsDownloadingReceipt(false);
    }
  };

  if (submitStatus === "success") {
    return (
      <div className="rounded-2xl border border-forest/20 bg-white p-8 shadow-lg">
        <div className="text-center">
          <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-forest/10">
            <CheckCircle2 className="h-8 w-8 text-forest" />
          </div>
          <h3 className="text-2xl font-serif font-bold text-charcoal">
            Thank You for Your Contribution
          </h3>
          <p className="mt-2 text-sm text-charcoal-light">
            Your donation has been received successfully.
          </p>
          {receiptData ? (
            <p className="mt-2 text-xs font-medium text-saffron-dark">
              Donation ID: {receiptData.donationId}
            </p>
          ) : null}
        </div>

        <div className="mt-6 rounded-xl border border-gold/30 bg-beige-soft p-5 text-center">
          <p className="text-sm font-medium text-charcoal">
            Share your contribution with pride <span aria-hidden="true">❤</span>
          </p>
          <p className="mt-1 text-xs text-charcoal-light">Tag us on Instagram</p>

          <button
            type="button"
            onClick={handleDownloadReceipt}
            disabled={isDownloadingReceipt || !receiptData}
            className="mt-4 inline-flex items-center justify-center rounded-lg bg-saffron px-6 py-3 font-medium text-white shadow-md transition hover:bg-saffron-dark disabled:cursor-not-allowed disabled:opacity-70"
          >
            {isDownloadingReceipt ? (
              <Loader2 className="mr-2 h-5 w-5 animate-spin" />
            ) : (
              <Download className="mr-2 h-5 w-5" />
            )}
            {isDownloadingReceipt ? "Preparing Receipt..." : "Download Receipt"}
          </button>
        </div>

        {receiptData ? (
          <div className="mt-6 rounded-xl border border-beige-200 bg-beige-soft p-4">
            <p className="mb-3 text-center text-xs font-semibold uppercase tracking-wider text-charcoal-light">
              Receipt Preview
            </p>
            <DonationReceipt
              donorName={receiptData.name}
              amount={receiptData.amount}
              donationId={receiptData.donationId}
              donatedAt={receiptData.createdAt}
              variant="mini"
            />
          </div>
        ) : null}

        <button
          type="button"
          onClick={() => {
            setSubmitStatus("idle");
            setReceiptData(null);
          }}
          className="mt-6 block w-full text-center font-medium text-saffron hover:underline"
        >
          Submit another donation
        </button>

        {receiptData ? (
          <div className="pointer-events-none absolute -left-[9999px] top-0 opacity-0">
            <div ref={receiptRef}>
              <DonationReceipt
                donorName={receiptData.name}
                amount={receiptData.amount}
                donationId={receiptData.donationId}
                donatedAt={receiptData.createdAt}
              />
            </div>
          </div>
        ) : null}
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-2xl border border-beige-200 bg-white p-6 shadow-lg md:p-8">
      <div className="grid gap-5 md:grid-cols-2">
        <div className="md:col-span-1">
          <label htmlFor="name" className="mb-2 block text-sm font-medium text-charcoal">
            Name
          </label>
          <input
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full rounded-lg border border-beige-300 bg-beige-soft px-4 py-3 text-charcoal outline-none transition focus:border-saffron focus:ring-2 focus:ring-saffron/20"
            placeholder="Your full name"
          />
          {errors.name ? <p className="mt-1 text-xs text-red-600">{errors.name}</p> : null}
        </div>

        <div className="md:col-span-1">
          <label htmlFor="mobile" className="mb-2 block text-sm font-medium text-charcoal">
            Mobile Number
          </label>
          <input
            id="mobile"
            name="mobile"
            value={formData.mobile}
            onChange={handleChange}
            maxLength={10}
            inputMode="numeric"
            className="w-full rounded-lg border border-beige-300 bg-beige-soft px-4 py-3 text-charcoal outline-none transition focus:border-saffron focus:ring-2 focus:ring-saffron/20"
            placeholder="10 digit mobile number"
          />
          {errors.mobile ? <p className="mt-1 text-xs text-red-600">{errors.mobile}</p> : null}
        </div>

        <div className="md:col-span-1">
          <label htmlFor="email" className="mb-2 block text-sm font-medium text-charcoal">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full rounded-lg border border-beige-300 bg-beige-soft px-4 py-3 text-charcoal outline-none transition focus:border-saffron focus:ring-2 focus:ring-saffron/20"
            placeholder="you@example.com"
          />
          {errors.email ? <p className="mt-1 text-xs text-red-600">{errors.email}</p> : null}
        </div>

        <div className="md:col-span-1">
          <label htmlFor="amount" className="mb-2 block text-sm font-medium text-charcoal">
            Amount (INR)
          </label>
          <input
            id="amount"
            name="amount"
            type="number"
            min={1}
            value={formData.amount}
            onChange={handleChange}
            className="w-full rounded-lg border border-beige-300 bg-beige-soft px-4 py-3 text-charcoal outline-none transition focus:border-saffron focus:ring-2 focus:ring-saffron/20"
            placeholder="Enter donation amount"
          />
          {errors.amount ? <p className="mt-1 text-xs text-red-600">{errors.amount}</p> : null}
        </div>
      </div>

      <div className="mt-5">
        <label htmlFor="screenshot" className="mb-2 block text-sm font-medium text-charcoal">
          Payment Screenshot
        </label>
        <label
          htmlFor="screenshot"
          className="flex w-full cursor-pointer items-center justify-center gap-2 rounded-lg border border-dashed border-saffron/50 bg-beige-soft px-4 py-6 text-sm text-charcoal-light transition hover:border-saffron hover:bg-saffron/5"
        >
          <UploadCloud className="h-5 w-5 text-saffron" />
          {formData.screenshot ? formData.screenshot.name : "Upload screenshot (JPG, PNG, WEBP)"}
        </label>
        <input id="screenshot" name="screenshot" type="file" accept="image/*" onChange={handleFileChange} className="hidden" />
        {errors.screenshot ? <p className="mt-1 text-xs text-red-600">{errors.screenshot}</p> : null}
      </div>

      {submitStatus === "error" ? (
        <div className="mt-5 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
          {submitError ||
            "We could not submit your donation right now. Please verify details and try again."}
        </div>
      ) : null}

      <p className="mt-6 text-sm font-medium text-charcoal">
        Your small contribution can transform a student's life.
      </p>

      <button
        type="submit"
        disabled={isSubmitting}
        className="mt-4 inline-flex w-full items-center justify-center rounded-lg bg-saffron px-6 py-3 font-medium text-white shadow-md transition hover:bg-saffron-dark disabled:cursor-not-allowed disabled:opacity-70"
      >
        {isSubmitting ? <Loader2 className="mr-2 h-5 w-5 animate-spin" /> : null}
        {isSubmitting ? "Submitting..." : "I Have Donated"}
      </button>
    </form>
  );
}

"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronRight,
  ChevronLeft,
  Check,
  Loader2,
  Upload,
  X,
  Linkedin,
  Github,
} from "lucide-react";
import {
  alumniRegistrationSchema,
  AlumniRegistrationFormData,
} from "@/lib/validations/alumni";
import { z } from "zod";

const steps = [
  { id: 1, name: "Personal Info" },
  { id: 2, name: "Academic Info" },
  { id: 3, name: "Additional Info" },
];

export default function AlumniRegistrationForm() {
  const [currentStep, setCurrentStep] = useState(0);
  const [direction, setDirection] = useState(0);

  const [formData, setFormData] = useState<Partial<AlumniRegistrationFormData>>(
    {
      name: "",
      currentPosition: "",
      company: "",
      passingYear: new Date().getFullYear(),
      course: "",
      college: "",
      fieldOfStudy: "",
      bio: "",
      socialLinks: {
        linkedin: "",
        github: "",
      },
      images: [],
    },
  );

  const [imageFiles, setImageFiles] = useState<File[]>([]);
  const [imagePreviews, setImagePreviews] = useState<string[]>([]);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");
  const [uploadProgress, setUploadProgress] = useState(0);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;

    if (name.includes(".")) {
      const [parent, child] = name.split(".");
      setFormData((prev) => ({
        ...prev,
        [parent]: {
          ...(prev[parent as keyof typeof prev] as any),
          [child]: value,
        },
      }));
    } else if (name === "passingYear") {
      setFormData((prev) => ({
        ...prev,
        [name]: parseInt(value) || new Date().getFullYear(),
      }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }

    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);

    if (imageFiles.length + files.length > 3) {
      setErrors((prev) => ({ ...prev, images: "Maximum 3 images allowed" }));
      return;
    }

    const newFiles = files.slice(0, 3 - imageFiles.length);
    setImageFiles((prev) => [...prev, ...newFiles]);

    // Create previews
    newFiles.forEach((file) => {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreviews((prev) => [...prev, reader.result as string]);
      };
      reader.readAsDataURL(file);
    });

    setErrors((prev) => ({ ...prev, images: "" }));
  };

  const removeImage = (index: number) => {
    setImageFiles((prev) => prev.filter((_, i) => i !== index));
    setImagePreviews((prev) => prev.filter((_, i) => i !== index));
  };

  const validateStep = (stepIndex: number) => {
    try {
      const fieldsToValidate: Partial<AlumniRegistrationFormData> = {};

      if (stepIndex === 0) {
        fieldsToValidate.name = formData.name;
        fieldsToValidate.currentPosition = formData.currentPosition;
        fieldsToValidate.company = formData.company;
      } else if (stepIndex === 1) {
        fieldsToValidate.passingYear = formData.passingYear;
        fieldsToValidate.course = formData.course;
        fieldsToValidate.college = formData.college;
      } else if (stepIndex === 2) {
        if (imageFiles.length === 0) {
          setErrors({ images: "At least one image is required" });
          return false;
        }
      }

      const partialSchema = alumniRegistrationSchema.pick(
        Object.keys(fieldsToValidate).reduce(
          (acc, key) => ({ ...acc, [key]: true }),
          {} as any,
        ),
      );

      partialSchema.parse(fieldsToValidate);
      setErrors({});
      return true;
    } catch (error) {
      if (error instanceof z.ZodError) {
        const fieldErrors: Record<string, string> = {};
        error.issues.forEach((err) => {
          if (err.path[0]) {
            fieldErrors[err.path[0] as string] = err.message;
          }
        });
        setErrors(fieldErrors);
      }
      return false;
    }
  };

  const nextStep = () => {
    if (validateStep(currentStep)) {
      setDirection(1);
      setCurrentStep((prev) => Math.min(prev + 1, steps.length - 1));
    }
  };

  const prevStep = () => {
    setDirection(-1);
    setCurrentStep((prev) => Math.max(prev - 1, 0));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateStep(currentStep)) return;
    if (imageFiles.length === 0) {
      setErrors({ images: "At least one image is required" });
      return;
    }

    setIsSubmitting(true);
    setUploadProgress(0);

    try {
      // Upload images to Cloudinary
      const imageUrls: string[] = [];
      for (let i = 0; i < imageFiles.length; i++) {
        const file = imageFiles[i];
        const reader = new FileReader();

        const base64 = await new Promise<string>((resolve) => {
          reader.onloadend = () => resolve(reader.result as string);
          reader.readAsDataURL(file);
        });

        const uploadResponse = await fetch("/api/alumni/upload-image", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ image: base64 }),
        });

        if (!uploadResponse.ok) throw new Error("Image upload failed");

        const { url } = await uploadResponse.json();
        imageUrls.push(url);
        setUploadProgress(((i + 1) / imageFiles.length) * 50);
      }

      // Submit alumni data
      const submitData = {
        ...formData,
        images: imageUrls,
      };

      const response = await fetch("/api/alumni/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(submitData),
      });

      if (!response.ok) throw new Error("Registration failed");

      setUploadProgress(100);
      setSubmitStatus("success");

      // Reset form
      setFormData({
        name: "",
        currentPosition: "",
        company: "",
        passingYear: new Date().getFullYear(),
        course: "",
        college: "",
        fieldOfStudy: "",
        bio: "",
        socialLinks: { linkedin: "", github: "" },
        images: [],
      });
      setImageFiles([]);
      setImagePreviews([]);
      setCurrentStep(0);
    } catch (error) {
      console.error(error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
      setUploadProgress(0);
    }
  };

  const variants = {
    enter: (direction: number) => ({ x: direction > 0 ? 50 : -50, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (direction: number) => ({ x: direction < 0 ? 50 : -50, opacity: 0 }),
  };

  if (submitStatus === "success") {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-white p-8 rounded-2xl shadow-xl text-center border-2 border-forest/20"
      >
        <div className="w-20 h-20 bg-forest/10 rounded-full flex items-center justify-center mx-auto mb-6">
          <Check className="w-10 h-10 text-forest" />
        </div>
        <h3 className="text-2xl font-serif font-bold text-charcoal mb-2">
          Registration Successful!
        </h3>
        <p className="text-charcoal-light mb-8">
          Your alumni profile has been submitted for approval. Our team will
          review it shortly.
        </p>
        <button
          onClick={() => setSubmitStatus("idle")}
          className="text-saffron font-medium hover:underline"
        >
          Submit another registration
        </button>
      </motion.div>
    );
  }

  return (
    <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-beige-200">
      {/* Progress Bar */}
      <div className="bg-beige-soft p-6 border-b border-beige-200">
        <div className="flex items-center justify-between mb-2">
          {steps.map((step, index) => (
            <div
              key={step.id}
              className="flex flex-col items-center relative z-10 flex-1"
            >
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-colors duration-300 ${
                  index <= currentStep
                    ? "bg-saffron text-white shadow-lg"
                    : "bg-beige-200 text-charcoal-light"
                }`}
              >
                {index < currentStep ? <Check size={16} /> : step.id}
              </div>
              <span
                className={`text-xs mt-2 font-medium text-center ${index <= currentStep ? "text-saffron" : "text-charcoal-light/60"}`}
              >
                {step.name}
              </span>
            </div>
          ))}
        </div>

        <div className="w-full bg-beige-200 h-1 rounded-full mt-4 overflow-hidden">
          <motion.div
            className="h-full bg-saffron"
            initial={{ width: "0%" }}
            animate={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
            transition={{ duration: 0.3 }}
          />
        </div>
      </div>

      <form onSubmit={handleSubmit} className="p-8">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={currentStep}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              duration: 0.3,
              type: "spring",
              stiffness: 300,
              damping: 30,
            }}
            className="space-y-6 min-h-[400px]"
          >
            {/* STEP 1: Personal Info */}
            {currentStep === 0 && (
              <>
                <FloatingInput
                  id="name"
                  label="Full Name"
                  value={formData.name || ""}
                  onChange={handleChange}
                  error={errors.name}
                  required
                />
                <FloatingInput
                  id="currentPosition"
                  label="Current Position/Role"
                  value={formData.currentPosition || ""}
                  onChange={handleChange}
                  error={errors.currentPosition}
                  required
                />
                <FloatingInput
                  id="company"
                  label="Company/Organization"
                  value={formData.company || ""}
                  onChange={handleChange}
                  error={errors.company}
                  required
                />
              </>
            )}

            {/* STEP 2: Academic Info */}
            {currentStep === 1 && (
              <>
                <FloatingInput
                  id="passingYear"
                  type="number"
                  label="Year of Passing"
                  value={formData.passingYear?.toString() || ""}
                  onChange={handleChange}
                  error={errors.passingYear}
                  required
                  min="1990"
                  max="2100"
                />
                <FloatingInput
                  id="course"
                  label="Course (e.g., B.Tech, M.Tech, BCA, MCA)"
                  value={formData.course || ""}
                  onChange={handleChange}
                  error={errors.course}
                  required
                />
                <FloatingInput
                  id="college"
                  label="College/University Name"
                  value={formData.college || ""}
                  onChange={handleChange}
                  error={errors.college}
                  required
                />
                <FloatingInput
                  id="fieldOfStudy"
                  label="Field of Study (Optional)"
                  value={formData.fieldOfStudy || ""}
                  onChange={handleChange}
                />
              </>
            )}

            {/* STEP 3: Additional Info */}
            {currentStep === 2 && (
              <>
                <FloatingTextarea
                  id="bio"
                  label="Short Bio/Message to Juniors (Optional)"
                  value={formData.bio || ""}
                  onChange={handleChange}
                  error={errors.bio}
                  maxLength={500}
                />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <FloatingInput
                    id="socialLinks.linkedin"
                    label="LinkedIn URL (Optional)"
                    value={formData.socialLinks?.linkedin || ""}
                    onChange={handleChange}
                    error={errors["socialLinks.linkedin"]}
                    icon={<Linkedin size={18} />}
                  />
                  <FloatingInput
                    id="socialLinks.github"
                    label="GitHub URL (Optional)"
                    value={formData.socialLinks?.github || ""}
                    onChange={handleChange}
                    error={errors["socialLinks.github"]}
                    icon={<Github size={18} />}
                  />
                </div>

                {/* Image Upload */}
                <div>
                  <label className="block text-sm font-semibold text-charcoal mb-3">
                    Profile Images <span className="text-saffron">*</span>
                    <span className="text-xs font-normal text-charcoal-light ml-2">
                      (1-3 images)
                    </span>
                  </label>

                  {imagePreviews.length < 3 && (
                    <label className="block w-full border-2 border-dashed border-beige-300 rounded-xl p-8 text-center cursor-pointer hover:border-saffron hover:bg-saffron/5 transition-all">
                      <Upload className="w-8 h-8 text-charcoal-light mx-auto mb-2" />
                      <span className="text-sm text-charcoal-light">
                        Click to upload or drag and drop
                      </span>
                      <p className="text-xs text-charcoal-light/60 mt-1">
                        PNG, JPG up to 5MB
                      </p>
                      <input
                        type="file"
                        accept="image/*"
                        multiple
                        onChange={handleImageUpload}
                        className="hidden"
                      />
                    </label>
                  )}

                  {imagePreviews.length > 0 && (
                    <div className="grid grid-cols-3 gap-4 mt-4">
                      {imagePreviews.map((preview, index) => (
                        <div key={index} className="relative group">
                          <img
                            src={preview}
                            alt={`Preview ${index + 1}`}
                            className="w-full aspect-square object-cover rounded-lg"
                          />
                          <button
                            type="button"
                            onClick={() => removeImage(index)}
                            className="absolute top-2 right-2 bg-red-500 text-white p-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                          >
                            <X size={16} />
                          </button>
                        </div>
                      ))}
                    </div>
                  )}

                  {errors.images && (
                    <p className="mt-2 text-xs text-red-500 font-medium ml-1">
                      {errors.images}
                    </p>
                  )}
                </div>
              </>
            )}
          </motion.div>
        </AnimatePresence>

        {isSubmitting && uploadProgress > 0 && (
          <div className="mt-4">
            <div className="w-full bg-beige-200 h-2 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-saffron"
                initial={{ width: "0%" }}
                animate={{ width: `${uploadProgress}%` }}
              />
            </div>
            <p className="text-xs text-charcoal-light text-center mt-2">
              Uploading... {uploadProgress}%
            </p>
          </div>
        )}

        {submitStatus === "error" && (
          <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-lg text-sm mt-4">
            Something went wrong. Please check your inputs and try again.
          </div>
        )}

        <div className="flex justify-between mt-8 pt-6 border-t border-beige-100">
          <button
            type="button"
            onClick={prevStep}
            disabled={currentStep === 0 || isSubmitting}
            className={`flex items-center px-6 py-2.5 rounded-lg font-medium transition-colors ${
              currentStep === 0
                ? "text-gray-300 cursor-not-allowed"
                : "text-charcoal hover:bg-beige-soft"
            }`}
          >
            <ChevronLeft size={20} className="mr-1" /> Back
          </button>

          {currentStep < steps.length - 1 ? (
            <button
              type="button"
              onClick={nextStep}
              className="flex items-center px-8 py-2.5 bg-charcoal text-white rounded-lg font-medium hover:bg-charcoal/90 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              Next <ChevronRight size={20} className="ml-1" />
            </button>
          ) : (
            <button
              type="submit"
              disabled={isSubmitting}
              className="flex items-center px-8 py-2.5 bg-saffron text-white rounded-lg font-medium hover:bg-saffron/90 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <Loader2 className="animate-spin mr-2" size={20} />
              ) : null}
              {isSubmitting ? "Submitting..." : "Submit Registration"}
            </button>
          )}
        </div>
      </form>
    </div>
  );
}

// Reusable Components
function FloatingInput({ id, label, error, required, icon, ...props }: any) {
  return (
    <div className="relative">
      <input
        name={id}
        id={id}
        className={`peer w-full px-4 py-3.5 ${icon ? "pl-12" : ""} bg-white border-2 rounded-xl text-charcoal placeholder-transparent focus:outline-none transition-all ${
          error
            ? "border-red-400 focus:border-red-500 focus:ring-4 focus:ring-red-500/10"
            : "border-beige-200 focus:border-saffron focus:ring-4 focus:ring-saffron/10"
        }`}
        placeholder={label}
        {...props}
      />
      {icon && (
        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-charcoal-light peer-focus:text-saffron transition-colors">
          {icon}
        </div>
      )}
      <label
        htmlFor={id}
        className={`absolute ${icon ? "left-12" : "left-4"} -top-2.5 bg-white px-1.5 text-xs font-semibold uppercase tracking-wider transition-all 
          peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3.5 peer-placeholder-shown:font-normal peer-placeholder-shown:capitalize
          peer-focus:-top-2.5 peer-focus:${icon ? "left-12" : "left-4"} peer-focus:text-xs peer-focus:font-semibold peer-focus:uppercase peer-focus:text-saffron
          ${error ? "text-red-500 peer-focus:text-red-500" : "text-gray-500"}`}
      >
        {label} {required && <span className="text-saffron">*</span>}
      </label>
      {error && (
        <p className="mt-1.5 text-xs text-red-500 font-medium ml-1">{error}</p>
      )}
    </div>
  );
}

function FloatingTextarea({
  id,
  label,
  error,
  required,
  maxLength,
  ...props
}: any) {
  return (
    <div className="relative">
      <textarea
        name={id}
        id={id}
        rows={4}
        maxLength={maxLength}
        className={`peer w-full px-4 py-3.5 bg-white border-2 rounded-xl text-charcoal placeholder-transparent focus:outline-none transition-all resize-none ${
          error
            ? "border-red-400 focus:border-red-500 focus:ring-4 focus:ring-red-500/10"
            : "border-beige-200 focus:border-saffron focus:ring-4 focus:ring-saffron/10"
        }`}
        placeholder={label}
        {...props}
      />
      <label
        htmlFor={id}
        className={`absolute left-4 -top-2.5 bg-white px-1.5 text-xs font-semibold uppercase tracking-wider transition-all 
          peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3.5 peer-placeholder-shown:font-normal peer-placeholder-shown:capitalize
          peer-focus:-top-2.5 peer-focus:text-xs peer-focus:font-semibold peer-focus:uppercase peer-focus:text-saffron
          ${error ? "text-red-500 peer-focus:text-red-500" : "text-gray-500"}`}
      >
        {label} {required && <span className="text-saffron">*</span>}
      </label>
      {maxLength && (
        <p className="text-xs text-charcoal-light/60 mt-1 text-right">
          {props.value?.length || 0}/{maxLength}
        </p>
      )}
      {error && (
        <p className="mt-1.5 text-xs text-red-500 font-medium ml-1">{error}</p>
      )}
    </div>
  );
}

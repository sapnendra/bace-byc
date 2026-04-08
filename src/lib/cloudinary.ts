import { v2 as cloudinary } from "cloudinary";

const CLOUDINARY_UPLOAD_TIMEOUT_MS = 25_000;
const MAX_UPLOAD_ATTEMPTS = 3;

// Configure Cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
  secure: true,
});

/**
 * Upload image to Cloudinary
 * @param file - Base64 encoded image or file path
 * @param folder - Cloudinary folder name (default: 'bace-alumni')
 * @returns Promise with upload result containing URL and public_id
 */
export async function uploadImage(
  file: string,
  folder: string = "bace-alumni",
): Promise<{ url: string; publicId: string }> {
  let lastError: unknown;

  for (let attempt = 1; attempt <= MAX_UPLOAD_ATTEMPTS; attempt += 1) {
    try {
      const result = await cloudinary.uploader.upload(file, {
        folder,
        timeout: CLOUDINARY_UPLOAD_TIMEOUT_MS,
        transformation: [
          { width: 1000, height: 1000, crop: "limit" },
          { quality: "auto:good" },
          { fetch_format: "auto" },
        ],
      });

      return {
        url: result.secure_url,
        publicId: result.public_id,
      };
    } catch (error: unknown) {
      lastError = error;
      const cloudinaryError = error as {
        error?: { http_code?: number; name?: string };
        http_code?: number;
        name?: string;
        code?: string;
      };

      const httpCode = cloudinaryError?.error?.http_code ?? cloudinaryError?.http_code;
      const errorName = cloudinaryError?.error?.name ?? cloudinaryError?.name;
      const errorCode = cloudinaryError?.code;

      const isRetryable =
        httpCode === 499 ||
        httpCode === 500 ||
        httpCode === 502 ||
        httpCode === 503 ||
        httpCode === 504 ||
        errorName === "TimeoutError" ||
        errorCode === "ETIMEDOUT" ||
        errorCode === "ECONNRESET";

      if (!isRetryable || attempt === MAX_UPLOAD_ATTEMPTS) {
        break;
      }

      const backoffMs = 500 * attempt;
      await new Promise((resolve) => setTimeout(resolve, backoffMs));
    }
  }

  console.error("Cloudinary upload error:", lastError);
  throw new Error("Image upload timed out. Please try again.");
}

/**
 * Upload multiple images to Cloudinary
 * @param files - Array of base64 encoded images
 * @param folder - Cloudinary folder name
 * @returns Promise with array of upload results
 */
export async function uploadMultipleImages(
  files: string[],
  folder: string = "bace-alumni",
): Promise<Array<{ url: string; publicId: string }>> {
  try {
    const uploadPromises = files.map((file) => uploadImage(file, folder));
    return await Promise.all(uploadPromises);
  } catch (error) {
    console.error("Cloudinary multiple upload error:", error);
    throw new Error("Failed to upload images to Cloudinary");
  }
}

/**
 * Delete image from Cloudinary
 * @param publicId - Cloudinary public ID of the image
 * @returns Promise with deletion result
 */
export async function deleteImage(publicId: string): Promise<void> {
  try {
    await cloudinary.uploader.destroy(publicId);
  } catch (error) {
    console.error("Cloudinary delete error:", error);
    throw new Error("Failed to delete image from Cloudinary");
  }
}

/**
 * Delete multiple images from Cloudinary
 * @param publicIds - Array of Cloudinary public IDs
 * @returns Promise with deletion results
 */
export async function deleteMultipleImages(publicIds: string[]): Promise<void> {
  try {
    const deletePromises = publicIds.map((id) => deleteImage(id));
    await Promise.all(deletePromises);
  } catch (error) {
    console.error("Cloudinary multiple delete error:", error);
    throw new Error("Failed to delete images from Cloudinary");
  }
}

export { cloudinary };

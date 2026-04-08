export const GALLERY_CATEGORIES = [
  "daily-life",
  "academics",
  "trips",
  "events",
  "recreation",
  "learning",
] as const;

export const GALLERY_SIZES = ["short", "tall"] as const;

export type GalleryCategory = (typeof GALLERY_CATEGORIES)[number];
export type GallerySize = (typeof GALLERY_SIZES)[number];

export type GalleryImage = {
  url: string;
  publicId?: string;
};

export type GalleryItem = {
  _id?: string;
  id?: number;
  title: string;
  category: GalleryCategory | string;
  gradient: string;
  size: GallerySize;
  images: Array<string> | GalleryImage[];
  isPublished?: boolean;
  sortOrder?: number;
  createdAt?: string;
  updatedAt?: string;
};

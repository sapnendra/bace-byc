# 🚀 Project Optimization Guide

This document outlines the optimization strategy for the BACE/Youth Forum application. Following these steps will improve performance, reduce bundle size, and ensure a better user experience.

## 1. 📦 Bundle Size Reduction

### Remove Unused Dependencies

We identified `gsap` in `package.json` but found no usage in the `src` directory. You should remove it to reduce the install size and prevent accidental imports.

```bash
npm uninstall gsap
```

### Optimize Package Imports

Next.js can automatically optimize imports from large libraries. Update `next.config.ts` to include `optimizePackageImports`.

**File:** `next.config.ts`

```typescript
const nextConfig = {
  // ... existing config
  experimental: {
    optimizePackageImports: ["lucide-react", "recharts", "framer-motion"],
  },
};
```

## 2. 🖼️ Image Optimization

### Replace `<img>` with `next/image`

We found standard `<img>` tags in the following files. These should be replaced with `next/image` to benefit from automatic resizing, lazy loading, and modern formats (WebP/AVIF).

- `src/components/gallery/GalleryModal.tsx`
- `src/components/forms/AlumniRegistrationForm.tsx`
- `src/components/admin/AlumniPreviewModal.tsx`

**Example:**

```tsx
// Before
<img src={image.url} alt="Gallery Image" className="..." />;

// After
import Image from "next/image";
<Image
  src={image.url}
  alt="Gallery Image"
  width={800}
  height={600}
  className="..."
  placeholder="blur" // Optional if blurDataURL is available
/>;
```

### Explicit Sizes Prop

For images that don't span the full screen width, providing a `sizes` prop helps the browser download the correct image size.

```tsx
<Image sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" ... />
```

## 3. ⚡ Code Splitting & Lazy Loading

### Dynamic Imports for Heavy Charts

`recharts` is a heavy library. It is used in `DashboardCharts.tsx` and `GrowthChart.tsx`. Load these dynamically so they don't block the initial page load.

**Example implementation for `src/components/admin/DashboardCharts.tsx`:**

```tsx
import dynamic from "next/dynamic";

const DashboardCharts = dynamic(() => import("./DashboardCharts"), {
  loading: () => <p>Loading Charts...</p>,
  ssr: false, // Charts often update client-side anyway
});
```

### Lazy Load Modals

Components like `GalleryModal` and `AlumniPreviewModal` are not needed until a user interaction occurs. Ensure they are conditionally rendered or dynamically imported to keep the initial JS bundle small.

## 4. 🎨 Rendering Performance

### Use Server Components by Default

Ensure strictly client-side interactivity (like `onClick`, `useEffect`, `useState`) is isolated in leaf components marked with `"use client"`. Keep pages and layouts as Server Components to reduce the amount of JavaScript sent to the browser.

### Optimize Framer Motion

You are using `framer-motion` extensively. To reduce its impact:

- Use `layoutId` only when necessary as it adds overhead.
- For simple animations, consider CSS transitions or Tailwind utility classes (`transition-all duration-300`).
- Use the `m` component from `framer-motion` for a reduced bundle size feature set if intricate physics aren't needed.

## 5. 🗄️ Database & API

### Connection Pooling

Ensure your MongoDB connection logic (likely in `lib/db.ts`) caches the connection across hot reloads in development and standardizes connection reuse in production to prevent "Too Many Connections" errors.

### Caching

Use unstable_cache or Next.js `fetch` caching for data that doesn't change often (e.g., gallery images, public alumni lists).

```typescript
import { unstable_cache } from "next/cache";

const getGalleryImages = unstable_cache(
  async () => {
    // DB tracking logic
  },
  ["gallery-images"],
  { revalidate: 3600 }, // Cache for 1 hour
);
```

## 6. 🛠️ Action Items Checklist

- [ ] Uninstall `gsap`.
- [ ] Add `optimizePackageImports` to `next.config.ts`.
- [ ] Refactor `<img>` tags to `next/image` in identified files.
- [ ] Implement `dynamic` imports for Chart components.
- [ ] Verify `lib/db.ts` handles connection caching.

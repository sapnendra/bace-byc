# IYF Bhopal - Complete End-to-End SEO Enhancement Prompt

> **How to use this file:** Copy each section's prompt into your AI coding assistant (Cursor, GitHub Copilot, Claude) along with the relevant file(s). Execute them in the order listed. Every instruction references the exact file path in your Next.js project.

---

## Table of Contents

1. [Keyword Strategy & Research](#1-keyword-strategy--research)
2. [Root & Layout Metadata](#2-root--layout-metadata)
3. [Homepage SEO](#3-homepage-seo)
4. [BACE Location Pages SEO](#4-bace-location-pages-seo)
5. [Supporting Public Pages SEO](#5-supporting-public-pages-seo)
6. [Structured Data / JSON-LD Schema](#6-structured-data--json-ld-schema)
7. [Sitemap & Robots.txt](#7-sitemap--robotstxt)
8. [Open Graph & Twitter Cards](#8-open-graph--twitter-cards)
9. [Technical SEO](#9-technical-seo)
10. [Local SEO & Google Business Profile](#10-local-seo--google-business-profile)
11. [Content SEO Recommendations](#11-content-seo-recommendations)
12. [Google Search Console Registration Guide](#12-google-search-console-registration-guide)

---

## 1. Keyword Strategy & Research

### Primary Keywords (High Intent - Target on Homepage & BACE Pages)

| Keyword | Intent | Target Page |
|---|---|---|
| ISKCON BACE Bhopal | Navigational/Brand | Homepage, All BACE pages |
| IYF Bhopal | Navigational/Brand | Homepage |
| ISKCON Bhopal | Navigational | Homepage |
| BACE hostel Bhopal | Transactional | Homepage, BACE pages |
| Vedic hostel Bhopal | Transactional | Homepage, BACE pages |
| ISKCON youth forum Bhopal | Informational | `/iskcon-youth-forum` |
| ISKCON hostel for students Bhopal | Transactional | All BACE pages |
| student hostel Bhopal near MANIT | Transactional | `/vrindavan-bace` |
| student hostel Bhopal near NIT | Transactional | `/vrindavan-bace` |
| ISKCON BYC Bhopal | Navigational | Homepage |
| Bhakti Yoga Center Bhopal | Informational | Homepage |
| Vedic student accommodation Bhopal | Transactional | BACE pages |
| value-based hostel Bhopal | Transactional | BACE pages |
| spiritual hostel Bhopal college students | Transactional | BACE pages |

### Secondary Keywords (Long-tail - Target on Specific Pages)

| Keyword | Target Page |
|---|---|
| ISKCON BACE hostel MP Nagar Bhopal | `/bhaktivedanta-bace` |
| vedic hostel near MANIT Chauraha Bhopal | `/vrindavan-bace` |
| BACE hostel Anand Nagar Bhopal | `/jp-bace` |
| ISKCON student hostel Saket Nagar Bhopal | `/saket-dham-bace` |
| BACE hostel Kokta Bypass Bhopal | `/barsana-bace` |
| hostel for engineering students Bhopal | `/vrindavan-bace`, `/bhaktivedanta-bace` |
| hostel for RGPV students Bhopal | BACE pages |
| IYF BACE admissions 2025 Bhopal | `/admissions` |
| ISKCON youth hostel Bhopal fees | `/admissions` |
| satvik food hostel Bhopal students | BACE pages |
| Bhagavad Gita courses Bhopal students | `/events-courses`, `/seminars` |
| character development hostel Bhopal | Homepage, BACE pages |
| Srila Prabhupada ISKCON Bhopal | `/prabhupada` |
| stress-free hostel Bhopal | BACE pages |
| drug-free hostel Bhopal college | BACE pages |

### Negative Keywords (Do NOT target - avoid confusing Google)
- ISKCON temple Bhopal (different from BACE hostel)
- ISKCON Bhopal darshan timings
- ISKCON prasadam Bhopal

---

## 2. Root & Layout Metadata

### Prompt for `src/app/layout.tsx`

```
You are an expert Next.js SEO engineer. Update the root metadata export in `src/app/layout.tsx` for the IYF Bhopal website (https://iyfbhopal.in).

Replace or create the `metadata` export with the following requirements:

1. Set `metadataBase` to `new URL('https://iyfbhopal.in')`
2. Set default `title` to: "IYF Bhopal | ISKCON BACE - Vedic Hostel for Students in Bhopal"
3. Set `title.template` to: "%s | IYF Bhopal"
4. Set `description` to: "IYF Bhopal offers ISKCON BACE - value-based vedic hostels for college students across Bhopal. Located near MANIT, MP Nagar, Anand Nagar, Saket Nagar & Kokta Bypass. Admissions open."
5. Set `keywords` array to: ["IYF Bhopal", "ISKCON BACE Bhopal", "BACE hostel Bhopal", "vedic hostel Bhopal", "ISKCON hostel students Bhopal", "ISKCON youth forum Bhopal", "IYF BACE", "student hostel MANIT Bhopal", "spiritual hostel Bhopal", "ISKCON BYC Bhopal", "Bhakti Yoga Center Bhopal", "value based hostel Bhopal", "satvik food hostel Bhopal"]
6. Set `authors` to: [{ name: "IYF Bhopal", url: "https://iyfbhopal.in" }]
7. Set `creator` to: "IYF Bhopal"
8. Set `publisher` to: "ISKCON Youth Forum Bhopal"
9. Set `robots` to: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-video-preview': -1, 'max-image-preview': 'large', 'max-snippet': -1 } }
10. Set `alternates` to: { canonical: 'https://iyfbhopal.in' }
11. Set `verification` to: { google: 'YOUR_GOOGLE_SEARCH_CONSOLE_VERIFICATION_CODE' } - leave a placeholder comment.
12. Set `category` to: "education"

Keep all existing imports and the rest of the layout unchanged. Use Next.js 15+ App Router `Metadata` type.
```

---

## 3. Homepage SEO

### Prompt for `src/app/(public)/page.tsx` and `src/app/(public)/layout.tsx`

```
You are an expert Next.js SEO engineer. The website is IYF Bhopal (https://iyfbhopal.in) - an ISKCON youth forum running vedic student hostels called BACE across Bhopal, Madhya Pradesh.

TASK 1 - Update `src/app/(public)/layout.tsx`:
Add or update the `metadata` export for the public route group:
- title.default: "IYF Bhopal | ISKCON BACE Vedic Hostel - Bhopal"
- title.template: "%s | IYF Bhopal"
- description: "Join IYF Bhopal's ISKCON BACE vedic hostels - value-based student accommodation in Bhopal with satvik food, Bhagavad Gita courses, and character development programs."
- openGraph.siteName: "IYF Bhopal"
- openGraph.locale: "en_IN"
- openGraph.type: "website"

TASK 2 - Add a `generateMetadata` or static `metadata` export inside `src/app/(public)/page.tsx` (Homepage) with:
- title: "IYF Bhopal - ISKCON BACE Vedic Hostel for Students in Bhopal"
- description: "IYF Bhopal offers ISKCON BACE vedic hostels near top colleges in Bhopal - MANIT, RGPV, Barkatullah University. Value-based living, satvik food, Bhagavad Gita wisdom. Admissions open 2025."
- keywords: ["IYF Bhopal", "ISKCON BACE Bhopal", "vedic hostel Bhopal", "BACE hostel Bhopal", "ISKCON youth forum Bhopal", "student hostel Bhopal", "ISKCON BYC Bhopal", "spiritual hostel students Bhopal MP"]
- alternates.canonical: "https://iyfbhopal.in"
- openGraph: { title, description, url: "https://iyfbhopal.in", images: [{ url: "/og-home.jpg", width: 1200, height: 630, alt: "IYF Bhopal BACE Vedic Hostel" }] }

TASK 3 - In the homepage JSX, ensure:
- The H1 tag contains: "ISKCON BACE - Vedic Hostel for Students in Bhopal"
- The page has at least one paragraph with natural use of keywords: "IYF Bhopal", "BACE", "Bhopal", "students", "vedic hostel"
- Add an `aria-label` to the main hero section: "IYF Bhopal ISKCON BACE Vedic Hostel"
- All images have descriptive `alt` text referencing "IYF Bhopal" or the BACE program
```

---

## 4. BACE Location Pages SEO

### 4A. Jagannath Puri BACE - `src/app/(public)/jp-bace/`

```
Create or update a `layout.tsx` file inside `src/app/(public)/jp-bace/` with a metadata export:

- title: "Jagannath Puri BACE Bhopal | ISKCON Vedic Hostel - Anand Nagar"
- description: "Jagannath Puri BACE is an ISKCON vedic student hostel in Anand Nagar, Bhopal, Madhya Pradesh. Value-based living, satvik food, Bhagavad Gita courses for college students."
- keywords: ["Jagannath Puri BACE Bhopal", "BACE hostel Anand Nagar Bhopal", "ISKCON hostel Anand Nagar", "vedic hostel Bhopal", "IYF BACE Bhopal", "student hostel Anand Nagar Bhopal"]
- alternates.canonical: "https://iyfbhopal.in/jp-bace"
- openGraph.url: "https://iyfbhopal.in/jp-bace"
- openGraph.title: "Jagannath Puri BACE | ISKCON Vedic Hostel Anand Nagar, Bhopal"

Also ensure the page's H1 is: "Jagannath Puri BACE - ISKCON Vedic Hostel, Anand Nagar, Bhopal"
Add a visible address line on the page: "Anand Nagar, Bhopal, Madhya Pradesh"
```

### 4B. Barsana BACE - `src/app/(public)/barsana-bace/`

```
Create or update a `layout.tsx` file inside `src/app/(public)/barsana-bace/` with a metadata export:

- title: "Barsana BACE Bhopal | ISKCON Vedic Hostel - Kokta Bypass"
- description: "Barsana BACE is an ISKCON vedic student hostel near Kokta Bypass, Bhopal. Offering value-based student accommodation, satvik meals, and Bhagavad Gita wisdom for college students in Bhopal."
- keywords: ["Barsana BACE Bhopal", "BACE hostel Kokta Bypass Bhopal", "ISKCON hostel Kokta Bhopal", "vedic student hostel Bhopal", "IYF BACE Kokta Bhopal"]
- alternates.canonical: "https://iyfbhopal.in/barsana-bace"
- openGraph.url: "https://iyfbhopal.in/barsana-bace"
- openGraph.title: "Barsana BACE | ISKCON Vedic Hostel Kokta Bypass, Bhopal"

Also ensure the page's H1 is: "Barsana BACE - ISKCON Vedic Hostel, Kokta Bypass, Bhopal"
Add a visible address line on the page: "Kokta Bypass, Bhopal, Madhya Pradesh"
```

### 4C. Vrindavan BACE - `src/app/(public)/vrindavan-bace/`

```
Create or update a `layout.tsx` file inside `src/app/(public)/vrindavan-bace/` with a metadata export:

- title: "Vrindavan BACE Bhopal | ISKCON Vedic Hostel - MANIT Chauraha"
- description: "Vrindavan BACE is an ISKCON vedic hostel near MANIT Chauraha, Bhopal. The ideal student accommodation for NIT Bhopal and RGPV students seeking value-based living and spiritual growth."
- keywords: ["Vrindavan BACE Bhopal", "BACE hostel near MANIT Bhopal", "ISKCON hostel MANIT Chauraha", "student hostel near NIT Bhopal", "vedic hostel NIT Bhopal", "IYF BACE MANIT Bhopal", "hostel for engineering students Bhopal"]
- alternates.canonical: "https://iyfbhopal.in/vrindavan-bace"
- openGraph.url: "https://iyfbhopal.in/vrindavan-bace"
- openGraph.title: "Vrindavan BACE | ISKCON Vedic Hostel near MANIT, Bhopal"

Also ensure the page's H1 is: "Vrindavan BACE - ISKCON Vedic Hostel, MANIT Chauraha, Bhopal"
Add a visible address line: "MANIT Chauraha, Bhopal, Madhya Pradesh"
Add a sentence mentioning: "Ideal for students of MANIT (NIT Bhopal), RGPV, and nearby colleges."
```

### 4D. Saket Dham BACE - `src/app/(public)/saket-dham-bace/`

```
Create or update a `layout.tsx` file inside `src/app/(public)/saket-dham-bace/` with a metadata export:

- title: "Saket Dham BACE Bhopal | ISKCON Vedic Hostel - Saket Nagar"
- description: "Saket Dham BACE is an ISKCON vedic student hostel in Saket Nagar, Bhopal, Madhya Pradesh. Join a community of students living with purpose, satvik food, and Vedic education."
- keywords: ["Saket Dham BACE Bhopal", "BACE hostel Saket Nagar Bhopal", "ISKCON hostel Saket Bhopal", "vedic hostel Saket Nagar Bhopal", "IYF BACE Saket Bhopal"]
- alternates.canonical: "https://iyfbhopal.in/saket-dham-bace"
- openGraph.url: "https://iyfbhopal.in/saket-dham-bace"

Also ensure H1: "Saket Dham BACE - ISKCON Vedic Hostel, Saket Nagar, Bhopal"
Add visible address: "Saket Nagar, Bhopal, Madhya Pradesh"
```

### 4E. Bhaktivedanta BACE - `src/app/(public)/bhaktivedanta-bace/`

```
Create or update a `layout.tsx` file inside `src/app/(public)/bhaktivedanta-bace/` with a metadata export:

- title: "Bhaktivedanta BACE Bhopal | ISKCON Vedic Hostel - MP Nagar"
- description: "Bhaktivedanta BACE is an ISKCON vedic student hostel in MP Nagar, Bhopal. Located in the heart of the city, ideal for students from MANIT, RGPV, Barkatullah University, and other Bhopal colleges."
- keywords: ["Bhaktivedanta BACE Bhopal", "BACE hostel MP Nagar Bhopal", "ISKCON hostel MP Nagar Bhopal", "vedic hostel MP Nagar Bhopal", "student hostel MP Nagar Bhopal", "IYF BACE MP Nagar"]
- alternates.canonical: "https://iyfbhopal.in/bhaktivedanta-bace"
- openGraph.url: "https://iyfbhopal.in/bhaktivedanta-bace"

Also ensure H1: "Bhaktivedanta BACE - ISKCON Vedic Hostel, MP Nagar, Bhopal"
Add visible address: "MP Nagar, Bhopal, Madhya Pradesh"
```

---

## 5. Supporting Public Pages SEO

### Prompt for Admissions Page `src/app/(public)/admissions/`

```
Add a `layout.tsx` to `src/app/(public)/admissions/` with metadata:
- title: "BACE Admissions Bhopal 2025 | ISKCON Vedic Hostel - IYF Bhopal"
- description: "Apply for admissions to ISKCON BACE vedic hostels in Bhopal for 2025. Locations: MP Nagar, MANIT Chauraha, Anand Nagar, Saket Nagar, Kokta Bypass. Value-based living for college students."
- keywords: ["BACE admissions Bhopal 2025", "ISKCON hostel admissions Bhopal", "IYF BACE apply Bhopal", "vedic hostel admission Bhopal"]
- alternates.canonical: "https://iyfbhopal.in/admissions"
```

### Prompt for About Page `src/app/(public)/about/`

```
Add a `layout.tsx` to `src/app/(public)/about/` with metadata:
- title: "About IYF Bhopal | ISKCON Youth Forum - BACE Vedic Hostel"
- description: "IYF Bhopal (ISKCON Youth Forum) has been transforming the lives of thousands of students in Bhopal since 2008 through BACE vedic hostels, Bhagavad Gita wisdom, and value-based education."
- keywords: ["about IYF Bhopal", "ISKCON youth forum Bhopal", "IYF BACE Bhopal history", "ISKCON Bhopal youth"]
- alternates.canonical: "https://iyfbhopal.in/about"
```

### Prompt for Contact Page `src/app/(public)/contact/`

```
Add a `layout.tsx` to `src/app/(public)/contact/` with metadata:
- title: "Contact IYF Bhopal | ISKCON BACE Hostel - +91 99931 01901"
- description: "Contact IYF Bhopal for BACE hostel admissions, enquiries, and information. Call +91 99931 01901. Located at Prabhupada Marg, Near Mansarobar College, Kolar, Bhopal, Madhya Pradesh."
- keywords: ["contact IYF Bhopal", "BACE hostel Bhopal contact", "ISKCON Bhopal phone number", "IYF Bhopal address"]
- alternates.canonical: "https://iyfbhopal.in/contact"

Also make sure the contact page JSX includes these as visible, crawlable HTML text (not just inside images):
- Phone: +91 99931 01901
- Address: Prabhupada Marg, Near Mansarobar College, Kolar, Bhopal, Madhya Pradesh
- Website: https://iyfbhopal.in
```

### Prompt for BACE Life Page `src/app/(public)/bace-life/`

```
Add a `layout.tsx` to `src/app/(public)/bace-life/` with metadata:
- title: "Life at BACE Bhopal | ISKCON Vedic Hostel Experience - IYF"
- description: "Experience life at BACE - ISKCON's vedic hostel in Bhopal. Daily schedule includes Mangal Aarti, Bhagavad Gita study, satvik meals, academics, and character development for students."
- keywords: ["BACE life Bhopal", "ISKCON hostel daily life Bhopal", "vedic hostel routine Bhopal students", "BACE Bhopal schedule"]
- alternates.canonical: "https://iyfbhopal.in/bace-life"
```

### Prompt for Prabhupada Page `src/app/(public)/prabhupada/layout.tsx`

```
Update `src/app/(public)/prabhupada/layout.tsx` metadata:
- title: "Srila Prabhupada | Founder ISKCON - IYF Bhopal BACE"
- description: "Learn about Srila Prabhupada - the founder of ISKCON and the inspiration behind BACE and IYF Bhopal's mission to transform student lives with Vedic wisdom in Bhopal, Madhya Pradesh."
- keywords: ["Srila Prabhupada ISKCON", "Prabhupada biography", "ISKCON founder Bhopal", "IYF Bhopal Prabhupada"]
- alternates.canonical: "https://iyfbhopal.in/prabhupada"
```

---

## 6. Structured Data / JSON-LD Schema

### Prompt - Add JSON-LD to `src/app/layout.tsx` (Organization + LocalBusiness)

```
In `src/app/layout.tsx`, inside the `<head>` (using Next.js `<Script>` with `type="application/ld+json"` or directly in a `<script>` tag inside the root layout), add the following two JSON-LD structured data blocks:

BLOCK 1 - Organization Schema:
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "IYF Bhopal",
  "alternateName": ["ISKCON Youth Forum Bhopal", "BACE Bhopal", "IYF BACE"],
  "url": "https://iyfbhopal.in",
  "logo": "https://iyfbhopal.in/logo.png",
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+91-99931-01901",
    "contactType": "Admissions",
    "areaServed": "Bhopal",
    "availableLanguage": ["Hindi", "English"]
  },
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Prabhupada Marg, Near Mansarobar College, Kolar",
    "addressLocality": "Bhopal",
    "addressRegion": "Madhya Pradesh",
    "postalCode": "462042",
    "addressCountry": "IN"
  },
  "sameAs": [
    "https://www.facebook.com/Iskconyouthbhopal/",
    "https://centres.iskcon.org/centre/mayapur-bace-bhopal/"
  ]
}

BLOCK 2 - LocalBusiness Schema (for IYF Bhopal main location):
{
  "@context": "https://schema.org",
  "@type": "CollegeOrUniversity",
  "name": "IYF Bhopal - ISKCON BACE",
  "description": "ISKCON BACE vedic hostels for college students across Bhopal, Madhya Pradesh. Value-based living, satvik food, Bhagavad Gita wisdom.",
  "url": "https://iyfbhopal.in",
  "telephone": "+91-99931-01901",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Prabhupada Marg, Near Mansarobar College, Kolar",
    "addressLocality": "Bhopal",
    "addressRegion": "Madhya Pradesh",
    "postalCode": "462042",
    "addressCountry": "IN"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "23.1765",
    "longitude": "77.4023"
  },
  "openingHours": "Mo-Su 06:00-21:00",
  "priceRange": "₹",
  "image": "https://iyfbhopal.in/og-home.jpg"
}

Use Next.js App Router pattern - place inside the <body> before closing tag using a <script> tag with dangerouslySetInnerHTML. Create a reusable component `src/components/seo/JsonLd.tsx` that accepts a `data` prop and renders the script tag.
```

### Prompt - Add JSON-LD to each BACE Location Page

```
For each BACE location page, add a LocalBusiness JSON-LD schema. Create a helper component `src/components/seo/BaceLocationSchema.tsx` that accepts props: name, address, neighborhood, url, lat, lng, description.

Then add it to each BACE page's page.tsx:

1. jp-bace: 
   - name: "Jagannath Puri BACE - IYF Bhopal"
   - address: "Anand Nagar, Bhopal, Madhya Pradesh"
   - url: "https://iyfbhopal.in/jp-bace"
   - lat: 23.2599, lng: 77.4126 (approximate - update with exact coords)

2. barsana-bace:
   - name: "Barsana BACE - IYF Bhopal"
   - address: "Kokta Bypass, Bhopal, Madhya Pradesh"
   - url: "https://iyfbhopal.in/barsana-bace"

3. vrindavan-bace:
   - name: "Vrindavan BACE - IYF Bhopal"
   - address: "MANIT Chauraha, Bhopal, Madhya Pradesh"
   - url: "https://iyfbhopal.in/vrindavan-bace"

4. saket-dham-bace:
   - name: "Saket Dham BACE - IYF Bhopal"
   - address: "Saket Nagar, Bhopal, Madhya Pradesh"
   - url: "https://iyfbhopal.in/saket-dham-bace"

5. bhaktivedanta-bace:
   - name: "Bhaktivedanta BACE - IYF Bhopal"
   - address: "MP Nagar, Bhopal, Madhya Pradesh"
   - url: "https://iyfbhopal.in/bhaktivedanta-bace"

Each schema should use "@type": "LocalBusiness" and include telephone "+91-99931-01901".
```

---

## 7. Sitemap & Robots.txt

### Prompt - Create `src/app/sitemap.ts`

```
Create a new file `src/app/sitemap.ts` using Next.js App Router's built-in sitemap support.

Export a default function that returns a `MetadataRoute.Sitemap` array. Include ALL public pages with correct priority and changeFrequency:

const BASE_URL = 'https://iyfbhopal.in';

return [
  { url: BASE_URL, lastModified: new Date(), changeFrequency: 'weekly', priority: 1.0 },
  { url: `${BASE_URL}/about`, changeFrequency: 'monthly', priority: 0.8 },
  { url: `${BASE_URL}/admissions`, changeFrequency: 'weekly', priority: 0.9 },
  { url: `${BASE_URL}/bace-life`, changeFrequency: 'monthly', priority: 0.8 },
  { url: `${BASE_URL}/barsana-bace`, changeFrequency: 'monthly', priority: 0.9 },
  { url: `${BASE_URL}/bhaktivedanta-bace`, changeFrequency: 'monthly', priority: 0.9 },
  { url: `${BASE_URL}/contact`, changeFrequency: 'monthly', priority: 0.8 },
  { url: `${BASE_URL}/donation`, changeFrequency: 'monthly', priority: 0.6 },
  { url: `${BASE_URL}/events-courses`, changeFrequency: 'weekly', priority: 0.7 },
  { url: `${BASE_URL}/gallery`, changeFrequency: 'weekly', priority: 0.6 },
  { url: `${BASE_URL}/iskcon-girls-forum`, changeFrequency: 'monthly', priority: 0.7 },
  { url: `${BASE_URL}/iskcon-kids-forum`, changeFrequency: 'monthly', priority: 0.6 },
  { url: `${BASE_URL}/iskcon-youth-forum`, changeFrequency: 'monthly', priority: 0.8 },
  { url: `${BASE_URL}/jp-bace`, changeFrequency: 'monthly', priority: 0.9 },
  { url: `${BASE_URL}/our-alumani`, changeFrequency: 'monthly', priority: 0.6 },
  { url: `${BASE_URL}/parents-view`, changeFrequency: 'monthly', priority: 0.7 },
  { url: `${BASE_URL}/prabhupada`, changeFrequency: 'monthly', priority: 0.7 },
  { url: `${BASE_URL}/reviews`, changeFrequency: 'weekly', priority: 0.7 },
  { url: `${BASE_URL}/saket-dham-bace`, changeFrequency: 'monthly', priority: 0.9 },
  { url: `${BASE_URL}/seminars`, changeFrequency: 'monthly', priority: 0.7 },
  { url: `${BASE_URL}/testimonials`, changeFrequency: 'monthly', priority: 0.7 },
  { url: `${BASE_URL}/vrindavan-bace`, changeFrequency: 'monthly', priority: 0.9 },
]

NOTE: Do NOT include /admin/* routes in sitemap. Do NOT include /api/* routes.
```

### Prompt - Create `src/app/robots.ts`

```
Create a new file `src/app/robots.ts` using Next.js App Router robots.txt generation.

Export a default function returning a `MetadataRoute.Robots` object:
- Allow all crawlers to access all public pages: { userAgent: '*', allow: '/' }
- Disallow: ['/admin', '/admin/*', '/api/*']
- Set sitemap: 'https://iyfbhopal.in/sitemap.xml'

This will auto-generate /robots.txt at build time.
```

---

## 8. Open Graph & Twitter Cards

### Prompt - Add OG Images for All BACE Pages

```
Create a utility function in `src/lib/utils/seo.ts` called `getBacePageOgMetadata(params)` that accepts: { title, description, url, imageAlt }.

It returns an openGraph and twitter metadata object compatible with Next.js Metadata type:

openGraph: {
  title: params.title,
  description: params.description,
  url: params.url,
  siteName: 'IYF Bhopal',
  locale: 'en_IN',
  type: 'website',
  images: [{
    url: '/og-bace.jpg',   // place a 1200x630 image in /public/og-bace.jpg
    width: 1200,
    height: 630,
    alt: params.imageAlt,
  }],
},
twitter: {
  card: 'summary_large_image',
  title: params.title,
  description: params.description,
  images: ['/og-bace.jpg'],
  creator: '@IYFBhopal',
  site: '@IYFBhopal',
},

Use this utility in all BACE location layout.tsx files to ensure consistent OG metadata.

IMPORTANT: Create a high-quality 1200×630 OG image file and place it at /public/og-bace.jpg and /public/og-home.jpg. The image should show the BACE logo or a student hostel photo. This is critical for social sharing appearance.
```

---

## 9. Technical SEO

### Prompt - Canonical URLs, Performance & Core Web Vitals

```
Perform the following technical SEO improvements across the IYF Bhopal Next.js project:

1. CANONICAL URLS - In every page's layout.tsx or page.tsx metadata, confirm that `alternates.canonical` is explicitly set to the full absolute URL (e.g., "https://iyfbhopal.in/vrindavan-bace"). Never leave canonical undefined.

2. IMAGE ALT TEXT AUDIT - Search all files in `src/components/` for `<img` and `<Image` tags missing `alt` props or with empty alt="". For each:
   - Hero images: alt="[BACE Name] ISKCON Vedic Hostel Bhopal"
   - Student photos: alt="Students at [BACE Name] Bhopal"
   - Logo: alt="IYF Bhopal ISKCON Youth Forum Logo"

3. HEADING HIERARCHY - Audit all public page components. Ensure:
   - Each page has exactly ONE `<h1>` tag
   - `<h1>` contains the primary keyword for that page
   - `<h2>` tags are used for section headings
   - No skipped heading levels (h1 → h3 without h2)

4. NEXT.JS IMAGE OPTIMIZATION - Replace all plain `<img>` tags in public-facing components with Next.js `<Image>` from 'next/image'. Set:
   - `priority={true}` on hero/above-fold images
   - Appropriate `width` and `height` props
   - `loading="lazy"` on below-fold images (default)

5. INTERNAL LINKING - In the homepage JSX, add visible links to all 5 BACE location pages:
   - "Jagannath Puri BACE - Anand Nagar, Bhopal" → href="/jp-bace"
   - "Vrindavan BACE - MANIT Chauraha, Bhopal" → href="/vrindavan-bace"
   - "Bhaktivedanta BACE - MP Nagar, Bhopal" → href="/bhaktivedanta-bace"
   - "Barsana BACE - Kokta Bypass, Bhopal" → href="/barsana-bace"
   - "Saket Dham BACE - Saket Nagar, Bhopal" → href="/saket-dham-bace"
   Use Next.js `<Link>` component for all internal links.

6. FOOTER - Update `src/components/layout/` footer component to include:
   - NAP (Name, Address, Phone) in plain text: "IYF Bhopal, Prabhupada Marg, Near Mansarobar College, Kolar, Bhopal, Madhya Pradesh | +91 99931 01901"
   - Links to all 5 BACE location pages
   - Link to /admissions with anchor text "BACE Admissions 2025"
   - Link to /contact

7. PAGE SPEED - In `next.config.ts`, ensure:
   - images.formats: ['image/avif', 'image/webp'] is set
   - compress: true is set
   - Add appropriate cache headers for static assets

8. LANGUAGE & REGION - In `src/app/layout.tsx`, set the `<html>` tag attributes:
   - lang="en"
   - dir="ltr"
```

### Prompt - Create `src/app/not-found.tsx` (404 page)

```
Create `src/app/not-found.tsx` with:
- A user-friendly 404 page that includes links back to Homepage and /admissions
- Metadata: title: "Page Not Found | IYF Bhopal", robots: { index: false, follow: true }
- The page should NOT be indexed by search engines (noindex)
```

---

## 10. Local SEO & Google Business Profile

### Prompt - Add LocalBusiness NAP Component

```
Create a new component `src/components/seo/NapAddress.tsx`.

This component renders the business's Name, Address, and Phone (NAP) in semantic HTML using Schema.org microdata attributes. It should be visually styled (can be hidden visually if needed but MUST be in DOM for crawlers).

Use these details:
- Organization name: IYF Bhopal (ISKCON Youth Forum)
- Street: Prabhupada Marg, Near Mansarobar College, Kolar
- City: Bhopal
- State: Madhya Pradesh
- Postal Code: 462042
- Country: India
- Phone: +91 99931 01901
- URL: https://iyfbhopal.in

Use itemscope itemtype="https://schema.org/LocalBusiness" on the wrapper div.
Use itemprop attributes: name, address (with nested PostalAddress), telephone, url.

Add this component to:
1. The footer in `src/components/layout/`
2. The contact page `src/app/(public)/contact/page.tsx`
3. Each BACE location page (with that location's address replacing Kolar main address)
```

### Google Business Profile Checklist

```
MANUAL TASK (no code required) - Set up 6 separate Google Business Profile listings:

1. IYF Bhopal (Main)
   - Business name: IYF Bhopal - ISKCON BACE Vedic Hostel
   - Category: Student Dormitory / Youth Organization / Educational Institution
   - Address: Prabhupada Marg, Near Mansarobar College, Kolar, Bhopal, MP 462042
   - Phone: +91 99931 01901
   - Website: https://iyfbhopal.in
   - Description: "IYF Bhopal (ISKCON Youth Forum) runs BACE - vedic hostels for college students across Bhopal offering value-based living, satvik food, Bhagavad Gita wisdom and character development."

2. Jagannath Puri BACE
   - Business name: Jagannath Puri BACE - IYF Bhopal
   - Address: Anand Nagar, Bhopal, MP
   - Website: https://iyfbhopal.in/jp-bace

3. Barsana BACE
   - Business name: Barsana BACE - IYF Bhopal
   - Address: Kokta Bypass, Bhopal, MP
   - Website: https://iyfbhopal.in/barsana-bace

4. Vrindavan BACE
   - Business name: Vrindavan BACE - IYF Bhopal
   - Address: MANIT Chauraha, Bhopal, MP
   - Website: https://iyfbhopal.in/vrindavan-bace

5. Saket Dham BACE
   - Business name: Saket Dham BACE - IYF Bhopal
   - Address: Saket Nagar, Bhopal, MP
   - Website: https://iyfbhopal.in/saket-dham-bace

6. Bhaktivedanta BACE
   - Business name: Bhaktivedanta BACE - IYF Bhopal
   - Address: MP Nagar, Bhopal, MP
   - Website: https://iyfbhopal.in/bhaktivedanta-bace

For ALL listings:
- Upload at least 10 photos of the hostel, rooms, food, students
- Add Posts weekly (events, admissions open, etc.)
- Collect and respond to Google Reviews actively
- Add attributes: "Serves students", "Vegetarian food available", "Free WiFi"
```

---

## 11. Content SEO Recommendations

### New Blog/Article Pages to Create

These are high-value content pages to attract organic search traffic. Create these as new routes under `src/app/(public)/`:

```
Create the following new public pages in the Next.js project. Each needs a layout.tsx with metadata, and a page.tsx with at least 600 words of content:

PAGE 1: /student-hostel-bhopal
- Title: "Best Student Hostels in Bhopal 2025 | ISKCON BACE - Value-Based Living"
- Target keywords: "student hostel Bhopal", "best hostel Bhopal for students", "hostel near MANIT Bhopal"
- Content: Compare BACE with regular hostels. Highlight unique benefits: satvik food, no addiction, academic support, Bhagavad Gita wisdom.

PAGE 2: /vedic-hostel-bhopal
- Title: "Vedic Hostel in Bhopal | ISKCON BACE - Spiritual Student Accommodation"
- Target keywords: "vedic hostel Bhopal", "spiritual hostel Bhopal", "ISKCON student accommodation Bhopal"
- Content: What is a vedic hostel, daily schedule at BACE, benefits for students.

PAGE 3: /bhopal-college-students
- Title: "For College Students in Bhopal | BACE Hostel - MANIT, RGPV, BU & More"
- Target keywords: "hostel for college students Bhopal", "RGPV students hostel Bhopal", "hostel near Barkatullah University Bhopal"
- Content: Mention each major college in Bhopal and how BACE is accessible from them.

For each page:
- Use metadata.alternates.canonical set to the absolute URL
- Include internal links to all BACE location pages
- Include a CTA (Call to Action) linking to /admissions with text "Apply for BACE Admissions"
```

### On-Page Content Improvements

```
Review and update the following existing page components to improve keyword density and content quality:

1. `src/components/home/` - Homepage sections:
   - Add a dedicated "Our BACE Locations in Bhopal" section listing all 5 BACEs with their neighborhood names and links
   - Add a "Why Choose BACE?" section with benefits: satvik food, no distractions, Bhagavad Gita wisdom, academic support, character development, stress management
   - Add a testimonials preview linking to /testimonials
   - Include the phrase "ISKCON BACE" and "vedic hostel Bhopal" naturally in hero copy

2. `src/components/bace-location/BaceLocationPage.tsx` - Shared BACE template:
   - Add a "Nearby Colleges" section (customizable per location via props)
   - Add a "Daily Schedule" section (same for all BACEs)
   - Add a visible address block with the location's full address
   - Add a "How to Reach" section with neighborhood landmark info
   - Add an FAQ section with questions like "Is BACE hostel available for girls?", "What is the fee?", "Is satvik food provided?"

3. `/iskcon-youth-forum` page:
   - Ensure it mentions "IYF Bhopal", "ISKCON Youth Forum Bhopal", and links to all BACE pages
```

---

## 12. Google Search Console Registration Guide

### Step-by-Step: Register iyfbhopal.in with Google Search Console

```
MANUAL TASK - Follow these steps exactly to register and verify iyfbhopal.in:

STEP 1 - Go to Google Search Console
   URL: https://search.google.com/search-console/
   Sign in with the Google account that will manage the website.

STEP 2 - Add Property
   Click "+ Add property" (top left dropdown)
   Choose "Domain" property type (recommended) - enter: iyfbhopal.in
   (Domain property covers all subdomains and both http/https)

STEP 3 - Verify Ownership (DNS Method - Recommended for Vercel)
   Google will show you a TXT record like:
   google-site-verification=XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
   
   Go to your domain registrar (wherever iyfbhopal.in is registered - GoDaddy, Namecheap, etc.)
   → DNS Settings → Add TXT Record:
     Host/Name: @
     Value: google-site-verification=YOUR_CODE_HERE
     TTL: 3600 (or default)
   Save and return to Google Search Console and click "Verify".
   DNS propagation may take 10–60 minutes.

STEP 4 - Alternative Verification (if using Next.js metadata method)
   If you cannot access DNS, use the HTML tag method:
   In `src/app/layout.tsx`, inside the metadata export, add:
   verification: { google: 'YOUR_VERIFICATION_CODE' }
   
   Deploy to Vercel (npm run build → vercel deploy)
   Then click Verify in Google Search Console.

STEP 5 - Submit Sitemap
   After verification, go to: Search Console → Sitemaps (left sidebar)
   Enter: https://iyfbhopal.in/sitemap.xml
   Click Submit.
   
   ✅ Google will now crawl your sitemap and index all pages.

STEP 6 - Request Indexing for Key Pages
   Go to: Search Console → URL Inspection
   Enter each high-priority URL one by one:
   - https://iyfbhopal.in
   - https://iyfbhopal.in/vrindavan-bace
   - https://iyfbhopal.in/bhaktivedanta-bace
   - https://iyfbhopal.in/jp-bace
   - https://iyfbhopal.in/barsana-bace
   - https://iyfbhopal.in/saket-dham-bace
   - https://iyfbhopal.in/admissions
   
   For each: Click "Request Indexing" after the URL inspection completes.

STEP 7 - Set Geographic Target (Optional but Useful)
   Search Console → Legacy tools and reports → International Targeting
   Set target country to: India

STEP 8 - Monitor Weekly
   Check these reports every week:
   - Performance → Queries: See which keywords you rank for
   - Coverage: Fix any crawl errors
   - Core Web Vitals: Fix any page speed issues
   - Mobile Usability: Fix any mobile display issues

STEP 9 - Register with Bing Webmaster Tools (Bonus)
   URL: https://www.bing.com/webmasters/
   Add site and import from Google Search Console for quick setup.

STEP 10 - Submit to Google Maps (for Local SEO)
   For each BACE location, go to Google Maps → suggest an edit or create a Business Profile
   (See Section 10 above for full Google Business Profile setup)
```

---

## Quick Priority Checklist

Execute these in order for fastest SEO results:

- [ ] 1. Update `src/app/layout.tsx` - root metadata (Section 2)
- [ ] 2. Create `src/app/sitemap.ts` (Section 7)
- [ ] 3. Create `src/app/robots.ts` (Section 7)
- [ ] 4. Add metadata to all 5 BACE location `layout.tsx` files (Section 4)
- [ ] 5. Add JSON-LD Organization schema to root layout (Section 6)
- [ ] 6. Add JSON-LD LocalBusiness to each BACE page (Section 6)
- [ ] 7. Add NAP to footer and contact page (Section 10)
- [ ] 8. Fix all image alt texts (Section 9)
- [ ] 9. Ensure one H1 per page with keyword (Section 9)
- [ ] 10. Add internal links to all BACE pages from Homepage (Section 9)
- [ ] 11. Register Google Search Console + Submit sitemap (Section 12)
- [ ] 12. Set up Google Business Profile for all 6 locations (Section 10)
- [ ] 13. Create new content pages: /student-hostel-bhopal, /vedic-hostel-bhopal (Section 11)

---

*Generated for IYF Bhopal (https://iyfbhopal.in) - ISKCON Youth Forum, Bhopal, Madhya Pradesh*
*Contact: +91 99931 01901 | Prabhupada Marg, Near Mansarobar College, Kolar, Bhopal*
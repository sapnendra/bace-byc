import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import JsonLd from "@/components/seo/JsonLd";
import "../styles/globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "IYF Bhopal",
  alternateName: ["ISKCON Youth Forum Bhopal", "BACE Bhopal", "IYF BACE"],
  url: "https://iyfbhopal.in",
  logo: "https://iyfbhopal.in/logo.png",
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+91-99931-01901",
    contactType: "Admissions",
    areaServed: "Bhopal",
    availableLanguage: ["Hindi", "English"],
  },
  address: {
    "@type": "PostalAddress",
    streetAddress: "Prabhupada Marg, Near Mansarobar College, Kolar",
    addressLocality: "Bhopal",
    addressRegion: "Madhya Pradesh",
    postalCode: "462042",
    addressCountry: "IN",
  },
  sameAs: [
    "https://www.facebook.com/Iskconyouthbhopal/",
    "https://centres.iskcon.org/centre/mayapur-bace-bhopal/",
  ],
};

const mainLocationSchema = {
  "@context": "https://schema.org",
  "@type": "CollegeOrUniversity",
  name: "IYF Bhopal - ISKCON BACE",
  description:
    "ISKCON BACE vedic hostels for college students across Bhopal, Madhya Pradesh. Value-based living, satvik food, Bhagavad Gita wisdom.",
  url: "https://iyfbhopal.in",
  telephone: "+91-99931-01901",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Prabhupada Marg, Near Mansarobar College, Kolar",
    addressLocality: "Bhopal",
    addressRegion: "Madhya Pradesh",
    postalCode: "462042",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: "23.1765",
    longitude: "77.4023",
  },
  openingHours: "Mo-Su 06:00-21:00",
  priceRange: "INR",
  image: "https://iyfbhopal.in/og-home.jpg",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://iyfbhopal.in"),
  title: {
    default: "IYF Bhopal | ISKCON BACE - Vedic Hostel for Students in Bhopal",
    template: "%s | IYF Bhopal",
  },
  description:
    "IYF Bhopal offers ISKCON BACE - value-based vedic hostels for college students across Bhopal. Located near MANIT, MP Nagar, Anand Nagar, Saket Nagar & Kokta Bypass. Admissions open.",
  keywords: [
    "IYF Bhopal",
    "ISKCON BACE Bhopal",
    "BACE hostel Bhopal",
    "vedic hostel Bhopal",
    "ISKCON hostel students Bhopal",
    "ISKCON youth forum Bhopal",
    "IYF BACE",
    "student hostel MANIT Bhopal",
    "spiritual hostel Bhopal",
    "ISKCON BYC Bhopal",
    "Bhakti Yoga Center Bhopal",
    "value based hostel Bhopal",
    "satvik food hostel Bhopal",
  ],
  authors: [{ name: "IYF Bhopal", url: "https://iyfbhopal.in" }],
  creator: "IYF Bhopal",
  publisher: "ISKCON Youth Forum Bhopal",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://iyfbhopal.in",
  },
  verification: {
    // Replace with your Google Search Console verification code.
    google: "YOUR_GOOGLE_SEARCH_CONSOLE_VERIFICATION_CODE",
  },
  category: "education",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" dir="ltr" className={`${inter.variable} ${playfair.variable}`}>
      <body>
        {children}
        <JsonLd data={organizationSchema} />
        <JsonLd data={mainLocationSchema} />
      </body>
    </html>
  );
}

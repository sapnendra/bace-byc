interface BaceOgParams {
  title: string;
  description: string;
  url: string;
  imageAlt: string;
}

export function getBacePageOgMetadata(params: BaceOgParams) {
  return {
    openGraph: {
      title: params.title,
      description: params.description,
      url: params.url,
      siteName: "IYF Bhopal",
      locale: "en_IN",
      type: "website" as const,
      images: [
        {
          url: "/og-bace.jpg",
          width: 1200,
          height: 630,
          alt: params.imageAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image" as const,
      title: params.title,
      description: params.description,
      images: ["/og-bace.jpg"],
      creator: "@IYFBhopal",
      site: "@IYFBhopal",
    },
  };
}

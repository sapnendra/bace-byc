import JsonLd from "@/components/seo/JsonLd";

interface BaceLocationSchemaProps {
  name: string;
  address: string;
  neighborhood: string;
  url: string;
  lat: number;
  lng: number;
  description: string;
}

export default function BaceLocationSchema({
  name,
  address,
  neighborhood,
  url,
  lat,
  lng,
  description,
}: BaceLocationSchemaProps) {
  const data = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name,
    description,
    telephone: "+91-99931-01901",
    url,
    address: {
      "@type": "PostalAddress",
      streetAddress: address,
      addressLocality: "Bhopal",
      addressRegion: "Madhya Pradesh",
      addressCountry: "IN",
    },
    areaServed: neighborhood,
    geo: {
      "@type": "GeoCoordinates",
      latitude: lat,
      longitude: lng,
    },
  };

  return <JsonLd data={data} />;
}

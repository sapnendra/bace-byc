import type { MetadataRoute } from "next";

const BASE_URL = "https://iyfbhopal.in";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1.0,
    },
    { url: `${BASE_URL}/about`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/admissions`, changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE_URL}/bace-life`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/barsana-bace`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE_URL}/bhaktivedanta-bace`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE_URL}/contact`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/donation`, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE_URL}/events-courses`, changeFrequency: "weekly", priority: 0.7 },
    { url: `${BASE_URL}/gallery`, changeFrequency: "weekly", priority: 0.6 },
    { url: `${BASE_URL}/iskcon-girls-forum`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/iskcon-kids-forum`, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE_URL}/iskcon-youth-forum`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/jp-bace`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE_URL}/our-alumani`, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE_URL}/parents-view`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/prabhupada`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/reviews`, changeFrequency: "weekly", priority: 0.7 },
    { url: `${BASE_URL}/saket-dham-bace`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE_URL}/seminars`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/testimonials`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/vrindavan-bace`, changeFrequency: "monthly", priority: 0.9 },
  ];
}

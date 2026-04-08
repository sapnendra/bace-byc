"use client";

import BaceLocationPage, {
  defaultHistoryContent,
  defaultMissionContent,
} from "@/components/bace-location/BaceLocationPage";

const sliderImages = [
  "https://images.unsplash.com/photo-1600411832986-5a4477b64a1c",
  "https://images.unsplash.com/photo-1582510003544-4d00b7f74220",
  "https://images.unsplash.com/photo-1593696140826-c58b021acf8b",
  "https://images.unsplash.com/photo-1627308595171-d1b5d67129c4",
];

const objectives = [
  "Equip youth with essential life skills through personality development seminars.",
  "Assist in their academic pursuits through tested study techniques & concentration methods.",
  "Deepen their knowledge, understanding and ability to apply the theology and values of Vedic thought.",
  "Enable them to develop ethical discrimination in critical circumstances as well as day to day decision making.",
  "Counseling and befriending to address the troubled and confused youth.",
  "Provide residential training to those interested in learning and practicing the art of meditation.",
  "Visit places of heritage and spiritual interest to deepen one's connection with Indian culture.",
];

export default function VrindavanBacePage() {
  return (
    <BaceLocationPage
      locationName="Vrindavan"
      locationSlug="vrindavan-bace"
      subtitle="Spiritual Learning & Youth Transformation Hub"
      description="Experience the divine atmosphere of Vrindavan through spiritual education, disciplined living, and a community focused on growth, devotion, and purpose."
      sliderImages={sliderImages}
      contactPhone="+91 9123456780"
      contactEmail="vrindavan.bace@gmail.com"
      contactSubheading="Reach Vrindavan BACE"
      objectives={objectives}
      missionContent={defaultMissionContent}
      historyContent={defaultHistoryContent}
    />
  );
}

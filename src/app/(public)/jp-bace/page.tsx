import BaceLocationPage, {
  defaultHistoryContent,
  defaultMissionContent,
} from "@/components/bace-location/BaceLocationPage";

const sliderImages = [
  "https://images.unsplash.com/photo-1582550945154-66ea8fff25e1",
  "https://images.unsplash.com/photo-1605405748313-a416a1b84491",
  "https://images.unsplash.com/photo-1599661046289-e31897846e41",
  "https://images.unsplash.com/photo-1548013146-72479768bada",
];

const objectives = [
  "Equip youth with essential life skills through personality development seminars.",
  "Assist in their academic pursuits through tested study techniques & concentration methods.",
  "Deepen their knowledge, understanding and ability to apply the theology and values of Vedic thought.",
  "Enable them to develop ethical discrimination in critical circumstances as well as day to day decision making.",
  "Counseling and befriending to address the troubled and confused youth.",
  "Provide residential training to those interested in learning and practicing the art of meditation.",
  "Visit places of heritage and spiritual interest to deepen one's connection with glory of Indian culture and civilization.",
];

export default function JpBacePage() {
  return (
    <BaceLocationPage
      locationName="Jagannath Puri"
      locationSlug="jp-bace"
      subtitle="Spiritual Learning & Youth Transformation Hub"
      description="A sacred space in Bhopal where youth connect with spiritual wisdom, build discipline, and grow through devotion, knowledge, and community."
      sliderImages={sliderImages}
      contactPhone="+91 9876543210"
      contactEmail="bace.jagannath@gmail.com"
      contactSubheading="Reach Jagannath Puri BACE"
      objectives={objectives}
      missionContent={defaultMissionContent}
      historyContent={defaultHistoryContent}
    />
  );
}

import BaceLocationPage, {
  defaultHistoryContent,
  defaultMissionContent,
} from "@/components/bace-location/BaceLocationPage";

const sliderImages = [
  "https://images.unsplash.com/photo-1605640840605-14ac1855827b",
  "https://images.unsplash.com/photo-1585135497273-1a86b09fe70e",
  "https://images.unsplash.com/photo-1609947017136-9daf32a5eb16",
  "https://images.unsplash.com/photo-1615874959474-d609969a20ed",
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

export default function BarsanaBacePage() {
  return (
    <BaceLocationPage
      locationName="Barsana"
      locationSlug="barsana-bace"
      subtitle="Spiritual Learning & Youth Transformation Hub"
      description="Immerse yourself in the devotional essence of Barsana, where youth are guided towards spiritual growth, strong values, and a meaningful life through knowledge, discipline, and divine association."
      sliderImages={sliderImages}
      contactPhone="+91 9012345678"
      contactEmail="barsana.bace@gmail.com"
      contactSubheading="Reach Barsana BACE"
      objectives={objectives}
      missionContent={defaultMissionContent}
      historyContent={defaultHistoryContent}
    />
  );
}

import BaceLocationPage, {
  defaultHistoryContent,
  defaultMissionContent,
} from "@/components/bace-location/BaceLocationPage";

const sliderImages = [
  "https://images.unsplash.com/photo-1609766857041-ed402ea8069a",
  "https://images.unsplash.com/photo-1591604466107-ec97de577aff",
  "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b",
  "https://images.unsplash.com/photo-1508022713622-df2d8fb7b4cd",
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

export default function BhaktivedantaBacePage() {
  return (
    <BaceLocationPage
      locationName="Bhaktivedanta"
      locationSlug="bhaktivedanta-bace"
      subtitle="Spiritual Learning & Youth Transformation Hub"
      description="Inspired by the teachings of Srila Prabhupada, Bhaktivedanta BACE is a space where youth discover purpose, build character, and grow through spiritual wisdom, discipline, and meaningful association."
      sliderImages={sliderImages}
      contactPhone="+91 9988776655"
      contactEmail="bhaktivedanta.bace@gmail.com"
      contactSubheading="Reach Bhaktivedanta BACE"
      objectives={objectives}
      missionContent={defaultMissionContent}
      historyContent={defaultHistoryContent}
    />
  );
}

import BaceLocationPage, {
  defaultHistoryContent,
} from "@/components/bace-location/BaceLocationPage";

const sliderImages = [
  "https://images.unsplash.com/photo-1604608672516-8a3fbbf3d1cf",
  "https://images.unsplash.com/photo-1595867818082-083862f3d630",
  "https://images.unsplash.com/photo-1587135941948-670b381f08ce",
  "https://images.unsplash.com/photo-1627894483216-2138af692e32",
];

const missionContent = [
  "ISKCON Youth Services (IYS) is the youth wing of ISKCON Chowpatty, aimed towards nourishing the hearts of today’s youth with the sublime message of the scriptures, helping them flourish in their lives in a wholesome manner. This is achieved by a number of initiatives like campus outreach, youth festivals, retreats and personal care and guidance by a team of experienced youth mentors.",
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

export default function SaketDhamBacePage() {
  return (
    <BaceLocationPage
      locationName="Saket Dham"
      locationSlug="saket-dham-bace"
      subtitle="Spiritual Learning & Youth Transformation Hub"
      description="Rooted in devotion and inspired by sacred traditions, Saket Dham BACE offers a nurturing environment where youth cultivate spiritual awareness, discipline, and a purposeful life journey."
      sliderImages={sliderImages}
      contactPhone="+91 9098765432"
      contactEmail="saketdham.bace@gmail.com"
      contactSubheading="Reach Saket Dham BACE"
      objectives={objectives}
      missionContent={missionContent}
      historyContent={defaultHistoryContent}
    />
  );
}

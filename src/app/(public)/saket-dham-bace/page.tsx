import BaceLocationPage, {
  defaultHistoryContent,
} from "@/components/bace-location/BaceLocationPage";
import BaceLocationSchema from "@/components/seo/BaceLocationSchema";
import NapAddress from "@/components/seo/NapAddress";

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
    <>
      <BaceLocationSchema
        name="Saket Dham BACE - IYF Bhopal"
        address="Saket Nagar, Bhopal, Madhya Pradesh"
        neighborhood="Saket Nagar"
        url="https://iyfbhopal.in/saket-dham-bace"
        lat={23.2069}
        lng={77.4338}
        description="Saket Dham BACE in Saket Nagar provides a disciplined, value-based student hostel environment in Bhopal."
      />
      <BaceLocationPage
        locationName="Saket Dham"
        locationSlug="saket-dham-bace"
        heroHeading="Saket Dham BACE - ISKCON Vedic Hostel, Saket Nagar, Bhopal"
        subtitle="Spiritual Learning & Youth Transformation Hub"
        description="Rooted in devotion and inspired by sacred traditions, Saket Dham BACE offers a nurturing environment where youth cultivate spiritual awareness, discipline, and a purposeful life journey."
        addressLine="Saket Nagar, Bhopal, Madhya Pradesh"
        nearbyColleges={["Barkatullah University", "RGPV", "NRI Group of Institutions"]}
        howToReach="Located in Saket Nagar, this BACE center is accessible from Kolar Road and nearby academic zones with reliable local transport options."
        sliderImages={sliderImages}
        contactPhone="+91 9098765432"
        contactEmail="saketdham.bace@gmail.com"
        contactSubheading="Reach Saket Dham BACE"
        objectives={objectives}
        missionContent={missionContent}
        historyContent={defaultHistoryContent}
      />
      <div className="bg-charcoal px-6 py-8">
        <div className="mx-auto max-w-6xl">
          <NapAddress
            name="Saket Dham BACE - IYF Bhopal"
            street="Saket Nagar"
            city="Bhopal"
            state="Madhya Pradesh"
            postalCode="462024"
          />
        </div>
      </div>
    </>
  );
}

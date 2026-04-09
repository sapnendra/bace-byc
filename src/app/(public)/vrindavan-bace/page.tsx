import BaceLocationPage, {
  defaultHistoryContent,
  defaultMissionContent,
} from "@/components/bace-location/BaceLocationPage";
import BaceLocationSchema from "@/components/seo/BaceLocationSchema";
import NapAddress from "@/components/seo/NapAddress";

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
    <>
      <BaceLocationSchema
        name="Vrindavan BACE - IYF Bhopal"
        address="MANIT Chauraha, Bhopal, Madhya Pradesh"
        neighborhood="MANIT Chauraha"
        url="https://iyfbhopal.in/vrindavan-bace"
        lat={23.2238}
        lng={77.4052}
        description="Vrindavan BACE near MANIT Chauraha offers value-based hostel living and academic-focused student support in Bhopal."
      />
      <BaceLocationPage
        locationName="Vrindavan"
        locationSlug="vrindavan-bace"
        heroHeading="Vrindavan BACE - ISKCON Vedic Hostel, MANIT Chauraha, Bhopal"
        subtitle="Spiritual Learning & Youth Transformation Hub"
        description="Experience the divine atmosphere of Vrindavan through spiritual education, disciplined living, and a community focused on growth, devotion, and purpose."
        addressLine="MANIT Chauraha, Bhopal, Madhya Pradesh"
        locationNote="Ideal for students of MANIT (NIT Bhopal), RGPV, and nearby colleges."
        nearbyColleges={["MANIT (NIT Bhopal)", "RGPV", "Barkatullah University"]}
        howToReach="Situated near MANIT Chauraha, this location is well connected through major city roads and easy to reach from educational hubs in Bhopal."
        sliderImages={sliderImages}
        contactPhone="+91 9123456780"
        contactEmail="vrindavan.bace@gmail.com"
        contactSubheading="Reach Vrindavan BACE"
        objectives={objectives}
        missionContent={defaultMissionContent}
        historyContent={defaultHistoryContent}
      />
      <div className="bg-charcoal px-6 py-8">
        <div className="mx-auto max-w-6xl">
          <NapAddress
            name="Vrindavan BACE - IYF Bhopal"
            street="MANIT Chauraha"
            city="Bhopal"
            state="Madhya Pradesh"
            postalCode="462003"
          />
        </div>
      </div>
    </>
  );
}

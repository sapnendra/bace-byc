import BaceLocationPage, {
  defaultHistoryContent,
  defaultMissionContent,
} from "@/components/bace-location/BaceLocationPage";
import BaceLocationSchema from "@/components/seo/BaceLocationSchema";
import NapAddress from "@/components/seo/NapAddress";

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
    <>
      <BaceLocationSchema
        name="Bhaktivedanta BACE - IYF Bhopal"
        address="MP Nagar, Bhopal, Madhya Pradesh"
        neighborhood="MP Nagar"
        url="https://iyfbhopal.in/bhaktivedanta-bace"
        lat={23.2348}
        lng={77.4342}
        description="Bhaktivedanta BACE in MP Nagar offers spiritual learning, satvik living, and academic discipline for students in central Bhopal."
      />
      <BaceLocationPage
        locationName="Bhaktivedanta"
        locationSlug="bhaktivedanta-bace"
        heroHeading="Bhaktivedanta BACE - ISKCON Vedic Hostel, MP Nagar, Bhopal"
        subtitle="Spiritual Learning & Youth Transformation Hub"
        description="Inspired by the teachings of Srila Prabhupada, Bhaktivedanta BACE is a space where youth discover purpose, build character, and grow through spiritual wisdom, discipline, and meaningful association."
        addressLine="MP Nagar, Bhopal, Madhya Pradesh"
        nearbyColleges={["MANIT (NIT Bhopal)", "RGPV", "Barkatullah University"]}
        howToReach="In the heart of MP Nagar, this center is close to major bus corridors and is easy to access from most college zones in Bhopal."
        sliderImages={sliderImages}
        contactPhone="+91 9988776655"
        contactEmail="bhaktivedanta.bace@gmail.com"
        contactSubheading="Reach Bhaktivedanta BACE"
        objectives={objectives}
        missionContent={defaultMissionContent}
        historyContent={defaultHistoryContent}
      />
      <div className="bg-charcoal px-6 py-8">
        <div className="mx-auto max-w-6xl">
          <NapAddress
            name="Bhaktivedanta BACE - IYF Bhopal"
            street="MP Nagar"
            city="Bhopal"
            state="Madhya Pradesh"
            postalCode="462011"
          />
        </div>
      </div>
    </>
  );
}

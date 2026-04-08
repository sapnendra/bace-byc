import Hero from "@/components/home/Hero";
import SeminarsMarquee from "@/components/home/SeminarsMarquee";
import WhatIsBACE from "@/components/home/WhatIsBACE";
import WhyBACEMatters from "@/components/home/WhyBACEMatters";
import DonorLeaderboard from "@/components/home/DonorLeaderboard";
import WhatStudentsLearn from "@/components/home/WhatStudentsLearn";
import VedicHostelDifference from "@/components/home/VedicHostelDifference";
import DailyLife from "@/components/home/DailyLife";
import ParentsTrust from "@/components/home/ParentsTrust";

export default function HomePage() {
  return (
    <>
      <main>
        <Hero />
        <SeminarsMarquee />
        <WhatIsBACE />
        <WhyBACEMatters />
        <DonorLeaderboard />
        <WhatStudentsLearn />
        <VedicHostelDifference />
        <DailyLife />
        <ParentsTrust />
      </main>
    </>
  );
}

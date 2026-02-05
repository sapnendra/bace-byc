import Hero from "@/components/home/Hero";
import WhatIsBACE from "@/components/home/WhatIsBACE";
import WhyBACEMatters from "@/components/home/WhyBACEMatters";
import WhatStudentsLearn from "@/components/home/WhatStudentsLearn";
import VedicHostelDifference from "@/components/home/VedicHostelDifference";
import DailyLife from "@/components/home/DailyLife";
import ParentsTrust from "@/components/home/ParentsTrust";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <WhatIsBACE />
        <WhyBACEMatters />
        <WhatStudentsLearn />
        <VedicHostelDifference />
        <DailyLife />
        <ParentsTrust />
      </main>
      <Footer />
    </>
  );
}

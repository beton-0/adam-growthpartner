import HomeHero from "@/components/home/HomeHero";
import TrustStrip from "@/components/home/TrustStrip";
import IntroStatement from "@/components/home/IntroStatement";
import DlaKogoCards from "@/components/home/DlaKogoCards";
import ServicesTeaser from "@/components/home/ServicesTeaser";
import Testimonial from "@/components/home/Testimonial";
import WynikiTeaser from "@/components/home/WynikiTeaser";
import AboutBlock from "@/components/home/AboutBlock";
import HomeFaq from "@/components/home/HomeFaq";
import CtaBlock from "@/components/home/CtaBlock";

export default function Home() {
  return (
    <>
      <HomeHero />
      <TrustStrip />
      <IntroStatement />
      <DlaKogoCards />
      <ServicesTeaser />
      <Testimonial />
      <WynikiTeaser />
      <AboutBlock />
      <HomeFaq />
      <CtaBlock />
    </>
  );
}

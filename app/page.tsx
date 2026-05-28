import HomeHero from "@/components/home/HomeHero";
import ProofBar from "@/components/home/ProofBar";
import GrowthOSModules from "@/components/home/GrowthOSModules";
import NotificationTiles from "@/components/home/NotificationTiles";
import CaseHighlight from "@/components/home/CaseHighlight";
import CtaWithQuote from "@/components/home/CtaWithQuote";
import PageJump from "@/components/PageJump";

export default function Home() {
  return (
    <>
      <HomeHero />
      <ProofBar />
      <GrowthOSModules />
      <NotificationTiles />
      <CaseHighlight />
      <CtaWithQuote />
      <PageJump
        number="02"
        label="Usługi"
        href="/uslugi"
        variant="dark"
        subtitle="Cztery klocki, jeden system. Acquisition, content, sales, retention — wszystko, co składa się na GrowthOS™."
      />
    </>
  );
}

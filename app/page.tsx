import HomeHero from "@/components/home/HomeHero";
import ProofBar from "@/components/home/ProofBar";
import GrowthOSModules from "@/components/home/GrowthOSModules";
import CaseHighlight from "@/components/home/CaseHighlight";
import CtaWithQuote from "@/components/home/CtaWithQuote";

export default function Home() {
  return (
    <>
      <HomeHero />
      <ProofBar />
      <GrowthOSModules />
      <CaseHighlight />
      <CtaWithQuote />
    </>
  );
}

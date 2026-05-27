import HomeHero from "@/components/home/HomeHero";
import ProofBar from "@/components/home/ProofBar";
import GrowthOSModules from "@/components/home/GrowthOSModules";
import NotificationTiles from "@/components/home/NotificationTiles";
import CaseHighlight from "@/components/home/CaseHighlight";
import CtaWithQuote from "@/components/home/CtaWithQuote";
import ScrollFade from "@/components/ScrollFade";

export default function Home() {
  return (
    <>
      <HomeHero />
      <ScrollFade>
        <ProofBar />
      </ScrollFade>
      <ScrollFade>
        <GrowthOSModules />
      </ScrollFade>
      <ScrollFade>
        <NotificationTiles />
      </ScrollFade>
      <ScrollFade>
        <CaseHighlight />
      </ScrollFade>
      <ScrollFade>
        <CtaWithQuote />
      </ScrollFade>
    </>
  );
}

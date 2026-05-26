import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import DlaKogo from "@/components/DlaKogo";
import Uslugi from "@/components/Uslugi";
import Proces from "@/components/Proces";
import Wyniki from "@/components/Wyniki";
import Opinie from "@/components/Opinie";
import About from "@/components/About";
import Faq from "@/components/Faq";
import Kontakt from "@/components/Kontakt";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative">
      <Nav />
      <Hero />
      <Marquee />
      <DlaKogo />
      <Uslugi />
      <Proces />
      <Wyniki />
      <Opinie />
      <About />
      <Faq />
      <Kontakt />
      <Footer />
    </main>
  );
}

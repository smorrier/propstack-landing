import { About } from "@/components/About";
import { CtaSection } from "@/components/CtaSection";
import { Features } from "@/components/Features";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { HowItWorks } from "@/components/HowItWorks";
import { Nav } from "@/components/Nav";
import { Pricing } from "@/components/Pricing";
import { RentOptimization } from "@/components/RentOptimization";
import { StatsBar } from "@/components/StatsBar";
import { Strategies } from "@/components/Strategies";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <StatsBar />
        <Features />
        <RentOptimization />
        <Strategies />
        <HowItWorks />
        <Pricing />
        <About />
        <CtaSection />
      </main>
      <Footer />
    </>
  );
}

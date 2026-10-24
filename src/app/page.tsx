import type { Metadata } from "next";
import { About } from "@/components/About";
import { ContactSection } from "@/components/ContactSection";
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
import { homeJsonLd, serializeJsonLd } from "@/lib/schema";

const title = "Rental Property Analysis Calculator for Canada | PropStack";
const description =
  "Analyze Canadian rental properties in minutes. Compare buy-and-hold, flip and BRRRR returns, model rent upside and track your portfolio. Start free today.";

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: { canonical: "/" },
  openGraph: { title, description, url: "/", type: "website", siteName: "PropStack", locale: "en_CA" },
  twitter: { card: "summary_large_image", title, description },
};

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serializeJsonLd(homeJsonLd()) }} />
        <Hero />
        <StatsBar />
        <Features />
        <RentOptimization />
        <Strategies />
        <HowItWorks />
        <Pricing />
        <About />
        <ContactSection />
        <CtaSection />
      </main>
      <Footer />
    </>
  );
}

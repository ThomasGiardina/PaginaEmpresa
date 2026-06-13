import { Hero } from "@/components/sections/Hero";
import { LogoStrip } from "@/components/sections/LogoStrip";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { ProblemPanel } from "@/components/sections/ProblemPanel";
import { PortfolioPreview } from "@/components/sections/PortfolioPreview";
import { AboutSection } from "@/components/sections/AboutSection";
import { FinalCta } from "@/components/sections/FinalCta";
import { ContactSection } from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <>
      <Hero />
      <LogoStrip />
      <ServicesSection />
      <ProblemPanel />
      <PortfolioPreview />
      <AboutSection />
      <FinalCta />
      <ContactSection />
    </>
  );
}

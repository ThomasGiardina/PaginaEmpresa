import { Hero } from "@/components/sections/Hero";
import { LogoStrip } from "@/components/sections/LogoStrip";
import { AboutSection } from "@/components/sections/AboutSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { ProblemPanel } from "@/components/sections/ProblemPanel";
import { PortfolioPreview } from "@/components/sections/PortfolioPreview";
import { SuccessStories } from "@/components/sections/SuccessStories";
import { StatsSection } from "@/components/sections/StatsSection";
import { ContactSection } from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <>
      <Hero />
      <LogoStrip />
      <AboutSection />
      <ServicesSection />
      <ProblemPanel />
      <PortfolioPreview />
      <SuccessStories />
      <StatsSection />
      <ContactSection />
    </>
  );
}

import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import AboutSection from "@/components/about-section";
import EducationSection from "@/components/education-section";
import ResearchSection from "@/components/research-section";
import PublicationsSection from "@/components/publications-section";
import PatentsSection from "@/components/patents-section";
import SkillsSection from "@/components/skills-section";
import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <EducationSection />
      <ResearchSection />
      <PublicationsSection />
      <PatentsSection />
      <SkillsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

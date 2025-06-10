import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import PricingSection from "@/components/PricingSection";
import MethodologySection from "@/components/MethodologySection";
import TestimonialsSection from "@/components/TestimonialsSection";
import LessonsSection from "@/components/LessonsSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <AboutSection />
      <MethodologySection />
      <PricingSection />
      <TestimonialsSection />
      <LessonsSection />
      <ContactSection />
    </div>
  );
};

export default Index;

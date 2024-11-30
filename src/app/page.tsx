import BenefitsSection from "@/components/core/benefit-section";
import DemoSection from "@/components/core/demo-section";
import FAQSection from "@/components/core/faq-section";
import FeaturesSection from "@/components/core/features-section";
import HeroSection from "@/components/core/hero-section";
import HowItWorksSection from "@/components/core/how-it-work";
import TestimonialsSection from "@/components/core/testimonial-section";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen w-screen">
      <HeroSection />
      <FeaturesSection />
      <TestimonialsSection />
      <HowItWorksSection />
      <DemoSection />
      <BenefitsSection />
      <FAQSection />
    </div>
  );
}

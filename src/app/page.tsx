import AboutSection from "@/components/pages/home/About";
import HeroSection from "@/components/pages/home/HeroSection";
import CoursesSection from "@/components/pages/home/CoursesSection";
import { ServiceSection } from "@/components/pages/home/ServiceSection";
import { SubscribeSection } from "@/components/pages/home/SubscribeSection";
import { TestimonialSection } from "@/components/pages/home/TestimonialSection";

export default function Home() {
  return (
    <div>
      <HeroSection />

      <AboutSection />

      <ServiceSection />
      <CoursesSection />
      <TestimonialSection />
      <SubscribeSection />
    </div>
  );
}
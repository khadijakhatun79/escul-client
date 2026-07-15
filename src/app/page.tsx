import AboutSection from "@/components/pages/home/About";
import HeroSection from "@/components/pages/home/HeroSection";
import CoursesSection from "@/components/pages/home/CoursesSection";
import { ServiceSection } from "@/components/pages/home/ServiceSection";
import { SubscribeSection } from "@/components/pages/home/SubscribeSection";
import Counter from "@/components/pages/home/Counter";
import { TestimonialSection } from "@/components/pages/home/TestimonialSection";

export default function Home() {
  return (
    <div>
      <HeroSection />
      
      <ServiceSection />
      <AboutSection />

      <CoursesSection /> 
      <Counter></Counter>
      <TestimonialSection />
      <SubscribeSection />
    </div>
  );
}
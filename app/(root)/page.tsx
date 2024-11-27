import HeroSection from "../(root)/sections/hero-section";
import FeaturesWorkSection from "../(root)/sections/featured-work-section";
import TestimonialsSection from "./sections/testimonials-section";
import VenturesSection from "./sections/ventures-section";
import BlogSection from "./sections/blog-section";

export default function Home() {
  return (
    <>
      <HeroSection />
      <FeaturesWorkSection />
      <TestimonialsSection />
      <VenturesSection />
      <BlogSection />
    </>
  );
}

import MomentoHero from "@/components/home/MomentoHero";
import TestimonialSection from "@/components/home/TestimonialSection";
import ProductGallery from "@/components/home/ProductGallery";
import MomentoBranding from "@/components/home/MomentoBranding";

export default function MomentoHomePage() {
  return (
    <div className="min-h-screen bg-white">
      <MomentoHero />
      <TestimonialSection />
      <ProductGallery />
      <MomentoBranding />
    </div>
  );
}

import NavbarEN from "@/components/NavbarEN";
import BackToTop from "@/components/BackToTop";
import WhatsAppButton from "@/components/WhatsAppButton";
import HeroEN from "@/components/sections/en/Hero";
import HotProductsEN from "@/components/sections/en/HotProducts";
import ProjectsEN from "@/components/sections/en/Projects";
import AboutEN from "@/components/sections/en/About";
import ServicesEN from "@/components/sections/en/Services";
import PricingEN from "@/components/sections/en/Pricing";
import PrinciplesEN from "@/components/sections/en/Principles";
import TestimonialsEN from "@/components/sections/en/Testimonials";
import FAQEN from "@/components/sections/en/FAQ";
import ContactEN from "@/components/sections/en/Contact";
import FooterEN from "@/components/sections/en/Footer";

export default function HomeEN() {
  return (
    <main className="min-h-screen bg-[#0A192F] overflow-x-hidden w-full max-w-[100vw]">
      <NavbarEN />
      <HeroEN />
      <HotProductsEN />
      <ProjectsEN />
      <AboutEN />
      <ServicesEN />
      <PricingEN />
      <PrinciplesEN />
      <TestimonialsEN />
      <FAQEN />
      <ContactEN />
      <FooterEN />
      <WhatsAppButton />
      <BackToTop />
    </main>
  );
}

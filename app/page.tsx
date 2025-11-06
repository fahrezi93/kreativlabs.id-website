import Navbar from "@/components/Navbar";
import BackToTop from "@/components/BackToTop";
import WhatsAppButton from "@/components/WhatsAppButton";
import Hero from "@/components/sections/Hero";
import Projects from "@/components/sections/Projects";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import Pricing from "@/components/sections/Pricing";
import Principles from "@/components/sections/Principles";
import Testimonials from "@/components/sections/Testimonials";
import FAQ from "@/components/sections/FAQ";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0A192F]">
      <Navbar />
      <Hero />
      <Projects />
      <About />
      <Services />
      <Pricing />
      <Principles />
      <Testimonials />
      <FAQ />
      <Contact />
      <Footer />
      <WhatsAppButton />
      <BackToTop />
    </main>
  );
}

"use client";

import { Card } from "@/components/ui/card";
import { Code, Palette, Image, Package, Instagram, FileText } from "lucide-react";
import OptimizedParticles from "@/components/OptimizedParticles";
import AnimatedSection from "@/components/AnimatedSection";
import FadeInStagger from "@/components/FadeInStagger";

const services = [
  {
    icon: Code,
    title: "Website Development",
    description: "Pembuatan website profesional dengan teknologi modern dan performa optimal",
    features: ["Landing Page", "Company Profile", "E-Commerce", "Responsive & SEO"],
  },
  {
    icon: Palette,
    title: "Desain Logo & Branding",
    description: "Ciptakan identitas brand yang kuat dan memorable untuk bisnis Anda",
    features: ["Logo Design", "Brand Identity", "Style Guide", "Business Card"],
  },
  {
    icon: Instagram,
    title: "Desain Konten Sosmed",
    description: "Konten visual menarik untuk meningkatkan engagement media sosial",
    features: ["Instagram Post", "Story Design", "Carousel", "Feed Planning"],
  },
  {
    icon: FileText,
    title: "Desain Flyer & Poster",
    description: "Desain promosi yang eye-catching untuk campaign marketing Anda",
    features: ["Event Flyer", "Promotional Poster", "Banner Design", "Print Ready"],
  },
  {
    icon: Package,
    title: "Desain Kemasan Produk",
    description: "Packaging design yang menarik untuk meningkatkan daya jual produk",
    features: ["Product Packaging", "Label Design", "Box Design", "3D Mockup"],
  },
  {
    icon: Image,
    title: "Desain Grafis Lainnya",
    description: "Berbagai kebutuhan desain grafis untuk bisnis dan personal",
    features: ["Brosur", "Katalog", "Menu Design", "Certificate"],
  },
];

export default function Services() {
  return (
    <section id="services" className="relative py-24 bg-[#0A192F] overflow-hidden overflow-x-hidden w-full">
      {/* Lighting Effects */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-[#3B82F6] rounded-full blur-[120px] opacity-10"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#3B82F6] rounded-full blur-[120px] opacity-10"></div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <AnimatedSection animation="fade-up">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Layanan <span className="text-[#3B82F6]">Kami</span>
            </h2>
            <p className="text-white/70 text-lg max-w-2xl mx-auto">
              Solusi lengkap Website Development & Graphic Design untuk kebutuhan bisnis Anda
            </p>
          </div>
        </AnimatedSection>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <FadeInStagger key={index} index={index} delay={80}>
                <Card
                  className="group bg-[#0F1E37] border-white/10 hover:border-[#3B82F6]/50 transition-all duration-300 p-6 hover:transform hover:-translate-y-2"
                >
                {/* Icon */}
                <div className="mb-4">
                  <div className="inline-flex items-center justify-center w-14 h-14 bg-[#3B82F6]/10 rounded-lg group-hover:bg-[#3B82F6]/20 transition-colors">
                    <Icon className="w-7 h-7 text-[#3B82F6]" />
                  </div>
                </div>

                {/* Title & Description */}
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#3B82F6] transition-colors">
                  {service.title}
                </h3>
                <p className="text-white/70 text-sm mb-4 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-white/60 text-sm">
                      <div className="w-1.5 h-1.5 bg-[#3B82F6] rounded-full mr-2"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                </Card>
              </FadeInStagger>
            );
          })}
        </div>
      </div>
      
      {/* Interactive Particles - Desktop Only */}
      <OptimizedParticles quantity={50} />
    </section>
  );
}

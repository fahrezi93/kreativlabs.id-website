"use client";

import { Card } from "@/components/ui/card";
import { Code, Palette, Megaphone, Smartphone, Globe, Zap, ShoppingCart, Search, Rocket } from "lucide-react";
import OptimizedParticles from "@/components/OptimizedParticles";

const services = [
  {
    icon: Code,
    title: "Web Development",
    description: "Pembuatan website custom dengan teknologi terkini dan performa optimal",
    features: ["Next.js & React", "Responsive Design", "Fast Loading", "SEO Optimized"],
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Desain interface yang menarik, intuitif, dan user-friendly",
    features: ["Modern Design", "User Research", "Prototyping", "Design System"],
  },
  {
    icon: Smartphone,
    title: "Mobile App Design",
    description: "Desain aplikasi mobile yang engaging dan mudah digunakan",
    features: ["iOS & Android", "Interactive Design", "App Prototype", "User Testing"],
  },
  {
    icon: ShoppingCart,
    title: "E-Commerce",
    description: "Solusi toko online lengkap dengan sistem pembayaran terintegrasi",
    features: ["Product Management", "Payment Gateway", "Inventory System", "Analytics"],
  },
  {
    icon: Search,
    title: "SEO Optimization",
    description: "Optimasi website untuk meningkatkan ranking di mesin pencari",
    features: ["Keyword Research", "On-Page SEO", "Technical SEO", "Performance"],
  },
  {
    icon: Rocket,
    title: "Digital Marketing",
    description: "Strategi marketing digital untuk meningkatkan brand awareness",
    features: ["Social Media", "Content Strategy", "Ad Campaign", "Analytics"],
  },
];

export default function Services() {
  return (
    <section id="services" className="relative py-24 bg-[#0A192F] overflow-hidden">
      {/* Lighting Effects */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-[#3B82F6] rounded-full blur-[120px] opacity-10"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#3B82F6] rounded-full blur-[120px] opacity-10"></div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our <span className="text-[#3B82F6]">Services</span>
          </h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Layanan profesional yang kami tawarkan untuk mengembangkan bisnis digital Anda
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card
                key={index}
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
            );
          })}
        </div>
      </div>
      
      {/* Interactive Particles - Desktop Only */}
      <OptimizedParticles quantity={50} />
    </section>
  );
}

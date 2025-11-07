"use client";

import { Users, Target, Award, Code2, Palette, Zap } from "lucide-react";
import OptimizedParticles from "@/components/OptimizedParticles";
import AnimatedSection from "@/components/AnimatedSection";
import Image from "next/image";

const stats = [
  {
    icon: Users,
    value: "10+",
    label: "Klien Puas",
  },
  {
    icon: Target,
    value: "10+",
    label: "Proyek Selesai",
  },
  {
    icon: Award,
    value: "2+",
    label: "Pengalaman Bulan",
  },
];

export default function About() {
  return (
    <section id="about" className="relative py-24 bg-[#0A192F] overflow-hidden overflow-x-hidden w-full">
      {/* Lighting Effect */}
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#3B82F6] rounded-full blur-[120px] opacity-10"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <AnimatedSection animation="fade-right">
              <div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Tentang <span className="text-[#3B82F6]">Kami</span>
              </h2>
              <p className="text-white/70 text-lg mb-6 leading-relaxed">
                KreativLabs.id adalah agensi digital yang berfokus pada pembuatan website dan design yang modern, minimalis, dan profesional.
              </p>
              <p className="text-white/70 text-lg mb-8 leading-relaxed">
                Kami berkomitmen untuk memberikan solusi digital terbaik yang tidak hanya terlihat menarik, tetapi juga fungsional dan menghasilkan konversi tinggi untuk bisnis Anda.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6">
                {stats.map((stat, index) => {
                  const Icon = stat.icon;
                  return (
                    <div key={index} className="text-center">
                      <div className="inline-flex items-center justify-center w-12 h-12 bg-[#3B82F6]/10 rounded-lg mb-3">
                        <Icon className="w-6 h-6 text-[#3B82F6]" />
                      </div>
                      <div className="text-2xl font-bold text-white mb-1">
                        {stat.value}
                      </div>
                      <div className="text-white/60 text-sm">
                        {stat.label}
                      </div>
                    </div>
                  );
                })}
              </div>
              </div>
            </AnimatedSection>

            {/* Right Content - Visual Element */}
            <AnimatedSection animation="fade-left" delay={200}>
              <div className="relative">
                <div className="relative aspect-square max-w-md mx-auto">
                  {/* Decorative Circles */}
                  <div className="absolute inset-0 border-2 border-[#3B82F6]/20 rounded-full animate-pulse"></div>
                  <div className="absolute inset-4 border-2 border-[#3B82F6]/30 rounded-full"></div>
                  
                  {/* Main Image Container */}
                  <div className="absolute inset-8 rounded-full overflow-hidden border-4 border-[#3B82F6]/40 shadow-2xl shadow-[#3B82F6]/20">
                    <Image
                      src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=800&fit=crop&q=80"
                      alt="KreativLabs Team"
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 400px"
                      loading="lazy"
                    />
                    {/* Overlay Gradient */}
                    <div className="absolute inset-0 bg-linear-to-br from-[#3B82F6]/20 via-transparent to-[#0A192F]/40"></div>
                  </div>

                  {/* Floating Icon Cards */}
                  <div className="absolute -top-4 -right-4 w-20 h-20 bg-[#0F1E37] rounded-2xl border-2 border-[#3B82F6]/40 flex items-center justify-center shadow-xl shadow-[#3B82F6]/20 animate-bounce" style={{animationDuration: '3s'}}>
                    <Code2 className="w-10 h-10 text-[#3B82F6]" />
                  </div>
                  
                  <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-[#0F1E37] rounded-2xl border-2 border-[#3B82F6]/40 flex items-center justify-center shadow-xl shadow-[#3B82F6]/20 animate-bounce" style={{animationDuration: '3.5s', animationDelay: '0.5s'}}>
                    <Palette className="w-10 h-10 text-[#3B82F6]" />
                  </div>
                  
                  <div className="absolute top-1/2 -translate-y-1/2 -right-6 w-16 h-16 bg-[#0F1E37] rounded-xl border-2 border-[#3B82F6]/40 flex items-center justify-center shadow-xl shadow-[#3B82F6]/20 animate-bounce" style={{animationDuration: '4s', animationDelay: '1s'}}>
                    <Zap className="w-8 h-8 text-[#3B82F6]" />
                  </div>

                  {/* Glow Effect */}
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className="w-48 h-48 bg-[#3B82F6] rounded-full blur-3xl opacity-20"></div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
      
      {/* Interactive Particles - Desktop Only */}
      <OptimizedParticles quantity={50} />
    </section>
  );
}

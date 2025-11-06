"use client";

import { Users, Target, Award, TrendingUp } from "lucide-react";
import OptimizedParticles from "@/components/OptimizedParticles";

const stats = [
  {
    icon: Users,
    value: "50+",
    label: "Happy Clients",
  },
  {
    icon: Target,
    value: "100+",
    label: "Projects Done",
  },
  {
    icon: Award,
    value: "5+",
    label: "Years Experience",
  },
];

export default function About() {
  return (
    <section id="about" className="relative py-24 bg-[#0A192F] overflow-hidden">
      {/* Lighting Effect */}
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#3B82F6] rounded-full blur-[120px] opacity-10"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                About <span className="text-[#3B82F6]">Us</span>
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

            {/* Right Content - Visual Element */}
            <div className="relative">
              <div className="relative aspect-square">
                {/* Main Circle */}
                <div className="absolute inset-0 border-2 border-[#3B82F6]/20 rounded-full"></div>
                <div className="absolute inset-8 border-2 border-[#3B82F6]/30 rounded-full"></div>
                <div className="absolute inset-16 border-2 border-[#3B82F6]/40 rounded-full"></div>
                
                {/* Center Glow */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-32 h-32 bg-[#3B82F6] rounded-full blur-2xl opacity-30"></div>
                </div>

                {/* Floating Elements */}
                <div className="absolute top-1/4 right-0 w-16 h-16 bg-[#3B82F6]/20 rounded-lg backdrop-blur-sm border border-[#3B82F6]/30 flex items-center justify-center">
                  <div className="w-8 h-8 bg-[#3B82F6] rounded-md"></div>
                </div>
                <div className="absolute bottom-1/4 left-0 w-16 h-16 bg-[#3B82F6]/20 rounded-lg backdrop-blur-sm border border-[#3B82F6]/30 flex items-center justify-center">
                  <div className="w-8 h-8 bg-[#3B82F6] rounded-md"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Interactive Particles - Desktop Only */}
      <OptimizedParticles quantity={50} />
    </section>
  );
}

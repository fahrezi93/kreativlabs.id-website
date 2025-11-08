"use client";

import { Zap, Shield, Heart, TrendingUp } from "lucide-react";
import { Particles } from "@/components/ui/shadcn-io/particles";
import { useIsMobile } from "@/hooks/useIsMobile";
import AnimatedSection from "@/components/AnimatedSection";
import FadeInStagger from "@/components/FadeInStagger";

const principles = [
  {
    icon: Zap,
    title: "Fast & Efficient",
    description: "We prioritize speed and efficiency in every project we undertake",
  },
  {
    icon: Shield,
    title: "Quality First",
    description: "Quality is our top priority in producing digital products",
  },
  {
    icon: Heart,
    title: "Client Satisfaction",
    description: "Client satisfaction is our goal, with transparent communication",
  },
  {
    icon: TrendingUp,
    title: "Continuous Innovation",
    description: "Always following the latest technology developments for optimal results",
  },
];

export default function PrinciplesEN() {
  const isMobile = useIsMobile();
  
  return (
    <section className="relative py-24 bg-[#0A192F] overflow-hidden overflow-x-hidden w-full">
      {/* Lighting Effects */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-[#3B82F6] rounded-full blur-[120px] opacity-10"></div>
      
      {/* Particles - Desktop Only */}
      {!isMobile && (
        <Particles
          className="absolute inset-0"
          quantity={80}
          ease={80}
          staticity={50}
          color="#FFFFFF"
          size={0.6}
        />
      )}

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <AnimatedSection animation="fade-up">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Engineering <span className="text-[#3B82F6]">Principles</span>
            </h2>
            <p className="text-white/70 text-lg max-w-2xl mx-auto">
              The principles we uphold in every project
            </p>
          </div>
        </AnimatedSection>

        {/* Principles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {principles.map((principle, index) => {
            const Icon = principle.icon;
            return (
              <FadeInStagger key={index} index={index} delay={100}>
                <div className="group text-center">
                {/* Icon Container */}
                <div className="relative mb-6 inline-block">
                  {/* Glow Effect */}
                  <div className="absolute inset-0 bg-[#3B82F6] rounded-full blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
                  
                  {/* Icon */}
                  <div className="relative w-20 h-20 bg-[#0F1E37] border-2 border-[#3B82F6]/30 rounded-full flex items-center justify-center group-hover:border-[#3B82F6] transition-all duration-300">
                    <Icon className="w-10 h-10 text-[#3B82F6]" />
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#3B82F6] transition-colors">
                  {principle.title}
                </h3>

                {/* Description */}
                <p className="text-white/70 text-sm leading-relaxed">
                  {principle.description}
                </p>
                </div>
              </FadeInStagger>
            );
          })}
        </div>

        {/* Bottom Divider */}
        <div className="mt-16 flex items-center justify-center">
          <div className="h-px w-32 bg-linear-to-r from-transparent via-[#3B82F6] to-transparent"></div>
        </div>
      </div>
    </section>
  );
}

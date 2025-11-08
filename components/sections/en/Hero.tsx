"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Code2, Palette } from "lucide-react";
import { Particles } from "@/components/ui/shadcn-io/particles";
import { BackgroundBeams } from "@/components/ui/shadcn-io/background-beams";
import { useIsMobile } from "@/hooks/useIsMobile";
import FadeInStagger from "@/components/FadeInStagger";
import AnimatedSection from "@/components/AnimatedSection";

export default function HeroEN() {
  const isMobile = useIsMobile();
  
  return (
    <section className="relative min-h-[85vh] pt-20 bg-[#0A192F] overflow-hidden">
      {/* Background Beams - Desktop Only */}
      {!isMobile && <BackgroundBeams className="absolute inset-0" />}
      
      {/* Gradient overlay for better text readability */}
      <div className="absolute inset-0 bg-linear-to-b from-[#0A192F]/50 via-transparent to-[#0A192F]/80 pointer-events-none" />
      
      <div className="relative z-10 container mx-auto px-6 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            {/* Badge */}
            <AnimatedSection animation="fade-up" duration={800}>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#3B82F6]/10 border border-[#3B82F6]/20 rounded-full mb-6 backdrop-blur-sm">
                <Sparkles className="w-3.5 h-3.5 text-[#3B82F6]" />
                <span className="text-xs text-white/90 font-medium whitespace-nowrap">
                  Professional Website & Graphic Design
                </span>
              </div>
            </AnimatedSection>

            {/* Main Heading */}
            <AnimatedSection animation="fade-up" delay={150} duration={800}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
                Website & Graphic Design
                <br />
                <span className="relative inline-block">
                  <span className="text-[#3B82F6]">For Your Business</span>
                  <svg className="absolute -bottom-1 left-0 w-full" height="8" viewBox="0 0 300 8" fill="none">
                    <path d="M1 6C50 2 100 1 150 2C200 3 250 4 299 6" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </span>
              </h1>
            </AnimatedSection>

            {/* Subheading */}
            <AnimatedSection animation="fade-up" delay={300} duration={800}>
              <p className="text-base md:text-lg text-white/70 mb-8 max-w-2xl mx-auto leading-relaxed">
                Professional website development and graphic design services (logo, poster, social media, packaging) at affordable prices starting from $10!
              </p>
            </AnimatedSection>

            {/* CTA Buttons */}
            <AnimatedSection animation="fade-up" delay={450} duration={800}>
              <div className="flex flex-col sm:flex-row gap-3 justify-center items-center mb-12">
                <Button 
                  asChild
                  className="bg-[#3B82F6] hover:bg-[#3B82F6]/90 text-white px-6 py-5 text-base rounded-full group shadow-lg shadow-[#3B82F6]/30 hover:shadow-xl hover:shadow-[#3B82F6]/40 transition-all"
                >
                  <a href="#contact">
                    Start Free Consultation
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </Button>
                <Button 
                  asChild
                  variant="outline" 
                  className="border-white/20 text-white hover:bg-white/10 px-6 py-5 text-base rounded-full backdrop-blur-sm"
                >
                  <a href="#projects">View Portfolio</a>
                </Button>
              </div>
            </AnimatedSection>

            {/* Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {/* Feature 1 */}
              <FadeInStagger index={0} delay={200}>
                <div className="group relative bg-[#0F1E37]/50 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-[#0F1E37]/80 hover:border-[#3B82F6]/50 transition-all duration-300 hover:-translate-y-1">
                  <div className="absolute inset-0 bg-linear-to-br from-[#3B82F6]/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <div className="relative flex flex-col items-center text-center">
                    <div className="w-14 h-14 bg-[#3B82F6]/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-[#3B82F6]/20 group-hover:scale-110 transition-all duration-300">
                      <Code2 className="w-7 h-7 text-[#3B82F6]" />
                    </div>
                    <h3 className="text-white font-bold text-base mb-2 group-hover:text-[#3B82F6] transition-colors">Modern Development</h3>
                    <p className="text-white/70 text-sm leading-relaxed">Latest technology for optimal performance</p>
                  </div>
                </div>
              </FadeInStagger>

              {/* Feature 2 */}
              <FadeInStagger index={1} delay={200}>
                <div className="group relative bg-[#0F1E37]/50 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-[#0F1E37]/80 hover:border-[#3B82F6]/50 transition-all duration-300 hover:-translate-y-1">
                  <div className="absolute inset-0 bg-linear-to-br from-[#3B82F6]/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <div className="relative flex flex-col items-center text-center">
                    <div className="w-14 h-14 bg-[#3B82F6]/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-[#3B82F6]/20 group-hover:scale-110 transition-all duration-300">
                      <Palette className="w-7 h-7 text-[#3B82F6]" />
                    </div>
                    <h3 className="text-white font-bold text-base mb-2 group-hover:text-[#3B82F6] transition-colors">Attractive Design</h3>
                    <p className="text-white/70 text-sm leading-relaxed">Eye-catching and professional graphic design</p>
                  </div>
                </div>
              </FadeInStagger>

              {/* Feature 3 */}
              <FadeInStagger index={2} delay={200}>
                <div className="group relative bg-[#0F1E37]/50 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-[#0F1E37]/80 hover:border-[#3B82F6]/50 transition-all duration-300 hover:-translate-y-1">
                  <div className="absolute inset-0 bg-linear-to-br from-[#3B82F6]/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <div className="relative flex flex-col items-center text-center">
                    <div className="w-14 h-14 bg-[#3B82F6]/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-[#3B82F6]/20 group-hover:scale-110 transition-all duration-300">
                      <Sparkles className="w-7 h-7 text-[#3B82F6]" />
                    </div>
                    <h3 className="text-white font-bold text-base mb-2 group-hover:text-[#3B82F6] transition-colors">Fast Delivery</h3>
                    <p className="text-white/70 text-sm leading-relaxed">Quick turnaround without compromising quality</p>
                  </div>
                </div>
              </FadeInStagger>
            </div>
          </div>

          {/* Scroll Indicator - Desktop Only */}
          {!isMobile && (
            <div className="text-center mt-16">
              <p className="text-white/40 text-sm mb-4 animate-pulse">Scroll to see more</p>
              <div className="w-6 h-10 border-2 border-white/20 rounded-full mx-auto flex items-start justify-center p-2">
                <div className="w-1.5 h-3 bg-[#3B82F6] rounded-full animate-bounce"></div>
              </div>
            </div>
          )}
        </div>
      </div>
      
      {/* Interactive Particles - Desktop Only */}
      {!isMobile && (
        <Particles
          className="absolute inset-0"
          quantity={100}
          ease={80}
          staticity={50}
          color="#FFFFFF"
          size={0.8}
        />
      )}
    </section>
  );
}

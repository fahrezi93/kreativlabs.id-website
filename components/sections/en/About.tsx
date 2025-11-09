"use client";

import OptimizedParticles from "@/components/OptimizedParticles";
import AnimatedSection from "@/components/AnimatedSection";

export default function AboutEN() {
  return (
    <section id="about" className="relative py-24 bg-[#0A192F] overflow-hidden overflow-x-hidden w-full">
      {/* Lighting Effect */}
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#3B82F6] rounded-full blur-[120px] opacity-10"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <AnimatedSection animation="fade-right">
              <div className="relative">
                {/* Decorative Background Elements */}
                <div className="absolute -top-20 -left-20 w-64 h-64 bg-[#3B82F6]/5 rounded-full blur-3xl"></div>
                <div className="absolute top-40 -right-10 w-40 h-40 bg-[#3B82F6]/10 rounded-full blur-2xl"></div>
                
                <div className="relative space-y-6">

                  {/* Main Heading with gradient accent */}
                  <div className="space-y-3">
                    <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                      <span className="text-white">About</span>
                      <br />
                      <span className="bg-gradient-to-r from-[#3B82F6] to-[#60A5FA] bg-clip-text text-transparent">
                        KreativLabs
                      </span>
                    </h2>
                    <div className="h-1 w-20 bg-gradient-to-r from-[#3B82F6] to-transparent rounded-full"></div>
                  </div>

                  {/* Image Section */}
                  <div className="relative pt-4">
                    <div className="relative aspect-[3/2] max-w-lg rounded-2xl overflow-hidden border-2 border-[#3B82F6]/30 shadow-2xl shadow-[#3B82F6]/20">
                      <img
                        src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop&q=80"
                        alt="KreativLabs Team"
                        className="w-full h-full object-cover"
                      />
                      {/* Overlay Gradient */}
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0A192F]/60 via-transparent to-transparent"></div>
                    </div>
                  </div>

                  {/* Additional decorative element */}
                  <div className="flex items-center gap-3 pt-4">
                    <div className="flex gap-2">
                      <div className="w-2 h-2 rounded-full bg-[#3B82F6] animate-pulse"></div>
                      <div className="w-2 h-2 rounded-full bg-[#3B82F6]/60 animate-pulse" style={{animationDelay: '0.2s'}}></div>
                      <div className="w-2 h-2 rounded-full bg-[#3B82F6]/30 animate-pulse" style={{animationDelay: '0.4s'}}></div>
                    </div>
                    <span className="text-white/40 text-xs font-medium">Trusted Digital Partner</span>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            {/* Right Content - Description */}
            <AnimatedSection animation="fade-left" delay={200}>
              <div className="space-y-6">
                {/* Founded Info */}
                <div className="space-y-4">
                  <p className="text-white/80 text-base leading-relaxed">
                    Founded in <span className="text-white font-semibold">2023</span>, KreativLabs.id emerged with a vision to become a <span className="text-white font-semibold">trusted digital partner</span> that empowers businesses in Indonesia to grow and excel through innovative and results-oriented technology solutions.
                  </p>
                </div>

                {/* Premium Solutions */}
                <div className="space-y-4">
                  <p className="text-white/80 text-base leading-relaxed">
                    We develop custom <span className="text-white font-semibold">websites, mobile applications, and e-commerce platforms</span> with the highest coding standards, optimal performance with <span className="text-white font-semibold">Fast Loading</span>, and cutting-edge security that delivers premium digital experiences for your business.
                  </p>
                </div>

                {/* UX & Partnership */}
                <div className="space-y-4">
                  <p className="text-white/80 text-base leading-relaxed">
                    By implementing <span className="text-white font-semibold">intuitive, modern, and minimalist UI/UX design</span>, we maximize user engagement and drive conversions. We build transparent, communicative, and efficient workflows with <span className="text-white font-semibold">Fast Delivery</span>, positioning clients as part of the team.
                  </p>
                </div>

                {/* Impact & Innovation */}
                <div className="space-y-4">
                  <p className="text-white/80 text-base leading-relaxed">
                    We implement <span className="text-white font-semibold">SEO strategies and digital best practices</span> to ensure every solution delivers measurable results for client business growth. Consistently adopting the latest technologies and developing team expertise to provide relevant and <span className="text-white font-semibold">future-proof</span> solutions.
                  </p>
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

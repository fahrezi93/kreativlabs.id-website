"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import OptimizedParticles from "@/components/OptimizedParticles";
import AnimatedSection from "@/components/AnimatedSection";
import FadeInStagger from "@/components/FadeInStagger";

const pricingPlans = [
  {
    name: "Graphic Design",
    price: "$10",
    originalPrice: "$20",
    description: "Graphic design for branding needs",
    features: [
      "Logo / Poster / Flyer",
      "Social Media Design (1 post)",
      "High Quality Output",
      "Source File (PSD, PNG, JPG, Or Canva)",
      "2 Revisions",
      "Fast Response",
    ],
    popular: false,
    badge: "Starting from",
  },
  {
    name: "Website Development",
    price: "$250",
    originalPrice: "$500",
    description: "Best seller! Professional website",
    features: [
      "Landing Page / Company Profile",
      "Responsive Design",
      "Modern & Fast Loading",
      "SEO Friendly",
      "Free .com Domain",
      "3 Months Support",
      "3 Revisions",
    ],
    popular: true,
    badge: "Most Popular",
  },
  {
    name: "Full Branding Package",
    price: "From $500",
    description: "Complete Website + Design for business",
    features: [
      "Multi-page Website + SEO",
      "Logo & Brand Identity",
      "Social Media Design Kit",
      "Marketing Materials",
      "E-Commerce Ready",
      "6 Months Support",
      "Unlimited Revisions",
    ],
    popular: false,
    badge: "Best Value",
  },
];

export default function PricingEN() {
  return (
    <section id="pricing" className="relative py-24 bg-[#0A192F] overflow-hidden overflow-x-hidden w-full">
      {/* Lighting Effect */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-[#3B82F6] rounded-full blur-[120px] opacity-10"></div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <AnimatedSection animation="fade-up">
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
            <div className="bg-[#3B82F6]/10 border border-[#3B82F6]/30 rounded-full px-4 py-2">
              <span className="text-[#3B82F6] font-semibold text-sm">💰 Special Price - Limited Time!</span>
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Starting from <span className="text-[#3B82F6]">$10</span>
          </h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Affordable prices for Website Development & Graphic Design. The best investment for your business!
          </p>
          </div>
        </AnimatedSection>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <FadeInStagger key={index} index={index} delay={100}>
            <Card
              key={index}
              className={`relative bg-[#0F1E37] border-white/10 p-8 transition-all duration-300 ${
                plan.popular
                  ? "border-[#3B82F6] transform scale-105 shadow-xl shadow-[#3B82F6]/20"
                  : "hover:border-[#3B82F6]/50"
              }`}
            >
              {/* Badge */}
              {(plan.popular || plan.badge) && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <div className={`text-white text-sm font-semibold px-4 py-1 rounded-full ${
                    plan.popular ? "bg-[#3B82F6]" : "bg-linear-to-r from-purple-500 to-pink-500"
                  }`}>
                    {plan.badge || "Most Popular"}
                  </div>
                </div>
              )}

              {/* Plan Name */}
              <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
              <p className="text-white/60 text-sm mb-6">{plan.description}</p>

              {/* Price */}
              <div className="mb-8">
                {plan.originalPrice && (
                  <div className="mb-2">
                    <span className="text-white/40 line-through text-lg">{plan.originalPrice}</span>
                    <span className="ml-2 bg-red-500/20 text-red-400 text-xs px-2 py-1 rounded-full">Save 50%</span>
                  </div>
                )}
                <div className="flex items-baseline">
                  <span className="text-4xl font-bold text-white">
                    {plan.price}
                  </span>
                  {!plan.price.includes("From") && (
                    <span className="text-white/60 ml-2 text-sm">/project</span>
                  )}
                </div>
              </div>

              {/* Features */}
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start">
                    <div className="shrink-0 w-5 h-5 bg-[#3B82F6]/20 rounded-full flex items-center justify-center mr-3 mt-0.5">
                      <Check className="w-3 h-3 text-[#3B82F6]" />
                    </div>
                    <span className="text-white/70 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <Button
                asChild
                className={`w-full ${
                  plan.popular
                    ? "bg-[#3B82F6] hover:bg-[#3B82F6]/90 text-white"
                    : "bg-white/10 hover:bg-white/20 text-white border border-white/20"
                }`}
              >
                <a href="#contact">Order Now</a>
              </Button>
            </Card>
            </FadeInStagger>
          ))}
        </div>

        {/* Additional Info */}
        <AnimatedSection animation="fade-up" delay={400}>
          <div className="text-center mt-12">
            <div className="bg-[#3B82F6]/5 border border-[#3B82F6]/20 rounded-xl p-6 max-w-3xl mx-auto">
              <p className="text-white/90 text-base mb-2">
                ✨ <strong>Bonus:</strong> Free consultation + Free .com domain (Professional package and above)
              </p>
              <p className="text-white/60 text-sm">
                Need a custom package or special features? Contact us for the best offer!
              </p>
            </div>
          </div>
        </AnimatedSection>
      </div>
      
      {/* Interactive Particles - Desktop Only */}
      <OptimizedParticles quantity={50} />
    </section>
  );
}

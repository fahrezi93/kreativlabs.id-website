"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const pricingPlans = [
  {
    name: "Starter",
    price: "2.5jt",
    description: "Cocok untuk personal atau bisnis kecil",
    features: [
      "Landing Page Design",
      "Responsive Design",
      "3 Revisi",
      "Basic SEO",
      "1 Bulan Support",
      "Domain & Hosting Setup",
    ],
    popular: false,
  },
  {
    name: "Professional",
    price: "5jt",
    description: "Ideal untuk bisnis yang berkembang",
    features: [
      "Multi-page Website",
      "Custom Design",
      "5 Revisi",
      "Advanced SEO",
      "3 Bulan Support",
      "CMS Integration",
      "Contact Form",
      "Google Analytics",
    ],
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "Solusi lengkap untuk perusahaan",
    features: [
      "Full Custom Website",
      "Unlimited Revisi",
      "Premium SEO",
      "6 Bulan Support",
      "E-Commerce Ready",
      "API Integration",
      "Advanced Analytics",
      "Priority Support",
    ],
    popular: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="relative py-24 bg-[#0A192F] overflow-hidden">
      {/* Lighting Effect */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-[#3B82F6] rounded-full blur-[120px] opacity-10"></div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our <span className="text-[#3B82F6]">Pricing</span>
          </h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Pilih paket yang sesuai dengan kebutuhan bisnis Anda
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <Card
              key={index}
              className={`relative bg-[#0F1E37] border-white/10 p-8 transition-all duration-300 ${
                plan.popular
                  ? "border-[#3B82F6] transform scale-105 shadow-xl shadow-[#3B82F6]/20"
                  : "hover:border-[#3B82F6]/50"
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <div className="bg-[#3B82F6] text-white text-sm font-semibold px-4 py-1 rounded-full">
                    Most Popular
                  </div>
                </div>
              )}

              {/* Plan Name */}
              <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
              <p className="text-white/60 text-sm mb-6">{plan.description}</p>

              {/* Price */}
              <div className="mb-8">
                <div className="flex items-baseline">
                  <span className="text-4xl font-bold text-white">
                    {plan.price === "Custom" ? plan.price : `Rp ${plan.price}`}
                  </span>
                  {plan.price !== "Custom" && (
                    <span className="text-white/60 ml-2">/project</span>
                  )}
                </div>
              </div>

              {/* Features */}
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start">
                    <div className="flex-shrink-0 w-5 h-5 bg-[#3B82F6]/20 rounded-full flex items-center justify-center mr-3 mt-0.5">
                      <Check className="w-3 h-3 text-[#3B82F6]" />
                    </div>
                    <span className="text-white/70 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <Button
                className={`w-full ${
                  plan.popular
                    ? "bg-[#3B82F6] hover:bg-[#3B82F6]/90 text-white"
                    : "bg-white/10 hover:bg-white/20 text-white border border-white/20"
                }`}
              >
                Pilih Paket
              </Button>
            </Card>
          ))}
        </div>

        {/* Additional Info */}
        <div className="text-center mt-12">
          <p className="text-white/60 text-sm">
            Semua paket sudah termasuk konsultasi gratis. Hubungi kami untuk custom package.
          </p>
        </div>
      </div>
    </section>
  );
}

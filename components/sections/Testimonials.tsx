"use client";

import { Card } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Budi Santoso",
    role: "CEO, TechStart Indonesia",
    content: "KreativLabs.id sangat profesional dalam mengerjakan website perusahaan kami. Hasilnya melebihi ekspektasi!",
    rating: 5,
    image: "/api/placeholder/80/80",
  },
  {
    name: "Siti Nurhaliza",
    role: "Owner, Fashion Store",
    content: "Desain website yang modern dan user-friendly. Tim sangat responsif dan memahami kebutuhan bisnis kami.",
    rating: 5,
    image: "/api/placeholder/80/80",
  },
  {
    name: "Ahmad Wijaya",
    role: "Founder, Digital Agency",
    content: "Kualitas kerja yang luar biasa dengan harga yang kompetitif. Highly recommended!",
    rating: 5,
    image: "/api/placeholder/80/80",
  },
];

export default function Testimonials() {
  return (
    <section className="relative py-24 bg-[#0A192F] overflow-hidden">
      {/* Lighting Effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#3B82F6] rounded-full blur-[120px] opacity-10"></div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Client <span className="text-[#3B82F6]">Testimonials</span>
          </h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Apa kata mereka yang telah mempercayai kami
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="bg-[#0F1E37] border-white/10 p-6 hover:border-[#3B82F6]/50 transition-all duration-300"
            >
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-[#3B82F6] text-[#3B82F6]" />
                ))}
              </div>

              {/* Content */}
              <p className="text-white/80 text-sm mb-6 leading-relaxed italic">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-[#3B82F6]/20 rounded-full flex items-center justify-center">
                  <span className="text-[#3B82F6] font-bold text-lg">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <div className="text-white font-semibold text-sm">
                    {testimonial.name}
                  </div>
                  <div className="text-white/60 text-xs">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

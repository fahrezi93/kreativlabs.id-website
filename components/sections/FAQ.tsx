"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Particles } from "@/components/ui/shadcn-io/particles";
import { useIsMobile } from "@/hooks/useIsMobile";
import AnimatedSection from "@/components/AnimatedSection";
import FadeInStagger from "@/components/FadeInStagger";

const faqs = [
  {
    question: "Berapa lama waktu pengerjaan website?",
    answer: "Waktu pengerjaan bervariasi tergantung kompleksitas project. Untuk landing page sederhana sekitar 1-2 minggu, website company profile 2-4 minggu, dan e-commerce 4-8 minggu. Kami akan memberikan timeline yang jelas di awal project.",
  },
  {
    question: "Apakah harga sudah termasuk domain dan hosting?",
    answer: "Harga yang tertera adalah untuk pembuatan website saja. Domain dan hosting dapat kami bantu setup dengan biaya terpisah, atau Anda bisa menggunakan provider pilihan sendiri. Kami akan berikan rekomendasi terbaik sesuai kebutuhan.",
  },
  {
    question: "Apakah website yang dibuat mobile-friendly?",
    answer: "Ya, semua website yang kami buat sudah responsive dan mobile-friendly. Kami menggunakan pendekatan mobile-first untuk memastikan tampilan optimal di semua perangkat.",
  },
  {
    question: "Bagaimana proses revisi website?",
    answer: "Setiap paket memiliki jumlah revisi yang berbeda. Kami akan melakukan review berkala dengan Anda dan melakukan revisi sesuai feedback. Revisi tambahan di luar paket dapat dikenakan biaya tambahan.",
  },
  {
    question: "Apakah saya bisa update konten website sendiri?",
    answer: "Ya, kami bisa integrasikan CMS (Content Management System) seperti WordPress atau custom admin panel agar Anda bisa update konten sendiri. Kami juga akan berikan training singkat cara penggunaannya.",
  },
  {
    question: "Apakah ada garansi setelah website selesai?",
    answer: "Ya, kami memberikan support dan maintenance sesuai dengan paket yang dipilih. Untuk bug fixing dan technical support, kami siap membantu selama periode yang telah disepakati.",
  },
];

export default function FAQ() {
  const isMobile = useIsMobile();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="relative py-24 bg-[#0A192F] overflow-hidden overflow-x-hidden w-full">
      {/* Lighting Effect */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#3B82F6] rounded-full blur-[120px] opacity-10"></div>
      
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
              Frequently Asked <span className="text-[#3B82F6]">Questions</span>
            </h2>
            <p className="text-white/70 text-lg max-w-2xl mx-auto">
              Pertanyaan yang sering ditanyakan seputar jasa kami
            </p>
          </div>
        </AnimatedSection>

        {/* FAQ Items */}
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <FadeInStagger key={index} index={index} delay={80}>
            <div
              key={index}
              className="bg-[#0F1E37] border border-white/10 rounded-lg overflow-hidden hover:border-[#3B82F6]/50 transition-all duration-300"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left group"
              >
                <span className="text-white font-semibold pr-8 group-hover:text-[#3B82F6] transition-colors">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-[#3B82F6] flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? "max-h-96" : "max-h-0"
                }`}
              >
                <div className="px-6 pb-5 text-white/70 leading-relaxed">
                  {faq.answer}
                </div>
              </div>
            </div>
            </FadeInStagger>
          ))}
        </div>

        {/* CTA */}
        <AnimatedSection animation="fade-up" delay={300}>
          <div className="text-center mt-12">
          <p className="text-white/60 mb-4">
            Masih ada pertanyaan lain?
          </p>
          <a
            href="#contact"
            className="inline-block text-[#3B82F6] hover:text-[#3B82F6]/80 font-semibold transition-colors"
          >
            Hubungi Kami →
          </a>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}

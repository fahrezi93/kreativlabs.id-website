"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Particles } from "@/components/ui/shadcn-io/particles";
import { useIsMobile } from "@/hooks/useIsMobile";
import AnimatedSection from "@/components/AnimatedSection";
import FadeInStagger from "@/components/FadeInStagger";

const faqs = [
  {
    question: "How long does it take to build a website?",
    answer: "Development time varies depending on project complexity. For a simple landing page around 1-2 weeks, company profile website 2-4 weeks, and e-commerce 4-8 weeks. We will provide a clear timeline at the beginning of the project.",
  },
  {
    question: "Does the price include domain and hosting?",
    answer: "The listed price is for website development only. We can help setup domain and hosting with separate costs, or you can use your own preferred provider. We will provide the best recommendations according to your needs.",
  },
  {
    question: "Are the websites mobile-friendly?",
    answer: "Yes, all websites we create are responsive and mobile-friendly. We use a mobile-first approach to ensure optimal display on all devices.",
  },
  {
    question: "How does the website revision process work?",
    answer: "Each package has a different number of revisions. We will conduct regular reviews with you and make revisions based on feedback. Additional revisions outside the package may incur additional costs.",
  },
  {
    question: "Can I update the website content myself?",
    answer: "Yes, we can integrate a CMS (Content Management System) like WordPress or a custom admin panel so you can update content yourself. We will also provide brief training on how to use it.",
  },
  {
    question: "Is there a warranty after the website is completed?",
    answer: "Yes, we provide support and maintenance according to the selected package. For bug fixing and technical support, we are ready to help during the agreed period.",
  },
];

export default function FAQEN() {
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
              Common questions about our services
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
                  className={`w-5 h-5 text-[#3B82F6] shrink-0 transition-transform duration-300 ${
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
            Have more questions?
          </p>
          <a
            href="#contact"
            className="inline-block text-[#3B82F6] hover:text-[#3B82F6]/80 font-semibold transition-colors"
          >
            Contact Us →
          </a>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}

"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Flame, ShoppingCart, TrendingUp, Zap, CheckCircle2, ArrowRight } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import FadeInStagger from "@/components/FadeInStagger";
import Image from "next/image";
import Link from "next/link";

export default function HotProducts() {
  return (
    <section id="hot-products" className="relative py-24 bg-linear-to-b from-[#0A192F] to-[#0F1E37] overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-[#3B82F6] rounded-full blur-[100px] opacity-20 animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#F59E0B] rounded-full blur-[120px] opacity-15 animate-pulse"></div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <AnimatedSection animation="fade-up">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-linear-to-r from-[#F59E0B]/20 to-[#EF4444]/20 border border-[#F59E0B]/30 rounded-full mb-6 backdrop-blur-sm">
              <Flame className="w-5 h-5 text-[#F59E0B] animate-pulse" />
              <span className="text-sm text-white font-semibold">HOT PRODUCT 🔥</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Produk <span className="text-transparent bg-clip-text bg-linear-to-r from-[#F59E0B] to-[#EF4444]">Unggulan</span> Kami
            </h2>
            <p className="text-white/70 text-lg max-w-2xl mx-auto">
              Solusi terbaik untuk bisnis Anda dengan teknologi terkini
            </p>
          </div>
        </AnimatedSection>

        {/* Hot Product Card */}
        <div className="max-w-5xl mx-auto">
          <FadeInStagger index={0} delay={100}>
            <Card className="group bg-linear-to-br from-[#0F1E37] to-[#1E3A5F] border-2 border-[#F59E0B]/30 hover:border-[#F59E0B]/60 transition-all duration-500 overflow-hidden shadow-2xl shadow-[#F59E0B]/20">
              <div className="grid md:grid-cols-2 gap-0">
                {/* Left Side - Image */}
                <div className="relative h-[300px] md:h-auto overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&h=800&fit=crop"
                    alt="Aplikasi Kasir Web Modern"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority
                    unoptimized
                  />
                  <div className="absolute inset-0 bg-linear-to-r from-[#0F1E37] via-transparent to-transparent opacity-80"></div>
                  
                  {/* Hot Badge */}
                  <div className="absolute top-6 left-6 z-10">
                    <div className="flex items-center gap-2 px-4 py-2 bg-linear-to-r from-[#F59E0B] to-[#EF4444] rounded-full shadow-lg animate-bounce">
                      <Flame className="w-4 h-4 text-white" />
                      <span className="text-white font-bold text-sm">BEST SELLER</span>
                    </div>
                  </div>

                  {/* Stats Overlay */}
                  <div className="absolute bottom-6 left-6 right-6 z-10">
                    <div className="grid grid-cols-3 gap-3">
                      <div className="bg-black/40 backdrop-blur-md rounded-lg p-3 border border-white/10">
                        <div className="flex items-center gap-2 mb-1">
                          <TrendingUp className="w-4 h-4 text-[#10B981]" />
                          <span className="text-xs text-white/70">Efisiensi</span>
                        </div>
                        <p className="text-white font-bold text-lg">70%</p>
                      </div>
                      <div className="bg-black/40 backdrop-blur-md rounded-lg p-3 border border-white/10">
                        <div className="flex items-center gap-2 mb-1">
                          <Zap className="w-4 h-4 text-[#F59E0B]" />
                          <span className="text-xs text-white/70">Akurasi</span>
                        </div>
                        <p className="text-white font-bold text-lg">90%</p>
                      </div>
                      <div className="bg-black/40 backdrop-blur-md rounded-lg p-3 border border-white/10">
                        <div className="flex items-center gap-2 mb-1">
                          <ShoppingCart className="w-4 h-4 text-[#3B82F6]" />
                          <span className="text-xs text-white/70">Hemat</span>
                        </div>
                        <p className="text-white font-bold text-lg">60%</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Side - Content */}
                <div className="p-6 md:p-8 flex flex-col justify-center">
                  <div className="mb-4">
                    <span className="inline-block px-3 py-1 bg-[#3B82F6]/20 text-[#3B82F6] text-xs font-semibold rounded-full border border-[#3B82F6]/30">
                      Web Application
                    </span>
                  </div>

                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 group-hover:text-[#F59E0B] transition-colors">
                    Aplikasi Kasir Web Modern
                  </h3>

                  <p className="text-white/80 text-sm mb-5 leading-relaxed">
                    Sistem kasir berbasis web yang powerful untuk mengelola bisnis retail Anda. 
                    Akses dari mana saja, kapan saja dengan fitur lengkap dan interface yang mudah digunakan.
                  </p>

                  {/* Key Features */}
                  <div className="space-y-2 mb-6">
                    {[
                      "Point of Sale (POS) Modern & Cepat",
                      "Manajemen Stok Real-time",
                      "Laporan Penjualan & Analytics",
                      "Multi User & Cloud-based"
                    ].map((feature, index) => (
                      <div key={index} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#10B981] shrink-0 mt-0.5" />
                        <span className="text-white/90 text-xs">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA Buttons */}
                  <div className="flex flex-col sm:flex-row gap-2">
                    <Button 
                      asChild
                      className="bg-linear-to-r from-[#F59E0B] to-[#EF4444] hover:from-[#F59E0B]/90 hover:to-[#EF4444]/90 text-white px-5 py-2.5 text-sm rounded-lg group/btn shadow-lg shadow-[#F59E0B]/30 hover:shadow-xl hover:shadow-[#F59E0B]/40 transition-all"
                    >
                      <Link href="/blog/aplikasi-kasir-web-modern">
                        Pelajari Lebih Lanjut
                        <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                      </Link>
                    </Button>
                    <Button 
                      asChild
                      variant="outline" 
                      className="border-2 border-[#3B82F6]/50 text-white hover:bg-[#3B82F6]/10 hover:border-[#3B82F6] px-5 py-2.5 text-sm rounded-lg backdrop-blur-sm transition-all"
                    >
                      <a href="#contact">Hubungi Kami</a>
                    </Button>
                  </div>

                  {/* Trust Badge */}
                  <div className="mt-5 pt-5 border-t border-white/10">
                    <p className="text-white/60 text-xs">
                      ✨ Dipercaya oleh <span className="text-[#F59E0B] font-semibold">100+ bisnis</span> di Indonesia
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          </FadeInStagger>
        </div>

        {/* Additional Info */}
        <AnimatedSection animation="fade-up" delay={200}>
          <div className="mt-12 text-center">
            <p className="text-white/60 text-sm mb-4">
              Tertarik dengan produk lainnya?
            </p>
            <Button 
              asChild
              variant="ghost" 
              className="text-[#3B82F6] hover:text-[#3B82F6]/80 hover:bg-[#3B82F6]/10"
            >
              <a href="#projects">
                Lihat Semua Produk
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}

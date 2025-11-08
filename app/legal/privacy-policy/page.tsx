"use client";

import Navbar from "@/components/Navbar";
import BackToTop from "@/components/BackToTop";
import WhatsAppButton from "@/components/WhatsAppButton";
import Footer from "@/components/sections/Footer";
import { Shield, ArrowLeft, Lock, Eye, Database, UserCheck, Mail, FileText } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import Link from "next/link";

export default function PrivacyPolicyPage() {
  const sections = [
    {
      icon: Database,
      title: "Informasi yang Kami Kumpulkan",
      content: [
        "Informasi pribadi yang Anda berikan secara langsung (nama, email, nomor telepon)",
        "Informasi teknis seperti alamat IP, jenis browser, dan perangkat yang digunakan",
        "Data penggunaan website untuk meningkatkan layanan kami",
        "Informasi yang diberikan melalui formulir kontak atau komunikasi lainnya"
      ]
    },
    {
      icon: Eye,
      title: "Bagaimana Kami Menggunakan Informasi Anda",
      content: [
        "Menyediakan dan meningkatkan layanan kami",
        "Menghubungi Anda terkait layanan atau pertanyaan Anda",
        "Mengirimkan informasi promosi (dengan persetujuan Anda)",
        "Menganalisis penggunaan website untuk perbaikan berkelanjutan",
        "Melindungi keamanan dan integritas layanan kami"
      ]
    },
    {
      icon: Lock,
      title: "Keamanan Data",
      content: [
        "Kami menggunakan enkripsi SSL untuk melindungi data Anda",
        "Akses ke data pribadi dibatasi hanya untuk tim yang berwenang",
        "Kami melakukan backup data secara berkala",
        "Sistem keamanan kami diperbarui secara rutin",
        "Kami tidak menjual atau membagikan data Anda kepada pihak ketiga tanpa izin"
      ]
    },
    {
      icon: UserCheck,
      title: "Hak Anda",
      content: [
        "Mengakses dan meminta salinan data pribadi Anda",
        "Memperbarui atau memperbaiki informasi yang tidak akurat",
        "Meminta penghapusan data pribadi Anda",
        "Menolak atau membatasi pemrosesan data tertentu",
        "Menarik persetujuan kapan saja"
      ]
    },
    {
      icon: FileText,
      title: "Cookie dan Teknologi Pelacakan",
      content: [
        "Kami menggunakan cookie untuk meningkatkan pengalaman pengguna",
        "Cookie membantu kami memahami preferensi Anda",
        "Anda dapat mengatur browser untuk menolak cookie",
        "Beberapa fitur mungkin tidak berfungsi tanpa cookie",
        "Lihat Cookie Policy kami untuk informasi lebih detail"
      ]
    },
    {
      icon: Mail,
      title: "Hubungi Kami",
      content: [
        "Jika Anda memiliki pertanyaan tentang kebijakan privasi ini, silakan hubungi kami:",
        "Email: kreativlabsid@gmail.com",
        "Instagram: @kreativlabs.id",
        "Kami akan merespons pertanyaan Anda dalam waktu 2-3 hari kerja"
      ]
    }
  ];

  return (
    <main className="min-h-screen bg-[#0A192F] overflow-x-hidden w-full max-w-[100vw]">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 bg-gradient-to-b from-[#0A192F] to-[#0F1E37]">
        <div className="absolute top-20 right-10 w-96 h-96 bg-[#3B82F6] rounded-full blur-[120px] opacity-10"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <AnimatedSection animation="fade-up">
            <div className="max-w-4xl mx-auto">
              {/* Back Button */}
              <Link 
                href="/"
                className="inline-flex items-center gap-2 text-white/70 hover:text-[#3B82F6] transition-colors mb-8 group"
              >
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                <span>Kembali ke Beranda</span>
              </Link>

              {/* Icon */}
              <div className="mb-6">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-[#3B82F6]/20 rounded-2xl">
                  <Shield className="w-8 h-8 text-[#3B82F6]" />
                </div>
              </div>

              {/* Title */}
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                Privacy Policy
              </h1>

              <p className="text-white/70 text-lg mb-4">
                Terakhir diperbarui: {new Date().toLocaleDateString('id-ID', { year: 'numeric', month: 'long', day: 'numeric' })}
              </p>

              <p className="text-white/80 text-lg leading-relaxed">
                Di KreativLabs.id, kami berkomitmen untuk melindungi privasi Anda. Kebijakan privasi ini menjelaskan bagaimana kami mengumpulkan, menggunakan, dan melindungi informasi pribadi Anda.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 bg-[#0A192F]">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto space-y-8">
            {sections.map((section, index) => {
              const Icon = section.icon;
              return (
                <AnimatedSection key={index} animation="fade-up" delay={index * 100}>
                  <div className="bg-[#0F1E37] border border-white/10 rounded-2xl p-8 hover:border-[#3B82F6]/30 transition-all duration-300">
                    {/* Section Header */}
                    <div className="flex items-start gap-4 mb-6">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-[#3B82F6]/20 rounded-xl flex items-center justify-center">
                          <Icon className="w-6 h-6 text-[#3B82F6]" />
                        </div>
                      </div>
                      <div>
                        <h2 className="text-2xl font-bold text-white mb-2">
                          {section.title}
                        </h2>
                      </div>
                    </div>

                    {/* Section Content */}
                    <ul className="space-y-3 ml-16">
                      {section.content.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-white/80 text-base leading-relaxed">
                          <div className="flex-shrink-0 w-1.5 h-1.5 bg-[#3B82F6] rounded-full mt-2"></div>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </AnimatedSection>
              );
            })}

            {/* Additional Info */}
            <AnimatedSection animation="fade-up" delay={600}>
              <div className="bg-gradient-to-br from-[#0F1E37] to-[#1E3A5F] border border-[#3B82F6]/30 rounded-2xl p-8">
                <h3 className="text-xl font-bold text-white mb-4">
                  Perubahan Kebijakan Privasi
                </h3>
                <p className="text-white/80 leading-relaxed mb-4">
                  Kami dapat memperbarui kebijakan privasi ini dari waktu ke waktu. Kami akan memberi tahu Anda tentang perubahan dengan memposting kebijakan privasi baru di halaman ini dan memperbarui tanggal "Terakhir diperbarui" di bagian atas.
                </p>
                <p className="text-white/80 leading-relaxed">
                  Kami menyarankan Anda untuk meninjau kebijakan privasi ini secara berkala untuk mengetahui perubahan apa pun. Perubahan pada kebijakan privasi ini berlaku efektif ketika diposting di halaman ini.
                </p>
              </div>
            </AnimatedSection>

            {/* CTA */}
            <AnimatedSection animation="fade-up" delay={700}>
              <div className="text-center pt-8">
                <p className="text-white/70 mb-6">
                  Masih ada pertanyaan tentang privasi Anda?
                </p>
                <Link 
                  href="/#contact"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-[#3B82F6] hover:bg-[#3B82F6]/90 text-white font-semibold rounded-full transition-all duration-300 shadow-lg shadow-[#3B82F6]/30"
                >
                  <Mail className="w-5 h-5" />
                  Hubungi Kami
                </Link>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
      <BackToTop />
    </main>
  );
}

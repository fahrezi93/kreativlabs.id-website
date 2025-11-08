"use client";

import Navbar from "@/components/Navbar";
import BackToTop from "@/components/BackToTop";
import WhatsAppButton from "@/components/WhatsAppButton";
import Footer from "@/components/sections/Footer";
import { FileText, ArrowLeft, CheckCircle, XCircle, AlertTriangle, Scale, CreditCard, Mail } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import Link from "next/link";

export default function TermsOfServicePage() {
  const sections = [
    {
      icon: CheckCircle,
      title: "Penerimaan Ketentuan",
      content: [
        "Dengan mengakses dan menggunakan layanan KreativLabs.id, Anda setuju untuk terikat dengan ketentuan layanan ini",
        "Jika Anda tidak setuju dengan ketentuan ini, mohon untuk tidak menggunakan layanan kami",
        "Kami berhak mengubah ketentuan ini kapan saja dengan pemberitahuan sebelumnya",
        "Penggunaan berkelanjutan setelah perubahan berarti Anda menerima ketentuan yang diperbarui"
      ]
    },
    {
      icon: FileText,
      title: "Layanan yang Kami Sediakan",
      content: [
        "Website Development: Landing Page, Company Profile, E-Commerce, dan aplikasi web custom",
        "Graphic Design: Logo, branding, desain sosial media, flyer, poster, dan kemasan produk",
        "Konsultasi digital untuk kebutuhan bisnis Anda",
        "Maintenance dan support untuk project yang telah diselesaikan",
        "Semua layanan disesuaikan dengan kebutuhan dan budget klien"
      ]
    },
    {
      icon: CreditCard,
      title: "Pembayaran dan Harga",
      content: [
        "Harga layanan akan dikomunikasikan sebelum project dimulai",
        "Pembayaran dilakukan sesuai dengan kesepakatan (DP dan pelunasan)",
        "DP minimal 50% dari total harga project sebelum pengerjaan dimulai",
        "Pelunasan dilakukan setelah project selesai dan disetujui klien",
        "Revisi tambahan di luar scope awal dapat dikenakan biaya tambahan",
        "Pembayaran dapat dilakukan melalui transfer bank atau e-wallet"
      ]
    },
    {
      icon: AlertTriangle,
      title: "Tanggung Jawab Pengguna",
      content: [
        "Memberikan informasi yang akurat dan lengkap untuk keperluan project",
        "Menyediakan konten (teks, gambar, logo) yang diperlukan tepat waktu",
        "Memberikan feedback dan approval dalam waktu yang wajar",
        "Tidak menggunakan layanan kami untuk tujuan ilegal atau melanggar hukum",
        "Menghormati hak kekayaan intelektual pihak ketiga",
        "Bertanggung jawab atas konten yang Anda berikan kepada kami"
      ]
    },
    {
      icon: Scale,
      title: "Hak Kekayaan Intelektual",
      content: [
        "Setelah pembayaran penuh, hak kepemilikan desain/website berpindah ke klien",
        "Kami berhak menggunakan project sebagai portfolio dengan izin klien",
        "Source code dan file desain akan diserahkan setelah pelunasan",
        "Klien tidak diperkenankan mengklaim karya sebagai hasil kerja sendiri",
        "Kami mempertahankan hak untuk menggunakan teknik dan metodologi yang sama untuk klien lain"
      ]
    },
    {
      icon: XCircle,
      title: "Pembatasan Tanggung Jawab",
      content: [
        "Kami tidak bertanggung jawab atas kerugian tidak langsung atau konsekuensial",
        "Kami tidak menjamin website akan bebas dari error 100% setelah launch",
        "Klien bertanggung jawab atas backup data mereka sendiri",
        "Kami tidak bertanggung jawab atas konten yang diunggah oleh klien",
        "Maintenance dan hosting adalah tanggung jawab klien kecuali ada perjanjian terpisah",
        "Force majeure (bencana alam, pandemi, dll) dapat mempengaruhi timeline project"
      ]
    }
  ];

  return (
    <main className="min-h-screen bg-[#0A192F] overflow-x-hidden w-full max-w-[100vw]">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 bg-gradient-to-b from-[#0A192F] to-[#0F1E37]">
        <div className="absolute top-20 left-10 w-96 h-96 bg-[#3B82F6] rounded-full blur-[120px] opacity-10"></div>
        
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
                  <FileText className="w-8 h-8 text-[#3B82F6]" />
                </div>
              </div>

              {/* Title */}
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                Terms of Service
              </h1>

              <p className="text-white/70 text-lg mb-4">
                Terakhir diperbarui: {new Date().toLocaleDateString('id-ID', { year: 'numeric', month: 'long', day: 'numeric' })}
              </p>

              <p className="text-white/80 text-lg leading-relaxed">
                Ketentuan layanan ini mengatur penggunaan layanan yang disediakan oleh KreativLabs.id. Mohon baca dengan seksama sebelum menggunakan layanan kami.
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

            {/* Warranty Section */}
            <AnimatedSection animation="fade-up" delay={600}>
              <div className="bg-gradient-to-br from-[#0F1E37] to-[#1E3A5F] border border-[#3B82F6]/30 rounded-2xl p-8">
                <h3 className="text-xl font-bold text-white mb-4">
                  Garansi dan Revisi
                </h3>
                <div className="space-y-3 text-white/80 leading-relaxed">
                  <p>
                    Kami menyediakan garansi untuk memastikan kepuasan Anda:
                  </p>
                  <ul className="space-y-2 ml-4">
                    <li className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-1.5 h-1.5 bg-[#3B82F6] rounded-full mt-2"></div>
                      <span>Revisi unlimited selama masa pengerjaan sesuai scope project</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-1.5 h-1.5 bg-[#3B82F6] rounded-full mt-2"></div>
                      <span>Garansi bug fixing 30 hari setelah project selesai</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-1.5 h-1.5 bg-[#3B82F6] rounded-full mt-2"></div>
                      <span>Support teknis untuk pertanyaan terkait penggunaan</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-1.5 h-1.5 bg-[#3B82F6] rounded-full mt-2"></div>
                      <span>Revisi di luar scope atau setelah approval final dikenakan biaya tambahan</span>
                    </li>
                  </ul>
                </div>
              </div>
            </AnimatedSection>

            {/* Termination Section */}
            <AnimatedSection animation="fade-up" delay={700}>
              <div className="bg-[#0F1E37] border border-white/10 rounded-2xl p-8">
                <h3 className="text-xl font-bold text-white mb-4">
                  Pembatalan dan Pengembalian Dana
                </h3>
                <div className="space-y-3 text-white/80 leading-relaxed">
                  <ul className="space-y-2">
                    <li className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-1.5 h-1.5 bg-[#3B82F6] rounded-full mt-2"></div>
                      <span>Pembatalan sebelum pengerjaan dimulai: refund 100% DP</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-1.5 h-1.5 bg-[#3B82F6] rounded-full mt-2"></div>
                      <span>Pembatalan setelah pengerjaan dimulai: refund 50% DP</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-1.5 h-1.5 bg-[#3B82F6] rounded-full mt-2"></div>
                      <span>Pembatalan setelah 50% project selesai: tidak ada refund</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-1.5 h-1.5 bg-[#3B82F6] rounded-full mt-2"></div>
                      <span>Kami berhak membatalkan project jika klien tidak kooperatif</span>
                    </li>
                  </ul>
                </div>
              </div>
            </AnimatedSection>

            {/* Contact Section */}
            <AnimatedSection animation="fade-up" delay={800}>
              <div className="bg-gradient-to-br from-[#0F1E37] to-[#1E3A5F] border border-[#3B82F6]/30 rounded-2xl p-8">
                <h3 className="text-xl font-bold text-white mb-4">
                  Pertanyaan tentang Ketentuan Layanan?
                </h3>
                <p className="text-white/80 leading-relaxed mb-6">
                  Jika Anda memiliki pertanyaan atau memerlukan klarifikasi tentang ketentuan layanan kami, jangan ragu untuk menghubungi kami. Tim kami siap membantu Anda.
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

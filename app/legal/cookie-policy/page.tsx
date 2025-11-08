"use client";

import Navbar from "@/components/Navbar";
import BackToTop from "@/components/BackToTop";
import WhatsAppButton from "@/components/WhatsAppButton";
import Footer from "@/components/sections/Footer";
import { Cookie, ArrowLeft, Settings, BarChart, Shield, Users, Smartphone, Mail } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import Link from "next/link";

export default function CookiePolicyPage() {
  const cookieTypes = [
    {
      icon: Shield,
      title: "Cookie Esensial",
      description: "Cookie yang diperlukan untuk fungsi dasar website",
      examples: [
        "Session cookies untuk menjaga Anda tetap login",
        "Cookie keamanan untuk melindungi dari serangan",
        "Cookie preferensi bahasa dan region",
        "Cookie yang mengingat pilihan Anda di website"
      ],
      duration: "Session atau hingga 1 tahun",
      canDisable: false
    },
    {
      icon: BarChart,
      title: "Cookie Analitik",
      description: "Membantu kami memahami bagaimana pengunjung menggunakan website",
      examples: [
        "Google Analytics untuk statistik pengunjung",
        "Tracking halaman yang paling banyak dikunjungi",
        "Mengukur waktu yang dihabiskan di website",
        "Memahami dari mana pengunjung berasal"
      ],
      duration: "Hingga 2 tahun",
      canDisable: true
    },
    {
      icon: Users,
      title: "Cookie Fungsional",
      description: "Meningkatkan fungsionalitas dan personalisasi website",
      examples: [
        "Mengingat preferensi tampilan Anda",
        "Menyimpan item di keranjang belanja",
        "Personalisasi konten berdasarkan lokasi",
        "Integrasi dengan media sosial"
      ],
      duration: "Hingga 1 tahun",
      canDisable: true
    },
    {
      icon: Smartphone,
      title: "Cookie Marketing",
      description: "Digunakan untuk menampilkan iklan yang relevan",
      examples: [
        "Tracking untuk kampanye marketing",
        "Retargeting ads di platform lain",
        "Mengukur efektivitas iklan",
        "Personalisasi iklan berdasarkan minat"
      ],
      duration: "Hingga 2 tahun",
      canDisable: true
    }
  ];

  const thirdPartyCookies = [
    {
      name: "Google Analytics",
      purpose: "Analisis traffic dan perilaku pengunjung",
      link: "https://policies.google.com/privacy"
    },
    {
      name: "Google Fonts",
      purpose: "Menampilkan font kustom di website",
      link: "https://policies.google.com/privacy"
    },
    {
      name: "Vercel Analytics",
      purpose: "Monitoring performa website",
      link: "https://vercel.com/legal/privacy-policy"
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
                  <Cookie className="w-8 h-8 text-[#3B82F6]" />
                </div>
              </div>

              {/* Title */}
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                Cookie Policy
              </h1>

              <p className="text-white/70 text-lg mb-4">
                Terakhir diperbarui: {new Date().toLocaleDateString('id-ID', { year: 'numeric', month: 'long', day: 'numeric' })}
              </p>

              <p className="text-white/80 text-lg leading-relaxed">
                Kebijakan cookie ini menjelaskan apa itu cookie, bagaimana kami menggunakannya, dan bagaimana Anda dapat mengelola preferensi cookie Anda di website KreativLabs.id.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* What are Cookies Section */}
      <section className="py-8 bg-[#0A192F]">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <AnimatedSection animation="fade-up">
              <div className="bg-gradient-to-br from-[#0F1E37] to-[#1E3A5F] border border-[#3B82F6]/30 rounded-2xl p-8 mb-8">
                <h2 className="text-2xl font-bold text-white mb-4">
                  Apa itu Cookie?
                </h2>
                <div className="space-y-4 text-white/80 leading-relaxed">
                  <p>
                    Cookie adalah file teks kecil yang ditempatkan di perangkat Anda (komputer, smartphone, atau tablet) ketika Anda mengunjungi website. Cookie membantu website mengingat informasi tentang kunjungan Anda, seperti preferensi bahasa dan pengaturan lainnya.
                  </p>
                  <p>
                    Cookie membuat pengalaman browsing Anda lebih mudah dan membantu kami meningkatkan layanan kami. Beberapa cookie diperlukan untuk fungsi dasar website, sementara yang lain membantu kami memahami bagaimana pengunjung berinteraksi dengan website kami.
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Cookie Types Section */}
      <section className="py-8 bg-[#0A192F]">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <AnimatedSection animation="fade-up">
              <h2 className="text-3xl font-bold text-white mb-8 text-center">
                Jenis Cookie yang Kami Gunakan
              </h2>
            </AnimatedSection>

            <div className="space-y-6">
              {cookieTypes.map((cookie, index) => {
                const Icon = cookie.icon;
                return (
                  <AnimatedSection key={index} animation="fade-up" delay={index * 100}>
                    <div className="bg-[#0F1E37] border border-white/10 rounded-2xl p-8 hover:border-[#3B82F6]/30 transition-all duration-300">
                      {/* Header */}
                      <div className="flex items-start gap-4 mb-6">
                        <div className="flex-shrink-0">
                          <div className="w-12 h-12 bg-[#3B82F6]/20 rounded-xl flex items-center justify-center">
                            <Icon className="w-6 h-6 text-[#3B82F6]" />
                          </div>
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-white mb-2">
                            {cookie.title}
                          </h3>
                          <p className="text-white/70 text-sm">
                            {cookie.description}
                          </p>
                        </div>
                        <div className="flex-shrink-0">
                          <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                            cookie.canDisable 
                              ? 'bg-green-500/20 text-green-400 border border-green-500/30' 
                              : 'bg-orange-500/20 text-orange-400 border border-orange-500/30'
                          }`}>
                            {cookie.canDisable ? 'Opsional' : 'Wajib'}
                          </span>
                        </div>
                      </div>

                      {/* Examples */}
                      <div className="ml-16 space-y-4">
                        <div>
                          <h4 className="text-white/90 font-semibold mb-2 text-sm">Contoh Penggunaan:</h4>
                          <ul className="space-y-2">
                            {cookie.examples.map((example, idx) => (
                              <li key={idx} className="flex items-start gap-3 text-white/70 text-sm">
                                <div className="flex-shrink-0 w-1.5 h-1.5 bg-[#3B82F6] rounded-full mt-1.5"></div>
                                <span>{example}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div className="pt-3 border-t border-white/10">
                          <p className="text-white/60 text-sm">
                            <span className="font-semibold">Durasi:</span> {cookie.duration}
                          </p>
                        </div>
                      </div>
                    </div>
                  </AnimatedSection>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Third Party Cookies */}
      <section className="py-8 bg-[#0A192F]">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <AnimatedSection animation="fade-up">
              <div className="bg-[#0F1E37] border border-white/10 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-white mb-6">
                  Cookie Pihak Ketiga
                </h3>
                <p className="text-white/80 mb-6 leading-relaxed">
                  Kami menggunakan beberapa layanan pihak ketiga yang mungkin menempatkan cookie di perangkat Anda:
                </p>
                <div className="space-y-4">
                  {thirdPartyCookies.map((service, index) => (
                    <div key={index} className="bg-white/5 rounded-xl p-4 hover:bg-white/10 transition-colors">
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <h4 className="text-white font-semibold mb-1">{service.name}</h4>
                          <p className="text-white/70 text-sm">{service.purpose}</p>
                        </div>
                        <a 
                          href={service.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[#3B82F6] hover:text-[#3B82F6]/80 text-sm whitespace-nowrap transition-colors"
                        >
                          Privacy Policy →
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Managing Cookies */}
      <section className="py-8 bg-[#0A192F]">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <AnimatedSection animation="fade-up">
              <div className="bg-gradient-to-br from-[#0F1E37] to-[#1E3A5F] border border-[#3B82F6]/30 rounded-2xl p-8">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 bg-[#3B82F6]/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Settings className="w-6 h-6 text-[#3B82F6]" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">
                      Mengelola Cookie
                    </h3>
                    <p className="text-white/70">
                      Anda memiliki kontrol penuh atas cookie yang digunakan di website kami
                    </p>
                  </div>
                </div>

                <div className="ml-16 space-y-4 text-white/80 leading-relaxed">
                  <div>
                    <h4 className="text-white font-semibold mb-2">Pengaturan Browser:</h4>
                    <p className="mb-3">
                      Sebagian besar browser web memungkinkan Anda mengelola preferensi cookie melalui pengaturan. Anda dapat:
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-3">
                        <div className="flex-shrink-0 w-1.5 h-1.5 bg-[#3B82F6] rounded-full mt-2"></div>
                        <span>Melihat cookie apa saja yang telah ditetapkan</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="flex-shrink-0 w-1.5 h-1.5 bg-[#3B82F6] rounded-full mt-2"></div>
                        <span>Memblokir cookie pihak ketiga</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="flex-shrink-0 w-1.5 h-1.5 bg-[#3B82F6] rounded-full mt-2"></div>
                        <span>Menghapus semua cookie saat menutup browser</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="flex-shrink-0 w-1.5 h-1.5 bg-[#3B82F6] rounded-full mt-2"></div>
                        <span>Menghapus cookie yang sudah ada</span>
                      </li>
                    </ul>
                  </div>

                  <div className="pt-4 border-t border-white/10">
                    <p className="text-white/70 text-sm">
                      <strong className="text-white">Catatan:</strong> Menonaktifkan cookie tertentu dapat mempengaruhi fungsionalitas website dan pengalaman browsing Anda.
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Updates Section */}
      <section className="py-8 bg-[#0A192F]">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <AnimatedSection animation="fade-up">
              <div className="bg-[#0F1E37] border border-white/10 rounded-2xl p-8">
                <h3 className="text-xl font-bold text-white mb-4">
                  Perubahan pada Kebijakan Cookie
                </h3>
                <p className="text-white/80 leading-relaxed mb-4">
                  Kami dapat memperbarui kebijakan cookie ini dari waktu ke waktu untuk mencerminkan perubahan dalam praktik kami atau karena alasan operasional, hukum, atau peraturan lainnya.
                </p>
                <p className="text-white/80 leading-relaxed">
                  Kami menyarankan Anda untuk meninjau halaman ini secara berkala untuk tetap mendapat informasi tentang penggunaan cookie kami.
                </p>
              </div>
            </AnimatedSection>

            {/* Contact CTA */}
            <AnimatedSection animation="fade-up" delay={100}>
              <div className="text-center pt-8">
                <p className="text-white/70 mb-6">
                  Punya pertanyaan tentang penggunaan cookie kami?
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

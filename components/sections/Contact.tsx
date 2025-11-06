"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Send } from "lucide-react";

const contactInfo = [
  {
    icon: Mail,
    title: "Email",
    value: "hello@kreativlabs.id",
    link: "mailto:hello@kreativlabs.id",
  },
  {
    icon: Phone,
    title: "Phone",
    value: "+62 812-3456-7890",
    link: "tel:+6281234567890",
  },
  {
    icon: MapPin,
    title: "Location",
    value: "Jakarta, Indonesia",
    link: "#",
  },
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="relative py-24 bg-[#0A192F] overflow-hidden">
      {/* Lighting Effects */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#3B82F6] rounded-full blur-[120px] opacity-10"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#3B82F6] rounded-full blur-[120px] opacity-10"></div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Chat Ke <span className="text-[#3B82F6]">Kami</span>
          </h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Punya project atau pertanyaan? Jangan ragu untuk menghubungi kami
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Info */}
            <div className="lg:col-span-1 space-y-6">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <Card
                    key={index}
                    className="bg-[#0F1E37] border-white/10 p-6 hover:border-[#3B82F6]/50 transition-all duration-300"
                  >
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-[#3B82F6]/10 rounded-lg flex items-center justify-center">
                        <Icon className="w-6 h-6 text-[#3B82F6]" />
                      </div>
                      <div>
                        <h3 className="text-white font-semibold mb-1">
                          {info.title}
                        </h3>
                        <a
                          href={info.link}
                          className="text-white/70 text-sm hover:text-[#3B82F6] transition-colors"
                        >
                          {info.value}
                        </a>
                      </div>
                    </div>
                  </Card>
                );
              })}
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="bg-[#0F1E37] border-white/10 p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-white font-medium mb-2"
                    >
                      Nama
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Nama Anda"
                      value={formData.name}
                      onChange={handleChange}
                      className="bg-[#0A192F] border-white/10 text-white placeholder:text-white/40 focus:border-[#3B82F6]"
                      required
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-white font-medium mb-2"
                    >
                      Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="email@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      className="bg-[#0A192F] border-white/10 text-white placeholder:text-white/40 focus:border-[#3B82F6]"
                      required
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-white font-medium mb-2"
                    >
                      Pesan
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Ceritakan tentang project Anda..."
                      value={formData.message}
                      onChange={handleChange}
                      className="bg-[#0A192F] border-white/10 text-white placeholder:text-white/40 focus:border-[#3B82F6] min-h-[150px]"
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-[#3B82F6] hover:bg-[#3B82F6]/90 text-white group"
                  >
                    Kirim Pesan
                    <Send className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </form>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

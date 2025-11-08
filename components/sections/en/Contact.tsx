"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import emailjs from "@emailjs/browser";
import OptimizedParticles from "@/components/OptimizedParticles";
import AnimatedSection from "@/components/AnimatedSection";

const contactInfo = [
  {
    icon: Mail,
    title: "Email",
    value: "kreativlabsid@gmail.com",
    link: "mailto:kreativlabsid@gmail.com",
  },
  {
    icon: Phone,
    title: "Phone",
    value: "+62 895-3801-63004",
    link: "tel:+62895380163004",
  },
  {
    icon: MapPin,
    title: "Location",
    value: "Semarang, Indonesia",
    link: "#",
  },
];

export default function ContactEN() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: "" });

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );

      setSubmitStatus({
        type: "success",
        message: "Message sent successfully! We will contact you soon.",
      });
      
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      setSubmitStatus({
        type: "error",
        message: "Failed to send message. Please try again or contact us via WhatsApp.",
      });
      console.error("EmailJS Error:", error);
    } finally {
      setIsSubmitting(false);
    }
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
    <section id="contact" className="relative py-24 bg-[#0A192F] overflow-hidden overflow-x-hidden w-full">
      {/* Lighting Effects */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#3B82F6] rounded-full blur-[120px] opacity-10"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#3B82F6] rounded-full blur-[120px] opacity-10"></div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <AnimatedSection animation="fade-up">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Get In <span className="text-[#3B82F6]">Touch</span>
            </h2>
            <p className="text-white/70 text-lg max-w-2xl mx-auto">
              Have a project or question? Don't hesitate to contact us
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection animation="fade-up" delay={100}>
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
                      <div className="shrink-0 w-12 h-12 bg-[#3B82F6]/10 rounded-lg flex items-center justify-center">
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
                      Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Your Name"
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
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Tell us about your project..."
                      value={formData.message}
                      onChange={handleChange}
                      className="bg-[#0A192F] border-white/10 text-white placeholder:text-white/40 focus:border-[#3B82F6] min-h-[150px]"
                      required
                    />
                  </div>

                  {/* Status Message */}
                  {submitStatus.type && (
                    <div
                      className={`flex items-center gap-2 p-4 rounded-lg ${
                        submitStatus.type === "success"
                          ? "bg-green-500/10 border border-green-500/20 text-green-400"
                          : "bg-red-500/10 border border-red-500/20 text-red-400"
                      }`}
                    >
                      {submitStatus.type === "success" ? (
                        <CheckCircle className="w-5 h-5" />
                      ) : (
                        <AlertCircle className="w-5 h-5" />
                      )}
                      <p className="text-sm">{submitStatus.message}</p>
                    </div>
                  )}

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[#3B82F6] hover:bg-[#3B82F6]/90 text-white group disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </Button>
                </form>
              </Card>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
      
      {/* Interactive Particles - Desktop Only */}
      <OptimizedParticles quantity={50} />
    </section>
  );
}

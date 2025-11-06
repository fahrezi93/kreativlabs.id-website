"use client";

import { Instagram, Linkedin, Mail, Github } from "lucide-react";
import Image from "next/image";

const socialLinks = [
  {
    icon: Instagram,
    href: "https://instagram.com/kreativlabs.id",
    label: "Instagram",
  },
  {
    icon: Linkedin,
    href: "https://linkedin.com/company/kreativlabs",
    label: "LinkedIn",
  },
  {
    icon: Github,
    href: "https://github.com/kreativlabs",
    label: "GitHub",
  },
  {
    icon: Mail,
    href: "mailto:hello@kreativlabs.id",
    label: "Email",
  },
];

const footerLinks = {
  company: [
    { name: "About Us", href: "#about" },
    { name: "Our Services", href: "#services" },
    { name: "Portfolio", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ],
  services: [
    { name: "Web Development", href: "#services" },
    { name: "UI/UX Design", href: "#services" },
    { name: "Mobile App", href: "#services" },
    { name: "SEO", href: "#services" },
  ],
  legal: [
    { name: "Privacy Policy", href: "#" },
    { name: "Terms of Service", href: "#" },
    { name: "Cookie Policy", href: "#" },
  ],
};

export default function Footer() {
  return (
    <footer className="relative bg-[#0A192F] border-t border-white/10 overflow-hidden">
      {/* Lighting Effect */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-[#3B82F6] rounded-full blur-[120px] opacity-5"></div>

      <div className="container mx-auto px-6 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="mb-6">
              <Image 
                src="/logokreativ.png" 
                alt="KreativLabs.id" 
                width={80} 
                height={80}
                className="h-20 w-auto"
              />
            </div>
            <p className="text-white/70 text-sm mb-6 leading-relaxed">
              Solusi digital modern untuk bisnis Anda. Kami menciptakan website dan design yang menarik, fungsional, dan menghasilkan konversi.
            </p>
            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-white/5 hover:bg-[#3B82F6]/20 border border-white/10 hover:border-[#3B82F6] rounded-lg flex items-center justify-center transition-all duration-300 group"
                    aria-label={social.label}
                  >
                    <Icon className="w-5 h-5 text-white/70 group-hover:text-[#3B82F6] transition-colors" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-white/70 hover:text-[#3B82F6] text-sm transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-white/70 hover:text-[#3B82F6] text-sm transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Legal</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-white/70 hover:text-[#3B82F6] text-sm transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10">
          <div className="text-center">
            <p className="text-white/60 text-sm">
              © {new Date().getFullYear()} KreativLabs.id. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

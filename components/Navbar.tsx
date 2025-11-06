"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const navLinks = [
  { name: "Home", href: "#" },
  { name: "Projects", href: "#projects" },
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Pricing", href: "#pricing" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-[#0A192F]/80 backdrop-blur-xl shadow-lg shadow-[#3B82F6]/5"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20 relative">
          {/* Logo - Left */}
          <a href="#" className="flex items-center z-10">
            <Image 
              src="/logokreativ.png" 
              alt="KreativLabs.id" 
              width={40} 
              height={40}
              className="h-10 w-auto"
              priority
            />
          </a>

          {/* Desktop Navigation - Centered */}
          <div className="hidden md:flex items-center space-x-8 absolute left-1/2 -translate-x-1/2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-white/80 hover:text-[#3B82F6] transition-colors text-sm font-medium relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#3B82F6] transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </div>

          {/* CTA Button - Right */}
          <div className="hidden md:block">
            <Button className="bg-[#3B82F6] hover:bg-[#3B82F6]/90 text-white rounded-full px-6">
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white z-10 p-2 hover:bg-white/10 rounded-lg transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-6 bg-[#0A192F]/98 backdrop-blur-xl rounded-b-2xl border-t border-white/5 animate-in slide-in-from-top-5 duration-300">
            <div className="flex flex-col space-y-1">
              {navLinks.map((link, index) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-white hover:text-[#3B82F6] hover:bg-white/5 transition-all text-base font-medium px-6 py-3 rounded-lg mx-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                  style={{
                    animationDelay: `${index * 50}ms`,
                  }}
                >
                  {link.name}
                </a>
              ))}
              <div className="px-4 pt-4 mt-2 border-t border-white/5">
                <Button 
                  className="bg-[#3B82F6] hover:bg-[#3B82F6]/90 text-white w-full rounded-full py-6 text-base font-medium shadow-lg shadow-[#3B82F6]/30"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Get Started
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

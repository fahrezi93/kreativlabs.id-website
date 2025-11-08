"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Menu, X, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

const navLinks = [
  { name: "Home", href: "#" },
  { name: "Projects", href: "#projects" },
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Pricing", href: "#pricing" },
  { name: "Contact", href: "#contact" },
  { name: "Blog", href: "/en/blog" },
];

export default function NavbarEN() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const getInitialActiveSection = () => {
    if (pathname.startsWith('/en/blog')) return '/en/blog';
    if (pathname === '/en') return '#';
    return '';
  };
  
  const [activeSection, setActiveSection] = useState(getInitialActiveSection);

  useEffect(() => {
    const checkScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    checkScroll();
    window.addEventListener("scroll", checkScroll);
    return () => window.removeEventListener("scroll", checkScroll);
  }, []);

  useEffect(() => {
    if (pathname !== '/en') return;

    const handleScroll = () => {
      const sections = navLinks.map(link => link.href.replace('#', ''));
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        if (section === '') {
          if (window.scrollY < 100) {
            setActiveSection('#');
          }
          continue;
        }
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(`#${section}`);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [pathname]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-999 transition-all duration-500 ${
        isScrolled || isMobileMenuOpen
          ? "bg-[#0A192F]/95 backdrop-blur-xl shadow-lg shadow-[#3B82F6]/5"
          : "bg-transparent"
      }`}
      style={{ position: 'fixed' }}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20 relative">
          {/* Logo - Left */}
          <Link href="/en" className="flex items-center z-10">
            <Image 
              src="/logokreativ.png" 
              alt="KreativLabs.id" 
              width={40} 
              height={40}
              className="h-10 w-auto"
              priority
            />
          </Link>

          {/* Desktop Navigation - Centered */}
          <div className="hidden md:flex items-center space-x-8 absolute left-1/2 -translate-x-1/2">
            {navLinks.map((link) => {
              const isExternal = link.href.startsWith('/');
              const href = isExternal ? link.href : (pathname !== '/en' ? `/en/${link.href}` : link.href);
              const isActive = activeSection === link.href || (link.href.startsWith('/') && pathname.startsWith(link.href));
              
              return (
                <a
                  key={link.name}
                  href={href}
                  className={`text-sm font-medium relative group transition-colors ${
                    isActive
                      ? "text-[#3B82F6]"
                      : "text-white/80 hover:text-[#3B82F6]"
                  }`}
                >
                  {link.name}
                  <span className={`absolute -bottom-1 left-0 h-0.5 bg-[#3B82F6] transition-all duration-300 ${
                    isActive ? "w-full" : "w-0 group-hover:w-full"
                  }`}></span>
                </a>
              );
            })}
          </div>

          {/* Language Switcher & CTA - Right */}
          <div className="hidden md:flex items-center gap-3">
            <Link 
              href="/"
              className="flex items-center gap-2 px-4 py-2 text-white/70 hover:text-[#3B82F6] transition-colors rounded-lg hover:bg-white/5"
            >
              <Globe className="w-4 h-4" />
              <span className="text-sm">ID</span>
            </Link>
            <Button asChild className="bg-[#3B82F6] hover:bg-[#3B82F6]/90 text-white rounded-full px-6">
              <a href={pathname !== '/en' ? '/en/#contact' : '#contact'}>Get Started</a>
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
        <div 
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isMobileMenuOpen 
              ? 'max-h-[600px] opacity-100' 
              : 'max-h-0 opacity-0'
          }`}
        >
          <div className="py-6 bg-[#0A192F] backdrop-blur-xl rounded-b-2xl shadow-xl">
            <div className="flex flex-col space-y-1">
              {navLinks.map((link, index) => {
                const isExternal = link.href.startsWith('/');
                const href = isExternal ? link.href : (pathname !== '/en' ? `/en/${link.href}` : link.href);
                const isActive = activeSection === link.href || (link.href.startsWith('/') && pathname.startsWith(link.href));
                
                return (
                  <a
                    key={link.name}
                    href={href}
                    className={`text-base font-medium px-6 py-3 rounded-lg mx-2 transition-all ${
                      isActive
                        ? "text-[#3B82F6] bg-white/10"
                        : "text-white hover:text-[#3B82F6] hover:bg-white/5"
                    }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                    style={{
                      animationDelay: `${index * 50}ms`,
                    }}
                  >
                    {link.name}
                  </a>
                );
              })}
              
              {/* Language Switcher Mobile */}
              <Link 
                href="/"
                className="flex items-center gap-2 px-6 py-3 mx-2 text-white/70 hover:text-[#3B82F6] hover:bg-white/5 rounded-lg transition-all"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <Globe className="w-4 h-4" />
                <span className="text-base">Bahasa Indonesia</span>
              </Link>

              <div className="px-4 pt-4 mt-2 border-t border-white/5">
                <Button 
                  asChild
                  className="bg-[#3B82F6] hover:bg-[#3B82F6]/90 text-white w-full rounded-full py-6 text-base font-medium shadow-lg shadow-[#3B82F6]/30"
                >
                  <a href={pathname !== '/en' ? '/en/#contact' : '#contact'} onClick={() => setIsMobileMenuOpen(false)}>Get Started</a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

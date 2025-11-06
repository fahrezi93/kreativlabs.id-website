"use client";

import { Card } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "E-Commerce Platform",
    category: "Web Development",
    description: "Platform e-commerce modern dengan fitur lengkap dan user-friendly",
    image: "/api/placeholder/400/300",
  },
  {
    title: "Corporate Website",
    category: "Web Design",
    description: "Website perusahaan profesional dengan desain minimalis dan elegan",
    image: "/api/placeholder/400/300",
  },
  {
    title: "Mobile App Design",
    category: "UI/UX Design",
    description: "Desain aplikasi mobile yang intuitif dan modern",
    image: "/api/placeholder/400/300",
  },
  {
    title: "Landing Page",
    category: "Web Development",
    description: "Landing page dengan konversi tinggi untuk bisnis digital",
    image: "/api/placeholder/400/300",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative py-24 bg-[#0A192F] overflow-hidden">
      {/* Lighting Effect */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#3B82F6] rounded-full blur-[120px] opacity-10"></div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our <span className="text-[#3B82F6]">Projects</span>
          </h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Beberapa project yang telah kami kerjakan dengan hasil yang memuaskan
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="group bg-[#0F1E37] border-white/10 hover:border-[#3B82F6]/50 transition-all duration-300 overflow-hidden cursor-pointer"
            >
              {/* Project Image */}
              <div className="relative h-64 bg-[#1E3A5F] overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[#3B82F6]/20 to-transparent"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-32 h-32 bg-[#3B82F6]/20 rounded-full blur-xl"></div>
                </div>
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="bg-[#3B82F6] p-2 rounded-full">
                    <ExternalLink className="w-5 h-5 text-white" />
                  </div>
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6">
                <div className="text-[#3B82F6] text-sm font-semibold mb-2">
                  {project.category}
                </div>
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#3B82F6] transition-colors">
                  {project.title}
                </h3>
                <p className="text-white/70 text-sm">
                  {project.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

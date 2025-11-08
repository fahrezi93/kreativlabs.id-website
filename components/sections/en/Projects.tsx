"use client";

import { Card } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";
import OptimizedParticles from "@/components/OptimizedParticles";
import Image from "next/image";
import AnimatedSection from "@/components/AnimatedSection";
import FadeInStagger from "@/components/FadeInStagger";
import Link from "next/link";
import { projects } from "@/data/projects";

export default function ProjectsEN() {
  return (
    <section id="projects" className="relative py-24 bg-[#0A192F] overflow-hidden overflow-x-hidden w-full">
      {/* Lighting Effect */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#3B82F6] rounded-full blur-[120px] opacity-10"></div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <AnimatedSection animation="fade-up">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Our <span className="text-[#3B82F6]">Projects</span>
            </h2>
            <p className="text-white/70 text-lg max-w-2xl mx-auto">
              Some of the projects we have completed with satisfying results
            </p>
          </div>
        </AnimatedSection>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <FadeInStagger key={project.id} index={index} delay={100}>
              <Link href={`/projects/${project.id}`}>
                <Card
                  className="group bg-[#0F1E37] border-white/10 hover:border-[#3B82F6]/50 transition-all duration-300 overflow-hidden cursor-pointer"
                >
                {/* Project Image */}
                <div className="relative h-64 bg-[#1E3A5F] overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-[#0F1E37] via-transparent to-transparent opacity-60"></div>
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity z-10">
                    <div className="bg-[#3B82F6] p-2 rounded-full shadow-lg">
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
              </Link>
            </FadeInStagger>
          ))}
        </div>
      </div>
      
      {/* Interactive Particles - Desktop Only */}
      <OptimizedParticles quantity={50} />
    </section>
  );
}

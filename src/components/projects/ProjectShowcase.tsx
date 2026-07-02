"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { projects } from "@/data/projects";
import { ProjectSection } from "./ProjectSection";
import { cn } from "@/lib/utils";

export function ProjectShowcase() {
  const [activeProject, setActiveProject] = useState(projects[0].slug);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    projects.forEach((project) => {
      const el = document.getElementById(project.slug);
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveProject(project.slug);
          }
        },
        { rootMargin: "-30% 0px -50% 0px" }
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <section id="projects" className="section-padding relative" aria-labelledby="projects-heading">
      <div className="container-width">
        <SectionHeading
          label="Projects"
          title="Products I've shipped"
          description="Clinical computer vision, food & beverage automation, F1 fantasy infrastructure, Flutter + AI journaling, and RAG for process engineers."
        />
      </div>

      {/* Sticky project navigation */}
      <div className="sticky top-20 z-30 mb-8 hidden lg:block">
        <div className="container-width">
          <nav
            className="glass rounded-full px-2 py-2 inline-flex gap-1"
            aria-label="Project navigation"
          >
            {projects.map((project) => (
              <a
                key={project.slug}
                href={`#${project.slug}`}
                className={cn(
                  "relative px-5 py-2 text-sm rounded-full transition-colors",
                  activeProject === project.slug
                    ? "text-foreground"
                    : "text-muted hover:text-foreground"
                )}
              >
                {project.name}
                {activeProject === project.slug && (
                  <motion.span
                    layoutId="project-nav-indicator"
                    className="absolute inset-0 rounded-full bg-white/[0.06] -z-10"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </a>
            ))}
          </nav>
        </div>
      </div>

      <div>
        {projects.map((project, index) => (
          <ProjectSection key={project.id} project={project} index={index} />
        ))}
      </div>
    </section>
  );
}
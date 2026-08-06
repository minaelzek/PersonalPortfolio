"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { projects } from "@/data/projects";
import { ProjectSection } from "./ProjectSection";
import { cn } from "@/lib/utils";

export function ProjectShowcase() {
  const [activeProject, setActiveProject] = useState(projects[0].slug);
  const navRef = useRef<HTMLElement>(null);
  const chipRefs = useRef<Record<string, HTMLAnchorElement | null>>({});

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
        { rootMargin: "-35% 0px -45% 0px", threshold: 0 }
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  // Keep active chip visible in the horizontal scroller
  useEffect(() => {
    const chip = chipRefs.current[activeProject];
    if (!chip) return;
    chip.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center",
    });
  }, [activeProject]);

  return (
    <section
      id="projects"
      className="relative pb-[clamp(4rem,8vw,7rem)]"
      aria-labelledby="projects-heading"
    >
      <div className="container-width pt-[clamp(4rem,8vw,7rem)]">
        <SectionHeading
          label="Projects"
          title="Products I've shipped"
          description="Industrial multi-agent AI, clinical computer vision, plant-floor automation, live F1 fantasy, and privacy-first journaling."
        />
      </div>

      {/* Sticky project jump nav — scrolls horizontally, works on mobile */}
      <div className="sticky top-16 md:top-[4.5rem] z-30 mb-2 border-y border-border/60 bg-background/80 backdrop-blur-xl">
        <div className="container-width">
          <nav
            ref={navRef}
            className="flex gap-1.5 overflow-x-auto scrollbar-none py-2.5 -mx-1 px-1"
            aria-label="Jump to project"
          >
            {projects.map((project) => {
              const active = activeProject === project.slug;
              return (
                <a
                  key={project.slug}
                  ref={(node) => {
                    chipRefs.current[project.slug] = node;
                  }}
                  href={`#${project.slug}`}
                  className={cn(
                    "relative shrink-0 px-3.5 py-1.5 text-sm rounded-full transition-colors whitespace-nowrap",
                    active
                      ? "text-foreground"
                      : "text-muted hover:text-foreground"
                  )}
                  aria-current={active ? "true" : undefined}
                >
                  {project.shortName}
                  {active && (
                    <motion.span
                      layoutId="project-nav-indicator"
                      className="absolute inset-0 rounded-full bg-white/[0.08] -z-10"
                      transition={{ type: "spring", stiffness: 400, damping: 32 }}
                    />
                  )}
                </a>
              );
            })}
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

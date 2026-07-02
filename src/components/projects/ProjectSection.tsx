"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import type { ProjectData } from "@/data/projects";
import { PodiumPicksVisual } from "./PodiumPicksVisual";
import { SeedJournalVisual } from "./SeedJournalVisual";
import { RAGVisual } from "./RAGVisual";
import { PolypDetectionVisual } from "./PolypDetectionVisual";
import { IndustrialVisual } from "./IndustrialVisual";

interface ProjectSectionProps {
  project: ProjectData;
  index: number;
}

function ProjectVisual({ project }: { project: ProjectData }) {
  switch (project.theme) {
    case "racing":
      return <PodiumPicksVisual />;
    case "sakura":
      return <SeedJournalVisual />;
    case "ai":
      return <RAGVisual />;
    case "vision":
      return <PolypDetectionVisual />;
    case "industrial":
      return <IndustrialVisual />;
    default:
      return null;
  }
}

export function ProjectSection({ project, index }: ProjectSectionProps) {
  const reducedMotion = useReducedMotion();
  const isReversed = index % 2 === 1;
  const isFeatured = project.id === "polyp-detection" || project.theme === "sakura";

  return (
    <article
      id={project.slug}
      className={`relative ${isFeatured ? "py-24 md:py-32" : "py-16 md:py-24"}`}
      aria-labelledby={`${project.id}-title`}
    >
      {isFeatured && (
        <div
          className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-transparent pointer-events-none"
          style={{
            backgroundImage: `linear-gradient(to bottom, ${project.accent}08, transparent, transparent)`,
          }}
          aria-hidden="true"
        />
      )}

      <div className="container-width relative">
        {/* Project header */}
        <motion.div
          className="mb-12 md:mb-16"
          initial={reducedMotion ? false : { opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
        >
          <span
            className="inline-flex items-center gap-3 text-sm font-medium tracking-widest uppercase mb-4"
            style={{ color: project.accent }}
          >
            <span className="w-8 h-px" style={{ backgroundColor: project.accent }} aria-hidden="true" />
            Featured Project {String(index + 1).padStart(2, "0")}
          </span>
          <h3
            id={`${project.id}-title`}
            className={`font-semibold tracking-tight gradient-text leading-[1.1] ${
              isFeatured ? "text-5xl md:text-6xl lg:text-7xl" : "text-4xl md:text-5xl lg:text-6xl"
            }`}
          >
            {project.name}
          </h3>
          <p className="mt-4 text-xl text-muted max-w-2xl">{project.tagline}</p>
        </motion.div>

        {/* Visual + Content grid */}
        <div
          className={`grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-16 ${
            isReversed ? "lg:[direction:rtl] lg:*:[direction:ltr]" : ""
          }`}
        >
          <motion.div
            initial={reducedMotion ? false : { opacity: 0, x: isReversed ? 40 : -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, ease: [0.25, 0.4, 0.25, 1] }}
          >
            <ProjectVisual project={project} />
          </motion.div>

          <motion.div
            initial={reducedMotion ? false : { opacity: 0, x: isReversed ? -40 : 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, ease: [0.25, 0.4, 0.25, 1] }}
          >
            <p className="text-lg text-muted leading-relaxed mb-8">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-3 mb-8">
              {project.github && (
                <Button href={project.github} variant="secondary" size="sm" external magnetic>
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="currentColor" aria-hidden="true">
                    <path d="M7 0C3.13 0 0 3.2 0 7.14c0 3.15 2.03 5.82 4.84 6.77.35.07.48-.15.48-.34 0-.17-.01-.62-.01-1.21-1.97.43-2.39-.95-2.39-.95-.32-.82-.79-1.04-.79-1.04-.65-.44.05-.43.05-.43.72.05 1.1.74 1.1.74.64 1.1 1.68.78 2.09.6.07-.47.25-.78.45-.96-1.57-.18-3.22-.79-3.22-3.52 0-.78.28-1.41.73-1.91-.07-.18-.32-.9.07-1.87 0 0 .6-.19 1.96.73.57-.16 1.18-.24 1.79-.24.61 0 1.22.08 1.79.24 1.36-.92 1.96-.73 1.96-.73.39.97.14 1.69.07 1.87.45.5.73 1.13.73 1.91 0 2.74-1.66 3.34-3.24 3.51.26.22.48.65.48 1.31 0 .95-.01 1.71-.01 1.95 0 .19.13.41.49.34A7.01 7.01 0 0014 7.14C14 3.2 10.87 0 7 0z" />
                  </svg>
                  Repository
                </Button>
              )}
              {project.live && (
                <Button href={project.live} variant="primary" size="sm" external magnetic>
                  Live Demo
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                    <path d="M3 7H11M11 7L8 4M11 7L8 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Button>
              )}
            </div>

            {/* Metrics */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {project.metrics.map((metric) => (
                <div
                  key={metric.label}
                  className="glass rounded-xl p-3 text-center"
                >
                  <p className="text-lg font-semibold font-mono" style={{ color: project.accent }}>
                    {metric.value}
                  </p>
                  <p className="text-[10px] text-muted-foreground uppercase tracking-wider mt-1">
                    {metric.label}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Details grid */}
        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {[
            { title: "Challenge", content: project.challenge },
            { title: "Solution", content: project.solution },
            { title: "Architecture", content: project.architecture },
            {
              title: "Engineering Decisions",
              content: project.decisions,
              isList: true,
            },
          ].map((section, i) => (
            <motion.div
              key={section.title}
              className={`glass rounded-2xl p-6 md:p-8 ${
                section.title === "Architecture" || section.title === "Engineering Decisions"
                  ? "md:col-span-1"
                  : ""
              }`}
              initial={reducedMotion ? false : { opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <h4 className="text-xs font-medium tracking-widest uppercase text-accent mb-4">
                {section.title}
              </h4>
              {"isList" in section && section.isList ? (
                <ul className="space-y-3" role="list">
                  {(section.content as string[]).map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-muted leading-relaxed">
                      <span className="mt-2 w-1 h-1 rounded-full bg-accent shrink-0" aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-sm text-muted leading-relaxed">
                  {section.content as string}
                </p>
              )}
            </motion.div>
          ))}

          {/* Tech stack */}
          <motion.div
            className="glass rounded-2xl p-6 md:p-8 md:col-span-2"
            initial={reducedMotion ? false : { opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h4 className="text-xs font-medium tracking-widest uppercase text-accent mb-4">
              Tech Stack
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1.5 text-xs font-mono rounded-lg bg-white/[0.04] text-foreground/80 border border-border hover:border-white/12 transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {index < 2 && (
        <div className="container-width mt-24">
          <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent" aria-hidden="true" />
        </div>
      )}
    </article>
  );
}
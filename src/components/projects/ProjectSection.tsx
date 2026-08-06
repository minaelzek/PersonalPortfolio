"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import type { ProjectData } from "@/data/projects";
import { projects } from "@/data/projects";
import { PodiumPicksVisual } from "./PodiumPicksVisual";
import { SeedJournalVisual } from "./SeedJournalVisual";
import { RAGVisual } from "./RAGVisual";
import { PolypDetectionVisual } from "./PolypDetectionVisual";
import { IndustrialVisual } from "./IndustrialVisual";
import { cn } from "@/lib/utils";

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
  const isFeatured = Boolean(project.featured);
  const isLast = index === projects.length - 1;
  const projectNumber = String(index + 1).padStart(2, "0");

  return (
    <article
      id={project.slug}
      className={cn(
        "relative",
        isFeatured ? "py-14 md:py-20" : "py-12 md:py-16"
      )}
      aria-labelledby={`${project.id}-title`}
    >
      {isFeatured && (
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: `linear-gradient(180deg, ${project.accent}0c 0%, transparent 40%)`,
          }}
          aria-hidden="true"
        />
      )}

      <div className="container-width relative">
        {/* Header */}
        <motion.div
          className="mb-8 md:mb-10 max-w-3xl"
          initial={reducedMotion ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, ease: [0.25, 0.4, 0.25, 1] }}
        >
          <div className="flex flex-wrap items-center gap-3 mb-3">
            <span
              className="inline-flex items-center gap-2 text-xs font-medium tracking-widest uppercase"
              style={{ color: project.accent }}
            >
              <span
                className="w-6 h-px"
                style={{ backgroundColor: project.accent }}
                aria-hidden="true"
              />
              Project {projectNumber}
            </span>
            {isFeatured && (
              <span
                className="text-[10px] font-medium uppercase tracking-wider px-2 py-0.5 rounded-full border"
                style={{
                  color: project.accent,
                  borderColor: `${project.accent}44`,
                  backgroundColor: `${project.accent}12`,
                }}
              >
                Featured
              </span>
            )}
          </div>
          <h3
            id={`${project.id}-title`}
            className={cn(
              "font-semibold tracking-tight text-foreground leading-[1.15]",
              isFeatured
                ? "text-3xl sm:text-4xl md:text-5xl"
                : "text-2xl sm:text-3xl md:text-4xl"
            )}
          >
            {project.name}
          </h3>
          <p className="mt-3 text-base md:text-lg text-muted max-w-2xl leading-relaxed">
            {project.tagline}
          </p>
        </motion.div>

        {/* Visual + summary */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start mb-10 md:mb-12">
          <motion.div
            className={cn(
              "min-w-0 w-full",
              isReversed && "lg:order-2"
            )}
            initial={reducedMotion ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.55, ease: [0.25, 0.4, 0.25, 1] }}
          >
            <div className="relative overflow-visible">
              <ProjectVisual project={project} />
            </div>
          </motion.div>

          <motion.div
            className={cn("min-w-0", isReversed && "lg:order-1")}
            initial={reducedMotion ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.55, delay: 0.05, ease: [0.25, 0.4, 0.25, 1] }}
          >
            <p className="text-base text-muted leading-relaxed mb-6">
              {project.description}
            </p>

            {(project.github || project.live) && (
              <div className="flex flex-wrap gap-3 mb-8">
                {project.live && (
                  <Button href={project.live} variant="primary" size="sm" external>
                    Live site
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                      <path
                        d="M5 3H3.5A1.5 1.5 0 002 4.5v6A1.5 1.5 0 003.5 12h6A1.5 1.5 0 0011 10.5V9M8 2h4m0 0v4m0-4L6 8"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </Button>
                )}
                {project.github && (
                  <Button href={project.github} variant="secondary" size="sm" external>
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="currentColor" aria-hidden="true">
                      <path d="M7 0C3.13 0 0 3.2 0 7.14c0 3.15 2.03 5.82 4.84 6.77.35.07.48-.15.48-.34 0-.17-.01-.62-.01-1.21-1.97.43-2.39-.95-2.39-.95-.32-.82-.79-1.04-.79-1.04-.65-.44.05-.43.05-.43.72.05 1.1.74 1.1.74.64 1.1 1.68.78 2.09.6.07-.47.25-.78.45-.96-1.57-.18-3.22-.79-3.22-3.52 0-.78.28-1.41.73-1.91-.07-.18-.32-.9.07-1.87 0 0 .6-.19 1.96.73.57-.16 1.18-.24 1.79-.24.61 0 1.22.08 1.79.24 1.36-.92 1.96-.73 1.96-.73.39.97.14 1.69.07 1.87.45.5.73 1.13.73 1.91 0 2.74-1.66 3.34-3.24 3.51.26.22.48.65.48 1.31 0 .95-.01 1.71-.01 1.95 0 .19.13.41.49.34A7.01 7.01 0 0014 7.14C14 3.2 10.87 0 7 0z" />
                    </svg>
                    Code
                  </Button>
                )}
              </div>
            )}

            <div className="grid grid-cols-2 gap-2 sm:gap-3">
              {project.metrics.map((metric) => (
                <div
                  key={metric.label}
                  className="glass rounded-xl px-3 py-3 sm:px-4 min-w-0"
                >
                  <p
                    className="text-base sm:text-lg font-semibold font-mono tabular-nums truncate"
                    style={{ color: project.accent }}
                    title={metric.value}
                  >
                    {metric.value}
                  </p>
                  <p className="text-[11px] text-muted-foreground mt-0.5 leading-snug">
                    {metric.label}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Details */}
        <div className="grid sm:grid-cols-2 gap-3 md:gap-4">
          {[
            { title: "Challenge", content: project.challenge },
            { title: "Solution", content: project.solution },
            { title: "Architecture", content: project.architecture },
            {
              title: "Key decisions",
              content: project.decisions,
              isList: true as const,
            },
          ].map((section, i) => (
            <motion.div
              key={section.title}
              className="glass rounded-xl p-5 md:p-6 min-w-0"
              initial={reducedMotion ? false : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
            >
              <h4 className="text-[11px] font-medium tracking-widest uppercase text-accent mb-3">
                {section.title}
              </h4>
              {"isList" in section && section.isList ? (
                <ul className="space-y-2.5" role="list">
                  {(section.content as string[]).map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2.5 text-sm text-muted leading-relaxed"
                    >
                      <span
                        className="mt-2 w-1 h-1 rounded-full bg-accent shrink-0"
                        aria-hidden="true"
                      />
                      <span className="min-w-0">{item}</span>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-sm text-muted leading-relaxed break-words">
                  {section.content as string}
                </p>
              )}
            </motion.div>
          ))}

          <motion.div
            className="glass rounded-xl p-5 md:p-6 sm:col-span-2 min-w-0"
            initial={reducedMotion ? false : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-30px" }}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            <h4 className="text-[11px] font-medium tracking-widest uppercase text-accent mb-3">
              Tech stack
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 text-xs font-mono rounded-md bg-white/[0.04] text-foreground/85 border border-border"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        </div>

        {!isLast && (
          <div
            className="mt-12 md:mt-16 h-px bg-gradient-to-r from-transparent via-border to-transparent"
            aria-hidden="true"
          />
        )}
      </div>
    </article>
  );
}

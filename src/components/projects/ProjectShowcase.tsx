"use client";

import { motion, useReducedMotion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { projects } from "@/data/projects";
import { ProjectSection } from "./ProjectSection";
import { cn } from "@/lib/utils";

/**
 * Selected work — recruiter-first:
 * 1. Scannable index (who / what / live?) in one glance
 * 2. Deep-dive case studies below (no second sticky header)
 */
export function ProjectShowcase() {
  const reducedMotion = useReducedMotion();

  return (
    <section
      id="work"
      className="section-padding relative"
      aria-labelledby="work-heading"
    >
      <div className="container-width">
        <SectionHeading
          label="Selected work"
          title="Products and systems I've shipped"
          description="Clinical CV, industrial multi-agent AI, plant-floor automation, and consumer products in production. Pick a case study or scroll for the full story."
        />

        {/* Work index — replaces sticky project pills */}
        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-14 md:mb-16"
          initial={reducedMotion ? false : { opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.45 }}
        >
          {projects.map((project, i) => (
            <a
              key={project.id}
              href={`#${project.slug}`}
              className={cn(
                "group relative glass rounded-xl p-4 md:p-5 transition-colors duration-200",
                "hover:border-white/15 hover:bg-white/[0.045] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              )}
              style={{
                // subtle accent rail
                boxShadow: `inset 3px 0 0 0 ${project.accent}99`,
              }}
            >
              <div className="flex items-start justify-between gap-3 mb-2">
                <span className="text-[11px] font-mono text-muted-foreground tabular-nums">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="flex items-center gap-1.5 shrink-0">
                  {project.featured && (
                    <span
                      className="text-[10px] uppercase tracking-wider px-1.5 py-0.5 rounded border"
                      style={{
                        color: project.accent,
                        borderColor: `${project.accent}55`,
                      }}
                    >
                      Featured
                    </span>
                  )}
                  {project.live && (
                    <span className="text-[10px] uppercase tracking-wider px-1.5 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/25">
                      Live
                    </span>
                  )}
                </div>
              </div>
              <h3 className="text-base font-semibold text-foreground group-hover:text-white transition-colors">
                {project.name}
              </h3>
              <p className="mt-1 text-sm text-muted leading-snug line-clamp-2">
                {project.tagline}
              </p>
              <p className="mt-3 text-xs text-muted-foreground font-mono truncate">
                {project.techStack.slice(0, 3).join(" · ")}
              </p>
            </a>
          ))}
        </motion.div>
      </div>

      <div>
        {projects.map((project, index) => (
          <ProjectSection key={project.id} project={project} index={index} />
        ))}
      </div>
    </section>
  );
}

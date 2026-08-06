"use client";

import { motion, useReducedMotion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { experience } from "@/data/experience";

export function Experience() {
  const reducedMotion = useReducedMotion();

  return (
    <section id="experience" className="section-padding relative" aria-labelledby="experience-heading">
      <div className="container-width">
        <SectionHeading
          label="Experience"
          title="Roles and engagements"
          description="LLM evaluation at Outlier AI, plus independent forward-deployed work across clinical AI, industrial automation, and shipped products."
        />

        <div className="relative">
          {/* Timeline line */}
          <div
            className="absolute left-0 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-accent/40 via-border to-transparent"
            aria-hidden="true"
          />

          <div className="space-y-6 md:space-y-8">
            {experience.map((item, i) => (
              <motion.article
                key={item.id}
                className="relative pl-7 md:pl-16"
                initial={reducedMotion ? false : { opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{
                  duration: 0.45,
                  delay: i * 0.06,
                  ease: [0.25, 0.4, 0.25, 1],
                }}
              >
                <div
                  className="absolute left-0 md:left-8 top-5 -translate-x-1/2 w-2.5 h-2.5 rounded-full bg-accent border-2 border-background shadow-md shadow-accent/25"
                  aria-hidden="true"
                />

                <div className="glass rounded-xl p-5 md:p-6 transition-colors duration-200 hover:border-white/12 hover:bg-white/[0.04]">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                    <div className="min-w-0">
                      <h3 className="text-lg md:text-xl font-semibold text-foreground">
                        {item.role}
                      </h3>
                      <p className="text-accent font-medium text-sm md:text-base">
                        {item.company}
                      </p>
                    </div>
                    <time className="text-xs sm:text-sm text-muted-foreground font-mono shrink-0 sm:pt-1">
                      {item.period}
                    </time>
                  </div>

                  <p className="text-sm md:text-base text-muted leading-relaxed mb-4">
                    {item.description}
                  </p>

                  <ul className="space-y-2 mb-4" role="list">
                    {item.highlights.map((highlight) => (
                      <li
                        key={highlight}
                        className="flex items-start gap-2.5 text-sm text-muted"
                      >
                        <span
                          className="mt-2 w-1 h-1 rounded-full bg-accent shrink-0"
                          aria-hidden="true"
                        />
                        <span className="min-w-0">{highlight}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-1.5">
                    {item.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 text-xs font-mono rounded-md bg-white/[0.04] text-muted-foreground border border-border"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
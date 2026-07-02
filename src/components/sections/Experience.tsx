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
          title="Where I've built"
          description="RLHF and model evaluation at Outlier AI, plus independent forward-deployed work across clinical AI, industrial automation, and full-stack products."
        />

        <div className="relative">
          {/* Timeline line */}
          <div
            className="absolute left-0 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-accent/40 via-border to-transparent"
            aria-hidden="true"
          />

          <div className="space-y-12 md:space-y-16">
            {experience.map((item, i) => (
              <motion.article
                key={item.id}
                className="relative pl-8 md:pl-20"
                initial={reducedMotion ? false : { opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 0.5,
                  delay: i * 0.1,
                  ease: [0.25, 0.4, 0.25, 1],
                }}
              >
                {/* Timeline marker */}
                <div
                  className="absolute left-0 md:left-8 top-2 -translate-x-1/2 w-3 h-3 rounded-full bg-accent border-2 border-background shadow-lg shadow-accent/30"
                  aria-hidden="true"
                />

                <div className="glass rounded-2xl p-6 md:p-8 transition-all duration-300 hover:border-white/12 hover:bg-white/[0.04]">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-foreground">
                        {item.role}
                      </h3>
                      <p className="text-accent font-medium">{item.company}</p>
                    </div>
                    <time className="text-sm text-muted-foreground font-mono">
                      {item.period}
                    </time>
                  </div>

                  <p className="text-muted leading-relaxed mb-6">
                    {item.description}
                  </p>

                  <ul className="space-y-2 mb-6" role="list">
                    {item.highlights.map((highlight) => (
                      <li
                        key={highlight}
                        className="flex items-start gap-3 text-sm text-muted"
                      >
                        <span className="mt-2 w-1 h-1 rounded-full bg-accent shrink-0" aria-hidden="true" />
                        {highlight}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {item.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs font-mono rounded-full bg-white/[0.04] text-muted-foreground border border-border"
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
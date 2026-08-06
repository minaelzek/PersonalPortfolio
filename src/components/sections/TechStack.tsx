"use client";

import { motion, useReducedMotion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { techStack } from "@/data/techStack";

export function TechStack() {
  const reducedMotion = useReducedMotion();

  return (
    <section id="stack" className="section-padding relative" aria-labelledby="stack-heading">
      <div className="container-width">
        <SectionHeading
          label="Stack"
          title="Tools I reach for"
          description="Tools across AI/ML, full-stack, data engineering, and industrial automation—aligned to production deployment, not toy demos."
          align="center"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
          {techStack.map((category, i) => (
            <motion.div
              key={category.name}
              className="glass rounded-xl p-5 transition-colors duration-200 hover:border-white/12 hover:bg-white/[0.04]"
              initial={reducedMotion ? false : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                duration: 0.4,
                delay: Math.min(i * 0.04, 0.24),
                ease: [0.25, 0.4, 0.25, 1],
              }}
            >
              <h3 className="text-[11px] font-medium tracking-widest uppercase text-accent mb-3">
                {category.name}
              </h3>
              <ul className="flex flex-wrap gap-1.5" role="list">
                {category.items.map((item) => (
                  <li
                    key={item}
                    className="text-xs sm:text-sm text-foreground/90 px-2 py-1 rounded-md bg-white/[0.04] border border-border"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
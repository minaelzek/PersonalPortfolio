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

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {techStack.map((category, i) => (
            <motion.div
              key={category.name}
              className="glass rounded-2xl p-6 transition-all duration-300 hover:border-white/12 hover:bg-white/[0.04]"
              initial={reducedMotion ? false : { opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                duration: 0.5,
                delay: i * 0.05,
                ease: [0.25, 0.4, 0.25, 1],
              }}
            >
              <h3 className="text-xs font-medium tracking-widest uppercase text-accent mb-4">
                {category.name}
              </h3>
              <ul className="space-y-2.5" role="list">
                {category.items.map((item) => (
                  <li
                    key={item}
                    className="text-sm text-foreground/90 font-medium flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 rounded-sm bg-accent/40 shrink-0" aria-hidden="true" />
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
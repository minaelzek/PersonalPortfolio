"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/data/site";

export function Contact() {
  const reducedMotion = useReducedMotion();

  return (
    <section id="contact" className="section-padding relative" aria-labelledby="contact-heading">
      <div className="container-width">
        <motion.div
          className="relative glass rounded-3xl p-10 md:p-16 lg:p-20 text-center overflow-hidden"
          initial={reducedMotion ? false : { opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
        >
          <div
            className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-transparent pointer-events-none"
            aria-hidden="true"
          />

          <span className="inline-flex items-center gap-3 text-sm font-medium tracking-widest uppercase text-accent mb-6">
            <span className="w-8 h-px bg-accent" aria-hidden="true" />
            Contact
          </span>

          <h2
            id="contact-heading"
            className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight gradient-text leading-[1.1] mb-6"
          >
            Let&apos;s build something remarkable
          </h2>

          <p className="text-lg text-muted max-w-2xl mx-auto mb-4 leading-relaxed">
            {siteConfig.openTo}
          </p>
          <p className="text-sm text-muted-foreground max-w-xl mx-auto mb-10">
            Based in the {siteConfig.location}. Reach out for FDE, solutions
            engineering, or technical consulting engagements.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button
              href={`mailto:${siteConfig.email}`}
              variant="primary"
              size="lg"
              magnetic
            >
              Send an email
            </Button>
            <Button
              href={siteConfig.linkedin}
              variant="secondary"
              size="lg"
              external
              magnetic
            >
              LinkedIn
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
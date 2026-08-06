"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/data/site";

export function Contact() {
  const reducedMotion = useReducedMotion();

  return (
    <section
      id="contact"
      className="section-padding relative"
      aria-labelledby="contact-heading"
    >
      <div className="container-width">
        <motion.div
          className="relative glass rounded-2xl md:rounded-3xl p-8 md:p-12 lg:p-14 text-center overflow-hidden"
          initial={reducedMotion ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, ease: [0.25, 0.4, 0.25, 1] }}
        >
          <div
            className="absolute inset-0 bg-gradient-to-br from-accent/8 via-transparent to-transparent pointer-events-none"
            aria-hidden="true"
          />

          <span className="inline-flex items-center gap-2.5 text-xs font-medium tracking-widest uppercase text-accent mb-4">
            <span className="w-6 h-px bg-accent" aria-hidden="true" />
            Contact
          </span>

          <h2
            id="contact-heading"
            className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-foreground leading-[1.15] mb-4"
          >
            Let&apos;s talk about the role
          </h2>

          <p className="text-base md:text-lg text-muted max-w-xl mx-auto mb-2 leading-relaxed">
            {siteConfig.openTo}
          </p>
          <p className="text-sm text-muted-foreground max-w-lg mx-auto mb-6">
            Fastest path: email or LinkedIn. Resume is one click in the header.
          </p>

          <a
            href={`mailto:${siteConfig.email}`}
            className="inline-block text-sm font-mono text-accent hover:text-accent-light transition-colors mb-8 break-all"
          >
            {siteConfig.email}
          </a>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <Button href={`mailto:${siteConfig.email}`} variant="primary" size="lg">
              Email me
            </Button>
            <Button href={siteConfig.resume} variant="secondary" size="lg" external>
              Resume PDF
            </Button>
            <Button href={siteConfig.linkedin} variant="ghost" size="lg" external>
              LinkedIn
            </Button>
            <Button href={siteConfig.github} variant="ghost" size="lg" external>
              GitHub
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

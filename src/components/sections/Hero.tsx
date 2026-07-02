"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { TextReveal } from "@/components/ui/TextReveal";
import { siteConfig } from "@/data/site";

export function Hero() {
  const reducedMotion = useReducedMotion();

  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      aria-labelledby="hero-heading"
    >
      <div className="absolute inset-0 grid-background" aria-hidden="true" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background" aria-hidden="true" />

      {/* Floating particles */}
      {!reducedMotion && (
        <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
          {Array.from({ length: 12 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 rounded-full bg-accent/20"
              style={{
                left: `${10 + (i * 7) % 80}%`,
                top: `${15 + (i * 11) % 70}%`,
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0.2, 0.6, 0.2],
              }}
              transition={{
                duration: 4 + i * 0.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.3,
              }}
            />
          ))}
        </div>
      )}

      <div className="container-width relative z-10 pt-32 pb-20">
        <motion.div
          initial={reducedMotion ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="mb-8"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-muted">
            <span className="w-2 h-2 rounded-full bg-accent pulse-glow" aria-hidden="true" />
            Open to roles · Greater Toronto Area
          </span>
        </motion.div>

        <h1
          id="hero-heading"
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-semibold tracking-tight leading-[1.05] max-w-5xl"
        >
          <TextReveal as="span" className="gradient-text" delay={1.1}>
            {siteConfig.tagline}
          </TextReveal>
        </h1>

        <motion.p
          className="mt-8 text-lg md:text-xl text-muted reading-width leading-relaxed max-w-2xl"
          initial={reducedMotion ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.4, ease: [0.25, 0.4, 0.25, 1] }}
        >
          {siteConfig.title} building production-grade AI, full-stack, and
          industrial systems—with domain experts from clinical imaging to the
          plant floor. Prototype to scalable deployment, with measurable impact.
        </motion.p>

        <motion.div
          className="mt-12 flex flex-wrap items-center gap-4"
          initial={reducedMotion ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.6, ease: [0.25, 0.4, 0.25, 1] }}
        >
          <Button href="#projects" variant="primary" size="lg" magnetic>
            View Projects
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Button>
          <Button href={siteConfig.resume} variant="secondary" size="lg" external magnetic>
            Resume
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M8 3V11M8 11L5 8M8 11L11 8M3 13H13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Button>
        </motion.div>

        <motion.div
          className="mt-24 flex flex-wrap gap-x-8 gap-y-4 text-sm text-muted-foreground"
          initial={reducedMotion ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.8 }}
          aria-label="Core expertise areas"
        >
          {[
            "Forward Deployed",
            "Computer Vision",
            "PLC / HMI",
            "RAG & LLMs",
          ].map(
            (skill) => (
              <span key={skill} className="flex items-center gap-2">
                <span className="w-1 h-1 rounded-full bg-accent/60" aria-hidden="true" />
                {skill}
              </span>
            )
          )}
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={reducedMotion ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2 }}
        aria-hidden="true"
      >
        <motion.div
          animate={reducedMotion ? {} : { y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-muted-foreground">
            <path d="M12 5V19M12 19L6 13M12 19L18 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
}
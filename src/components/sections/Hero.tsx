"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/data/site";

export function Hero() {
  const reducedMotion = useReducedMotion();
  const ease = [0.25, 0.4, 0.25, 1] as const;

  return (
    <section
      className="relative min-h-[min(100svh,900px)] flex items-center justify-center overflow-hidden"
      aria-labelledby="hero-heading"
    >
      <div className="absolute inset-0 grid-background" aria-hidden="true" />
      <div
        className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background"
        aria-hidden="true"
      />
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[min(80vw,560px)] h-[min(50vw,360px)] rounded-full bg-accent/10 blur-[100px] pointer-events-none"
        aria-hidden="true"
      />

      {!reducedMotion && (
        <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
          {Array.from({ length: 8 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 rounded-full bg-accent/25"
              style={{
                left: `${12 + ((i * 11) % 76)}%`,
                top: `${18 + ((i * 13) % 64)}%`,
              }}
              animate={{
                y: [0, -20, 0],
                opacity: [0.15, 0.45, 0.15],
              }}
              transition={{
                duration: 5 + i * 0.4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.25,
              }}
            />
          ))}
        </div>
      )}

      <div className="container-width relative z-10 pt-28 pb-16 md:pt-32 md:pb-20">
        <motion.div
          initial={reducedMotion ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.05, ease }}
          className="mb-6"
        >
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass text-sm text-muted">
            <span
              className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0"
              aria-hidden="true"
            />
            Open to roles · {siteConfig.location}
          </span>
        </motion.div>

        <motion.p
          className="text-sm font-medium tracking-wide text-accent mb-3"
          initial={reducedMotion ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.1, ease }}
        >
          {siteConfig.title}
        </motion.p>

        <motion.h1
          id="hero-heading"
          className="text-4xl sm:text-5xl md:text-6xl lg:text-[4.25rem] font-semibold tracking-tight leading-[1.08] max-w-4xl text-foreground"
          initial={reducedMotion ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15, ease }}
        >
          {siteConfig.tagline}
        </motion.h1>

        <motion.p
          className="mt-6 text-base md:text-lg text-muted reading-width leading-relaxed"
          initial={reducedMotion ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.22, ease }}
        >
          Building production-grade AI, full-stack products, and industrial
          systems—alongside clinicians, process engineers, and operators. From
          prototype to deployment, with measurable outcomes.
        </motion.p>

        <motion.div
          className="mt-9 flex flex-wrap items-center gap-3"
          initial={reducedMotion ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.28, ease }}
        >
          <Button href="#projects" variant="primary" size="lg">
            View projects
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path
                d="M3 8H13M13 8L9 4M13 8L9 12"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Button>
          <Button href="#contact" variant="secondary" size="lg">
            Get in touch
          </Button>
          <Button
            href={siteConfig.resume}
            variant="ghost"
            size="lg"
            external
            className="text-muted-foreground"
          >
            Resume
          </Button>
        </motion.div>

        <motion.ul
          className="mt-14 flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted-foreground"
          initial={reducedMotion ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.45, delay: 0.4 }}
          aria-label="Core expertise areas"
        >
          {[
            "Forward Deployed",
            "Computer Vision",
            "Industrial AI",
            "PLC / HMI",
            "Full-stack products",
          ].map((skill) => (
            <li key={skill} className="flex items-center gap-2">
              <span
                className="w-1 h-1 rounded-full bg-accent/70"
                aria-hidden="true"
              />
              {skill}
            </li>
          ))}
        </motion.ul>
      </div>

      <motion.div
        className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden sm:block"
        initial={reducedMotion ? false : { opacity: 0 }}
        animate={{ opacity: 0.6 }}
        transition={{ delay: 0.7 }}
        aria-hidden="true"
      >
        <motion.div
          animate={reducedMotion ? {} : { y: [0, 6, 0] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            className="text-muted-foreground"
          >
            <path
              d="M12 5V19M12 19L6 13M12 19L18 13"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
}

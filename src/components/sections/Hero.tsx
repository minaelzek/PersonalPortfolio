"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { heroProof, siteConfig } from "@/data/site";

export function Hero() {
  const reducedMotion = useReducedMotion();
  const ease = [0.25, 0.4, 0.25, 1] as const;

  return (
    <section
      className="relative min-h-[min(100svh,880px)] flex items-center overflow-hidden"
      aria-labelledby="hero-heading"
    >
      <div className="absolute inset-0 grid-background" aria-hidden="true" />
      <div
        className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background"
        aria-hidden="true"
      />
      <div
        className="absolute top-[20%] left-1/2 -translate-x-1/2 w-[min(80vw,520px)] h-[min(45vw,320px)] rounded-full bg-accent/10 blur-[100px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="container-width relative z-10 pt-24 pb-14 md:pt-28 md:pb-20 w-full">
        <motion.div
          initial={reducedMotion ? false : { opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease }}
          className="mb-5"
        >
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-border bg-white/[0.03] text-sm text-muted">
            <span
              className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0"
              aria-hidden="true"
            />
            {siteConfig.openTo}
          </span>
        </motion.div>

        <motion.p
          className="text-sm font-medium text-accent mb-2"
          initial={reducedMotion ? false : { opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.05, ease }}
        >
          {siteConfig.title} · {siteConfig.location}
        </motion.p>

        <motion.h1
          id="hero-heading"
          className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight leading-[1.08] max-w-3xl text-foreground"
          initial={reducedMotion ? false : { opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.08, ease }}
        >
          {siteConfig.tagline}
        </motion.h1>

        <motion.p
          className="mt-5 text-base md:text-lg text-muted max-w-2xl leading-relaxed"
          initial={reducedMotion ? false : { opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.12, ease }}
        >
          I take AI, full-stack, and industrial systems from prototype to
          production—working directly with clinicians, process engineers, and
          operators. Measurable outcomes, not slideware.
        </motion.p>

        <motion.div
          className="mt-8 flex flex-wrap items-center gap-3"
          initial={reducedMotion ? false : { opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.16, ease }}
        >
          <Button href="#work" variant="primary" size="lg">
            View selected work
          </Button>
          <Button
            href={siteConfig.resume}
            variant="secondary"
            size="lg"
            external
          >
            Download resume
          </Button>
          <Button href={`mailto:${siteConfig.email}`} variant="ghost" size="lg">
            {siteConfig.email}
          </Button>
        </motion.div>

        {/* Recruiter 5-second proof strip */}
        <motion.dl
          className="mt-12 md:mt-14 grid grid-cols-2 lg:grid-cols-4 gap-3"
          initial={reducedMotion ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.22, ease }}
        >
          {heroProof.map((item) => (
            <div
              key={item.label}
              className="rounded-xl border border-border bg-white/[0.025] px-4 py-3.5"
            >
              <dt className="sr-only">{item.label}</dt>
              <dd>
                <p className="text-xl md:text-2xl font-semibold font-mono text-foreground tracking-tight">
                  {item.value}
                </p>
                <p className="mt-1 text-sm text-muted leading-snug">{item.label}</p>
                <p className="text-xs text-muted-foreground mt-0.5">{item.detail}</p>
              </dd>
            </div>
          ))}
        </motion.dl>
      </div>
    </section>
  );
}

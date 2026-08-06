"use client";

import { motion, useReducedMotion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";

const principles = [
  {
    title: "Stakeholder Collaboration",
    description:
      "I work alongside clinicians, process engineers, and operators to turn requirements into reliable, maintainable systems.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M2 17L12 22L22 17M2 12L12 17L22 12" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Deep Technical Ownership",
    description:
      "End-to-end delivery—data pipelines, control logic, APIs, and deployment—so prototypes actually survive production.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect x="3" y="3" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="1.5" />
        <rect x="14" y="3" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="1.5" />
        <rect x="3" y="14" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="1.5" />
        <rect x="14" y="14" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    title: "Measurable Impact",
    description:
      "From 50% to 94% detection accuracy in clinical CV to compliant PLC/HMI rollouts—outcomes matter more than demos.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "AI & Industrial Automation",
    description:
      "Multi-agent maintenance, clinical CV, RAG over SOPs, RLHF, and PLC/HMI—software through the plant floor.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.5" />
        <path d="M12 2V5M12 19V22M2 12H5M19 12H22M4.93 4.93L7.05 7.05M16.95 16.95L19.07 19.07M4.93 19.07L7.05 16.95M16.95 7.05L19.07 4.93" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
];

export function About() {
  const reducedMotion = useReducedMotion();

  return (
    <section id="about" className="section-padding relative" aria-labelledby="about-heading">
      <div className="container-width">
        <SectionHeading
          label="About"
          title="How I work"
          description="I sit with the people who use the system—clinicians, process engineers, operators—and own delivery from prototype through production."
        />

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-start">
          <motion.div
            initial={reducedMotion ? false : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, ease: [0.25, 0.4, 0.25, 1] }}
          >
            <p className="text-base md:text-lg text-muted leading-relaxed mb-5">
              My work spans AI systems, full-stack products, and industrial
              automation. I take solutions from prototype to production while
              staying close to the people who run them every day.
            </p>
            <p className="text-base md:text-lg text-muted leading-relaxed mb-5">
              Highlights include clinical computer vision (50%→94% detection),
              food &amp; beverage PLC/HMI deployments, ProcessMind AI
              multi-agent maintenance, Undercut at playundercut.com, and Seed
              Journal&apos;s encrypted reflection vault.
            </p>
            <p className="text-base md:text-lg text-foreground leading-relaxed">
              Deep technical ownership plus stakeholder collaboration—so complex
              systems become practical, high-impact tools.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-3">
            {principles.map((principle, i) => (
              <GlassCard key={principle.title} className="!p-4 md:!p-5 h-full" hover={false}>
                <motion.div
                  initial={reducedMotion ? false : { opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  className="h-full"
                >
                  <div className="text-accent mb-3">{principle.icon}</div>
                  <h3 className="text-sm font-semibold text-foreground mb-1.5">
                    {principle.title}
                  </h3>
                  <p className="text-sm text-muted leading-relaxed">
                    {principle.description}
                  </p>
                </motion.div>
              </GlassCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
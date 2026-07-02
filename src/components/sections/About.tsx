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
      "Computer vision, RAG over SOPs, RLHF evaluation, and plant-floor control—one engineer spanning software and operations.",
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
          title="Production systems, real stakeholders"
          description="Forward Deployed Engineer focused on taking solutions from prototype to scalable production—working directly with domain experts to deliver measurable impact."
        />

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          <motion.div
            initial={reducedMotion ? false : { opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
          >
            <p className="text-lg text-muted leading-relaxed mb-6">
              My experience spans AI systems, full-stack development, and
              industrial automation. I take technical solutions from prototype to
              production while staying close to the people who run and depend on
              them every day.
            </p>
            <p className="text-lg text-muted leading-relaxed mb-6">
              I&apos;ve productionized a computer vision platform that improved
              polyp detection from 50% to 94%, deployed PLC/HMI automation for
              high-volume food &amp; beverage operations, and independently ship
              full-stack and AI-powered applications—including a production F1
              fantasy stack, a Flutter app with custom AI-driven systems, and a
              RAG-based SOP assistant for process engineers.
            </p>
            <p className="text-lg text-foreground leading-relaxed">
              I combine deep technical ownership with stakeholder collaboration to
              turn complex systems into practical, high-impact solutions.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-4">
            {principles.map((principle, i) => (
              <GlassCard key={principle.title} className="!p-5">
                <motion.div
                  initial={reducedMotion ? false : { opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                >
                  <div className="text-accent mb-4">{principle.icon}</div>
                  <h3 className="text-base font-semibold text-foreground mb-2">
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
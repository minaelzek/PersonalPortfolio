"use client";

import { motion, useReducedMotion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";
import { education, licenses, certificationHighlights } from "@/data/education";

export function Credentials() {
  const reducedMotion = useReducedMotion();

  return (
    <section
      id="credentials"
      className="section-padding relative"
      aria-labelledby="credentials-heading"
    >
      <div className="container-width">
        <SectionHeading
          label="Credentials"
          title="Education & continuous learning"
          description="Formal engineering training plus hands-on certifications across AI, data, full-stack, and industrial automation."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
          {education.map((item, i) => (
            <GlassCard key={item.school} className="!p-5" hover={false}>
              <motion.div
                initial={reducedMotion ? false : { opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.04 }}
              >
                <p className="text-[11px] uppercase tracking-widest text-accent mb-2">
                  Education
                </p>
                <h3 className="text-base font-semibold text-foreground leading-snug">
                  {item.school}
                </h3>
                <p className="text-sm text-muted mt-1">{item.degree}</p>
                <p className="text-sm text-muted-foreground">{item.field}</p>
              </motion.div>
            </GlassCard>
          ))}

          {licenses.map((lic) => (
            <GlassCard key={lic.name} className="!p-5" hover={false}>
              <p className="text-[11px] uppercase tracking-widest text-accent mb-2">
                License
              </p>
              <h3 className="text-base font-semibold text-foreground leading-snug">
                {lic.name}
              </h3>
              <p className="text-sm text-muted mt-1">{lic.issuer}</p>
              <p className="text-xs font-mono text-muted-foreground mt-2">
                {lic.year}
              </p>
            </GlassCard>
          ))}

          <GlassCard className="!p-5 sm:col-span-2 lg:col-span-3" hover={false}>
            <p className="text-[11px] uppercase tracking-widest text-accent mb-4">
              Selected certifications
            </p>
            <div className="grid md:grid-cols-2 gap-6 md:gap-8">
              {certificationHighlights.map((group) => (
                <div key={group.issuer}>
                  <h3 className="text-sm font-semibold text-foreground mb-2.5">
                    {group.issuer}
                  </h3>
                  <ul className="space-y-1.5" role="list">
                    {group.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2 text-sm text-muted"
                      >
                        <span
                          className="mt-2 w-1 h-1 rounded-full bg-accent shrink-0"
                          aria-hidden="true"
                        />
                        <span className="min-w-0">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </GlassCard>
        </div>
      </div>
    </section>
  );
}
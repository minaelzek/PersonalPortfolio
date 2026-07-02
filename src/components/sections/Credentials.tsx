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

        <div className="grid lg:grid-cols-3 gap-6">
          {education.map((item, i) => (
            <GlassCard key={item.school} className="!p-6 lg:col-span-1">
              <motion.div
                initial={reducedMotion ? false : { opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
              >
                <p className="text-xs uppercase tracking-widest text-accent mb-2">
                  Education
                </p>
                <h3 className="text-lg font-semibold text-foreground">{item.school}</h3>
                <p className="text-muted mt-1">{item.degree}</p>
                <p className="text-sm text-muted-foreground">{item.field}</p>
              </motion.div>
            </GlassCard>
          ))}

          {licenses.map((lic) => (
            <GlassCard key={lic.name} className="!p-6">
              <p className="text-xs uppercase tracking-widest text-accent mb-2">License</p>
              <h3 className="text-lg font-semibold text-foreground">{lic.name}</h3>
              <p className="text-muted mt-1">{lic.issuer}</p>
              <p className="text-sm font-mono text-muted-foreground mt-2">{lic.year}</p>
            </GlassCard>
          ))}

          <GlassCard className="!p-6 lg:col-span-3">
            <p className="text-xs uppercase tracking-widest text-accent mb-4">
              Selected certifications
            </p>
            <div className="grid md:grid-cols-2 gap-8">
              {certificationHighlights.map((group) => (
                <div key={group.issuer}>
                  <h3 className="text-sm font-semibold text-foreground mb-3">
                    {group.issuer}
                  </h3>
                  <ul className="space-y-2" role="list">
                    {group.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2 text-sm text-muted"
                      >
                        <span
                          className="mt-2 w-1 h-1 rounded-full bg-accent shrink-0"
                          aria-hidden="true"
                        />
                        {item}
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
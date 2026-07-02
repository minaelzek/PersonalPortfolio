"use client";

import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  label: string;
  title: string;
  description?: string;
  className?: string;
  align?: "left" | "center";
}

export function SectionHeading({
  label,
  title,
  description,
  className,
  align = "left",
}: SectionHeadingProps) {
  const reducedMotion = useReducedMotion();

  return (
    <div
      className={cn(
        "mb-16 md:mb-20",
        align === "center" && "text-center mx-auto",
        className
      )}
    >
      <motion.div
        initial={reducedMotion ? false : { opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
      >
        <span className="inline-flex items-center gap-3 text-sm font-medium tracking-widest uppercase text-accent mb-4">
          <span className="w-8 h-px bg-accent" aria-hidden="true" />
          {label}
        </span>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight gradient-text leading-[1.1]">
          {title}
        </h2>
        {description && (
          <p className="mt-6 text-lg text-muted reading-width leading-relaxed">
            {description}
          </p>
        )}
      </motion.div>
    </div>
  );
}
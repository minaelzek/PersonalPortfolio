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
        "mb-10 md:mb-14",
        align === "center" && "text-center mx-auto",
        className
      )}
    >
      <motion.div
        initial={reducedMotion ? false : { opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.5, ease: [0.25, 0.4, 0.25, 1] }}
      >
        <span
          className={cn(
            "inline-flex items-center gap-2.5 text-xs font-medium tracking-widest uppercase text-accent mb-3",
            align === "center" && "justify-center"
          )}
        >
          {align === "left" && (
            <span className="w-6 h-px bg-accent" aria-hidden="true" />
          )}
          {label}
        </span>
        <h2 className="text-3xl sm:text-4xl md:text-[2.75rem] font-semibold tracking-tight text-foreground leading-[1.15]">
          {title}
        </h2>
        {description && (
          <p
            className={cn(
              "mt-4 text-base md:text-lg text-muted leading-relaxed",
              align === "center" ? "max-w-2xl mx-auto" : "reading-width"
            )}
          >
            {description}
          </p>
        )}
      </motion.div>
    </div>
  );
}

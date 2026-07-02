"use client";

import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export function GlassCard({ children, className, hover = true }: GlassCardProps) {
  const reducedMotion = useReducedMotion();

  return (
    <motion.div
      className={cn(
        "glass rounded-2xl p-6 md:p-8",
        hover && "transition-all duration-300 hover:border-white/12 hover:bg-white/[0.05]",
        className
      )}
      initial={reducedMotion ? false : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, ease: [0.25, 0.4, 0.25, 1] }}
      whileHover={
        hover && !reducedMotion
          ? { y: -4, transition: { duration: 0.2 } }
          : undefined
      }
    >
      {children}
    </motion.div>
  );
}
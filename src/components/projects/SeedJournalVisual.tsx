"use client";

import { motion, useReducedMotion } from "framer-motion";
import { SakuraTree } from "./SakuraTree";

export function SeedJournalVisual({ className }: { className?: string }) {
  const reducedMotion = useReducedMotion();

  return (
    <div className={`relative ${className ?? ""}`}>
      <div className="glass rounded-2xl overflow-hidden">
        {/* Phone mockup frame */}
        <div className="relative bg-gradient-to-b from-[#1a1018] to-[#0d0a0f] p-6 md:p-8">
          <div className="absolute inset-0 bg-gradient-to-t from-[#F4A7B9]/5 to-transparent pointer-events-none" />

          {/* Status bar */}
          <div className="flex items-center justify-between mb-6 text-[10px] text-muted-foreground font-mono">
            <span>9:41</span>
            <span>Seed Journal</span>
            <span>100%</span>
          </div>

          {/* Tree visualization */}
          <div className="relative h-64 md:h-80">
            <SakuraTree className="h-full" />
          </div>

          {/* Reflection card */}
          <motion.div
            className="mt-4 glass rounded-xl p-4"
            initial={reducedMotion ? {} : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
          >
            <div className="flex items-center gap-2 mb-2">
              <div className="w-2 h-2 rounded-full bg-[#F4A7B9]" />
              <span className="text-xs text-muted-foreground">Today&apos;s reflection</span>
            </div>
            <p className="text-sm text-foreground/80 leading-relaxed italic">
              &ldquo;Growth happens in quiet moments of honesty with yourself.&rdquo;
            </p>
            <div className="mt-3 flex items-center gap-2">
              <span className="text-[10px] px-2 py-0.5 rounded-full bg-[#F4A7B9]/10 text-[#F4A7B9]">
                Day 47
              </span>
              <span className="text-[10px] text-muted-foreground">+3 blossoms</span>
            </div>
          </motion.div>

          {/* Voice journal button */}
          <motion.div
            className="mt-4 flex justify-center"
            initial={reducedMotion ? {} : { opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8 }}
          >
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.05] border border-[#F4A7B9]/20">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                <rect x="5" y="1" width="4" height="7" rx="2" stroke="#F4A7B9" strokeWidth="1.2" />
                <path d="M3 6.5C3 8.43 4.57 10 6.5 10H7.5C9.43 10 11 8.43 11 6.5" stroke="#F4A7B9" strokeWidth="1.2" strokeLinecap="round" />
                <path d="M7 10V12.5M5 12.5H9" stroke="#F4A7B9" strokeWidth="1.2" strokeLinecap="round" />
              </svg>
              <span className="text-xs text-[#F4A7B9]">Voice journal</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Growth streak badge */}
      <motion.div
        className="absolute -top-4 -left-4 glass rounded-xl px-4 py-3 shadow-lg"
        initial={reducedMotion ? {} : { opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4 }}
      >
        <p className="text-xs text-muted-foreground">Streak</p>
        <p className="text-lg font-semibold text-[#F4A7B9] font-mono">47 days</p>
      </motion.div>
    </div>
  );
}
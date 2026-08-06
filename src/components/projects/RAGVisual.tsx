"use client";

import { motion, useReducedMotion } from "framer-motion";
import { RAGPipeline } from "./RAGPipeline";

export function RAGVisual({ className }: { className?: string }) {
  const reducedMotion = useReducedMotion();

  return (
    <div className={`relative ${className ?? ""}`}>
      <div className="glass rounded-2xl overflow-hidden">
        <div className="px-5 py-3 border-b border-border flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-[#6366F1]" />
            <span className="text-sm font-semibold">ProcessMind AI</span>
          </div>
          <span className="text-xs text-muted-foreground font-mono">
            Multi-agent
          </span>
        </div>

        <div className="p-5 md:p-6">
          <RAGPipeline />

          {/* Chat mockup */}
          <motion.div
            className="mt-6 space-y-3"
            initial={reducedMotion ? {} : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            <div className="flex gap-3">
              <div className="w-7 h-7 rounded-full bg-white/[0.06] flex items-center justify-center shrink-0">
                <span className="text-[10px] font-mono text-muted">U</span>
              </div>
              <div className="glass rounded-xl rounded-tl-sm px-4 py-3 flex-1">
                <p className="text-sm text-foreground/90">
                  Why is Line A motor A-101 trending high risk?
                </p>
              </div>
            </div>

            <div className="flex gap-3">
              <div className="w-7 h-7 rounded-full bg-[#6366F1]/20 flex items-center justify-center shrink-0">
                <span className="text-[10px] font-mono text-[#6366F1]">AI</span>
              </div>
              <div className="glass rounded-xl rounded-tl-sm px-4 py-3 flex-1">
                <p className="text-sm text-foreground/90 leading-relaxed">
                  Vibration and current z-scores elevated for 18m. Isolation
                  Forest flags anomaly; RUL model estimates 9 days. Similar
                  incident matched in failure DB...
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {["RUL · 9d", "Anomaly", "SOP-PM-101"].map((cite) => (
                    <span
                      key={cite}
                      className="text-[10px] px-2 py-0.5 rounded bg-[#6366F1]/10 text-[#818CF8] font-mono"
                    >
                      {cite}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        className="absolute bottom-3 right-3 glass rounded-lg px-3 py-2 shadow-lg pointer-events-none"
        initial={reducedMotion ? {} : { opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.35 }}
      >
        <p className="text-[10px] text-muted-foreground uppercase tracking-wide">
          Agents
        </p>
        <p className="text-base font-semibold text-[#6366F1] font-mono">6</p>
      </motion.div>
    </div>
  );
}
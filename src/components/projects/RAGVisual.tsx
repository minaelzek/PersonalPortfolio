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
            <span className="text-sm font-semibold">RAG SOP Assistant</span>
          </div>
          <span className="text-xs text-muted-foreground font-mono">Streamlit</span>
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
                  What is the standard procedure for valve calibration?
                </p>
              </div>
            </div>

            <div className="flex gap-3">
              <div className="w-7 h-7 rounded-full bg-[#6366F1]/20 flex items-center justify-center shrink-0">
                <span className="text-[10px] font-mono text-[#6366F1]">AI</span>
              </div>
              <div className="glass rounded-xl rounded-tl-sm px-4 py-3 flex-1">
                <p className="text-sm text-foreground/90 leading-relaxed">
                  Valve calibration requires a 5-step process: isolate the valve,
                  attach calibration equipment, apply test pressures...
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {["SOP-2847", "Section 4.2", "Page 12"].map((cite) => (
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
        className="absolute -bottom-4 -right-4 glass rounded-xl px-4 py-3 shadow-lg"
        initial={reducedMotion ? {} : { opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.6 }}
      >
        <p className="text-xs text-muted-foreground">Accuracy</p>
        <p className="text-lg font-semibold text-[#6366F1] font-mono">94%</p>
      </motion.div>
    </div>
  );
}
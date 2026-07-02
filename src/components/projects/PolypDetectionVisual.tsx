"use client";

import { motion, useReducedMotion } from "framer-motion";

export function PolypDetectionVisual({ className }: { className?: string }) {
  const reducedMotion = useReducedMotion();

  return (
    <div className={`relative ${className ?? ""}`}>
      <div className="glass rounded-2xl overflow-hidden border border-[#14B8A6]/20">
        <div className="px-5 py-3 border-b border-border flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-[#14B8A6]" />
            <span className="text-sm font-semibold">Inference Dashboard</span>
          </div>
          <span className="text-xs font-mono text-[#14B8A6]">94% acc.</span>
        </div>
        <div className="p-5 md:p-6 space-y-4">
          <div className="aspect-video rounded-xl bg-gradient-to-br from-[#14B8A6]/10 to-background border border-border relative overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div
                className="w-24 h-24 rounded-full border-2 border-dashed border-[#14B8A6]/50"
                animate={reducedMotion ? {} : { scale: [1, 1.05, 1] }}
                transition={{ duration: 3, repeat: Infinity }}
              />
              <motion.span
                className="absolute px-2 py-1 text-[10px] font-mono rounded bg-[#14B8A6]/20 text-[#14B8A6] top-1/3 right-1/4"
                initial={reducedMotion ? {} : { opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                polyp · 0.97
              </motion.span>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-2 text-center">
            {[
              { label: "Baseline", value: "50%" },
              { label: "Production", value: "94%" },
              { label: "Latency", value: "Real-time" },
            ].map((m) => (
              <div key={m.label} className="glass rounded-lg py-2 px-1">
                <p className="text-[10px] text-muted-foreground uppercase">{m.label}</p>
                <p className="text-sm font-mono font-medium text-foreground">{m.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
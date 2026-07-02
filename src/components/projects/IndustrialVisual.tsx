"use client";

import { motion, useReducedMotion } from "framer-motion";

const tags = ["CIP", "Route", "Valves", "Alarms"];

export function IndustrialVisual({ className }: { className?: string }) {
  const reducedMotion = useReducedMotion();

  return (
    <div className={`relative ${className ?? ""}`}>
      <div className="glass rounded-2xl overflow-hidden border border-[#F59E0B]/20">
        <div className="px-5 py-3 border-b border-border flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-[#F59E0B]" />
            <span className="text-sm font-semibold">FactoryTalk View</span>
          </div>
          <span className="text-xs text-muted-foreground font-mono">F&B Line 3</span>
        </div>
        <div className="p-5 md:p-6">
          <div className="grid grid-cols-2 gap-3 mb-4">
            {tags.map((tag, i) => (
              <motion.div
                key={tag}
                className="rounded-lg border border-[#F59E0B]/30 bg-[#F59E0B]/5 px-3 py-4 text-center"
                initial={reducedMotion ? {} : { opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
              >
                <span className="text-xs font-mono text-[#F59E0B]">{tag}</span>
                <div className="mt-2 h-1.5 rounded-full bg-white/10 overflow-hidden">
                  <div
                    className="h-full bg-[#F59E0B]/70 rounded-full"
                    style={{ width: `${65 + i * 8}%` }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
          <div className="glass rounded-xl p-4 font-mono text-[11px] text-muted space-y-1">
            <p>
              <span className="text-[#F59E0B]">RUN</span> Mixproof_Seq · Step 4/12
            </p>
            <p>Valve_V12 · CLOSED · OK</p>
            <p>CIP_Phase · Sanitize · ETA 18:42</p>
          </div>
        </div>
      </div>
    </div>
  );
}
"use client";

import { motion, useReducedMotion } from "framer-motion";

const rows = [
  { label: "GET", detail: "PL-1001", result: "200 Pending" },
  { label: "POST", detail: "Pending → Active", result: "200" },
  { label: "POST", detail: "Pending → Closed", result: "409" },
];

export function PolicyStatusVisual({ className }: { className?: string }) {
  const reducedMotion = useReducedMotion();

  return (
    <div className={`relative ${className ?? ""}`}>
      <div className="glass rounded-2xl overflow-hidden border border-[#38BDF8]/20">
        <div className="px-5 py-3 border-b border-border flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-[#38BDF8]" />
            <span className="text-sm font-semibold">Policy status</span>
          </div>
          <span className="text-xs text-muted-foreground font-mono">SQL Server</span>
        </div>
        <div className="p-5 md:p-6 space-y-2">
          {rows.map((row, i) => (
            <motion.div
              key={row.detail}
              className="flex items-center justify-between gap-3 rounded-lg border border-[#38BDF8]/25 bg-[#38BDF8]/5 px-3 py-3 font-mono text-[11px]"
              initial={reducedMotion ? {} : { opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
            >
              <span className="text-[#38BDF8] shrink-0">{row.label}</span>
              <span className="text-muted truncate">{row.detail}</span>
              <span className="text-foreground shrink-0">{row.result}</span>
            </motion.div>
          ))}
          <p className="pt-2 text-[11px] text-muted-foreground">
            Closed is terminal. An illegal move leaves the row unchanged.
          </p>
        </div>
      </div>
    </div>
  );
}

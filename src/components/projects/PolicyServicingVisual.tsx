"use client";

import { motion, useReducedMotion } from "framer-motion";

const lines = [
  { tone: "ok" as const, text: "PL-2002 · Active · LIFE" },
  { tone: "ok" as const, text: "Premium 125.50 · same key replays one row" },
  { tone: "ok" as const, text: "Reversal −125.50 · balance 0.00" },
  { tone: "soap" as const, text: "SOAP · number, status, holder only" },
];

export function PolicyServicingVisual({ className }: { className?: string }) {
  const reducedMotion = useReducedMotion();

  return (
    <div className={`relative ${className ?? ""}`}>
      <div className="glass rounded-2xl overflow-hidden border border-[#C084FC]/20">
        <div className="px-5 py-3 border-b border-border flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-[#C084FC]" />
            <span className="text-sm font-semibold">Servicing desk</span>
          </div>
          <span className="text-xs text-muted-foreground font-mono">REST + SOAP</span>
        </div>
        <div className="p-5 md:p-6">
          <div className="glass rounded-xl p-4 font-mono text-[11px] text-muted space-y-2">
            {lines.map((line, i) => (
              <motion.p
                key={line.text}
                initial={reducedMotion ? {} : { opacity: 0, y: 6 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
              >
                <span className={line.tone === "soap" ? "text-[#38BDF8]" : "text-[#C084FC]"}>
                  {line.tone === "soap" ? "SOAP" : "OK"}
                </span>{" "}
                {line.text.replace(/^SOAP · /, "")}
              </motion.p>
            ))}
          </div>
          <p className="mt-4 text-[11px] text-muted-foreground">
            Status and history commit together. A failed history write rolls the status back.
          </p>
        </div>
      </div>
    </div>
  );
}

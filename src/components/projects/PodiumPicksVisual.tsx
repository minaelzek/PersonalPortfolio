"use client";

import { motion, useReducedMotion } from "framer-motion";

export function PodiumPicksVisual({ className }: { className?: string }) {
  const reducedMotion = useReducedMotion();

  const drivers = [
    { pos: 1, name: "VER", team: "Red Bull", pts: 285, color: "#E10600" },
    { pos: 2, name: "NOR", team: "McLaren", pts: 198, color: "#FF8000" },
    { pos: 3, name: "LEC", team: "Ferrari", pts: 174, color: "#DC0000" },
    { pos: 4, name: "HAM", team: "Mercedes", pts: 152, color: "#00D2BE" },
  ];

  return (
    <div className={`relative ${className ?? ""}`}>
      <div className="glass rounded-2xl overflow-hidden">
        {/* Mock app header */}
        <div className="flex items-center justify-between px-5 py-3 border-b border-border">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-accent" />
            <span className="text-sm font-semibold tracking-tight">PodiumPicks</span>
          </div>
          <span className="text-xs text-muted-foreground font-mono">2026 Season</span>
        </div>

        {/* Leaderboard */}
        <div className="p-5 space-y-3">
          <div className="flex items-center justify-between mb-4">
            <h4 className="text-xs font-medium tracking-widest uppercase text-muted-foreground">
              Championship Standings
            </h4>
            <span className="text-xs px-2 py-0.5 rounded-full bg-accent/10 text-accent font-mono">
              Live
            </span>
          </div>

          {drivers.map((driver, i) => (
            <motion.div
              key={driver.name}
              className="flex items-center gap-4 p-3 rounded-xl bg-white/[0.02] border border-border hover:border-white/10 transition-colors"
              initial={reducedMotion ? {} : { opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.4 }}
            >
              <span className="w-6 text-center text-sm font-mono text-muted-foreground">
                {driver.pos}
              </span>
              <div
                className="w-1 h-8 rounded-full"
                style={{ backgroundColor: driver.color }}
              />
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold">{driver.name}</p>
                <p className="text-xs text-muted-foreground">{driver.team}</p>
              </div>
              <span className="text-sm font-mono font-medium">{driver.pts}</span>
            </motion.div>
          ))}
        </div>

        {/* Architecture strip */}
        <div className="px-5 py-3 border-t border-border flex items-center gap-3 overflow-x-auto">
          {["React", "Django", "Redis", "Celery", "Docker"].map((tech) => (
            <span
              key={tech}
              className="text-[10px] font-mono px-2 py-1 rounded bg-white/[0.04] text-muted-foreground whitespace-nowrap"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Performance badge */}
      <motion.div
        className="absolute -bottom-4 -right-4 glass rounded-xl px-4 py-3 shadow-lg"
        initial={reducedMotion ? {} : { opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5 }}
      >
        <p className="text-xs text-muted-foreground">API p95</p>
        <p className="text-lg font-semibold text-accent font-mono">&lt;80ms</p>
      </motion.div>
    </div>
  );
}
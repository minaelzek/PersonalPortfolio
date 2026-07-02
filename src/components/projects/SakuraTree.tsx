"use client";

import { motion, useReducedMotion } from "framer-motion";

interface SakuraTreeProps {
  className?: string;
}

export function SakuraTree({ className }: SakuraTreeProps) {
  const reducedMotion = useReducedMotion();

  const petals = [
    { id: 0, left: 25, delay: 0, duration: 7, size: 7 },
    { id: 1, left: 45, delay: 1.2, duration: 9, size: 5 },
    { id: 2, left: 65, delay: 2.4, duration: 8, size: 8 },
    { id: 3, left: 35, delay: 0.6, duration: 10, size: 6 },
    { id: 4, left: 55, delay: 3, duration: 7, size: 5 },
    { id: 5, left: 75, delay: 1.8, duration: 9, size: 7 },
    { id: 6, left: 30, delay: 2.8, duration: 8, size: 6 },
    { id: 7, left: 50, delay: 0.4, duration: 11, size: 8 },
  ];

  return (
    <div className={`relative ${className ?? ""}`} aria-hidden="true">
      <svg
        viewBox="0 0 400 500"
        className="w-full h-full"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <radialGradient id="treeGlow" cx="50%" cy="30%" r="50%">
            <stop offset="0%" stopColor="#F4A7B9" stopOpacity="0.15" />
            <stop offset="100%" stopColor="#F4A7B9" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="trunkGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#3D2B1F" />
            <stop offset="50%" stopColor="#5C4033" />
            <stop offset="100%" stopColor="#3D2B1F" />
          </linearGradient>
        </defs>

        <ellipse cx="200" cy="200" rx="180" ry="160" fill="url(#treeGlow)" className="pulse-glow" />

        {/* Ground */}
        <ellipse cx="200" cy="460" rx="120" ry="12" fill="rgba(244,167,185,0.08)" />

        {/* Trunk */}
        <path
          d="M185 460 Q180 380 190 320 Q195 280 200 260 Q205 280 210 320 Q220 380 215 460 Z"
          fill="url(#trunkGrad)"
        />

        {/* Branches */}
        <path d="M200 280 Q150 250 120 200" stroke="#4A3728" strokeWidth="4" strokeLinecap="round" fill="none" />
        <path d="M200 260 Q250 230 280 180" stroke="#4A3728" strokeWidth="4" strokeLinecap="round" fill="none" />
        <path d="M200 300 Q130 270 100 230" stroke="#4A3728" strokeWidth="3" strokeLinecap="round" fill="none" />
        <path d="M200 290 Q270 260 300 220" stroke="#4A3728" strokeWidth="3" strokeLinecap="round" fill="none" />
        <path d="M200 320 Q160 300 140 270" stroke="#4A3728" strokeWidth="2.5" strokeLinecap="round" fill="none" />
        <path d="M200 310 Q240 290 260 260" stroke="#4A3728" strokeWidth="2.5" strokeLinecap="round" fill="none" />

        {/* Blossoms */}
        {[
          { cx: 120, cy: 195, r: 14 },
          { cx: 145, cy: 175, r: 12 },
          { cx: 100, cy: 225, r: 11 },
          { cx: 280, cy: 175, r: 13 },
          { cx: 300, cy: 215, r: 12 },
          { cx: 255, cy: 195, r: 10 },
          { cx: 140, cy: 265, r: 11 },
          { cx: 260, cy: 255, r: 10 },
          { cx: 175, cy: 155, r: 9 },
          { cx: 225, cy: 150, r: 10 },
          { cx: 200, cy: 170, r: 15 },
          { cx: 185, cy: 210, r: 11 },
          { cx: 215, cy: 205, r: 12 },
          { cx: 200, cy: 230, r: 13 },
        ].map((blossom, i) => (
          <motion.g
            key={i}
            initial={reducedMotion ? {} : { scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.5 + i * 0.08, duration: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
          >
            <circle cx={blossom.cx} cy={blossom.cy} r={blossom.r} fill="#F4A7B9" opacity="0.7" />
            <circle cx={blossom.cx} cy={blossom.cy} r={blossom.r * 0.4} fill="#FFD4E0" opacity="0.9" />
            {[0, 72, 144, 216, 288].map((angle) => (
              <ellipse
                key={angle}
                cx={blossom.cx + Math.cos((angle * Math.PI) / 180) * blossom.r * 0.7}
                cy={blossom.cy + Math.sin((angle * Math.PI) / 180) * blossom.r * 0.7}
                rx={blossom.r * 0.35}
                ry={blossom.r * 0.25}
                fill="#F8C8D4"
                opacity="0.6"
                transform={`rotate(${angle} ${blossom.cx + Math.cos((angle * Math.PI) / 180) * blossom.r * 0.7} ${blossom.cy + Math.sin((angle * Math.PI) / 180) * blossom.r * 0.7})`}
              />
            ))}
          </motion.g>
        ))}
      </svg>

      {/* Falling petals */}
      {!reducedMotion &&
        petals.map((petal) => (
          <div
            key={petal.id}
            className="petal absolute rounded-full bg-[#F4A7B9]/60"
            style={{
              left: `${petal.left}%`,
              width: petal.size,
              height: petal.size,
              animationDuration: `${petal.duration}s`,
              animationDelay: `${petal.delay}s`,
            }}
          />
        ))}
    </div>
  );
}
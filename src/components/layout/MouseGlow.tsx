"use client";

import { useMousePosition } from "@/hooks/useMousePosition";
import { useReducedMotion } from "@/hooks/useReducedMotion";

export function MouseGlow() {
  const { x, y } = useMousePosition();
  const reducedMotion = useReducedMotion();

  if (reducedMotion) return null;

  return (
    <div
      className="pointer-events-none fixed inset-0 z-0 transition-opacity duration-300"
      aria-hidden="true"
      style={{
        background: `radial-gradient(600px circle at ${x}px ${y}px, rgba(155, 28, 49, 0.06), transparent 40%)`,
      }}
    />
  );
}
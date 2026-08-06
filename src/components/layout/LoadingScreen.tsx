"use client";

import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";
import { siteConfig } from "@/data/site";

const SESSION_KEY = "portfolio-intro-seen";

export function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(false);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    if (reducedMotion) return;

    try {
      if (sessionStorage.getItem(SESSION_KEY) === "1") return;
    } catch {
      /* private mode */
    }

    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
      try {
        sessionStorage.setItem(SESSION_KEY, "1");
      } catch {
        /* ignore */
      }
    }, 650);

    return () => clearTimeout(timer);
  }, [reducedMotion]);

  if (reducedMotion) return null;

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed inset-0 z-[200] flex items-center justify-center bg-background"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35, ease: [0.25, 0.4, 0.25, 1] }}
          aria-hidden="true"
        >
          <div className="flex flex-col items-center gap-4">
            <motion.div
              className="w-9 h-9 rounded-full border-2 border-accent/25 border-t-accent"
              animate={{ rotate: 360 }}
              transition={{ duration: 0.85, repeat: Infinity, ease: "linear" }}
            />
            <span className="text-xs font-medium tracking-[0.2em] uppercase text-muted">
              {siteConfig.name}
            </span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

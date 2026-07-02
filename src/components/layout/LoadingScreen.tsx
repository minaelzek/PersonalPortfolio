"use client";

import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";
import { siteConfig } from "@/data/site";

export function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), reducedMotion ? 0 : 1200);
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
          transition={{ duration: 0.5, ease: [0.25, 0.4, 0.25, 1] }}
        >
          <div className="flex flex-col items-center gap-6">
            <motion.div
              className="w-12 h-12 rounded-full border-2 border-accent/30 border-t-accent"
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            />
            <motion.span
              className="text-sm font-medium tracking-widest uppercase text-muted"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              {siteConfig.name}
            </motion.span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
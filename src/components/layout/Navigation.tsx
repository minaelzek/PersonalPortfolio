"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import Link from "next/link";
import { navLinks, siteConfig } from "@/data/site";
import { cn } from "@/lib/utils";

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = navLinks.map((l) => l.href.replace("#", ""));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-35% 0px -55% 0px" }
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[100] focus:px-4 focus:py-2 focus:rounded-lg focus:bg-accent focus:text-white focus:text-sm"
      >
        Skip to content
      </a>

      <motion.header
        className={cn(
          "fixed top-3 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-1.25rem)] max-w-4xl",
          "rounded-full transition-all duration-300"
        )}
        initial={reducedMotion ? false : { y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.45, delay: 0.15, ease: [0.25, 0.4, 0.25, 1] }}
      >
        <nav
          className={cn(
            "glass rounded-full pl-4 pr-2 py-1.5 md:pl-5 md:pr-2 flex items-center justify-between gap-2",
            scrolled && "shadow-lg shadow-black/25 border-white/[0.1]"
          )}
          aria-label="Main navigation"
        >
          <Link
            href="#"
            className="text-sm font-semibold tracking-tight text-foreground hover:text-accent transition-colors shrink-0"
            onClick={() => setMobileOpen(false)}
          >
            {siteConfig.name}
            <span className="text-accent">.</span>
          </Link>

          <ul
            className="hidden md:flex items-center gap-0.5 min-w-0 overflow-x-auto scrollbar-none"
            role="list"
          >
            {navLinks.map((link) => {
              const id = link.href.replace("#", "");
              const active = activeSection === id;
              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className={cn(
                      "relative block px-2.5 lg:px-3 py-1.5 text-[13px] transition-colors rounded-full whitespace-nowrap",
                      active
                        ? "text-foreground"
                        : "text-muted hover:text-foreground"
                    )}
                  >
                    {link.label}
                    {active && (
                      <motion.span
                        layoutId="nav-indicator"
                        className="absolute inset-0 rounded-full bg-white/[0.07] -z-10"
                        transition={{ type: "spring", stiffness: 400, damping: 32 }}
                      />
                    )}
                  </a>
                </li>
              );
            })}
          </ul>

          <a
            href={`mailto:${siteConfig.email}`}
            className="hidden md:inline-flex shrink-0 text-[13px] font-medium text-white bg-accent hover:bg-accent-light transition-colors rounded-full px-3.5 py-1.5"
          >
            Hire me
          </a>

          <button
            type="button"
            className="md:hidden p-2.5 text-foreground rounded-full hover:bg-white/[0.05]"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
              {mobileOpen ? (
                <path
                  d="M4 4L16 16M16 4L4 16"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              ) : (
                <path
                  d="M3 6H17M3 10H17M3 14H17"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              )}
            </svg>
          </button>
        </nav>
      </motion.header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="fixed inset-0 z-40 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            id="mobile-nav"
          >
            <div
              className="absolute inset-0 bg-black/70 backdrop-blur-sm"
              onClick={() => setMobileOpen(false)}
              aria-hidden="true"
            />
            <motion.nav
              className="absolute top-[4.25rem] left-3 right-3 glass rounded-2xl p-3 shadow-2xl"
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              aria-label="Mobile navigation"
            >
              <ul className="flex flex-col gap-0.5" role="list">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="block px-4 py-3 text-base text-foreground hover:text-accent transition-colors rounded-xl hover:bg-white/[0.04]"
                      onClick={() => setMobileOpen(false)}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
                <li className="pt-2 mt-1 border-t border-border">
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="block px-4 py-3 text-base font-medium text-accent"
                    onClick={() => setMobileOpen(false)}
                  >
                    Email me
                  </a>
                </li>
              </ul>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

"use client";

import { useState, useEffect, useCallback } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import { navLinks, siteConfig } from "@/data/site";
import { cn } from "@/lib/utils";

/**
 * Single full-width site header.
 * - Always one bar (no floating pill + no second sticky strip)
 * - Hides on scroll-down, returns on scroll-up (content-first)
 * - Recruiter CTAs: Resume + Email always one click away
 */
export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    let lastY = window.scrollY;
    let ticking = false;

    const update = () => {
      const y = window.scrollY;
      setScrolled(y > 12);

      if (!mobileOpen) {
        const goingDown = y > lastY;
        // Only hide after clearing hero; always show near top
        if (y < 80) {
          setHidden(false);
        } else if (Math.abs(y - lastY) > 6) {
          setHidden(goingDown && y > 160);
        }
      }

      lastY = y;
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(update);
        ticking = true;
      }
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [mobileOpen]);

  useEffect(() => {
    // Observe main sections for active state (includes contact even if scrolled deep)
    const ids = [...navLinks.map((l) => l.href.slice(1)), "stack", "credentials"];
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]?.target.id) {
          const id = visible[0].target.id;
          // Map stack/credentials to about for nav highlight
          if (id === "stack" || id === "credentials") {
            setActiveSection("about");
          } else {
            setActiveSection(id);
          }
        }
      },
      { rootMargin: "-20% 0px -65% 0px", threshold: [0, 0.1, 0.25] }
    );

    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    if (mobileOpen) setHidden(false);
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const closeMobile = useCallback(() => setMobileOpen(false), []);

  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[110] focus:px-4 focus:py-2 focus:rounded-lg focus:bg-accent focus:text-white focus:text-sm"
      >
        Skip to content
      </a>

      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-transform duration-300 ease-out",
          hidden && !mobileOpen ? "-translate-y-full" : "translate-y-0"
        )}
      >
        <div
          className={cn(
            "border-b transition-colors duration-300",
            scrolled || mobileOpen
              ? "border-border bg-background/90 backdrop-blur-xl shadow-sm shadow-black/20"
              : "border-transparent bg-background/40 backdrop-blur-md"
          )}
        >
          <nav
            className="container-width flex h-14 md:h-16 items-center justify-between gap-4"
            aria-label="Main navigation"
          >
            <Link
              href="#main-content"
              className="text-sm font-semibold tracking-tight text-foreground hover:text-accent transition-colors shrink-0"
              onClick={closeMobile}
            >
              {siteConfig.fullName}
              <span className="text-accent">.</span>
            </Link>

            <ul
              className="hidden md:flex items-center gap-1 absolute left-1/2 -translate-x-1/2"
              role="list"
            >
              {navLinks.map((link) => {
                const id = link.href.slice(1);
                const active = activeSection === id;
                return (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className={cn(
                        "relative px-3.5 py-2 text-sm rounded-md transition-colors",
                        active
                          ? "text-foreground"
                          : "text-muted hover:text-foreground"
                      )}
                    >
                      {link.label}
                      {active && (
                        <motion.span
                          layoutId="nav-underline"
                          className="absolute left-3 right-3 -bottom-0.5 h-px bg-accent"
                          transition={{ type: "spring", stiffness: 420, damping: 34 }}
                        />
                      )}
                    </a>
                  </li>
                );
              })}
            </ul>

            <div className="hidden md:flex items-center gap-2 shrink-0">
              <a
                href={siteConfig.resume}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted hover:text-foreground transition-colors px-3 py-2 rounded-md"
              >
                Resume
              </a>
              <a
                href={`mailto:${siteConfig.email}`}
                className="text-sm font-medium text-white bg-accent hover:bg-accent-light transition-colors rounded-full px-4 py-2"
              >
                Email
              </a>
            </div>

            <button
              type="button"
              className="md:hidden p-2.5 -mr-2 text-foreground rounded-lg hover:bg-white/[0.05]"
              onClick={() => setMobileOpen((o) => !o)}
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
        </div>

        {/* Thin scroll progress under header (not a third chrome layer) */}
        <ScrollBar reducedMotion={!!reducedMotion} />
      </header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="fixed inset-0 z-40 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            id="mobile-nav"
          >
            <button
              type="button"
              className="absolute inset-0 bg-black/70 backdrop-blur-sm"
              aria-label="Close menu"
              onClick={closeMobile}
            />
            <motion.div
              className="absolute top-14 inset-x-0 border-b border-border bg-background/95 backdrop-blur-xl shadow-2xl"
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2 }}
            >
              <nav className="container-width py-3" aria-label="Mobile navigation">
                <ul className="flex flex-col" role="list">
                  {navLinks.map((link) => (
                    <li key={link.href}>
                      <a
                        href={link.href}
                        className="block px-1 py-3.5 text-base text-foreground border-b border-border/50 last:border-0"
                        onClick={closeMobile}
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
                <div className="flex gap-2 pt-4 pb-2">
                  <a
                    href={siteConfig.resume}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center text-sm font-medium py-3 rounded-full border border-border hover:bg-white/[0.04]"
                    onClick={closeMobile}
                  >
                    Resume
                  </a>
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="flex-1 text-center text-sm font-medium py-3 rounded-full bg-accent text-white hover:bg-accent-light"
                    onClick={closeMobile}
                  >
                    Email
                  </a>
                </div>
              </nav>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function ScrollBar({ reducedMotion }: { reducedMotion: boolean }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (reducedMotion) return;
    const onScroll = () => {
      const el = document.documentElement;
      const max = el.scrollHeight - el.clientHeight;
      setProgress(max > 0 ? el.scrollTop / max : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [reducedMotion]);

  if (reducedMotion) return null;

  return (
    <div
      className="h-0.5 w-full bg-transparent"
      role="progressbar"
      aria-label="Page scroll progress"
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={Math.round(progress * 100)}
    >
      <div
        className="h-full bg-accent origin-left transition-[width] duration-75 ease-out"
        style={{ width: `${progress * 100}%` }}
      />
    </div>
  );
}

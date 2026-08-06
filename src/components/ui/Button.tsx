"use client";

import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";
import Link from "next/link";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  className?: string;
  onClick?: () => void;
  /** Force new-tab external link. Auto-detected for http(s) when omitted. */
  external?: boolean;
  magnetic?: boolean;
}

function isExternalHref(href: string) {
  return (
    href.startsWith("http://") ||
    href.startsWith("https://") ||
    href.startsWith("//")
  );
}

/** Files and absolute paths that should open as a plain browser navigation */
function isFileHref(href: string) {
  return /\.(pdf|png|jpe?g|webp|zip|csv)(\?.*)?$/i.test(href);
}

function isSpecialHref(href: string) {
  return (
    href.startsWith("mailto:") ||
    href.startsWith("tel:") ||
    href.startsWith("sms:")
  );
}

function isHashHref(href: string) {
  return href.startsWith("#");
}

export function Button({
  children,
  href,
  variant = "primary",
  size = "md",
  className,
  onClick,
  external,
  magnetic = false,
}: ButtonProps) {
  const reducedMotion = useReducedMotion();

  const baseStyles =
    "relative inline-flex items-center justify-center font-medium rounded-full transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background";

  const variants = {
    primary:
      "bg-accent text-white hover:bg-accent-light shadow-md shadow-accent/25",
    secondary:
      "bg-transparent text-foreground border border-border hover:border-white/20 hover:bg-white/[0.04]",
    ghost:
      "bg-transparent text-muted hover:text-foreground hover:bg-white/[0.03]",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm gap-1.5",
    md: "px-6 py-3 text-sm gap-2",
    lg: "px-8 py-4 text-base gap-2.5",
  };

  const classes = cn(baseStyles, variants[variant], sizes[size], className);

  const content = (
    <>
      <span className="relative z-10 flex items-center gap-2">{children}</span>
      {variant === "primary" && (
        <span
          className="absolute inset-0 rounded-full bg-gradient-to-r from-accent-light/0 via-white/10 to-accent-light/0 opacity-0 hover:opacity-100 transition-opacity"
          aria-hidden="true"
        />
      )}
    </>
  );

  const motionProps =
    magnetic && !reducedMotion
      ? {
          whileHover: { scale: 1.02 },
          whileTap: { scale: 0.98 },
          transition: { type: "spring" as const, stiffness: 400, damping: 25 },
        }
      : {};

  if (href) {
    const openExternal =
      external === true ||
      (external !== false && (isExternalHref(href) || isFileHref(href)));
    const usePlainAnchor =
      openExternal || isSpecialHref(href) || isHashHref(href) || isFileHref(href);

    if (usePlainAnchor) {
      return (
        <motion.a
          href={href}
          className={classes}
          onClick={onClick}
          {...(openExternal
            ? { target: "_blank", rel: "noopener noreferrer" }
            : {})}
          {...motionProps}
        >
          {content}
        </motion.a>
      );
    }

    // In-app routes only (e.g. /about) — not hash / mailto / external
    return (
      <motion.div {...motionProps} className="inline-block">
        <Link href={href} className={classes} onClick={onClick}>
          {content}
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.button
      type="button"
      className={classes}
      onClick={onClick}
      {...motionProps}
    >
      {content}
    </motion.button>
  );
}

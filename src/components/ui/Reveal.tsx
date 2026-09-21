"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  className?: string;
  /** Delay in seconds before the reveal starts */
  delay?: number;
  /** Direction of the gentle rise */
  y?: number;
  /** Render the element (keeps layout) rather than removing it */
  as?: "div" | "li" | "section";
};

/**
 * Quiet scroll-reveal: a small fade + upward rise, triggered once when the
 * element enters the viewport. Respects prefers-reduced-motion by collapsing
 * to an instant appearance.
 *
 * Purpose (R-19): reveals orient the reader as they scroll and carry the
 * "book opening" rhythm from DESIGN.md. Deliberately subtle, and never every
 * element at once.
 */
export function Reveal({
  children,
  className,
  delay = 0,
  y = 18,
  as = "div",
}: RevealProps) {
  const reduce = useReducedMotion();
  const Tag = motion[as];

  if (reduce) {
    return <Tag className={className}>{children}</Tag>;
  }

  return (
    <Tag
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -12% 0px" }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </Tag>
  );
}
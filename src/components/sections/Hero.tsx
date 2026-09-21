"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";
import { profile } from "@/data/profile";
import { Stamp } from "@/components/ui/Stamp";

const stagger = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

/** Cubic bezier ease: gentle deceleration, no bounce (matches DESIGN.md). */
const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const item = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: EASE },
  },
};

/**
 * Zine cover hero. The name is set huge in Archivo Black as a full-bleed,
 * stacked block on the paper; role and tagline run as a narrower mono /
 * body pocket below. Two brutal CTAs: a filled rush block ("see the work")
 * lifting its shadow on hover, and a quiet arrowed link ("say hello").
 *
 * The availability is rendered as a stamp capsule, not a pulsing dot
 * (R-19 calm; the pulse read as a system-chatty animation).
 *
 * Motion purpose (R-19): a quiet rise-and-fade reveal, once. Respects
 * prefers-reduced-motion by rendering statically.
 */
export function Hero() {
  const reduce = useReducedMotion();

  if (reduce) {
    return (
      <section className="container-brutal pb-16 pt-28 md:pt-36">
        <HeroContent />
      </section>
    );
  }

  return (
    <section className="container-brutal pb-16 pt-28 md:pt-36">
      <motion.div variants={stagger} initial="hidden" animate="show">
        <HeroContent />
      </motion.div>
    </section>
  );
}

const MotionItem = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => (
  <motion.div variants={item} className={className}>
    {children}
  </motion.div>
);

function HeroContent() {
  const nameLines = profile.name.split(" ").slice(0, 3);
  // Mono index above the name: INFORMATICS / WEB DEVELOPER, split on the /
  const roles = profile.role.join(" / ");
  return (
    <div className="grid grid-cols-12 gap-y-8 md:gap-y-10">
      {/* Mono role rule above the name */}
      <div className="col-span-12 flex items-center gap-4">
        <span className="font-meta text-ink-soft">{roles}</span>
        <span aria-hidden="true" className="hidden h-3 border-l-2 border-ink sm:block" />
        <span aria-hidden="true" className="hidden font-meta text-rush sm:block">
          ▼
        </span>
      </div>

      {/* Name: full-width editorial block, huge Archivo Black */}
      <div className="col-span-12 md:col-span-11">
        <MotionItem>
          <h1 className="text-hero text-ink">
            {nameLines.map((line, i) => (
              <span key={i} className="block">
                {line}
              </span>
            ))}
          </h1>
        </MotionItem>
      </div>

      {/* Tagline + CTAs: narrower pocket, asymmetric */}
      <div className="col-span-12 flex flex-col gap-8 md:col-span-7 md:col-start-5">
        <MotionItem>
          <p className="text-lead max-w-[42ch] text-ink-soft">
            {profile.tagline}
          </p>
        </MotionItem>

        <MotionItem>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:flex-wrap">
            <a
              href="#work"
              className="inline-flex h-12 items-center justify-center gap-3 border-2 border-ink bg-rush px-6 font-display text-sm uppercase tracking-tight text-paper shadow-lift-rush bs"
            >
              See the work
            </a>
            <a
              href="#contact"
              className="inline-flex h-12 items-center justify-center gap-2 px-2 font-meta text-ink transition-colors hover:text-rush"
            >
              Say hello <span aria-hidden="true">→</span>
            </a>
          </div>
        </MotionItem>

        <MotionItem>
          <Stamp fill="rush">Open to opportunities</Stamp>
        </MotionItem>
      </div>
    </div>
  );
}
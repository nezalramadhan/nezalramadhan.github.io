"use client";

import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import type { Project } from "@/data/projects";

/**
 * Project detail hero: back link, index, title, summary, tech.
 *
 * Motion purpose (R-19): the header fades in on load, mirroring the quiet
 * book-opening reveal of the homepage hero. Reduced-motion renders static.
 */
export function ProjectHeader({ project }: { project: Project }) {
  const reduce = useReducedMotion();

  return (
    <motion.div
      initial={reduce ? false : { opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <Link
        href="/projects"
        className="inline-flex items-center gap-2 font-meta text-ink-soft transition-colors hover:text-rush"
      >
        <ArrowLeft className="h-4 w-4" strokeWidth={1.5} aria-hidden="true" />
        All work
      </Link>

      <div className="mt-12 flex items-center gap-4">
        <span className="stamp-ix" aria-hidden="true">
          {project.index}
        </span>
        <span className="font-meta text-ink-soft">{project.statusLabel}</span>
        {project.year && (
          <span className="font-meta text-ink-soft">{project.year}</span>
        )}
      </div>

      <h1 className="text-display mt-6 max-w-4xl">{project.title}</h1>

      <p className="text-lead mt-6 max-w-2xl text-ink-soft">{project.summary}</p>

      {project.tech.length > 0 && (
        <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2 border-t-2 border-ink pt-4">
          {project.tech.map((t) => (
            <li key={t} className="font-meta text-ink-soft">
              {t}
            </li>
          ))}
        </ul>
      )}
    </motion.div>
  );
}
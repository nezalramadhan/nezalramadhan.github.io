"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { projects } from "@/data/projects";
import { SectionHeading } from "../ui/SectionHeading";

/**
 * Selected Work: the zine's table of contents. Each entry is a full-width
 * row: a printed index, the title in Archivo Black, mono meta, and an arrow.
 * Rows are separated by 2px ink rules. Not cards, not grids with gutters
 * (DESIGN.md).
 *
 * No screenshots: there are no real ones yet, and a grey skeleton image
 * would be the "skeleton preview as product shot" anti-pattern. The brutal
 * look is typographic by design.
 *
 * On hover the block lifts its hard shadow (shadow-lift-rush); on touch there
 * is no hover, so each row is a full tap target linking to the detail page.
 */
export function SelectedWork() {
  const reduce = useReducedMotion();

  return (
    <section id="work" className="scroll-mt-20 border-t-2 border-ink">
      <div className="container-brutal py-20 md:py-28">
        <SectionHeading index="03" eyebrow="Projects" title="Selected Work" />

        <div className="border-b-2 border-ink">
          {projects.map((project, i) => (
            <ProjectRow
              key={project.slug}
              project={project}
              index={i}
              reduce={reduce}
            />
          ))}
        </div>

        <div className="mt-8">
          <Link
            href="/projects"
            className="inline-flex h-12 items-center gap-3 border-2 border-ink bg-rush px-6 font-display text-sm uppercase tracking-tight text-paper shadow-lift-rush bs"
          >
            View all projects <span aria-hidden="true">→</span>
          </Link>
        </div>

        <p className="mt-8 font-meta text-ink-soft">
          ✶ Each project links to the full story: the problem, the solution,
          the features, the technologies.
        </p>
      </div>
    </section>
  );
}

type ProjectRowProps = {
  project: (typeof projects)[number];
  index: number;
  reduce: boolean | null;
};

function ProjectRow({ project, index, reduce }: ProjectRowProps) {
  const { slug, index: num, title, summary, statusLabel, tech, year } =
    project;

  const isPlaceholder = project.status === "placeholder";

  return (
    <motion.div
      initial={reduce ? false : { opacity: 0, y: 16 }}
      whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -10% 0px" }}
      transition={{ duration: 0.5, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
      className="border-t-2 border-ink"
    >
      <Link
        href={`/projects/${slug}`}
        aria-label={`${title}: ${summary}`}
        className="group relative block shadow-lift-rush bs"
      >
        <div className="grid grid-cols-12 items-baseline gap-y-3 px-2 py-8 md:py-10">
          {/* Printed index number */}
          <span className="col-span-12 font-display text-2xl text-ink-soft transition-colors group-hover:text-paper md:col-span-1">
            {num}
          </span>

          {/* Title */}
          <span className="col-span-12 md:col-span-6">
            <span className="text-title inline-block text-ink transition-transform duration-120 group-hover:translate-x-1">
              {title}
              <span aria-hidden="true" className="ml-3 text-rush">✶</span>
            </span>
          </span>

          {/* Summary */}
          <span className="col-span-12 max-w-md text-sm leading-relaxed text-ink-soft transition-colors group-hover:text-paper md:col-span-4">
            {summary}
          </span>

          {/* Meta + arrow */}
          <span className="col-span-12 flex items-center gap-3 md:col-span-1 md:justify-end">
            <span className="flex items-center gap-4">
              <span className="hidden font-meta text-[0.6rem] text-ink-soft transition-colors group-hover:text-paper lg:inline-flex lg:flex-wrap lg:gap-x-3 lg:gap-y-1">
                {tech.join("  /  ")}
              </span>
              <span className="font-meta text-ink-soft transition-colors group-hover:text-paper">
                {year || (isPlaceholder ? "TBA" : "")}
              </span>
            </span>
            <span
              className="flex h-10 w-10 items-center justify-center border-2 border-ink text-ink transition-colors group-hover:border-paper group-hover:text-paper"
              aria-hidden="true"
            >
              →
            </span>
          </span>
        </div>

        <span className="sr-only">Status: {statusLabel}</span>
      </Link>
    </motion.div>
  );
}
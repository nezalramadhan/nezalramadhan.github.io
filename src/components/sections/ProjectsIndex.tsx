"use client";

import { useState } from "react";
import Link from "next/link";
import { projects } from "@/data/projects";
import { SectionHeading } from "../ui/SectionHeading";
import { Reveal } from "../ui/Reveal";
import { Stamp } from "../ui/Stamp";

/**
 * All-projects index: a stamped category filter over a brutal 2-column card
 * grid. The home Selected Work section shows projects as table-of-contents
 * rows; this page is the fuller grid, the RHYTHM-3 variation that offsets the
 * repeated list.
 *
 * Filter tabs derive from the data, never from an invented catalog:
 * `["All", ...unique categories]`. So the tabs are always honest (R-38) and
 * a new category appears on its own when a future project defines it.
 *
 * No screenshots: there are no real ones yet (R-23) and a grey skeleton image
 * would read as a product-shot anti-pattern, so cards are typographic by
 * design (DESIGN.md). Placeholder projects render as an open card with their
 * "Coming soon" status — they have no detail page, so they are not links.
 */
const CATEGORY_LABEL = "All";

export function ProjectsIndex() {
  const [active, setActive] = useState<string>(CATEGORY_LABEL);

  const categories = [
    CATEGORY_LABEL,
    ...new Set(projects.map((p) => p.category).filter(Boolean)),
  ];

  const filtered = projects.filter(
    (p) => active === CATEGORY_LABEL || p.category === active,
  );

  return (
    <section id="projects" className="scroll-mt-20">
      <SectionHeading index="03" eyebrow="Projects" title="All Projects" />

      {/* Category filter tabs */}
      <div
        role="group"
        aria-label="Filter projects by category"
        className="mb-12 flex flex-wrap gap-3 border-b-2 border-ink pb-8"
      >
        {categories.map((cat) => {
          const isActive = cat === active;
          return (
            <button
              key={cat}
              type="button"
              aria-pressed={isActive}
              onClick={() => setActive(cat)}
              className={
                isActive
                  ? "stamp bg-rush text-paper border-ink"
                  : "stamp bg-paper text-ink border-ink"
              }
            >
              {cat}
            </button>
          );
        })}
      </div>

      {filtered.length === 0 ? (
        <p className="font-meta text-ink-soft">
          No projects in this category yet. Check back soon.
        </p>
      ) : (
        <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {filtered.map((project, i) => (
            <Reveal key={project.slug} as="li" delay={i * 0.05}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </ul>
      )}
    </section>
  );
}

type CardProps = {
  project: (typeof projects)[number];
};

function ProjectCard({ project }: CardProps) {
  const { slug, index, title, summary, statusLabel, tech, year, category } =
    project;

  const isPlaceholder = project.status === "placeholder";
  const displayYear = year || (isPlaceholder ? "TBA" : "");

  const inner = (
    <div className="flex h-full flex-col border-2 border-ink bg-paper p-6 shadow-lift-rush bs">
      <div className="flex items-center justify-between gap-4">
        <Stamp fill={isPlaceholder ? "paper" : "rush"}>{statusLabel}</Stamp>
        <span className="font-display text-2xl text-ink-soft">{index}</span>
      </div>

      <h3 className="text-title mt-6 font-display uppercase leading-none text-ink">
        {title}
      </h3>

      <p className="mt-4 max-w-md text-sm leading-relaxed text-ink-soft">
        {summary}
      </p>

      <div className="mt-auto flex flex-wrap items-center justify-between gap-x-4 gap-y-2 pt-8">
        {category && (
          <span className="font-meta text-[0.6rem] text-ink-soft">
            {category}
          </span>
        )}
        <span className="ml-auto flex flex-wrap items-center gap-3">
          {tech.length > 0 && (
            <span className="hidden font-meta text-[0.6rem] text-ink-soft lg:inline-flex">
              {tech.join(" / ")}
            </span>
          )}
          <span className="font-meta text-ink-soft">{displayYear}</span>
        </span>
      </div>
    </div>
  );

  // A placeholder has no detail page, so it renders as an inert card.
  if (isPlaceholder) {
    return <div className="h-full">{inner}</div>;
  }

  return (
    <Link
      href={`/projects/${slug}`}
      aria-label={`${title}: ${summary}`}
      className="block h-full"
    >
      {inner}
    </Link>
  );
}
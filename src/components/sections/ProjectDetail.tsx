import type { Project } from "@/data/projects";
import { Reveal } from "../ui/Reveal";

/**
 * Structured project detail: overview, problem, solution, features.
 *
 * A two-column editorial spread. The sticky left column is a stamped index
 * square with a rotated "PROJECT DETAIL" print mark; the prose reads on the
 * right. The placeholder project renders only the overview so it never shows
 * invented detail (R-38).
 */
export function ProjectDetail({ project }: { project: Project }) {
  const hasDetail = project.problem && project.solution;

  return (
    <div className="mt-16 grid grid-cols-12 gap-y-12 md:mt-24">
      <div className="col-span-12 md:col-span-4">
        <Reveal>
          <div className="md:sticky md:top-24">
            <div className="flex items-center gap-3">
              <span className="stamp-ix" aria-hidden="true">
                {project.index}
              </span>
              <span
                className="font-meta text-ink-soft"
                aria-hidden="true"
                style={{ writingMode: "vertical-rl" }}
              >
                Project detail
              </span>
            </div>
          </div>
        </Reveal>
      </div>

      <div className="col-span-12 md:col-span-8">
        <div className="space-y-14">
          {/* Live + source links. Real links when a URL exists; otherwise a
              reserved dashed slot so the row is always visible but never a
              dead or fabricated link (R-26, R-38). Placeholder projects get
              no button row at all. */}
          {project.status !== "placeholder" && (
            <Reveal>
              <div className="flex flex-wrap gap-4">
                {project.links?.live ? (
                  <a
                    href={project.links.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-12 items-center gap-3 border-2 border-ink bg-rush px-6 font-display text-sm uppercase tracking-tight text-paper shadow-lift-rush bs"
                  >
                    Live project <span aria-hidden="true">↗</span>
                  </a>
                ) : (
                  <span
                    aria-disabled="true"
                    className="inline-flex h-12 items-center gap-3 border-2 border-dashed border-ink bg-paper px-6 font-display text-sm uppercase tracking-tight text-ink-soft"
                  >
                    Live project <span aria-hidden="true">—</span>
                  </span>
                )}
                {project.links?.source ? (
                  <a
                    href={project.links.source}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-12 items-center gap-3 border-2 border-ink bg-ink px-6 font-display text-sm uppercase tracking-tight text-paper shadow-lift bs"
                  >
                    Source code <span aria-hidden="true">↗</span>
                  </a>
                ) : (
                  <span
                    aria-disabled="true"
                    className="inline-flex h-12 items-center gap-3 border-2 border-dashed border-ink bg-paper px-6 font-display text-sm uppercase tracking-tight text-ink-soft"
                  >
                    Source code <span aria-hidden="true">—</span>
                  </span>
                )}
              </div>
              {(!project.links?.live || !project.links?.source) && (
                <p className="mt-4 font-meta text-ink-soft">
                  Links appear here once the live site and repository are
                  ready.
                </p>
              )}
            </Reveal>
          )}

          {/* Overview */}
          <Reveal>
            <section aria-labelledby="overview">
              <h2
                id="overview"
                className="font-meta mb-5 text-rush"
              >
                Overview
              </h2>
              <p className="text-lead text-ink-soft">{project.overview}</p>
            </section>
          </Reveal>

          {hasDetail ? (
            <>
              {/* Problem */}
              <Reveal>
                <section aria-labelledby="problem">
                  <h2 id="problem" className="font-meta mb-5 text-rush">
                    Problem
                  </h2>
                  <p className="text-body text-ink-soft">{project.problem}</p>
                </section>
              </Reveal>

              {/* Solution */}
              <Reveal>
                <section aria-labelledby="solution">
                  <h2 id="solution" className="font-meta mb-5 text-rush">
                    Solution
                  </h2>
                  <p className="text-body text-ink-soft">{project.solution}</p>
                </section>
              </Reveal>
            </>
          ) : (
            <Reveal>
              <p className="text-body text-ink-soft/70">
                The full breakdown for this project is not written yet. Check
                back soon, or look at the other two projects for the format.
              </p>
            </Reveal>
          )}

          {/* Features */}
          {project.features.length > 0 && (
            <Reveal>
              <section aria-labelledby="features">
                <h2 id="features" className="font-meta mb-5 text-rush">
                  Features
                </h2>
                <ul className="space-y-0">
                  {project.features.map((f) => (
                    <li
                      key={f}
                      className="flex items-start gap-4 border-b-2 border-ink py-4 text-ink"
                    >
                      <span
                        className="mt-2 h-1 w-4 shrink-0 bg-rush"
                        aria-hidden="true"
                      />
                      <span className="text-body text-ink-soft">{f}</span>
                    </li>
                  ))}
                </ul>
              </section>
            </Reveal>
          )}
        </div>
      </div>
    </div>
  );
}
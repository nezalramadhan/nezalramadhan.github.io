import { technologies } from "@/data/technologies";
import { SectionHeading } from "../ui/SectionHeading";
import { Reveal } from "../ui/Reveal";

const groups: { key: keyof typeof technologies; label: string }[] = [
  { key: "frontend", label: "Frontend" },
  { key: "backend", label: "Backend" },
  { key: "database", label: "Database" },
  { key: "tools", label: "Tools" },
];

/**
 * Technologies as a printed index list. Each group is a column of rows
 * separated by 2px ink rules, with a ▼ archival bullet on the left. No
 * cards, no percentage bars (R-17). Typography carries the information.
 */
export function Technologies() {
  return (
    <section id="tech" className="scroll-mt-20 border-t-2 border-ink">
      <div className="container-brutal py-20 md:py-28">
        <SectionHeading index="02" eyebrow="Stack" title="Technologies" />

        <Reveal>
          <p className="max-w-prose text-body text-ink-soft md:ml-[25%]">
            The tools I work with, grouped by where they sit in a stack. This
            reflects what I have actually used in academic and personal work,
            not invented proficiency levels.
          </p>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-x-10 gap-y-12 sm:grid-cols-2 md:mt-16">
          {groups.map((group, g) => (
            <div key={group.key}>
              <Reveal delay={g * 0.05}>
                <div className="border-t-2 border-ink pt-4">
                  <h3 className="font-meta text-rush">{group.label}</h3>
                  <ul className="mt-6">
                    {technologies[group.key].map((tech) => (
                      <li
                        key={tech}
                        className="flex items-center gap-3 border-b-2 border-ink py-3"
                      >
                        <span aria-hidden="true" className="text-mid">
                          ▼
                        </span>
                        <span className="font-display text-lg uppercase tracking-tight text-ink md:text-xl">
                          {tech}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
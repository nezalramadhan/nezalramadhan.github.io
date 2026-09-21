import { profile } from "@/data/profile";
import { SectionHeading } from "../ui/SectionHeading";
import { Reveal } from "../ui/Reveal";
import { Stamp } from "../ui/Stamp";

/**
 * Background: education + truthful, non-fabricated activity.
 *
 * The left column is the education record (keeping its honest "2022 – 2026"
 * period with an en dash, never an em dash, per R-02). The right column is a
 * stamped list of activities drawn from real academic / personal work only:
 * a fresh graduate has no professional job titles, so none are invented
 * (R-38). Note: the periods use an en dash " – ", not an em dash " — ".
 */
const activities = [
  {
    role: "Thesis project",
    org: "Pesan Barkal",
    note: "Built a Laravel-based school correspondence system as my thesis.",
  },
  {
    role: "Personal project",
    org: "PSB Barokah",
    note: "Built a new student registration system covering the full admission flow.",
  },
] as const;

export function Background() {
  return (
    <section id="background" className="scroll-mt-20 border-t-2 border-ink">
      <div className="container-brutal py-20 md:py-28">
        <SectionHeading index="04" eyebrow="Education" title="Background" />

        <div className="grid grid-cols-12 gap-y-10 md:gap-y-0">
          {/* Education */}
          <div className="col-span-12 md:col-span-6">
            <Reveal>
              <div className="border-t-2 border-ink pt-4">
                <Stamp fill="zap">Education</Stamp>
                <dl className="mt-6 space-y-3">
                  <div>
                    <dt className="sr-only">Institution</dt>
                    <dd className="font-display text-2xl uppercase tracking-tight text-ink">
                      {profile.education.institution}
                    </dd>
                  </div>
                  <div>
                    <dt className="sr-only">Degree</dt>
                    <dd className="font-meta text-ink-soft">
                      {profile.education.degree}
                    </dd>
                  </div>
                  <div>
                    <dt className="sr-only">Period</dt>
                    <dd className="font-meta text-ink-soft">
                      {profile.education.period}
                    </dd>
                  </div>
                </dl>
              </div>
            </Reveal>
          </div>

          {/* Experience & activities (honest) */}
          <div className="col-span-12 md:col-span-6">
            <Reveal delay={0.05}>
              <div className="border-t-2 border-ink pt-4">
                <Stamp fill="rush">Experience &#038; activities</Stamp>
                <p className="mt-4 text-body text-ink-soft">
                  I am a fresh graduate, so most of my experience comes from
                  academic and personal projects rather than professional
                  employment.
                </p>
                <ol className="mt-6 space-y-6">
                  {activities.map((a) => (
                    <li
                      key={a.role + a.org}
                      className="border-b-2 border-ink pb-5"
                    >
                      <p className="font-display text-lg uppercase tracking-tight text-ink">
                        {a.role}
                      </p>
                      <p className="font-meta text-ink-soft">{a.org}</p>
                      <p className="mt-1 text-body text-ink-soft">{a.note}</p>
                    </li>
                  ))}
                </ol>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
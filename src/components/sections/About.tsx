import { profile } from "@/data/profile";
import { SectionHeading } from "../ui/SectionHeading";
import { Reveal } from "../ui/Reveal";
import { ResumeLink } from "../ui/ResumeLink";

/**
 * Zine "about" spread. The sticky left column is a mono index label that
 * repeats the section number as an archival print mark; the right column is
 * the prose. This breaks the centered-subtitle rhythm and keeps the section
 * reading as printed matter (RHYTHM 3).
 */
export function About() {
  return (
    <section id="about" className="scroll-mt-20 border-t-2 border-ink">
      <div className="container-brutal py-20 md:py-28">
        <SectionHeading index="01" eyebrow="About" title="About" />

        <div className="grid grid-cols-12 gap-y-10">
          {/* Sticky rotated print mark, hidden on mobile */}
          <div className="col-span-12 hidden md:col-span-4 md:block">
            <div className="md:sticky md:top-24">
              <Reveal>
                <span
                  className="font-meta text-rush"
                  aria-hidden="true"
                  style={{ writingMode: "vertical-rl" }}
                >
                  ✶ Nezal Khekam Ramadhan ✶ Yogyakarta, Indonesia ✶
                </span>
              </Reveal>
            </div>
          </div>

          <div className="col-span-12 md:col-span-8">
            <Reveal>
              <div className="space-y-6 text-lead text-ink-soft">
                {profile.about.map((paragraph) => (
                  <p key={paragraph.slice(0, 24)}>{paragraph}</p>
                ))}
              </div>
              {/* CV download: renders only when public/resume.pdf exists (R-26) */}
              <div className="mt-8">
                <ResumeLink />
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
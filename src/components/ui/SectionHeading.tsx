import { Reveal } from "./Reveal";

type SectionHeadingProps = {
  index: string;
  eyebrow: string;
  title: string;
};

/**
 * The recurring zine section header. A stamped index square (rush accent,
 * black number) sits before a mono eyebrow, with the Archivo Black display
 * title below. The stamp-ix repeats on every section so the page reads as a
 * numbered hand-stamped work (DESIGN.md, Index motif).
 *
 * The index number is genuinely decorative here (the eyebrow names the
 * section), so it is hidden from screen readers.
 */
export function SectionHeading({ index, eyebrow, title }: SectionHeadingProps) {
  return (
    <div className="mb-12 md:mb-16">
      <Reveal>
        <div className="flex items-center gap-4">
          <span className="stamp-ix" aria-hidden="true">
            {index}
          </span>
          <span className="font-meta text-ink-soft">{eyebrow}</span>
        </div>
        <h2 className="text-title mt-6 max-w-3xl">{title}</h2>
      </Reveal>
    </div>
  );
}
import { FileDown } from "lucide-react";
import { existsSync } from "node:fs";
import { join } from "node:path";

/**
 * "Download CV" control, reusable wherever the CV belongs (hero and contact).
 *
 * Renders only when /public/resume.pdf actually exists, so it can never be a
 * dead link (R-26). Drop your CV at public/resume.pdf and the button appears.
 * The label defaults to "Download CV"; pass a different one if the context
 * needs it. Styled as a brutal stamped button.
 */
export function ResumeLink({ label = "Download CV" }: { label?: string }) {
  const resumePath = join(process.cwd(), "public", "resume.pdf");
  const hasResume = existsSync(resumePath);

  if (!hasResume) return null;

  return (
    <a
      href="/resume.pdf"
      download
      className="inline-flex h-12 items-center gap-3 border-2 border-ink bg-ink px-6 font-display text-sm uppercase tracking-tight text-paper shadow-lift bs"
    >
      <FileDown className="h-4 w-4" strokeWidth={1.5} aria-hidden="true" />
      {label}
    </a>
  );
}
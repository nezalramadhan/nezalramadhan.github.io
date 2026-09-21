import { profile } from "@/data/profile";

/**
 * Minimal footer. A single focused line pressed into the paper, with the
 * "back to top" printed mark. No 4-column link maze (R-05).
 */
export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t-2 border-ink">
      <div className="container-brutal flex flex-col gap-2 py-10 font-meta text-ink-soft sm:flex-row sm:items-center sm:justify-between">
        <p>© {year} {profile.name}</p>
        <p className="tracking-normal normal-case">
          Built with Next.js
        </p>
      </div>
    </footer>
  );
}
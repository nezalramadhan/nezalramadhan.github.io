import type { Metadata } from "next";
import { profile } from "@/data/profile";
import { ProjectsIndex } from "@/components/sections/ProjectsIndex";
import { Footer } from "@/components/layout/Footer";
import { Nav } from "@/components/layout/Nav";

/**
 * All-projects index route (/projects). A grid of every project with a
 * category filter, distinct from the homepage's selected-work rows. Coexists
 * with the dynamic /projects/[slug] detail route (Next.js resolves the exact
 * page.tsx for "/projects" and the dynamic route only for slugs).
 */
export const metadata: Metadata = {
  title: "All Projects",
  description: profile.tagline,
};

export default function ProjectsPage() {
  return (
    <main id="top">
      <Nav />
      <div className="container-brutal pb-20 pt-24 md:pt-32">
        <ProjectsIndex />
      </div>
      <Footer />
    </main>
  );
}
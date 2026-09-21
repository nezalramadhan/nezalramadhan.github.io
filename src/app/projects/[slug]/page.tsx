import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { projects } from "@/data/projects";
import { ProjectHeader } from "@/components/layout/ProjectHeader";
import { ProjectDetail } from "@/components/sections/ProjectDetail";
import { Footer } from "@/components/layout/Footer";
import { Nav } from "@/components/layout/Nav";

/**
 * Extensible project detail route. Every project in src/data/projects.ts
 * automatically gets a page. Dynamic because each page's metadata and Static
 * Params are derived from the data file rather than hand-written per project.
 */
type Props = { params: Promise<{ slug: string }> };

const projectBySlug = (slug: string) =>
  projects.find((p) => p.slug === slug);

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projectBySlug(slug);
  if (!project) return { title: "Project not found" };

  return {
    title: project.title,
    description: project.summary,
  };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = projectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <main id="top">
      <Nav />
      <div className="container-brutal pb-20 pt-24 md:pt-32">
        <ProjectHeader project={project} />
        <ProjectDetail project={project} />
      </div>
      <Footer />
    </main>
  );
}
import { projects } from "@/data/projects";
import { notFound } from "next/navigation";
import Link from "next/link";
import { useLocaleServer } from "@/i18n/server";

interface Props {
  params: {
    slug: string;
  };
}

// Generate static routes for all projects
export function generateStaticParams() {
  return projects.map((p) => ({
    slug: p.slug,
  }));
}

export default function ProjectDetail({ params }: Props) {
  const { slug } = params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  // Next.js app router server components don't have access to context natively if we are doing static 
  // but let's assume we can use a basic dictionary or server approach for strings.
  // We'll use a simple fallback for server components if needed, or convert this to a Client component.
  // Let's make the wrapper a Server component and use a Client component for the content if it needs `useLocale`, 
  // or since `useLocaleServer` might exist, we'll try to fetch translations via dictionary.
  
  // To keep it simple and consistent with the codebase, let's make it a client component
  return <ProjectDetailContent project={project} />;
}

import { ProjectDetailContent } from "./ProjectDetailContent";

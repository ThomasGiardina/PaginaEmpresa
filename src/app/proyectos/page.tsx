import type { Metadata } from "next";
import { PortfolioGrid } from "@/components/PortfolioGrid";

export const metadata: Metadata = {
  title: "Projects — Paginita",
  description: "Our portfolio of software and automation projects",
};

export default function ProjectsPage() {
  return (
    <div>
      <PortfolioGrid />
    </div>
  );
}

import type { Project } from "@/data/projects";

interface ProjectTileProps {
  project: Project;
}

export function ProjectTile({ project }: ProjectTileProps) {
  return (
    <div>
      <img src={project.image} alt={project.title} />
      <h3>{project.title}</h3>
    </div>
  );
}

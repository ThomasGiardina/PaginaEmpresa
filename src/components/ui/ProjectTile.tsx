import type { Project } from "@/data/projects";
import { Badge } from "./Badge";

interface ProjectTileProps {
  project: Project;
  height?: string;
  decorative?: boolean;
}

export function ProjectTile({
  project,
  height = "220px",
  decorative = false,
}: ProjectTileProps) {
  if (decorative) {
    return (
      <div
        className="rounded-[36px] overflow-hidden relative"
        style={{ height }}
      >
        <div className="w-full h-full bg-orchid-flash" />
        <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent">
          <h3 className="text-[16px] font-semibold text-snow leading-tight">
            {project.title}
          </h3>
        </div>
      </div>
    );
  }

  return (
    <div
      className="rounded-[36px] overflow-hidden relative group cursor-pointer"
      style={{ height }}
    >
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-full object-cover transition-transform duration-250 ease-out group-hover:scale-[1.02]"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 p-4 flex flex-col gap-2">
        <h3 className="text-[16px] font-semibold text-snow leading-tight">
          {project.title}
        </h3>
        <div className="flex flex-wrap gap-1.5">
          {project.tags.map((tag) => (
            <Badge key={tag} variant="overlay">
              {tag}
            </Badge>
          ))}
        </div>
      </div>
    </div>
  );
}

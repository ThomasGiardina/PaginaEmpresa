import type { Project } from "@/data/projects";

interface ProjectTileProps {
  project: Project;
  height?: string;
  decorative?: boolean;
}

export function ProjectTile({
  project,
  height = "auto",
  decorative = false,
}: ProjectTileProps) {
  // Use a pink wash for the decorative card (e.g., Plataforma de Pagos in the mockup)
  const bgClass = decorative ? "bg-orchid-flash/5 border-orchid-flash/20" : "bg-ink border-fog";

  return (
    <div
      className={`border rounded-[32px] p-3 flex flex-col group cursor-pointer hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)] transition-all duration-300 ${bgClass}`}
      style={height !== "auto" ? { minHeight: height } : undefined}
    >
      <div className="w-full aspect-[4/3] rounded-[24px] overflow-hidden bg-mist mb-5 relative">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
        />
      </div>
      
      <div className="px-3 pb-4 flex flex-col flex-1">
        <div className="flex flex-wrap gap-2 mb-3">
          {project.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="border border-fog rounded-[100px] px-2.5 py-1 text-[13px] font-medium text-slate bg-ink"
            >
              {tag}
            </span>
          ))}
        </div>
        <h3 className="text-[21px] font-bold text-snow leading-tight mb-2">
          {project.title}
        </h3>
        <p className="text-[16px] text-steel leading-[1.5] line-clamp-2">
          {project.description}
        </p>
      </div>
    </div>
  );
}

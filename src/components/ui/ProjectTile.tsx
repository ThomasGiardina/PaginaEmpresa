"use client";

import { motion } from "motion/react";
import type { Project } from "@/data/projects";

interface ProjectTileProps {
  project: Project;
  height?: string;
  index?: number;
  decorative?: boolean;
}

export function ProjectTile({
  project,
  height = "auto",
  index = 0,
}: ProjectTileProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ ease: [0.16, 1, 0.3, 1], duration: 0.6, delay: index * 0.08 }}
      whileHover={{ y: -6 }}
      className="group relative border border-white/[0.06] rounded-[32px] p-3 bg-white/[0.02] cursor-pointer h-full overflow-hidden"
      style={height !== "auto" ? { minHeight: height } : undefined}
    >
      <div className="w-full aspect-[4/3] rounded-[24px] overflow-hidden bg-white/[0.03] mb-5 relative">
        <motion.img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
          whileHover={{ scale: 1.08 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        />
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileHover={{ opacity: 1, y: 0 }}
          className="absolute bottom-3 left-3 bg-indigo text-white text-[12px] font-semibold px-3 py-1.5 rounded-full"
        >
          View case study
        </motion.div>
      </div>

      <div className="px-3 pb-4 flex flex-col flex-1">
        <div className="flex flex-wrap gap-2 mb-3">
          {project.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="border border-white/[0.08] rounded-[100px] px-2.5 py-1 text-[13px] font-medium text-snow/60 bg-white/[0.03]"
            >
              {tag}
            </span>
          ))}
        </div>
        <h3 className="text-[21px] font-bold text-snow leading-tight mb-2">
          {project.title}
        </h3>
        <p className="text-[16px] text-slate/70 leading-[1.5] line-clamp-2">
          {project.description}
        </p>
      </div>
    </motion.div>
  );
}

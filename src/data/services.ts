export interface Service {
  id: string;
  title: string;
  titleEs: string;
  description: string;
  descriptionEs: string;
  icon: string;
  tags: string[];
}

export const services: Service[] = [
  {
    id: "software-dev",
    title: "Software Development",
    titleEs: "Desarrollo de Software",
    description:
      "Custom web and mobile applications built with modern technologies.",
    descriptionEs:
      "Aplicaciones web y móviles personalizadas construidas con tecnologías modernas.",
    icon: "code",
    tags: ["React", "Node.js", "TypeScript", "Next.js"],
  },
  {
    id: "automation",
    title: "Process Automation",
    titleEs: "Automatización de Procesos",
    description:
      "End-to-end automation of repetitive tasks and business workflows.",
    descriptionEs:
      "Automatización integral de tareas repetitivas y flujos de trabajo empresariales.",
    icon: "zap",
    tags: ["n8n", "Make", "Python", "APIs"],
  },
];

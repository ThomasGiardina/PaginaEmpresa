export interface Service {
  id: string;
  title: string;
  titleEs: string;
  description: string;
  descriptionEs: string;
  icon: string;
  tags: string[];
}

export const iconMap: Record<string, string> = {
  code: "M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6-1.6 1.6a1 1 0 0 0 1.4 1.4l2.3-2.3a1 1 0 0 0 0-1.4l-2.3-2.3a1 1 0 0 0-1.4 0zm-5.4 0a1 1 0 0 0-1.4 0l-2.3 2.3a1 1 0 0 0 0 1.4l2.3 2.3a1 1 0 0 0 1.4-1.4L5.7 9.3l1.6-1.6a1 1 0 0 0 0-1.4zM9.83 5.74a1 1 0 0 0-1.28.57l-3 8a1 1 0 1 0 1.85.7l3-8a1 1 0 0 0-.57-1.27z",
  zap: "M13 2L3 14h9l-1 8 10-12h-9l1-8z",
  puzzle: "M8 4a3 3 0 0 1 3 3v1h1a2 2 0 0 1 2 2v1h1a3 3 0 0 1 0 6h-1v1a2 2 0 0 1-2 2h-1v1a3 3 0 0 1-6 0v-1H5a2 2 0 0 1-2-2v-1H2a3 3 0 0 1 0-6h1V9a2 2 0 0 1 2-2h1V7a3 3 0 0 1 3-3z",
  chart: "M4 20h16M6 16v-4M10 16V8M14 16V6M18 16v-2",
};

export const services: Service[] = [
  {
    id: "web-dev",
    title: "Software Development",
    titleEs: "Desarrollo de Software",
    description: "Custom, scalable and secure web and mobile applications.",
    descriptionEs: "Aplicaciones web y móviles a medida, escalables y seguras.",
    icon: "code",
    tags: ["React", "Node.js", "TypeScript"],
  },
  {
    id: "automation",
    title: "Automation",
    titleEs: "Automatización",
    description: "We automate repetitive processes and workflows to save time.",
    descriptionEs: "Automatizamos procesos repetitivos y flujos de trabajo para ahorrar tiempo.",
    icon: "zap",
    tags: ["Make", "n8n", "Zapier"],
  },
  {
    id: "integrations",
    title: "Integrations",
    titleEs: "Integraciones",
    description: "We connect your tools and systems so they work together frictionlessly.",
    descriptionEs: "Conectamos tus herramientas y sistemas para que trabajen juntos sin fricción.",
    icon: "puzzle",
    tags: ["APIs", "Webhooks", "CRM"],
  },
  {
    id: "data-analytics",
    title: "Data & Analytics",
    titleEs: "Data & Analytics",
    description: "We transform data into useful information to make better decisions.",
    descriptionEs: "Transformamos datos en información útil para tomar mejores decisiones.",
    icon: "chart",
    tags: ["PostgreSQL", "Database"],
  }
];

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
    id: "web-dev",
    title: "Web & App Development",
    titleEs: "Desarrollo Web & Apps",
    description:
      "Custom web and mobile applications built with modern frameworks. From landing pages to full SaaS platforms.",
    descriptionEs:
      "Aplicaciones web y móviles personalizadas con frameworks modernos. De landing pages a plataformas SaaS completas.",
    icon: "code",
    tags: ["React", "Next.js", "TypeScript"],
  },
  {
    id: "automation",
    title: "Process Automation",
    titleEs: "Automatización de Procesos",
    description:
      "End-to-end automation of repetitive tasks and business workflows. Connect your tools and eliminate manual work.",
    descriptionEs:
      "Automatización integral de tareas repetitivas y flujos de trabajo. Conectá tus herramientas y eliminá el trabajo manual.",
    icon: "cpu",
    tags: ["n8n", "Make", "Python"],
  },
  {
    id: "integrations",
    title: "API Integrations",
    titleEs: "Integraciones API",
    description:
      "Connect your favorite tools and services. We build custom integrations that make your data flow seamlessly.",
    descriptionEs:
      "Conectá tus herramientas y servicios favoritos. Creamos integraciones personalizadas para que tus datos fluyan sin problemas.",
    icon: "plug",
    tags: ["REST", "GraphQL", "Webhooks"],
  },
  {
    id: "ai",
    title: "Artificial Intelligence",
    titleEs: "Inteligencia Artificial",
    description:
      "Leverage AI to automate decision-making, extract insights from data, and build smarter products.",
    descriptionEs:
      "Usá IA para automatizar decisiones, extraer insights de datos y crear productos más inteligentes.",
    icon: "sparkles",
    tags: ["OpenAI", "LangChain", "Python"],
  },
];

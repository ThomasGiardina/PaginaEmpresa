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
  puzzle:
    "M8 4a3 3 0 0 1 3 3v1h1a2 2 0 0 1 2 2v1h1a3 3 0 0 1 0 6h-1v1a2 2 0 0 1-2 2h-1v1a3 3 0 0 1-6 0v-1H5a2 2 0 0 1-2-2v-1H2a3 3 0 0 1 0-6h1V9a2 2 0 0 1 2-2h1V7a3 3 0 0 1 3-3z",
  chart:
    "M4 20h16M6 16v-4M10 16V8M14 16V6M18 16v-2",
  cloud:
    "M17.5 19a4.5 4.5 0 0 0 .5-8.97 6 6 0 0 0-11.58-1.33A4 4 0 0 0 6 17h11.5z",
  phone:
    "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z",
};

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
    icon: "zap",
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
    icon: "puzzle",
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
    icon: "chart",
    tags: ["OpenAI", "LangChain", "Python"],
  },
  {
    id: "cloud",
    title: "Cloud Infrastructure",
    titleEs: "Infraestructura Cloud",
    description:
      "Scalable cloud architecture, deployment, and infrastructure management. We set up and optimize your cloud environment.",
    descriptionEs:
      "Arquitectura cloud escalable, deployment y gestión de infraestructura. Configuramos y optimizamos tu entorno cloud.",
    icon: "cloud",
    tags: ["AWS", "Docker", "DevOps"],
  },
  {
    id: "mobile",
    title: "Mobile Development",
    titleEs: "Desarrollo Móvil",
    description:
      "Native and cross-platform mobile applications for iOS and Android. From MVP to full-featured apps.",
    descriptionEs:
      "Aplicaciones móviles nativas y multiplataforma para iOS y Android. De MVP a apps con todas las funcionalidades.",
    icon: "phone",
    tags: ["React Native", "Flutter", "iOS/Android"],
  },
];

export interface Project {
  id: string;
  title: string;
  titleEs: string;
  description: string;
  descriptionEs: string;
  image: string;
  tags: string[];
  category: "software" | "automation";
}

export const projects: Project[] = [
  {
    id: "proj-1",
    title: "Inventory Dashboard",
    titleEs: "Dashboard de Inventario",
    description: "Real-time inventory management dashboard with analytics.",
    descriptionEs: "Dashboard de gestión de inventario en tiempo real con analíticas.",
    image: "/placeholder.svg",
    tags: ["React", "Node.js", "PostgreSQL"],
    category: "software",
  },
  {
    id: "proj-2",
    title: "Sales Pipeline Automation",
    titleEs: "Automatización de Pipeline de Ventas",
    description: "Automated lead scoring and follow-up sequence orchestration.",
    descriptionEs: "Puntuación de leads automatizada y orquestación de secuencias de seguimiento.",
    image: "/placeholder.svg",
    tags: ["n8n", "Salesforce", "Python"],
    category: "automation",
  },
  {
    id: "proj-3",
    title: "E-Commerce Platform",
    titleEs: "Plataforma de Comercio Electrónico",
    description: "Full-featured online store with payment processing.",
    descriptionEs: "Tienda online completa con procesamiento de pagos.",
    image: "/placeholder.svg",
    tags: ["Next.js", "Stripe", "Supabase"],
    category: "software",
  },
  {
    id: "proj-4",
    title: "Invoice Processing Bot",
    titleEs: "Bot de Procesamiento de Facturas",
    description: "Automated invoice extraction and accounting integration.",
    descriptionEs: "Extracción automatizada de facturas e integración contable.",
    image: "/placeholder.svg",
    tags: ["Python", "Make", "QuickBooks"],
    category: "automation",
  },
];

export interface Project {
  id: string;
  title: string;
  titleEs: string;
  description: string;
  descriptionEs: string;
  image: string;
  tags: string[];
  category: string;
  url?: string;
}

export const projects: Project[] = [
  {
    id: "p1",
    title: "Inventory Dashboard",
    titleEs: "Dashboard de Inventario",
    description: "Real-time inventory management dashboard with analytics.",
    descriptionEs: "Dashboard de gestión de inventario en tiempo real con analíticas.",
    image: "https://picsum.photos/seed/inventory/600/400",
    tags: ["React", "Node.js", "PostgreSQL"],
    category: "desarrollo",
  },
  {
    id: "p2",
    title: "Sales Pipeline Automation",
    titleEs: "Automatización de Pipeline de Ventas",
    description: "Automated lead scoring and follow-up sequence orchestration.",
    descriptionEs: "Puntuación de leads automatizada y orquestación de secuencias de seguimiento.",
    image: "https://picsum.photos/seed/sales/600/400",
    tags: ["n8n", "Salesforce", "Python"],
    category: "automatizacion",
  },
  {
    id: "p3",
    title: "E-Commerce Platform",
    titleEs: "Plataforma de Comercio Electrónico",
    description: "Full-featured online store with payment processing and CMS.",
    descriptionEs: "Tienda online completa con procesamiento de pagos y CMS.",
    image: "https://picsum.photos/seed/ecommerce/600/400",
    tags: ["Next.js", "Stripe", "Supabase"],
    category: "desarrollo",
  },
  {
    id: "p4",
    title: "Invoice Processing Bot",
    titleEs: "Bot de Procesamiento de Facturas",
    description: "Automated invoice extraction and accounting integration.",
    descriptionEs: "Extracción automatizada de facturas e integración contable.",
    image: "https://picsum.photos/seed/invoice/600/400",
    tags: ["Python", "Make", "QuickBooks"],
    category: "automatizacion",
  },
  {
    id: "p5",
    title: "Customer Analytics Dashboard",
    titleEs: "Dashboard de Analítica de Clientes",
    description: "Real-time customer behavior analytics and reporting tool.",
    descriptionEs: "Herramienta de analítica de comportamiento de clientes en tiempo real.",
    image: "https://picsum.photos/seed/analytics/600/400",
    tags: ["React", "D3.js", "FastAPI"],
    category: "desarrollo",
  },
  {
    id: "p6",
    title: "HR Onboarding Workflow",
    titleEs: "Workflow de Onboarding de RRHH",
    description: "Automated employee onboarding with document collection and training.",
    descriptionEs: "Onboarding automatizado de empleados con recolección de documentos y capacitación.",
    image: "https://picsum.photos/seed/hr/600/400",
    tags: ["n8n", "Slack", "Google Sheets"],
    category: "automatizacion",
  },
];

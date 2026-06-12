export interface Project {
  id: string;
  slug: string;
  title: string;
  titleEs: string;
  description: string;
  descriptionEs: string;
  problemEn: string;
  problemEs: string;
  solutionEn: string;
  solutionEs: string;
  resultsEn: string[];
  resultsEs: string[];
  image: string;
  tags: string[];
  category: string;
  url?: string;
}

export const projects: Project[] = [
  {
    id: "p1",
    slug: "dashboard-financiero",
    title: "Dashboard Financiero",
    titleEs: "Dashboard Financiero",
    description: "Real-time financial analysis platform.",
    descriptionEs: "Plataforma de análisis financiero en tiempo real.",
    problemEn: "The client managed their templates manually, causing time loss and lack of real-time visibility.",
    problemEs: "El cliente gestionaba sus plantillas manuales, lo que generaba pérdida de tiempo y falta de visibilidad en tiempo real.",
    solutionEn: "We developed an admin dashboard that automates data collection, generates real-time reports, and allows data-driven decisions.",
    solutionEs: "Desarrollamos un dashboard administrado que automatiza la recolección de datos, genera reportes en tiempo real y permite tomar decisiones basadas en información de fácil acceso.",
    resultsEn: [
      "80% less time on reports",
      "Real-time data",
      "Better financial decisions"
    ],
    resultsEs: [
      "80% menos tiempo en reportes",
      "Datos en tiempo real",
      "Mejores decisiones financieras"
    ],
    image: "https://picsum.photos/seed/finance/600/400",
    tags: ["React", "Node.js", "TypeScript", "PostgreSQL", "TailwindCSS"],
    category: "desarrollo",
  },
  {
    id: "p2",
    slug: "app-de-logistica",
    title: "Logistics App",
    titleEs: "App de Logística",
    description: "Real-time delivery tracking and fleet management.",
    descriptionEs: "Seguimiento de entregas y gestión de flotas en tiempo real.",
    problemEn: "Lack of real-time visibility into the delivery fleet causing customer complaints and delays.",
    problemEs: "Falta de visibilidad en tiempo real de la flota de entregas, causando quejas de clientes y retrasos.",
    solutionEn: "We built a mobile application with live GPS tracking, automated routing, and instant status updates.",
    solutionEs: "Construimos una aplicación móvil con seguimiento GPS en vivo, enrutamiento automatizado y actualizaciones de estado instantáneas.",
    resultsEn: [
      "30% faster deliveries",
      "Real-time tracking for customers",
      "Optimized driver routes"
    ],
    resultsEs: [
      "30% entregas más rápidas",
      "Seguimiento en tiempo real para clientes",
      "Rutas de choferes optimizadas"
    ],
    image: "https://picsum.photos/seed/logistics/600/400",
    tags: ["React Native", "Supabase", "TypeScript"],
    category: "desarrollo",
  },
  {
    id: "p3",
    slug: "crm-personalizado",
    title: "Custom CRM",
    titleEs: "CRM Personalizado",
    description: "Client and opportunity management tailored to business needs.",
    descriptionEs: "Gestión de clientes y oportunidades adaptada a cada negocio.",
    problemEn: "Sales team struggled with generic CRMs that did not fit their specific sales pipeline.",
    problemEs: "El equipo de ventas luchaba con CRMs genéricos que no se ajustaban a su embudo de ventas específico.",
    solutionEn: "We created a bespoke CRM integrated directly with their billing and email marketing tools.",
    solutionEs: "Creamos un CRM a medida integrado directamente con sus herramientas de facturación y email marketing.",
    resultsEn: [
      "Higher sales team adoption",
      "Automated follow-ups",
      "Seamless data integration"
    ],
    resultsEs: [
      "Mayor adopción por el equipo de ventas",
      "Seguimientos automatizados",
      "Integración de datos sin problemas"
    ],
    image: "https://picsum.photos/seed/crm/600/400",
    tags: ["NestJS", "Stripe", "PostgreSQL"],
    category: "integraciones",
  },
  {
    id: "p4",
    slug: "plataforma-de-pagos",
    title: "Payment Platform",
    titleEs: "Plataforma de Pagos",
    description: "Payment gateway and subscriptions for SaaS.",
    descriptionEs: "Pasarela de pagos y suscripciones para SaaS.",
    problemEn: "High churn rate due to failed recurring payments and complex checkout processes.",
    problemEs: "Alta tasa de abandono debido a pagos recurrentes fallidos y procesos de pago complejos.",
    solutionEn: "We implemented a robust Stripe-based infrastructure with automated dunning flows and smart retries.",
    solutionEs: "Implementamos una infraestructura robusta basada en Stripe con flujos de cobro automatizados y reintentos inteligentes.",
    resultsEn: [
      "40% reduction in churn",
      "Frictionless checkout",
      "Automated failed payment recovery"
    ],
    resultsEs: [
      "40% de reducción en el abandono",
      "Proceso de pago sin fricciones",
      "Recuperación automática de pagos fallidos"
    ],
    image: "https://picsum.photos/seed/payments/600/400",
    tags: ["Next.js", "Stripe", "TailwindCSS"],
    category: "desarrollo",
  },
  {
    id: "p5",
    slug: "sistema-de-inventario",
    title: "Inventory System",
    titleEs: "Sistema de Inventario",
    description: "Cloud-based stock tracking and predictive ordering.",
    descriptionEs: "Seguimiento de stock en la nube y pedidos predictivos.",
    problemEn: "Overstocking and stockouts caused massive revenue loss and high storage costs.",
    problemEs: "El exceso y la falta de stock causaban pérdida de ingresos y altos costos de almacenamiento.",
    solutionEn: "Developed a predictive inventory system that alerts managers when to reorder based on trends.",
    solutionEs: "Desarrollamos un sistema de inventario predictivo que alerta a los gerentes cuándo volver a pedir según tendencias.",
    resultsEn: [
      "Zero stockouts in 6 months",
      "Reduced storage overhead",
      "Automated supplier orders"
    ],
    resultsEs: [
      "Cero falta de stock en 6 meses",
      "Reducción de costos de almacenamiento",
      "Pedidos a proveedores automatizados"
    ],
    image: "https://picsum.photos/seed/inventoryapp/600/400",
    tags: ["React", "PostgreSQL", "Node.js"],
    category: "desarrollo",
  },
  {
    id: "p6",
    slug: "automatizacion-de-reportes",
    title: "Report Automation",
    titleEs: "Automatización de Reportes",
    description: "Automated aggregation of data from multiple marketing platforms.",
    descriptionEs: "Agregación automatizada de datos de múltiples plataformas de marketing.",
    problemEn: "Marketing team spent hours every Monday compiling reports from Facebook, Google, and CRM.",
    problemEs: "El equipo de marketing pasaba horas cada lunes recopilando reportes de Facebook, Google y el CRM.",
    solutionEn: "Created an automated workflow that generates and emails a unified PDF report every Monday morning.",
    solutionEs: "Creamos un flujo de trabajo automatizado que genera y envía por correo un reporte en PDF unificado cada lunes por la mañana.",
    resultsEn: [
      "10 hours saved weekly",
      "100% data accuracy",
      "Instant team alignment"
    ],
    resultsEs: [
      "10 horas ahorradas por semana",
      "100% de precisión en los datos",
      "Alineación inmediata del equipo"
    ],
    image: "https://picsum.photos/seed/reports/600/400",
    tags: ["Make", "Google Sheets", "APIs"],
    category: "automatizacion",
  }
];

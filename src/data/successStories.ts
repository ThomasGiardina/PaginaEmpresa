export interface SuccessStory {
  id: string;
  client: string;
  problem: string;
  problemEs: string;
  impact: string;
  impactEs: string;
  metric: string;
  metricLabel: string;
  metricLabelEs: string;
}

export const successStories: SuccessStory[] = [
  {
    id: "s1",
    client: "TechFlow Inc.",
    problem: "Manual data entry across 3 disconnected systems causing errors.",
    problemEs: "Ingreso manual de datos en 3 sistemas desconectados causando errores.",
    impact: "Eliminated manual data entry",
    impactEs: "Eliminamos el ingreso manual de datos",
    metric: "120+",
    metricLabel: "hours saved per week",
    metricLabelEs: "horas ahorradas por semana",
  },
  {
    id: "s2",
    client: "CloudNest",
    problem: "Sales team spent 60% of time on administrative follow-ups.",
    problemEs: "El equipo de ventas gastaba el 60% del tiempo en seguimientos administrativos.",
    impact: "Automated follow-up sequences",
    impactEs: "Automatizamos las secuencias de seguimiento",
    metric: "3x",
    metricLabel: "increase in qualified leads",
    metricLabelEs: "aumento en leads calificados",
  },
  {
    id: "s3",
    client: "SmartGrid",
    problem: "Invoice processing took 4 days per batch with frequent errors.",
    problemEs: "El procesamiento de facturas tomaba 4 días por lote con errores frecuentes.",
    impact: "Reduced processing time by 80%",
    impactEs: "Redujimos el tiempo de procesamiento en un 80%",
    metric: "4 days → 4 hours",
    metricLabel: "invoice processing time",
    metricLabelEs: "tiempo de procesamiento de facturas",
  },
];

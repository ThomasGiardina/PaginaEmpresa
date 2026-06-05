import type { Service } from "@/data/services";

interface ServiceCardProps {
  service: Service;
}

export function ServiceCard({ service }: ServiceCardProps) {
  return (
    <div>
      <h3>{service.title}</h3>
      <p>{service.description}</p>
    </div>
  );
}

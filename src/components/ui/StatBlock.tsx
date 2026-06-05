interface StatBlockProps {
  value: string;
  label: string;
}

export function StatBlock({ value, label }: StatBlockProps) {
  return (
    <div>
      <span>{value}</span>
      <p>{label}</p>
    </div>
  );
}

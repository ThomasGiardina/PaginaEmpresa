interface StatBlockProps {
  value: string;
  label: string;
}

export function StatBlock({ value, label }: StatBlockProps) {
  return (
    <div className="flex flex-col items-center text-center gap-1.5">
      <span className="text-[55px] font-bold text-snow leading-[1]">
        {value}
      </span>
      <p className="text-[15px] font-normal text-steel leading-snug">{label}</p>
    </div>
  );
}

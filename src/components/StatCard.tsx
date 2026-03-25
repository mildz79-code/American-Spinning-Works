type StatCardProps = {
  value: string;
  label: string;
  detail: string;
};

export function StatCard({ value, label, detail }: StatCardProps) {
  return (
    <article className="panel p-5">
      <p className="text-2xl font-black text-white">{value}</p>
      <p className="mt-1 text-sm font-semibold uppercase tracking-wider text-signal">{label}</p>
      <p className="mt-3 text-sm leading-relaxed text-ash/85">{detail}</p>
    </article>
  );
}

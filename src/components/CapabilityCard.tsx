type CapabilityCardProps = {
  icon: string;
  title: string;
  description: string;
};

export function CapabilityCard({ icon, title, description }: CapabilityCardProps) {
  return (
    <article className="panel h-full p-6">
      <div className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-signal/70 bg-signal/10 text-sm font-bold text-signal">
        {icon}
      </div>
      <h3 className="mt-5 text-lg font-bold text-white">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-ash/90">{description}</p>
    </article>
  );
}

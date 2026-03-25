type FeatureCardProps = {
  title: string;
  description: string;
};

export function FeatureCard({ title, description }: FeatureCardProps) {
  return (
    <article className="panel p-6 transition hover:-translate-y-1 hover:border-white/30">
      <h3 className="text-lg font-bold text-white">{title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-ash/90">{description}</p>
    </article>
  );
}

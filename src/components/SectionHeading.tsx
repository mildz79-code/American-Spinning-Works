import type { ReactNode } from 'react';

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  actions?: ReactNode;
};

export function SectionHeading({ eyebrow, title, description, align = 'left', actions }: SectionHeadingProps) {
  const isCentered = align === 'center';

  return (
    <div className={`mb-10 ${isCentered ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'}`}>
      {eyebrow && (
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-signal/90">{eyebrow}</p>
      )}
      <h2 className="text-3xl font-black leading-tight text-white md:text-4xl">{title}</h2>
      {description && <p className="mt-4 text-base leading-relaxed text-ash/90">{description}</p>}
      {actions && <div className="mt-6">{actions}</div>}
    </div>
  );
}

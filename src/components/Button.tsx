import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react';

type ButtonVariant = 'primary' | 'secondary' | 'ghost';

type SharedProps = {
  children: ReactNode;
  variant?: ButtonVariant;
  className?: string;
};

type AnchorProps = SharedProps & AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };
type NativeButtonProps = SharedProps & ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined };

type ButtonProps = AnchorProps | NativeButtonProps;

const variantClasses: Record<ButtonVariant, string> = {
  primary: 'bg-signal text-white hover:bg-[#db3239] focus-visible:ring-signal/60',
  secondary: 'border border-white/50 bg-transparent text-white hover:bg-white/10 focus-visible:ring-white/30',
  ghost: 'bg-white/10 text-white hover:bg-white/20 focus-visible:ring-white/30',
};

const baseClasses =
  'inline-flex items-center justify-center rounded-md px-5 py-3 text-sm font-semibold tracking-wide transition duration-200 focus-visible:outline-none focus-visible:ring-2';

export function Button({ children, variant = 'primary', className = '', ...props }: ButtonProps) {
  const classes = `${baseClasses} ${variantClasses[variant]} ${className}`.trim();

  if ('href' in props && props.href) {
    return (
      <a className={classes} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}

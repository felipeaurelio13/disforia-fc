import Link from 'next/link';
import { PropsWithChildren } from 'react';

type SectionProps = PropsWithChildren<{ title?: string; eyebrow?: string; description?: string; narrow?: boolean; className?: string }>;

type ButtonVariant = 'primary' | 'secondary' | 'text';

export function Container({ children, narrow = false }: PropsWithChildren<{ narrow?: boolean }>) {
  return <div className={`mx-auto w-full px-4 sm:px-5 md:px-7 lg:px-10 ${narrow ? 'max-w-narrow' : 'max-w-container'}`}>{children}</div>;
}

export function Section({ title, eyebrow, description, children, narrow, className = '' }: SectionProps) {
  return (
    <section className={`section-shell ${className}`.trim()}>
      <Container narrow={narrow}>
        {eyebrow ? <p className="font-display text-xs uppercase tracking-[0.18em] text-brand-sky">{eyebrow}</p> : null}
        {title ? <h2 className="mt-2 max-w-3xl text-balance font-display text-2xl font-bold leading-[1.03] tracking-[-0.02em] text-brand-softWhite sm:text-3xl md:text-5xl">{title}</h2> : null}
        {description ? <p className="mt-4 max-w-3xl text-sm leading-relaxed text-brand-softWhite/80 sm:text-base md:text-lg">{description}</p> : null}
        <div className="mt-5 sm:mt-6 md:mt-8">{children}</div>
      </Container>
    </section>
  );
}

const buttonStyles: Record<ButtonVariant, string> = {
  primary:
    'inline-flex min-h-12 items-center justify-center rounded-full border border-brand-magenta/70 bg-brand-magenta px-6 py-3 text-center font-display text-sm font-semibold text-brand-softWhite hover:-translate-y-0.5 hover:bg-[#a63c69] active:translate-y-0',
  secondary:
    'inline-flex min-h-12 items-center justify-center rounded-full border border-brand-softWhite/24 bg-brand-softWhite/5 px-6 py-3 text-center font-display text-sm font-semibold text-brand-softWhite hover:-translate-y-0.5 hover:border-brand-sky/55 hover:bg-brand-sky/12 active:translate-y-0',
  text: 'group inline-flex min-h-12 items-center gap-2 font-display text-sm font-semibold text-brand-sky hover:text-brand-softWhite',
};

export function ButtonLink({ href, children, variant = 'primary' }: PropsWithChildren<{ href: string; variant?: ButtonVariant }>) {
  return (
    <Link href={href} className={buttonStyles[variant]}>
      {children}
      {variant === 'text' ? <span aria-hidden="true" className="translate-x-0 transition-transform duration-200 ease-smooth group-hover:translate-x-1">→</span> : null}
    </Link>
  );
}

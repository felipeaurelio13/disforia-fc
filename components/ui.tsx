import Link from 'next/link';
import { PropsWithChildren } from 'react';

type SectionProps = PropsWithChildren<{ title?: string; eyebrow?: string; description?: string; narrow?: boolean; className?: string }>;
type ButtonVariant = 'primary' | 'secondary' | 'text';

export function Container({ children, narrow = false }: PropsWithChildren<{ narrow?: boolean }>) {
  return <div className={`mx-auto w-full px-4 sm:px-6 md:px-8 lg:px-10 ${narrow ? 'max-w-narrow' : 'max-w-container'}`}>{children}</div>;
}

export function Section({ title, eyebrow, description, children, narrow, className = '' }: SectionProps) {
  return (
    <section className={`section-shell ${className}`.trim()}>
      <Container narrow={narrow}>
        {eyebrow ? <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-secondary/65">{eyebrow}</p> : null}
        {title ? <h2 className="mt-2 max-w-4xl text-balance text-brand-secondary">{title}</h2> : null}
        {description ? <p className="mt-4 max-w-3xl text-brand-text/80">{description}</p> : null}
        <div className="mt-6 md:mt-8">{children}</div>
      </Container>
    </section>
  );
}

const buttonStyles: Record<ButtonVariant, string> = {
  primary:
    'inline-flex min-h-12 items-center justify-center rounded-full bg-brand-primary px-6 py-3 text-center text-sm font-semibold text-white shadow-soft hover:scale-[1.02] hover:shadow-lift',
  secondary:
    'inline-flex min-h-12 items-center justify-center rounded-full border border-brand-secondary/18 bg-brand-surface px-6 py-3 text-center text-sm font-semibold text-brand-secondary hover:scale-[1.02] hover:border-brand-accent hover:text-brand-accent hover:shadow-soft',
  text: 'group inline-flex min-h-12 items-center gap-2 text-sm font-semibold text-brand-secondary hover:text-brand-primary',
};

export function ButtonLink({ href, children, variant = 'primary' }: PropsWithChildren<{ href: string; variant?: ButtonVariant }>) {
  return (
    <Link href={href} className={buttonStyles[variant]}>
      {children}
      {variant === 'text' ? <span aria-hidden="true" className="translate-x-0 transition-transform duration-200 ease-out group-hover:translate-x-1">→</span> : null}
    </Link>
  );
}

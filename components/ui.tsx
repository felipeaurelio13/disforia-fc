import Link from 'next/link';
import { PropsWithChildren } from 'react';

type SectionProps = PropsWithChildren<{ id?: string; title?: string; eyebrow?: string; description?: string; narrow?: boolean; className?: string }>;
type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'text';
type CardTone = 'default' | 'tint' | 'accent';

export function Container({ children, narrow = false }: PropsWithChildren<{ narrow?: boolean }>) {
  return <div className={`mx-auto w-full px-4 sm:px-6 md:px-8 lg:px-10 ${narrow ? 'max-w-narrow' : 'max-w-container'}`}>{children}</div>;
}

export function Separator() {
  return <div className="h-px w-full bg-brand-softGray/80" aria-hidden="true" />;
}

export function Badge({ children }: PropsWithChildren) {
  return <span className="inline-flex items-center rounded-full border border-brand-lavender/30 bg-brand-lavender/8 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-brand-lavender">{children}</span>;
}

export function SectionHeader({ title, eyebrow, description }: Omit<SectionProps, 'children' | 'narrow' | 'className'>) {
  if (!title && !eyebrow && !description) return null;

  return (
    <div className="max-w-3xl">
      {eyebrow ? <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-brand-lavender/80">{eyebrow}</p> : null}
      {title ? <h2 className="mt-2 text-balance text-brand-charcoal">{title}</h2> : null}
      {description ? <p className="mt-3 text-brand-text/78">{description}</p> : null}
    </div>
  );
}

export function Card({
  children,
  className = '',
  interactive = false,
  tone = 'default',
}: PropsWithChildren<{ className?: string; interactive?: boolean; tone?: CardTone }>) {
  return (
    <article className={`card-surface p-4 sm:p-5 ${className}`.trim()} data-interactive={interactive} data-tone={tone}>
      {children}
    </article>
  );
}

export function Section({ id, title, eyebrow, description, children, narrow, className = '' }: SectionProps) {
  return (
    <section id={id} className={`section-shell ${id ? 'scroll-mt-20' : ''} ${className}`.trim()}>
      <Container narrow={narrow}>
        <SectionHeader title={title} eyebrow={eyebrow} description={description} />
        <div className={`${title || description || eyebrow ? 'mt-6 md:mt-7' : ''}`.trim()}>{children}</div>
      </Container>
    </section>
  );
}

const buttonStyles: Record<ButtonVariant, string> = {
  primary:
    'inline-flex min-h-12 items-center justify-center rounded-full bg-brand-primary px-5 py-3 text-center text-sm font-semibold text-white shadow-soft hover:scale-[1.02] hover:shadow-lift',
  secondary:
    'inline-flex min-h-12 items-center justify-center rounded-full border border-brand-lavender/30 bg-brand-surface px-5 py-3 text-center text-sm font-semibold text-brand-charcoal hover:border-brand-accent hover:text-brand-lavender hover:shadow-soft',
  ghost:
    'inline-flex min-h-12 items-center justify-center rounded-full border border-brand-softGray bg-brand-bg px-5 py-3 text-center text-sm font-semibold text-brand-charcoal hover:border-brand-lavender/40 hover:bg-brand-surface',
  text: 'group inline-flex min-h-12 items-center gap-2 text-sm font-semibold text-brand-lavender hover:text-brand-magenta',
};

type ActionLinkProps = PropsWithChildren<{
  href: string;
  variant?: ButtonVariant;
  className?: string;
  external?: boolean;
}>;

export function ActionLink({ href, children, variant = 'primary', className = '', external }: ActionLinkProps) {
  const resolvedExternal = external ?? /^https?:\/\//.test(href);
  const classes = `${buttonStyles[variant]} ${className}`.trim();

  if (resolvedExternal) {
    return (
      <a href={href} target="_blank" rel="noreferrer" className={classes}>
        {children}
        {variant === 'text' ? <span aria-hidden="true" className="translate-x-0 transition-transform duration-200 ease-out group-hover:translate-x-1">→</span> : null}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
      {variant === 'text' ? <span aria-hidden="true" className="translate-x-0 transition-transform duration-200 ease-out group-hover:translate-x-1">→</span> : null}
    </Link>
  );
}

export function ButtonLink(props: ActionLinkProps) {
  return <ActionLink {...props} />;
}

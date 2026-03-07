import Link from 'next/link';
import { PropsWithChildren } from 'react';

export function Container({ children }: PropsWithChildren) {
  return <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">{children}</div>;
}

export function Section({ title, children }: PropsWithChildren<{ title?: string }>) {
  return (
    <section className="py-12 sm:py-16">
      <Container>
        {title ? <h2 className="mb-6 text-2xl font-semibold sm:text-3xl">{title}</h2> : null}
        {children}
      </Container>
    </section>
  );
}

export function ButtonLink({ href, children, secondary }: PropsWithChildren<{ href: string; secondary?: boolean }>) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center rounded-full px-5 py-2.5 text-sm font-semibold ${
        secondary ? 'bg-white/10 text-brand-softWhite hover:bg-white/20' : 'bg-brand-magenta text-white hover:bg-brand-lavender'
      }`}
    >
      {children}
    </Link>
  );
}

import Link from 'next/link';
import { Container } from '@/components/ui';

export default function LanguageEntry() {
  return (
    <main className="grid min-h-screen place-items-center">
      <Container narrow>
        <div className="mx-auto w-full rounded-[24px] border border-white/12 bg-white/[0.03] p-10 text-center shadow-surface">
          <p className="font-display text-sm uppercase tracking-[0.18em] text-brand-sky">Disforia FC</p>
          <h1 className="mt-4 font-display text-4xl font-bold leading-[1.02] tracking-[-0.02em]">Selecciona idioma / Choose language</h1>
          <div className="mt-9 flex justify-center gap-3">
            <Link className="rounded-full border border-brand-magenta/60 bg-brand-magenta px-6 py-3 font-display text-sm font-semibold hover:-translate-y-0.5" href="/es">
              Español
            </Link>
            <Link className="rounded-full border border-white/20 bg-white/10 px-6 py-3 font-display text-sm font-semibold hover:-translate-y-0.5" href="/en">
              English
            </Link>
          </div>
        </div>
      </Container>
    </main>
  );
}

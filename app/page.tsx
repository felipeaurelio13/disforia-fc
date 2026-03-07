import Link from 'next/link';
import { Container } from '@/components/ui';

export default function LanguageEntry() {
  return (
    <main className="grid min-h-screen place-items-center">
      <Container>
        <div className="mx-auto max-w-xl rounded-3xl border border-white/10 bg-white/5 p-10 text-center">
          <p className="text-brand-sky">Disforia FC</p>
          <h1 className="mt-3 text-3xl font-bold">Selecciona idioma / Choose language</h1>
          <div className="mt-8 flex justify-center gap-3">
            <Link className="rounded-full bg-brand-magenta px-6 py-2.5 font-semibold" href="/es">Español</Link>
            <Link className="rounded-full bg-white/10 px-6 py-2.5 font-semibold" href="/en">English</Link>
          </div>
        </div>
      </Container>
    </main>
  );
}

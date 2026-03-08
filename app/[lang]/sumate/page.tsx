import Link from 'next/link';
import { Section } from '@/components/ui';
import { copy } from '@/content/copy';
import { Locale, locales } from '@/content/site';
import { notFound } from 'next/navigation';

export default function JoinPage({ params }: { params: { lang: string } }) {
  if (!locales.includes(params.lang as Locale)) notFound();
  const lang = params.lang as Locale;
  const t = copy[lang].joinPage;

  return (
    <>
      <Section title={lang === 'es' ? 'Súmate' : 'Join'}>
        <p className="max-w-3xl text-brand-softWhite/85">{t.intro}</p>
      </Section>
      <Section>
        <div className="grid gap-4 md:grid-cols-3">
          {t.cards.map((card) => (
            <article key={card.title} className="rounded-xl border border-white/10 bg-white/5 p-5">
              <h3 className="text-lg font-semibold">{card.title}</h3>
              <p className="mt-2 text-sm text-brand-softWhite/80">{card.text}</p>
              {card.external ? (
                <a href={card.href} target="_blank" rel="noreferrer" className="mt-4 inline-flex min-h-12 items-center rounded-full border border-white/20 bg-black/20 px-4 py-2 text-sm font-semibold text-brand-softWhite/85">
                  {card.cta}
                </a>
              ) : (
                <Link href={card.href} className="mt-4 inline-flex min-h-12 items-center rounded-full border border-white/20 bg-black/20 px-4 py-2 text-sm font-semibold text-brand-softWhite/85">
                  {card.cta}
                </Link>
              )}
            </article>
          ))}
        </div>
      </Section>
    </>
  );
}

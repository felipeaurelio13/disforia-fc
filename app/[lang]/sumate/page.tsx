import { Section } from '@/components/ui';
import { copy } from '@/content/copy';
import { externalLinks, Locale, locales } from '@/content/site';
import { notFound } from 'next/navigation';

export default function JoinPage({ params }: { params: { lang: string } }) {
  if (!locales.includes(params.lang as Locale)) notFound();
  const lang = params.lang as Locale;
  const t = copy[lang].joinPage;

  return (
    <>
      <Section title={lang === 'es' ? 'Súmate' : 'Join'}><p className="max-w-3xl text-brand-softWhite/85">{t.intro}</p></Section>
      <Section>
        <div className="grid gap-4 md:grid-cols-3">
          {t.cards.map((card) => (
            <article key={card.title} className="rounded-xl border border-white/10 bg-white/5 p-5">
              <h3 className="text-lg font-semibold">{card.title}</h3>
              <p className="mt-2 text-sm text-brand-softWhite/80">{card.text}</p>
              <form className="mt-4 space-y-2" action={externalLinks.email}>
                <input className="w-full rounded-lg border border-white/20 bg-black/20 px-3 py-2 text-sm" type="text" placeholder={lang === 'es' ? 'Nombre' : 'Name'} required />
                <input className="w-full rounded-lg border border-white/20 bg-black/20 px-3 py-2 text-sm" type="email" placeholder="Email" required />
                <button className="rounded-full bg-brand-magenta px-4 py-2 text-sm font-semibold" type="submit">{card.cta}</button>
              </form>
            </article>
          ))}
        </div>
      </Section>
    </>
  );
}

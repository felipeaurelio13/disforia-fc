import { Section } from '@/components/ui';
import { copy } from '@/content/copy';
import { externalLinks, Locale, locales } from '@/content/site';
import { notFound } from 'next/navigation';

export default function SupportPage({ params }: { params: { lang: string } }) {
  if (!locales.includes(params.lang as Locale)) notFound();
  const lang = params.lang as Locale;
  const t = copy[lang].supportPage;

  return (
    <>
      <Section title={lang === 'es' ? 'Apoya' : 'Support'}>
        <p className="max-w-3xl text-brand-softWhite/85">{t.intro}</p>
      </Section>
      <Section>
        <div className="grid gap-3 sm:grid-cols-2">
          {t.cards.map((card, index) => (
            <article key={card.title} className={`rounded-xl border p-4 ${index === 0 ? 'border-brand-magenta/45 bg-brand-magenta/10' : 'border-white/10 bg-white/5'}`}>
              <h3 className="text-lg font-semibold">{card.title}</h3>
              <p className="mt-1.5 text-sm text-brand-softWhite/80">{card.text}</p>
              <a
                href={card.href}
                target={card.external ? '_blank' : undefined}
                rel={card.external ? 'noreferrer' : undefined}
                className="mt-3 inline-flex min-h-12 items-center rounded-full border border-white/20 bg-black/20 px-4 py-2 text-sm font-semibold text-brand-softWhite/90"
              >
                {card.cta}
              </a>
            </article>
          ))}
        </div>
      </Section>
      <Section title={lang === 'es' ? 'Canal activo' : 'Active channel'}>
        <div className="flex flex-wrap gap-3">
          <a href={externalLinks.instagram} target="_blank" rel="noreferrer" className="inline-flex min-h-12 items-center rounded-full border border-brand-magenta/65 bg-brand-magenta px-5 py-2.5 text-sm font-semibold text-white">
            {lang === 'es' ? 'Escríbenos por Instagram' : 'Message us on Instagram'}
          </a>
          <a href={externalLinks.gofundme} target="_blank" rel="noreferrer" className="inline-flex min-h-12 items-center rounded-full border border-white/20 bg-white/5 px-5 py-2.5 text-sm font-semibold text-brand-softWhite">
            GoFundMe
          </a>
        </div>
      </Section>
    </>
  );
}

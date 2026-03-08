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
        <div className="grid gap-4 sm:grid-cols-2">
          {t.cards.map((card) => (
            <article key={card.title} className="rounded-xl border border-white/10 bg-white/5 p-5">
              <h3 className="text-lg font-semibold">{card.title}</h3>
              <p className="mt-2 text-sm text-brand-softWhite/80">{card.text}</p>
              <a
                href={card.href}
                target={card.external ? '_blank' : undefined}
                rel={card.external ? 'noreferrer' : undefined}
                className="mt-4 inline-flex min-h-12 items-center rounded-full border border-white/20 bg-black/20 px-4 py-2 text-sm font-semibold text-brand-softWhite/90"
              >
                {card.cta}
              </a>
            </article>
          ))}
        </div>
      </Section>
      <Section title={lang === 'es' ? 'Contacto activo' : 'Active contact'}>
        <p className="max-w-3xl text-sm leading-relaxed text-brand-softWhite/82 sm:text-base">
          {lang === 'es'
            ? 'Mientras no exista un correo oficial confirmado, el canal principal de contacto es Instagram. GoFundMe queda como acción directa de apoyo.'
            : 'Until an official email is confirmed, Instagram is the primary contact channel. GoFundMe stays as the direct support action.'}
        </p>
        <div className="flex flex-wrap gap-3">
          <a href={externalLinks.instagram} target="_blank" rel="noreferrer" className="inline-flex min-h-12 items-center rounded-full border border-brand-magenta/65 bg-brand-magenta px-5 py-2.5 text-sm font-semibold text-white">
            {lang === 'es' ? 'Escribir por Instagram' : 'Message us on Instagram'}
          </a>
          <a href={externalLinks.gofundme} target="_blank" rel="noreferrer" className="inline-flex min-h-12 items-center rounded-full border border-brand-magenta/65 bg-brand-magenta px-5 py-2.5 text-sm font-semibold">
            GoFundMe
          </a>
        </div>
      </Section>
    </>
  );
}

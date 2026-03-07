export const locales = ['es', 'en'] as const;
export type Locale = (typeof locales)[number];

export const externalLinks = {
  instagram: 'https://www.instagram.com/disforia_fc/',
  instagramFootball: 'https://www.instagram.com/disforia_fc/',
  instagramBasket: 'https://www.instagram.com/disforiabskt/',
  instagramVolleyball: 'https://www.instagram.com/disforiavoley/',
  gofundme: 'https://www.gofundme.com/f/disforia-fc-rumbo-a-los-gaygames-xii-valencia-2026',
  gayGames: 'https://www.gaygames.org/valencia',
  gayGamesFootball: 'https://www.gaygamesvalencia2026.com/en/sport/football/',
  documentary: 'https://cinechile.cl/pelicula/disforia-futbol-club/',
  documentaryChileDoc: 'https://www.chiledoc.cl/disforia-futbol-club/',
};

export const editorialSources = [
  'https://www.instagram.com/disforia_fc/',
  'https://galio.cl/2024/06/28/disforia-club-el-1-equipo-deportivo-para-personas-trans-y-no-binarias-de-chile/',
  'https://www.theclinic.cl/2021/09/10/disforia-futbol-club-un-espacio-deportivo-seguro-para-personas-trans-y-no-binarias/',
  'https://distintaslatitudes.net/historias/reportaje/disforia-fc-futbol-trans',
  'https://cinechile.cl/pelicula/disforia-futbol-club/',
  'https://www.chiledoc.cl/disforia-futbol-club/',
  'https://tntsports.cl/videos/disforiafc_en_nept_1-vf20240628mp4.html',
  'https://cruzados.cl/news/detail/equipo-de-jugadores-trans-visito-entrenamiento-de-universidad-catolica/',
  'https://cruzados.cl/news/detail/futbolistas-de-la-franja-compartieron-con-equipo-formado-por-jugadores-trans/',
  'https://www.gofundme.com/f/disforia-fc-rumbo-a-los-gaygames-xii-valencia-2026',
  'https://www.gaygames.org/valencia',
  'https://www.gaygamesvalencia2026.com/en/sport/football/',
] as const;

export const valenciaFunding = {
  target: null as number | null,
  raised: null as number | null,
  currency: 'EUR',
  breakdown: [
    { key: 'registration', label: { es: 'Inscripciones', en: 'Registrations' }, amount: null as number | null },
    { key: 'flights', label: { es: 'Pasajes', en: 'Flights' }, amount: null as number | null },
    { key: 'accommodation', label: { es: 'Alojamiento', en: 'Accommodation' }, amount: null as number | null },
    { key: 'operations', label: { es: 'Operación', en: 'Operations' }, amount: null as number | null },
  ],
  nextMilestone: {
    es: 'Cerrar inscripciones del equipo',
    en: 'Complete team registrations',
  },
};

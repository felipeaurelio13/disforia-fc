export const locales = ['es', 'en'] as const;
export type Locale = (typeof locales)[number];

export const externalLinks = {
  instagram: 'https://www.instagram.com/disforia_fc/',
  email: 'mailto:disforiafutbolclub@gmail.com',
  gofundme: 'https://www.gofundme.com/f/disforia-fc-rumbo-a-los-gaygames-xii-valencia-2026',
  gayGames: 'https://www.gaygames.org/valencia',
  gayGamesFootball: 'https://www.gaygamesvalencia2026.com/en/sport/football/',
  documentary: 'https://cinechile.cl/pelicula/disforia-futbol-club/',
};

// Editorial reference sources used as factual basis (do not render all directly in UI)
export const editorialSources = [
  'https://www.instagram.com/disforia_fc/',
  'https://galio.cl/2024/06/28/disforia-club-el-1-equipo-deportivo-para-personas-trans-y-no-binarias-de-chile/',
  'https://www.theclinic.cl/2021/09/10/disforia-futbol-club-un-espacio-deportivo-seguro-para-personas-trans-y-no-binarias/',
  'https://distintaslatitudes.net/historias/reportaje/disforia-fc-futbol-trans',
  'https://cinechile.cl/pelicula/disforia-futbol-club/',
  'https://tntsports.cl/videos/disforiafc_en_nept_1-vf20240628mp4.html',
  'https://cruzados.cl/news/detail/equipo-de-jugadores-trans-visito-entrenamiento-de-universidad-catolica/',
  'https://www.gofundme.com/f/disforia-fc-rumbo-a-los-gaygames-xii-valencia-2026',
  'https://www.gaygames.org/valencia',
  'https://www.gaygamesvalencia2026.com/en/sport/football/',
] as const;

export const valenciaFunding = {
  target: 16000,
  raised: 6200,
  currency: 'EUR',
  breakdown: [
    { key: 'registration', label: { es: 'Inscripciones', en: 'Registration' }, amount: 2800 },
    { key: 'flights', label: { es: 'Pasajes', en: 'Flights' }, amount: 7600 },
    { key: 'accommodation', label: { es: 'Alojamiento', en: 'Accommodation' }, amount: 4200 },
    { key: 'operations', label: { es: 'Operación', en: 'Operations' }, amount: 1400 },
  ],
};

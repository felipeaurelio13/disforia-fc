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

type CampaignMode = 'narrative' | 'tracked';

type ValenciaBreakdownItem = {
  key: 'registration' | 'flights' | 'accommodation' | 'operations';
  label: { es: string; en: string };
  amount: number;
};

type ValenciaTracked = {
  target: number;
  raised: number;
  breakdown: ValenciaBreakdownItem[];
  nextMilestone: { es: string; en: string };
};

export const valenciaFunding: {
  campaignMode: CampaignMode;
  currency: 'EUR';
  officialFacts: {
    games: { es: string; en: string };
    dates: { es: string; en: string };
    footballDeadline: { es: string; en: string };
  };
  narrative: {
    status: { es: string; en: string };
    categories: { es: string[]; en: string[] };
  };
  tracked?: ValenciaTracked;
} = {
  campaignMode: 'narrative',
  currency: 'EUR',
  officialFacts: {
    games: { es: 'Gay Games XII València 2026', en: 'Gay Games XII València 2026' },
    dates: { es: '27 de junio al 4 de julio de 2026', en: 'June 27 to July 4, 2026' },
    footballDeadline: { es: 'Cierre de equipos de fútbol: 1 de abril de 2026', en: 'Football team registrations close on April 1, 2026' },
  },
  narrative: {
    status: { es: 'Campaña activa', en: 'Active campaign' },
    categories: {
      es: ['Apoyo a inscripción', 'Apoyo a viaje', 'Apoyo a operación'],
      en: ['Registration support', 'Travel support', 'Operations support'],
    },
  },
};

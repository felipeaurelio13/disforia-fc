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

/* ── Documentary ── */

export const documentary = {
  shortFilm: {
    title: 'Disforia Fútbol Club',
    year: 2022,
    duration: '5 min',
    format: 'Cortometraje documental' as const,
    formatEn: 'Documentary short' as const,
    director: 'Inti Lorca',
    production: 'Camilo Ibeas, Javier Urzúa',
    poster: '/images/prensa/cinechile-poster.jpeg',
    still: '/images/prensa/cinhomo-fotograma.jpg',
    links: {
      cinechile: 'https://cinechile.cl/pelicula/disforia-futbol-club/',
      chiledoc: 'https://www.chiledoc.cl/disforia-futbol-club/',
    },
    festivals: [
      { name: 'FIDOCS', year: 2022, award: { es: 'Premio del Público · Competencia Cortos Emergentes', en: 'Audience Award · Emerging Shorts Competition' } },
      { name: 'Premios Platino · LaLiga', year: 2021, award: { es: 'Ganador "Cambio de Juego"', en: '"Cambio de Juego" Winner' } },
      { name: 'Queer Film Festival Playa del Carmen', year: 2022 },
      { name: 'CINHOMO · Valladolid', year: 2022 },
      { name: 'Festival Cine Sin Límites · Monterrey', year: 2022 },
      { name: 'Festival Cine Diverso · Bogotá', year: 2022 },
      { name: 'Resistencia Film Fest · Tomé', year: 2022 },
      { name: 'Festival AMOR LGBT+', year: 2022 },
      { name: 'Goya Queer · Madrid', year: 2022 },
      { name: 'Festival de Mujeres y Disidencias', year: 2022 },
      { name: 'Festival de Cine+Fútbol', year: 2022 },
      { name: 'Chile Shorts (catálogo)', year: 2022 },
    ],
  },
  featureFilm: {
    title: 'Disforia Fútbol Club',
    year: 2026,
    duration: '60 min',
    format: 'Largometraje documental' as const,
    formatEn: 'Feature-length documentary' as const,
    director: 'Inti Lorca',
    producer: 'Nicolás Videla · Cinespecie',
    status: { es: 'En producción', en: 'In production' },
    links: {
      cinespecie: 'https://cinespecie.com/disforia-futbol-club',
      chileconecta: 'https://chileconecta.cl/proyectos/disforia-futbol-club/',
    },
    festivals: [
      { name: 'Conecta 2024', year: 2024 },
    ],
  },
  teaser: {
    vimeoId: '1030374775',
    vimeoHash: '5697f27d56',
    title: 'Disforia Fútbol Club (Teaser)',
    director: 'Nicolás Videla',
    duration: '5:18',
    thumbnail: '/images/prensa/cinespecie-vimeo-thumb-hd.jpg',
  },
} as const;

/* ── People portraits ──
 *  Assigned from Galio editorial (Valpa, 2024) based on article section placement.
 *  To change a portrait, just swap the `src` path below.
 *  Available individual portraits in /public/images/prensa/:
 *    galio-full-4.jpg  (football pitch, red hair — Chris's section)
 *    galio-full-7.jpg  (two players by goal)
 *    galio-full-32.jpg (basketball + trans flag — Aaron's section)
 *    galio-full-46.jpg (goalkeeper, buzz cut — football)
 *  Group photos: galio-full-13.jpg · galio-full-30.jpg · galio-full-55.jpg
 */
export const peoplePortraits: Record<string, { src: string; alt: Record<Locale, string> }> = {
  chris: {
    src: '/images/prensa/chris.jpg',
    alt: { es: 'Christopher Erlandsen, fundador de Disforia FC, con la camiseta número 10', en: 'Christopher Erlandsen, founder of Disforia FC, wearing the number 10 jersey' },
  },
  aaron: {
    src: '/images/prensa/galio-full-32.jpg',
    alt: { es: 'Aaron Domke, líder de la rama de básquetbol de Disforia FC', en: 'Aaron Domke, leader of the Disforia FC basketball branch' },
  },
  waldo: {
    src: '/images/prensa/galio-full-46.jpg',
    alt: { es: 'Waldo Robledo, integrante de Disforia FC', en: 'Waldo Robledo, member of Disforia FC' },
  },
};

/* ── Press gallery ── */

export type GalleryItem = {
  src: string;
  alt: Record<Locale, string>;
  credit: string;
};

export const pressGallery: GalleryItem[] = [
  { src: '/images/prensa/galio-03.jpg', alt: { es: 'Equipo completo de Disforia FC en sesión fotográfica nocturna', en: 'Full Disforia FC team in night photo session' }, credit: 'Galio / Valpa' },
  { src: '/images/prensa/cinhomo-fotograma.jpg', alt: { es: 'Fotograma del documental — vista aérea del equipo en cancha', en: 'Documentary still — aerial view of team on the pitch' }, credit: 'Cinespecie / CINHOMO' },
  { src: '/images/prensa/cruzados-visita-uc.jpg', alt: { es: 'Disforia FC en visita a Universidad Católica con jugadores de la Franja', en: 'Disforia FC visiting Universidad Católica with Franja players' }, credit: 'Cruzados UC' },
  { src: '/images/prensa/galio-01.jpg', alt: { es: 'Jugadores de básquetbol con bandera trans en las gradas', en: 'Basketball players with trans flag in the stands' }, credit: 'Galio / Valpa' },
  { src: '/images/prensa/galio-02.jpg', alt: { es: 'Retrato de jugador con camiseta Disforia FC en cancha', en: 'Player portrait wearing Disforia FC jersey on the pitch' }, credit: 'Galio / Valpa' },
  { src: '/images/prensa/galio-06.jpg', alt: { es: 'Equipo en círculo mostrando camisetas con nombres', en: 'Team in circle showing jerseys with names' }, credit: 'Galio / Valpa' },
  { src: '/images/prensa/galio-10.jpg', alt: { es: 'Pies y sombras del equipo junto al balón', en: 'Team feet and shadows next to the ball' }, credit: 'Galio / Valpa' },
  { src: '/images/prensa/distintas-latitudes-portada.jpg', alt: { es: 'Ilustración editorial de Disforia FC por Alma Ríos', en: 'Editorial illustration of Disforia FC by Alma Ríos' }, credit: 'Distintas Latitudes / Alma Ríos' },
  { src: '/images/prensa/galio-04.jpg', alt: { es: 'Dos jugadores posando junto al arco', en: 'Two players posing by the goal' }, credit: 'Galio / Valpa' },
  { src: '/images/prensa/galio-05.jpg', alt: { es: 'Retrato con balón de básquetbol y bandera trans', en: 'Portrait with basketball and trans flag' }, credit: 'Galio / Valpa' },
  { src: '/images/prensa/chiledoc-01.jpg', alt: { es: 'Fotograma del documental — vista aérea de cancha', en: 'Documentary still — aerial view of the pitch' }, credit: 'Cinespecie / ChileDoc' },
  { src: '/images/prensa/galio-07.jpg', alt: { es: 'Arquero sentado en la cancha', en: 'Goalkeeper sitting on the pitch' }, credit: 'Galio / Valpa' },
  { src: '/images/prensa/cruzados-franja.jpg', alt: { es: 'Futbolistas de la UC compartieron con jugadores trans', en: 'UC footballers shared time with trans players' }, credit: 'Cruzados UC' },
  { src: '/images/prensa/galio-08.jpg', alt: { es: 'Jugador de espaldas mostrando camiseta en la cancha', en: 'Player from behind showing jersey on the pitch' }, credit: 'Galio / Valpa' },
  { src: '/images/prensa/galio-09.jpg', alt: { es: 'Retrato con balón de básquetbol y bandera trans de fondo', en: 'Portrait with basketball and trans flag in background' }, credit: 'Galio / Valpa' },
  { src: '/images/prensa/galio-11.jpg', alt: { es: 'Retrato en gradas con balón de básquetbol', en: 'Portrait in the stands with basketball' }, credit: 'Galio / Valpa' },
];

/* ── Press coverage (structured) ── */

export type PressCategory = 'press' | 'tv' | 'sport' | 'film';

export type PressItem = {
  source: string;
  title: Record<Locale, string>;
  description: Record<Locale, string>;
  href: string;
  date: string;          // ISO date for sorting
  category: PressCategory;
  thumbnail?: string;
};

export const pressCoverage: PressItem[] = [
  {
    source: 'The Clinic',
    title: {
      es: 'Disforia Fútbol Club: un espacio deportivo seguro para personas trans y no binarias',
      en: 'Disforia FC: a safe sports space for trans and non-binary people',
    },
    description: {
      es: 'Reportaje fundacional sobre el origen del club y la necesidad de espacios deportivos seguros.',
      en: "Foundational feature on the club's origin and the need for safe sports spaces.",
    },
    href: 'https://www.theclinic.cl/2021/09/10/disforia-futbol-club-un-espacio-deportivo-seguro-para-personas-trans-y-no-binarias/',
    date: '2021-09-10',
    category: 'press',
  },
  {
    source: 'Galio',
    title: {
      es: 'Disforia Club: el 1° equipo deportivo para personas trans y no binarias de Chile',
      en: "Disforia Club: Chile's first sports team for trans and non-binary people",
    },
    description: {
      es: 'Reportaje fotográfico de consolidación pública del proyecto con sesión editorial exclusiva.',
      en: "Photo feature on the project's public consolidation with an exclusive editorial shoot.",
    },
    href: 'https://galio.cl/2024/06/28/disforia-club-el-1-equipo-deportivo-para-personas-trans-y-no-binarias-de-chile/',
    date: '2024-06-28',
    category: 'press',
    thumbnail: '/images/prensa/galio-03.jpg',
  },
  {
    source: 'Distintas Latitudes',
    title: {
      es: 'Disforia FC: el llamado para expulsar la transfobia de las canchas de fútbol en Chile',
      en: 'Disforia FC: the call to expel transphobia from football pitches in Chile',
    },
    description: {
      es: 'Reportaje regional sobre fútbol, comunidad trans y resistencia colectiva.',
      en: 'Regional feature on football, trans community, and collective resistance.',
    },
    href: 'https://distintaslatitudes.net/historias/reportaje/disforia-fc-futbol-trans',
    date: '2019-10-09',
    category: 'press',
    thumbnail: '/images/prensa/distintas-latitudes-portada.jpg',
  },
  {
    source: 'TNT Sports',
    title: {
      es: 'Diversidad en el deporte: Disforia FC — No Es Para Tanto',
      en: 'Diversity in sport: Disforia FC — No Es Para Tanto',
    },
    description: {
      es: 'Reportaje televisivo sobre diversidad deportiva e inclusión trans en el fútbol chileno.',
      en: 'TV segment on sports diversity and trans inclusion in Chilean football.',
    },
    href: 'https://tntsports.cl/videos/disforiafc_en_nept_1-vf20240628mp4.html',
    date: '2024-06-28',
    category: 'tv',
  },
  {
    source: 'Cruzados · Universidad Católica',
    title: {
      es: 'Equipo de jugadores trans visitó entrenamiento de Universidad Católica',
      en: 'Trans players team visited Universidad Católica training session',
    },
    description: {
      es: 'Visita del equipo a San Carlos de Apoquindo para compartir con jugadores de la Franja.',
      en: 'Team visit to San Carlos de Apoquindo to share time with Franja players.',
    },
    href: 'https://cruzados.cl/news/detail/equipo-de-jugadores-trans-visito-entrenamiento-de-universidad-catolica/',
    date: '2022-03-31',
    category: 'sport',
    thumbnail: '/images/prensa/cruzados-visita-uc.jpg',
  },
  {
    source: 'Cruzados · Universidad Católica',
    title: {
      es: 'Futbolistas de la Franja compartieron con equipo formado por jugadores trans',
      en: 'Franja footballers shared time with trans players team',
    },
    description: {
      es: 'Encuentro con jugadores de la UC en el Día de la Visibilidad Trans.',
      en: 'Meeting with UC players on Trans Visibility Day.',
    },
    href: 'https://cruzados.cl/news/detail/futbolistas-de-la-franja-compartieron-con-equipo-formado-por-jugadores-trans/',
    date: '2021-06-28',
    category: 'sport',
    thumbnail: '/images/prensa/cruzados-franja.jpg',
  },
  {
    source: 'CineChile',
    title: {
      es: 'Disforia Fútbol Club — Ficha técnica',
      en: 'Disforia Fútbol Club — Technical details',
    },
    description: {
      es: 'Ficha oficial del cortometraje documental en el catálogo de CineChile.',
      en: 'Official short film entry in the CineChile catalogue.',
    },
    href: 'https://cinechile.cl/pelicula/disforia-futbol-club/',
    date: '2022-06-01',
    category: 'film',
    thumbnail: '/images/prensa/cinechile-poster.jpeg',
  },
  {
    source: 'ChileDoc',
    title: {
      es: 'Disforia Fútbol Club — Catálogo ChileDoc',
      en: 'Disforia Fútbol Club — ChileDoc Catalogue',
    },
    description: {
      es: 'Página oficial del largometraje en desarrollo en el catálogo de documentales chilenos.',
      en: 'Official feature film entry in the Chilean documentary catalogue.',
    },
    href: 'https://www.chiledoc.cl/disforia-futbol-club/',
    date: '2024-01-01',
    category: 'film',
    thumbnail: '/images/prensa/chiledoc-01.jpg',
  },
  {
    source: 'Cinespecie',
    title: {
      es: 'Disforia Fútbol Club — Productora Cinespecie',
      en: 'Disforia Fútbol Club — Cinespecie Production',
    },
    description: {
      es: 'Página de la productora del largometraje con equipo de producción y biofilmografía.',
      en: 'Production company page with crew and filmography.',
    },
    href: 'https://cinespecie.com/disforia-futbol-club',
    date: '2024-11-16',
    category: 'film',
  },
  {
    source: 'CINHOMO · Valladolid',
    title: {
      es: 'Disforia Fútbol Club — Festival CINHOMO',
      en: 'Disforia Fútbol Club — CINHOMO Festival',
    },
    description: {
      es: 'Exhibición del cortometraje en el festival LGBTQ+ de cine de Valladolid, España.',
      en: 'Short film screening at the LGBTQ+ film festival in Valladolid, Spain.',
    },
    href: 'https://cinhomo.org/disforia-futbol-club/',
    date: '2022-04-05',
    category: 'film',
  },
  {
    source: 'Escuela al Cine',
    title: {
      es: 'Disforia Fútbol Club — Programa Escuela al Cine',
      en: 'Disforia Fútbol Club — School Cinema Program',
    },
    description: {
      es: 'Ficha pedagógica del documental en el programa de cine escolar chileno.',
      en: 'Educational entry in the Chilean school cinema program.',
    },
    href: 'https://escuelaalcine.cl/pelicula/disforia-futbol-club/',
    date: '2023-01-01',
    category: 'film',
  },
  {
    source: 'Queer Film Fest · Playa del Carmen',
    title: {
      es: 'Disforia Fútbol Club — Queer Film Festival Playa del Carmen',
      en: 'Disforia Fútbol Club — Queer Film Fest Playa del Carmen',
    },
    description: {
      es: 'Selección oficial en el festival de cine queer de Playa del Carmen, México.',
      en: 'Official selection at the queer film festival in Playa del Carmen, Mexico.',
    },
    href: 'https://www.queerfilmfestivalplayadelcarmen.com/qff-2022/disforia-futbol-club',
    date: '2022-11-01',
    category: 'film',
  },
  {
    source: 'AlAireLibre',
    title: {
      es: 'Jugadores de Universidad Católica compartieron con equipo de fútbol de personas trans',
      en: 'Universidad Católica players shared time with trans football team',
    },
    description: {
      es: 'Cobertura de la visita de Disforia FC al entrenamiento de la UC en San Carlos de Apoquindo.',
      en: "Coverage of Disforia FC's visit to UC training at San Carlos de Apoquindo.",
    },
    href: 'https://www.alairelibre.cl/noticias/deportes/futbol/universidad-catolica/jugadores-de-universidad-catolica-compartieron-con-equipo-de-futbol-de/2021-06-28/234159.html',
    date: '2021-06-28',
    category: 'press',
  },
  {
    source: 'Radio Agricultura',
    title: {
      es: 'Futbolistas de la UC compartieron con equipo integrado por jugadores trans',
      en: 'UC footballers shared time with team of trans players',
    },
    description: {
      es: 'Nota radial sobre el encuentro entre jugadores de la UC y Disforia FC.',
      en: 'Radio report on the meeting between UC players and Disforia FC.',
    },
    href: 'https://www.radioagricultura.cl/deportes/futbolistas-de-la-uc-compartieron-con-equipo-integrado-por-jugadores-trans_20210629/',
    date: '2021-06-29',
    category: 'press',
  },
  {
    source: 'Secretaría de Justicia · São Paulo',
    title: {
      es: 'Secretaría de Justicia recibe a equipo chileno de fútbol trans',
      en: 'Justice Department receives Chilean trans football team',
    },
    description: {
      es: 'Recepción oficial del equipo por la Secretaría de Justicia y Ciudadanía de São Paulo durante campeonato LGBT+.',
      en: 'Official reception of the team by São Paulo Justice and Citizenship Department during LGBT+ championship.',
    },
    href: 'https://justica.sp.gov.br/index.php/secretaria-da-justica-e-cidadania-recebe-time-chileno-de-futebol-trans/',
    date: '2023-10-15',
    category: 'sport',
  },
  {
    source: 'Bitácora de Cine',
    title: {
      es: 'Ganadores del 26° FIDOCS — Disforia Fútbol Club, Premio del Público',
      en: '26th FIDOCS Winners — Disforia Fútbol Club, Audience Award',
    },
    description: {
      es: 'Cobertura de los documentales ganadores de FIDOCS 2022, incluyendo el premio del público para Disforia FC.',
      en: 'Coverage of FIDOCS 2022 winning documentaries, including the Audience Award for Disforia FC.',
    },
    href: 'https://bitacoradecine.cl/conoce-los-documentales-ganadores-del-26o-fidocs/',
    date: '2022-11-15',
    category: 'press',
  },
  {
    source: 'Conecta Chile',
    title: {
      es: 'Disforia Fútbol Club — Proyecto en desarrollo',
      en: 'Disforia Fútbol Club — Project in development',
    },
    description: {
      es: 'Presentación del largometraje en la plataforma de desarrollo de cine documental chileno.',
      en: 'Feature film presentation at the Chilean documentary development platform.',
    },
    href: 'https://chileconecta.cl/proyectos/disforia-futbol-club/',
    date: '2024-06-01',
    category: 'film',
  },
  {
    source: 'FIDOCS',
    title: {
      es: 'Catálogo FIDOCS 2022 — Disforia Fútbol Club',
      en: 'FIDOCS 2022 Catalogue — Disforia Fútbol Club',
    },
    description: {
      es: 'Inclusión en el catálogo oficial del 26° Festival Internacional de Documentales de Santiago.',
      en: 'Entry in the official catalogue of the 26th Santiago International Documentary Festival.',
    },
    href: 'https://fidocs.cl/wp-content/uploads/2023/04/Fidocs_Catalogo_2022.pdf',
    date: '2022-10-01',
    category: 'film',
  },
];

export const editorialSources = pressCoverage.map((item) => item.href);

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

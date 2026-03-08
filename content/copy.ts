import { externalLinks, Locale } from './site';

type NavItem = { href: string; label: string };

type Person = {
  name: string;
  shortName?: string;
  role: string;
  quote: string;
  image: { src: string; alt: string };
  featured?: boolean;
};

type Copy = {
  nav: NavItem[];
  common: {
    clubName: string;
    switchTo: string;
    supportCTA: string;
    contactEmail: string | null;
  };
  home: {
    hero: { title: string; subtitle: string; primary: string; secondary: string; kicker: string };
    legitimacy: string[];
    about: { title: string; body: string; quote: string };
    branches: { title: string; items: { title: string; text: string; featured?: boolean }[] };
    valencia: { title: string; text: string; donate: string; sponsor: string };
    people: { title: string; intro: string; list: Person[] };
    press: { title: string; links: { title: string; href: string }[] };
    support: { title: string; paths: string[] };
    join: { title: string; paths: string[]; quote: string };
  };
  club: {
    manifesto: string;
    history: string;
    documentary: { title: string; text: string; cta: string };
    leadership: {
      title: string;
      intro: string;
      formalBoardTitle: string;
      formalBoard: string[];
    };
    timeline: { year: string; event: string }[];
  };
  valencia: {
    hero: string;
    games: string;
    why: string;
    quote: string;
    needs: string[];
    donate: string;
    sponsor: string;
  };
  supportPage: { intro: string; cards: { title: string; text: string }[] };
  joinPage: { intro: string; cards: { title: string; text: string; cta: string }[] };
};

export const copy: Record<Locale, Copy> = {
  es: {
    nav: [
      { href: '/es', label: 'Inicio' },
      { href: '/es/club', label: 'El club' },
      { href: '/es/valencia-2026', label: 'Valencia 2026' },
      { href: '/es/apoya', label: 'Apoya' },
      { href: '/es/sumate', label: 'Súmate' },
    ],
    common: {
      clubName: 'Disforia FC',
      switchTo: 'EN',
      supportCTA: 'Apoyar campaña',
      contactEmail: null,
    },
    home: {
      hero: {
        title: 'club deportivo trans y no binario de chile',
        subtitle: 'Disforia entrena y compite con una convicción simple: el deporte también puede ser un espacio seguro, exigente y colectivo.',
        primary: 'Conocer el club',
        secondary: 'Apoyar Valencia 2026',
        kicker: 'Desde 2019 · comunidad y alto rendimiento',
      },
      legitimacy: ['Desde 2019', 'Fútbol como rama principal', 'Básquet y vóley activos', 'Documental premiado en FIDOCS 2022', 'Vocería pública sostenida en medios'],
      about: {
        title: 'Qué es Disforia',
        body: 'Somos un club deportivo con base comunitaria. Entrenamos, competimos y sostenemos un espacio donde las personas trans y no binarias pueden habitar el deporte con pertenencia.',
        quote: 'Es una familia, es un espacio seguro para jugar a la pelota.',
      },
      branches: {
        title: 'Ramas del club',
        items: [
          { title: 'Fútbol', text: 'Rama principal del club. Entrenamientos regulares, amistosos y proyección competitiva.', featured: true },
          { title: 'Básquet', text: 'Espacio de juego y formación con rol clave en la expansión del club.' },
          { title: 'Vóley', text: 'Rama en crecimiento con foco en participación y continuidad deportiva.' },
        ],
      },
      valencia: { title: 'Rumbo a Gay Games XII València 2026', text: 'Valencia 2026 es un hito deportivo importante y una campaña activa. El objetivo: financiar viaje, inscripción y operación del equipo sin perder el trabajo cotidiano del club.', donate: 'Ir al crowdfunding', sponsor: 'Quiero auspiciar' },
      people: {
        title: 'Rostros visibles',
        intro: 'Vocerías y liderazgos públicos del club, presentados de forma editorial y sin sobrecargar cargos.',
        list: [
          {
            name: 'Christopher Erlandsen',
            shortName: 'Chris',
            role: 'Fundador de Disforia, rostro público histórico y organizador de la campaña a Valencia 2026.',
            quote: 'Es una familia, es un espacio seguro para jugar a la pelota.',
            image: { src: '/images/chris-erlandsen.svg', alt: 'Retrato editorial de Christopher Erlandsen' },
            featured: true,
          },
          {
            name: 'Aaron Domke',
            role: 'Figura relevante en la expansión del club y en el levantamiento de la rama de básquet.',
            quote: 'Disforia me abrió una cancha donde competir sin esconder quién soy.',
            image: { src: '/images/aaron-domke.svg', alt: 'Retrato editorial de Aaron Domke' },
          },
          {
            name: 'Christofer Waldo Robledo Alfaro',
            shortName: 'Waldo',
            role: 'Miembro visible del club y vocería pública en medios.',
            quote: 'Cuando jugamos en equipo, también cuidamos a quien llega por primera vez.',
            image: { src: '/images/waldo-robledo.svg', alt: 'Retrato editorial de Christofer Waldo Robledo Alfaro' },
          },
        ],
      },
      press: { title: 'Prensa y reconocimiento', links: [{ title: 'The Clinic', href: 'https://www.theclinic.cl/2021/09/10/disforia-futbol-club-un-espacio-deportivo-seguro-para-personas-trans-y-no-binarias/' }, { title: 'Galio', href: 'https://galio.cl/2024/06/28/disforia-club-el-1-equipo-deportivo-para-personas-trans-y-no-binarias-de-chile/' }, { title: 'Distintas Latitudes', href: 'https://distintaslatitudes.net/historias/reportaje/disforia-fc-futbol-trans' }] },
      support: { title: 'Cómo apoyar', paths: ['Donar', 'Auspiciar', 'Difundir'] },
      join: { title: 'Cómo sumarte', paths: ['Jugar / entrenar', 'Colaborar', 'Invitar al club'], quote: 'vi que tenía un propósito y que era necesario' },
    },
    club: {
      manifesto: 'Disforia FC existe para que el deporte sea un espacio habitable, competitivo y colectivo para personas trans y no binarias en Chile.',
      history: 'El club surge públicamente en 2019 y se consolida como proyecto deportivo con foco en seguridad, juego y comunidad. Fútbol es la rama principal, junto con básquet y vóley.',
      documentary: { title: 'Disforia Fútbol Club', text: 'Documental sobre la experiencia del club, reconocido con el Premio del Público en FIDOCS 2022.', cta: 'Ver ficha' },
      leadership: {
        title: 'Liderazgos y vocerías',
        intro: 'Chris aparece como fundador y principal rostro público. Aaron y Waldo se muestran como figuras visibles del proceso deportivo y comunicacional del club.',
        formalBoardTitle: 'Estructura formal pública (editable)',
        formalBoard: ['Mateo Alonso Godoy Pérez', 'Christofer Waldo Robledo Alfaro', 'Román Ayün Araneda Figueroa'],
      },
      timeline: [
        { year: '2019', event: 'Origen público del club en Chile' },
        { year: '2021', event: 'Mayor visibilidad en prensa nacional' },
        { year: '2022', event: 'Premio del Público en FIDOCS para el documental' },
        { year: '2024', event: 'Cobertura en medios deportivos y culturales' },
        { year: '2026', event: 'Camino a Gay Games XII València' },
      ],
    },
    valencia: {
      hero: 'Valencia 2026 es un objetivo deportivo y colectivo del club.',
      games: 'Los Gay Games reúnen delegaciones de distintos países en una cita internacional de deporte inclusivo.',
      why: 'Disforia participa para competir, representar a su comunidad y consolidar su proyecto deportivo en un escenario global.',
      quote: 'football became an embrace, support, community, and family.',
      needs: ['Inscripciones', 'Pasajes', 'Alojamiento', 'Operación'],
      donate: 'Donar en GoFundMe',
      sponsor: 'Ver opciones de auspicio',
    },
    supportPage: {
      intro: 'Hay distintas formas de sostener el proyecto deportivo del club.',
      cards: [
        { title: 'Donar', text: 'Aporte individual directo para la campaña Valencia 2026.' },
        { title: 'Auspiciar', text: 'Propuesta para marcas e instituciones con visibilidad con sentido.' },
        { title: 'Difundir', text: 'Amplificar campañas y actividades del club en redes y medios.' },
        { title: 'Alianzas', text: 'Vínculos con clubes, organizaciones y espacios culturales/deportivos.' },
      ],
    },
    joinPage: {
      intro: 'Si quieres ser parte, este es el punto de entrada.',
      cards: [
        { title: 'Quiero jugar / entrenar', text: 'Conecta luego con formulario oficial o canal validado por el club.', cta: 'Canal por confirmar' },
        { title: 'Quiero colaborar', text: 'Puedes apoyar en producción, gestión o comunicación.', cta: 'Ofrecer colaboración' },
        { title: 'Quiero invitar a Disforia', text: 'Para actividades, partidos o encuentros comunitarios.', cta: 'Enviar invitación' },
      ],
    },
  },
  en: {
    nav: [
      { href: '/en', label: 'Home' },
      { href: '/en/club', label: 'The club' },
      { href: '/en/valencia-2026', label: 'Valencia 2026' },
      { href: '/en/apoya', label: 'Support' },
      { href: '/en/sumate', label: 'Join' },
    ],
    common: { clubName: 'Disforia FC', switchTo: 'ES', supportCTA: 'Support campaign', contactEmail: null },
    home: {
      hero: {
        title: 'trans and non-binary sports club from chile',
        subtitle: 'Disforia trains and competes with a clear commitment: sport can be a safe, demanding, and collective space.',
        primary: 'Meet the club',
        secondary: 'Support Valencia 2026',
        kicker: 'Since 2019 · community and performance',
      },
      legitimacy: ['Since 2019', 'Football as main branch', 'Basketball and volleyball branches', 'Award-winning documentary at FIDOCS 2022', 'Sustained public voice in media'],
      about: {
        title: 'What Disforia is',
        body: 'We are a sports club rooted in community. We train, compete, and sustain a space where trans and non-binary people can belong in sport.',
        quote: 'Es una familia, es un espacio seguro para jugar a la pelota.',
      },
      branches: {
        title: 'Club branches',
        items: [
          { title: 'Football', text: 'Main branch. Regular training, friendly matches, and competitive projection.', featured: true },
          { title: 'Basketball', text: 'Play and development space, key for the club’s expansion process.' },
          { title: 'Volleyball', text: 'Growing branch focused on participation and continuity.' },
        ],
      },
      valencia: { title: 'Road to Gay Games XII Valencia 2026', text: 'Valencia 2026 is an important sporting milestone and an active campaign. The goal: fund travel, registration, and team operations while sustaining club life.', donate: 'Go to crowdfunding', sponsor: 'Become a sponsor' },
      people: {
        title: 'Visible voices',
        intro: 'Public-facing voices and leadership moments, shown with editorial care and without overloading formal titles.',
        list: [
          {
            name: 'Christopher Erlandsen',
            shortName: 'Chris',
            role: 'Disforia founder, long-time public face, and organizer of the Valencia 2026 campaign.',
            quote: 'It is a family, a safe space to play football.',
            image: { src: '/images/chris-erlandsen.svg', alt: 'Editorial portrait of Christopher Erlandsen' },
            featured: true,
          },
          {
            name: 'Aaron Domke',
            role: 'Relevant figure in the club’s expansion and in building Disforia’s basketball branch.',
            quote: 'Disforia gave me a court where I can compete without hiding who I am.',
            image: { src: '/images/aaron-domke.svg', alt: 'Editorial portrait of Aaron Domke' },
          },
          {
            name: 'Christofer Waldo Robledo Alfaro',
            shortName: 'Waldo',
            role: 'Visible club member and public voice in media.',
            quote: 'When we play as a team, we also protect everyone arriving for the first time.',
            image: { src: '/images/waldo-robledo.svg', alt: 'Editorial portrait of Christofer Waldo Robledo Alfaro' },
          },
        ],
      },
      press: { title: 'Press and recognition', links: [{ title: 'The Clinic', href: 'https://www.theclinic.cl/2021/09/10/disforia-futbol-club-un-espacio-deportivo-seguro-para-personas-trans-y-no-binarias/' }, { title: 'Galio', href: 'https://galio.cl/2024/06/28/disforia-club-el-1-equipo-deportivo-para-personas-trans-y-no-binarias-de-chile/' }, { title: 'Distintas Latitudes', href: 'https://distintaslatitudes.net/historias/reportaje/disforia-fc-futbol-trans' }] },
      support: { title: 'How to support', paths: ['Donate', 'Sponsor', 'Spread the word'] },
      join: { title: 'How to join', paths: ['Play / train', 'Collaborate', 'Invite the club'], quote: 'vi que tenía un propósito y que era necesario' },
    },
    club: {
      manifesto: 'Disforia FC exists to make sport a safe, competitive, and collective space for trans and non-binary people in Chile.',
      history: 'The club’s public origin dates back to 2019 and has grown into a sports project centered on safety, play, and community. Football is the main branch, alongside basketball and volleyball.',
      documentary: { title: 'Disforia Fútbol Club', text: 'Documentary portraying the club’s journey, awarded Audience Award at FIDOCS 2022.', cta: 'View record' },
      leadership: {
        title: 'Leadership and public voices',
        intro: 'Chris appears as founder and principal public face. Aaron and Waldo are presented as visible figures in sporting and media growth.',
        formalBoardTitle: 'Public formal structure (editable)',
        formalBoard: ['Mateo Alonso Godoy Pérez', 'Christofer Waldo Robledo Alfaro', 'Román Ayün Araneda Figueroa'],
      },
      timeline: [
        { year: '2019', event: 'Public origin of the club in Chile' },
        { year: '2021', event: 'Early national media visibility' },
        { year: '2022', event: 'FIDOCS Audience Award for the documentary' },
        { year: '2024', event: 'Coverage in sports and cultural media' },
        { year: '2026', event: 'Road to Gay Games XII Valencia' },
      ],
    },
    valencia: {
      hero: 'Valencia 2026 is a sporting and collective objective for the club.',
      games: 'The Gay Games bring together delegations from different countries in an international inclusive sports event.',
      why: 'Disforia participates to compete, represent its community, and consolidate its sports project on a global stage.',
      quote: 'football became an embrace, support, community, and family.',
      needs: ['Registration', 'Flights', 'Accommodation', 'Operations'],
      donate: 'Donate on GoFundMe',
      sponsor: 'View sponsorship options',
    },
    supportPage: {
      intro: 'There are multiple ways to sustain the club’s sports project.',
      cards: [
        { title: 'Donate', text: 'Direct individual support for Valencia 2026 campaign.' },
        { title: 'Sponsor', text: 'Concrete proposal for brands and institutions with meaningful visibility.' },
        { title: 'Spread the word', text: 'Share campaigns and club activities across social and media channels.' },
        { title: 'Partnerships', text: 'Collaborations with clubs, organizations, and cultural/sports spaces.' },
      ],
    },
    joinPage: {
      intro: 'If you want to be part of Disforia, start here.',
      cards: [
        { title: 'I want to play / train', text: 'Connect later to an official form or validated club contact channel.', cta: 'Channel to be confirmed' },
        { title: 'I want to collaborate', text: 'Support in production, operations, or communication.', cta: 'Offer collaboration' },
        { title: 'I want to invite Disforia', text: 'For activities, matches, and community events.', cta: 'Send invitation' },
      ],
    },
  },
};

export type { Copy, Person };

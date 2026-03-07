import { externalLinks, Locale } from './site';

type NavItem = { href: string; label: string };

type Person = { name: string; role: string; quote: string };

type Copy = {
  nav: NavItem[];
  common: {
    clubName: string;
    switchTo: string;
    supportCTA: string;
    contactEmail: string;
  };
  home: {
    hero: { title: string; subtitle: string; primary: string; secondary: string };
    legitimacy: string[];
    about: { title: string; body: string };
    branches: { title: string; items: { title: string; text: string; featured?: boolean }[] };
    valencia: { title: string; text: string; donate: string; sponsor: string };
    people: { title: string; list: Person[] };
    press: { title: string; links: { title: string; href: string }[] };
    support: { title: string; paths: string[] };
    join: { title: string; paths: string[] };
  };
  club: {
    manifesto: string;
    history: string;
    documentary: { title: string; text: string; cta: string };
    timeline: { year: string; event: string }[];
  };
  valencia: {
    hero: string;
    games: string;
    why: string;
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
      contactEmail: externalLinks.email,
    },
    home: {
      hero: {
        title: 'club deportivo trans y no binario de chile',
        subtitle: 'Creamos un espacio seguro para jugar, competir y construir comunidad a través del deporte.',
        primary: 'Conocer el club',
        secondary: 'Apoyar Valencia 2026',
      },
      legitimacy: ['Desde 2019', 'Fútbol como rama principal', 'Básquet y vóley activos', 'Documental premiado en FIDOCS 2022', 'Visibilidad en medios e instituciones'],
      about: { title: 'Qué es Disforia', body: 'Somos un club deportivo con base comunitaria. Entrenamos, competimos y sostenemos un espacio donde las personas trans y no binarias puedan habitar el deporte con pertenencia.' },
      branches: {
        title: 'Ramas del club',
        items: [
          { title: 'Fútbol', text: 'Rama principal del club. Entrenamientos regulares, amistosos y proyección competitiva.', featured: true },
          { title: 'Básquet', text: 'Espacio de juego y formación para fortalecer técnica y comunidad.' },
          { title: 'Vóley', text: 'Rama en crecimiento con foco en participación y continuidad deportiva.' },
        ],
      },
      valencia: { title: 'Rumbo a Gay Games XII València 2026', text: 'Valencia 2026 es el próximo gran hito del club. Estamos financiando viaje, inscripción y operación del equipo.', donate: 'Ir al crowdfunding', sponsor: 'Quiero auspiciar' },
      people: {
        title: 'Rostros del club',
        list: [
          { name: 'Alex', role: 'Fútbol', quote: 'Entrenar acá me devolvió la confianza en la cancha.' },
          { name: 'Vale', role: 'Básquet', quote: 'Encontré equipo, ritmo y pertenencia en un mismo lugar.' },
          { name: 'Nico', role: 'Vóley', quote: 'Competir sin esconder quién soy cambió mi relación con el deporte.' },
        ],
      },
      press: { title: 'Prensa y reconocimiento', links: [{ title: 'The Clinic', href: 'https://www.theclinic.cl/2021/09/10/disforia-futbol-club-un-espacio-deportivo-seguro-para-personas-trans-y-no-binarias/' }, { title: 'Galio', href: 'https://galio.cl/2024/06/28/disforia-club-el-1-equipo-deportivo-para-personas-trans-y-no-binarias-de-chile/' }, { title: 'Distintas Latitudes', href: 'https://distintaslatitudes.net/historias/reportaje/disforia-fc-futbol-trans' }] },
      support: { title: 'Cómo apoyar', paths: ['Donar', 'Auspiciar', 'Difundir'] },
      join: { title: 'Cómo sumarte', paths: ['Jugar / entrenar', 'Colaborar', 'Invitar al club'] },
    },
    club: {
      manifesto: 'Disforia FC existe para que el deporte sea un espacio habitable, competitivo y colectivo para personas trans y no binarias en Chile.',
      history: 'El club surge públicamente en 2019 y se consolida como proyecto deportivo con foco en seguridad, juego y comunidad. Fútbol es la rama principal, junto con básquet y vóley.',
      documentary: { title: 'Disforia Fútbol Club', text: 'Documental sobre la experiencia del club, reconocido con el Premio del Público en FIDOCS 2022.', cta: 'Ver ficha' },
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
      needs: ['Inscripciones', 'Pasajes', 'Alojamiento', 'Operación'],
      donate: 'Donar en GoFundMe',
      sponsor: 'Contactar para auspicio',
    },
    supportPage: {
      intro: 'Hay distintas formas de sostener el proyecto deportivo del club.',
      cards: [
        { title: 'Donar', text: 'Aporte individual directo para la campaña Valencia 2026.' },
        { title: 'Auspiciar', text: 'Propuesta para marcas e instituciones con visibilidad y colaboración real.' },
        { title: 'Difundir', text: 'Compartir campaña y actividades del club en redes y medios.' },
        { title: 'Alianzas', text: 'Vínculos con clubes, organizaciones y espacios culturales/deportivos.' },
      ],
    },
    joinPage: {
      intro: 'Si quieres ser parte, este es el punto de entrada.',
      cards: [
        { title: 'Quiero jugar / entrenar', text: 'Completa el formulario para sumarte a una rama activa.', cta: 'Escribir al club' },
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
    common: { clubName: 'Disforia FC', switchTo: 'ES', supportCTA: 'Support campaign', contactEmail: externalLinks.email },
    home: {
      hero: {
        title: 'trans and non-binary sports club from chile',
        subtitle: 'We create a safe space to play, compete, and build community through sport.',
        primary: 'Meet the club',
        secondary: 'Support Valencia 2026',
      },
      legitimacy: ['Since 2019', 'Football as main branch', 'Basketball and volleyball branches', 'Award-winning documentary at FIDOCS 2022', 'Public recognition in media and institutions'],
      about: { title: 'What Disforia is', body: 'We are a sports club rooted in community. We train, compete, and sustain a space where trans and non-binary people can belong in sport.' },
      branches: {
        title: 'Club branches',
        items: [
          { title: 'Football', text: 'Main branch. Regular training, friendly matches, and competitive projection.', featured: true },
          { title: 'Basketball', text: 'Play and development space to strengthen technique and team culture.' },
          { title: 'Volleyball', text: 'Growing branch focused on participation and continuity.' },
        ],
      },
      valencia: { title: 'Road to Gay Games XII Valencia 2026', text: 'Valencia 2026 is the next major milestone. We are funding travel, registration, and team operations.', donate: 'Go to crowdfunding', sponsor: 'Become a sponsor' },
      people: {
        title: 'People of the club',
        list: [
          { name: 'Alex', role: 'Football', quote: 'Training here gave me confidence back on the pitch.' },
          { name: 'Vale', role: 'Basketball', quote: 'I found team spirit, rhythm, and belonging in one place.' },
          { name: 'Nico', role: 'Volleyball', quote: 'Competing without hiding who I am changed my relation with sport.' },
        ],
      },
      press: { title: 'Press and recognition', links: [{ title: 'The Clinic', href: 'https://www.theclinic.cl/2021/09/10/disforia-futbol-club-un-espacio-deportivo-seguro-para-personas-trans-y-no-binarias/' }, { title: 'Galio', href: 'https://galio.cl/2024/06/28/disforia-club-el-1-equipo-deportivo-para-personas-trans-y-no-binarias-de-chile/' }, { title: 'Distintas Latitudes', href: 'https://distintaslatitudes.net/historias/reportaje/disforia-fc-futbol-trans' }] },
      support: { title: 'How to support', paths: ['Donate', 'Sponsor', 'Spread the word'] },
      join: { title: 'How to join', paths: ['Play / train', 'Collaborate', 'Invite the club'] },
    },
    club: {
      manifesto: 'Disforia FC exists to make sport a safe, competitive, and collective space for trans and non-binary people in Chile.',
      history: 'The club’s public origin dates back to 2019 and has grown into a sports project centered on safety, play, and community. Football is the main branch, alongside basketball and volleyball.',
      documentary: { title: 'Disforia Fútbol Club', text: 'Documentary portraying the club’s journey, awarded Audience Award at FIDOCS 2022.', cta: 'View record' },
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
      needs: ['Registration', 'Flights', 'Accommodation', 'Operations'],
      donate: 'Donate on GoFundMe',
      sponsor: 'Contact for sponsorship',
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
        { title: 'I want to play / train', text: 'Complete the form to join an active branch.', cta: 'Write to the club' },
        { title: 'I want to collaborate', text: 'Support in production, operations, or communication.', cta: 'Offer collaboration' },
        { title: 'I want to invite Disforia', text: 'For activities, matches, and community events.', cta: 'Send invitation' },
      ],
    },
  },
};

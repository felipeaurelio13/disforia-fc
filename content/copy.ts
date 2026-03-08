import { externalLinks, Locale } from './site';
import { RouteKey } from '@/lib/routes';

type NavItem = { route: RouteKey; label: string };

type Person = {
  name: string;
  shortName?: string;
  role: string;
  quote?: string;
  image: { src: string; alt: string };
  featured?: boolean;
};

type CTAItem = { title: string; text: string; cta: string; href: string; external?: boolean };

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
    credibility: { title: string; detail: string }[];
    about: { title: string; body: string; quote: string };
    branches: { title: string; items: { title: string; text: string; featured?: boolean }[] };
    impact: { title: string; intro: string; items: { title: string; text: string }[] };
    valencia: { title: string; text: string; donate: string; sponsor: string };
    people: { title: string; intro: string; list: Person[] };
    press: { title: string; links: { title: string; href: string; description: string; cta: string }[] };
    support: { title: string; paths: string[] };
    join: { title: string; paths: string[] };
  };
  club: {
    manifesto: string;
    mission: string;
    vision: string;
    values: string[];
    history: string;
    documentary: { title: string; text: string; award: string; cta: string };
    people: { title: string; intro: string };
    timeline: { year: string; event: string }[];
  };
  footballPage: { title: string; intro: string; training: string; audience: string; join: string; cta: string };
  basketballPage: { title: string; intro: string; training: string; audience: string; join: string; cta: string };
  pressPage: { title: string; intro: string; documentaryTitle: string; documentaryText: string; pressTitle: string };
  contactPage: { title: string; intro: string; cards: CTAItem[] };
  valencia: {
    hero: string;
    games: string;
    why: string;
    quote: string;
    needs: string[];
    transparencyTitle: string;
    testimonials: { quote: string; author: string }[];
    faq: { q: string; a: string }[];
    donate: string;
    sponsor: string;
    spread: string;
    contact: string;
  };
  supportPage: { intro: string; cards: CTAItem[] };
  joinPage: { intro: string; cards: CTAItem[] };
};

export const copy: Record<Locale, Copy> = {
  es: {
    nav: [
      { route: 'home', label: 'Inicio' },
      { route: 'club', label: 'Quiénes somos' },
      { route: 'football', label: 'Fútbol' },
      { route: 'basketball', label: 'Básquetbol' },
      { route: 'press', label: 'Documentales y prensa' },
      { route: 'join', label: 'Participa' },
      { route: 'support', label: 'Apoya' },
      { route: 'contact', label: 'Contacto y redes' },
    ],
    common: { clubName: 'Disforia FC', switchTo: 'EN', supportCTA: 'Donar · Valencia 2026', contactEmail: null },
    home: {
      hero: {
        title: 'Disforia FC: deporte trans y no binario con orgullo, cuidado y competencia.',
        subtitle: 'Somos el primer club deportivo para personas trans y no binarias de Chile. Desde 2019 entrenamos y competimos construyendo un espacio seguro, afectivo y políticamente explícito.',
        primary: 'Conoce al club',
        secondary: 'Dona para Valencia 2026',
        kicker: 'Desde 2019 · deporte, comunidad y pertenencia',
      },
      credibility: [
        { title: 'Primer club deportivo trans y no binario de Chile', detail: 'Proyecto pionero con continuidad pública y comunitaria desde 2019.' },
        { title: 'Entrenamiento y competencia real', detail: 'Ramas activas de fútbol y básquetbol, con expansión de otras disciplinas.' },
        { title: 'Documental y cobertura en medios', detail: 'Archivo público en prensa deportiva, cultural y documental premiado.' },
      ],
      about: {
        title: 'Por qué nació Disforia FC',
        body: 'Nacimos porque muchas personas trans y no binarias fueron excluidas del deporte formal. Disforia FC responde con entrenamiento, cuidado colectivo y competencia real en un espacio seguro.',
        quote: 'Es una familia, es un espacio seguro para jugar a la pelota.',
      },
      branches: {
        title: 'Ramas deportivas',
        items: [
          { title: 'Fútbol', text: 'Rama principal con entrenamientos regulares, juego competitivo y preparación para torneos.', featured: true },
          { title: 'Básquetbol', text: 'Rama activa con entrenamientos periódicos y enfoque comunitario-deportivo.' },
          { title: 'Vóley', text: 'Rama en desarrollo y articulación progresiva de entrenamientos.' },
        ],
      },
      impact: {
        title: 'Impacto deportivo, comunitario e incidencia pública',
        intro: 'Disforia FC genera resultados dentro y fuera de la cancha con evidencia pública.',
        items: [
          { title: 'Deportivo', text: 'Entrenamientos sostenidos y participación competitiva.' },
          { title: 'Comunitario', text: 'Espacio seguro con nombre, pronombres y cuidados colectivos.' },
          { title: 'Público', text: 'Cobertura en prensa y presencia en conversaciones sobre inclusión deportiva.' },
        ],
      },
      valencia: {
        title: 'Rumbo a Gay Games XII Valencia 2026',
        text: 'Cada aporte nos acerca a representar a Chile con un equipo trans y no binario. Tu donación financia inscripción, traslado y operación deportiva.',
        donate: 'Donar ahora en GoFundMe',
        sponsor: 'Cómo apoyar',
      },
      people: {
        title: 'Rostros del club',
        intro: 'Personas que hoy sostienen el proyecto en cancha y comunidad.',
        list: [
          {
            name: 'Christopher Erlandsen',
            shortName: 'Chris',
            role: 'Fundador de Disforia y principal rostro público del club.',
            quote: 'Es una familia, es un espacio seguro para jugar a la pelota.',
            image: { src: '/images/chris-erlandsen.svg', alt: 'Christopher Erlandsen en registro editorial de Disforia FC' },
            featured: true,
          },
          {
            name: 'Aaron Domke',
            role: 'Referente visible en la expansión deportiva y en la rama de básquet.',
            image: { src: '/images/aaron-domke.svg', alt: 'Aaron Domke en entrenamiento de Disforia FC' },
          },
          {
            name: 'Christofer Waldo Robledo Alfaro',
            shortName: 'Waldo',
            role: 'Integrante visible y vocería pública en actividades del club.',
            image: { src: '/images/waldo-robledo.svg', alt: 'Waldo Robledo en actividad deportiva de Disforia FC' },
          },
        ],
      },
      press: {
        title: 'Documentales y prensa destacados',
        links: [
          { title: 'The Clinic', href: 'https://www.theclinic.cl/2021/09/10/disforia-futbol-club-un-espacio-deportivo-seguro-para-personas-trans-y-no-binarias/', description: 'Origen del club y necesidad de espacios deportivos seguros.', cta: 'Leer nota completa' },
          { title: 'Galio', href: 'https://galio.cl/2024/06/28/disforia-club-el-1-equipo-deportivo-para-personas-trans-y-no-binarias-de-chile/', description: 'Cobertura de consolidación pública del proyecto.', cta: 'Ver cobertura' },
          { title: 'Distintas Latitudes', href: 'https://distintaslatitudes.net/historias/reportaje/disforia-fc-futbol-trans', description: 'Historia regional sobre fútbol y comunidad trans.', cta: 'Leer reportaje' },
        ],
      },
      support: { title: 'Cómo apoyar', paths: ['Donar ahora', 'Auspiciar la campaña', 'Difundir en redes'] },
      join: { title: 'Cómo participar', paths: ['Jugar y entrenar', 'Colaborar en producción', 'Invitar al club a actividades'] },
    },
    club: {
      manifesto: 'Disforia FC existe para que el deporte sea un espacio seguro, competitivo y colectivo para personas trans y no binarias en Chile.',
      mission: 'Entrenar y competir en comunidad, con estándares deportivos y cuidado colectivo.',
      vision: 'Ser referente latinoamericano de deporte trans y no binario, con presencia comunitaria e internacional.',
      values: ['Cuidado colectivo', 'Competencia con pertenencia', 'Orgullo trans y no binario'],
      history: 'El origen público del club se registra desde 2019, con fútbol como base y expansión sostenida hacia otras ramas.',
      documentary: { title: 'Disforia Fútbol Club', text: 'Documental sobre el origen del club y su recorrido deportivo-comunitario.', award: 'Premio del Público · FIDOCS 2022', cta: 'Ver en CineChile' },
      people: { title: 'Personas del club', intro: 'Chris aparece como fundador y rostro principal; Aaron y Waldo como referentes visibles del proceso deportivo.' },
      timeline: [
        { year: '2019', event: 'Inicio público de Disforia FC en Chile, con fútbol como rama principal.' },
        { year: '2021', event: 'Coberturas nacionales comienzan a visibilizar el proyecto.' },
        { year: '2022', event: 'El documental Disforia Fútbol Club obtiene el Premio del Público en FIDOCS.' },
        { year: '2024', event: 'Consolidación de ramas activas y mayor presencia en medios.' },
        { year: '2026', event: 'Preparación para representar al club en Gay Games XII Valencia.' },
      ],
    },
    footballPage: {
      title: 'Fútbol',
      intro: 'La rama principal del club, con foco en competencia, pertenencia y seguridad para personas trans y no binarias.',
      training: 'Cómo entrenamos: sesiones periódicas con trabajo técnico, juego colectivo y preparación para partidos.',
      audience: 'Para quién: personas trans y no binarias con o sin experiencia previa.',
      join: 'Qué esperar: ingreso acompañado, respeto de nombre/pronombres y dinámica de equipo.',
      cta: 'Quiero jugar en fútbol',
    },
    basketballPage: {
      title: 'Básquetbol',
      intro: 'Rama activa que combina desarrollo técnico, constancia y comunidad deportiva.',
      training: 'Cómo entrenamos: rutinas de fundamentos, dinámicas colectivas y partidos internos.',
      audience: 'Para quién: personas trans y no binarias interesadas en iniciar o retomar el básquet.',
      join: 'Qué esperar: ambiente seguro, aprendizaje progresivo y participación sostenida.',
      cta: 'Quiero sumarme a básquetbol',
    },
    pressPage: {
      title: 'Documentales y prensa',
      intro: 'Archivo unificado de contenidos audiovisuales y coberturas periodísticas sobre el club.',
      documentaryTitle: 'Documental oficial',
      documentaryText: 'Disforia Fútbol Club retrata el origen del proyecto, su impacto y su dimensión comunitaria.',
      pressTitle: 'Cobertura en medios',
    },
    contactPage: {
      title: 'Contacto y redes',
      intro: 'Canales oficiales activos para donaciones, alianzas, prensa e invitaciones.',
      cards: [
        { title: 'Instagram oficial', text: 'Canal principal para contacto cotidiano y coordinación.', cta: 'Ir a Instagram', href: externalLinks.instagram, external: true },
        { title: 'GoFundMe Valencia 2026', text: 'Canal principal para donaciones de la campaña.', cta: 'Donar ahora', href: externalLinks.gofundme, external: true },
      ],
    },
    valencia: {
      hero: 'Ayúdanos a llegar a Gay Games XII Valencia 2026. Representar a Chile como club trans y no binario es abrir camino para quienes aún no encuentran un lugar seguro en el deporte.',
      games: 'Gay Games XII es un evento deportivo internacional inclusivo de alto valor simbólico y competitivo.',
      why: 'Llegar a Valencia importa en lo deportivo, comunitario y político: más visibilidad significa más espacios seguros para personas trans y no binarias.',
      quote: 'el fútbol se convirtió en abrazo, en apoyo, en comunidad y en familia.',
      needs: ['Inscripción del equipo', 'Traslados internacionales y locales', 'Alojamiento', 'Implementación y operación deportiva'],
      transparencyTitle: '¿En qué se usa tu aporte?',
      testimonials: [
        { quote: 'Entrenar en Disforia me devolvió las ganas de jugar sin esconder quién soy.', author: 'Integrante del club' },
        { quote: 'Llegar a Valencia sería una señal para toda la comunidad trans: sí hay lugar para nosotres en el deporte.', author: 'Integrante de la rama de fútbol' },
      ],
      faq: [
        { q: '¿Dónde se actualiza el avance de la campaña?', a: 'En Instagram del club y en la página oficial de GoFundMe.' },
        { q: '¿Cómo puedo ayudar si no puedo donar?', a: 'Compartiendo la campaña, conectando alianzas y difundiendo en tu red.' },
      ],
      donate: 'Donar en GoFundMe',
      sponsor: 'Apoyar campaña',
      spread: 'Compartir campaña',
      contact: 'Escríbenos por Instagram',
    },
    supportPage: {
      intro: 'Apoyar al club hoy es sostener deporte, comunidad e incidencia pública.',
      cards: [
        { title: 'Donar', text: 'Aporte directo a la campaña rumbo a Valencia 2026.', cta: 'Donar en GoFundMe', href: externalLinks.gofundme, external: true },
        { title: 'Auspiciar', text: 'Apoyo financiero, logístico o de visibilidad para el equipo.', cta: 'Coordinar auspicio', href: externalLinks.instagram, external: true },
        { title: 'Difundir', text: 'Comparte la campaña en redes, medios y espacios deportivos.', cta: 'Difundir campaña', href: externalLinks.instagram, external: true },
      ],
    },
    joinPage: {
      intro: 'Súmate al club para entrenar, colaborar o articular nuevas actividades deportivas.',
      cards: [
        { title: 'Quiero jugar / entrenar', text: 'Conecta para revisar horarios y ramas activas.', cta: 'Escribir por Instagram', href: externalLinks.instagram, external: true },
        { title: 'Quiero colaborar', text: 'Puedes apoyar logística, producción o comunicación.', cta: 'Ofrecer colaboración', href: externalLinks.instagram, external: true },
        { title: 'Quiero invitar a Disforia', text: 'Para partidos, actividades y encuentros.', cta: 'Enviar invitación', href: externalLinks.instagram, external: true },
      ],
    },
  },
  en: {
    nav: [
      { route: 'home', label: 'Home' },
      { route: 'club', label: 'About' },
      { route: 'football', label: 'Football' },
      { route: 'basketball', label: 'Basketball' },
      { route: 'press', label: 'Documentaries & press' },
      { route: 'join', label: 'Join' },
      { route: 'support', label: 'Support' },
      { route: 'contact', label: 'Contact & social' },
    ],
    common: { clubName: 'Disforia FC', switchTo: 'ES', supportCTA: 'Donate · Valencia 2026', contactEmail: null },
    home: {
      hero: {
        title: 'Disforia FC: trans and non-binary sport with pride, care, and competition.',
        subtitle: 'We are Chile’s first sports club for trans and non-binary people. Since 2019, we train and compete while building a safe, caring, and politically explicit space.',
        primary: 'Meet the club',
        secondary: 'Donate for Valencia 2026',
        kicker: 'Since 2019 · sport, community, and belonging',
      },
      credibility: [
        { title: 'First trans and non-binary sports club in Chile', detail: 'Pioneering project with sustained public and community continuity since 2019.' },
        { title: 'Real training and competition', detail: 'Active football and basketball branches, plus growing disciplines.' },
        { title: 'Documentary and media coverage', detail: 'Public archive across sports/cultural media and an awarded documentary.' },
      ],
      about: {
        title: 'Why Disforia FC was born',
        body: 'We were born because many trans and non-binary people were excluded from formal sport. Disforia FC responds with training, collective care, and real competition in a safe space.',
        quote: 'It is a family, a safe space to play football.',
      },
      branches: {
        title: 'Sports branches',
        items: [
          { title: 'Football', text: 'Main branch with regular training, competitive play, and tournament preparation.', featured: true },
          { title: 'Basketball', text: 'Active branch with periodic training and a community-sport focus.' },
          { title: 'Volleyball', text: 'Branch in development with progressive training articulation.' },
        ],
      },
      impact: {
        title: 'Sports, community, and public impact',
        intro: 'Disforia FC creates measurable outcomes on and off the pitch.',
        items: [
          { title: 'Sports', text: 'Sustained training and competitive participation.' },
          { title: 'Community', text: 'Safe space with names, pronouns, and collective care.' },
          { title: 'Public', text: 'Press coverage and visibility in inclusive-sport conversations.' },
        ],
      },
      valencia: {
        title: 'Road to Gay Games XII Valencia 2026',
        text: 'Every contribution helps us represent Chile with a trans and non-binary squad. Your donation funds registration, travel, and team operations.',
        donate: 'Donate now on GoFundMe',
        sponsor: 'How to support',
      },
      people: {
        title: 'People of the club',
        intro: 'People currently sustaining the project in sport and community.',
        list: [
          {
            name: 'Christopher Erlandsen',
            shortName: 'Chris',
            role: 'Founder of Disforia and main public face of the club.',
            quote: 'It is a family, a safe space to play football.',
            image: { src: '/images/chris-erlandsen.svg', alt: 'Christopher Erlandsen in Disforia FC editorial record' },
            featured: true,
          },
          {
            name: 'Aaron Domke',
            role: 'Visible reference in sports expansion and in the basketball branch.',
            image: { src: '/images/aaron-domke.svg', alt: 'Aaron Domke during a Disforia FC training context' },
          },
          {
            name: 'Christofer Waldo Robledo Alfaro',
            shortName: 'Waldo',
            role: 'Visible member and public voice in club activities.',
            image: { src: '/images/waldo-robledo.svg', alt: 'Waldo Robledo in a Disforia FC sports activity' },
          },
        ],
      },
      press: {
        title: 'Featured documentaries and press',
        links: [
          { title: 'The Clinic', href: 'https://www.theclinic.cl/2021/09/10/disforia-futbol-club-un-espacio-deportivo-seguro-para-personas-trans-y-no-binarias/', description: 'Club origin and need for safe sports spaces.', cta: 'Read full article' },
          { title: 'Galio', href: 'https://galio.cl/2024/06/28/disforia-club-el-1-equipo-deportivo-para-personas-trans-y-no-binarias-de-chile/', description: 'Coverage of current public consolidation.', cta: 'View coverage' },
          { title: 'Distintas Latitudes', href: 'https://distintaslatitudes.net/historias/reportaje/disforia-fc-futbol-trans', description: 'Regional story about football and trans community.', cta: 'Read report' },
        ],
      },
      support: { title: 'How to support', paths: ['Donate now', 'Sponsor the campaign', 'Spread the campaign'] },
      join: { title: 'How to join', paths: ['Play and train', 'Collaborate', 'Invite the club'] },
    },
    club: {
      manifesto: 'Disforia FC exists so sport can be a safe, competitive, and collective space for trans and non-binary people in Chile.',
      mission: 'To train and compete in community with clear sports standards and collective care.',
      vision: 'To become a Latin American reference for trans and non-binary sport, with community and international projection.',
      values: ['Collective care', 'Competition with belonging', 'Trans and non-binary pride'],
      history: 'The club’s public origin dates back to 2019, with football as the base and sustained growth into other branches.',
      documentary: { title: 'Disforia Fútbol Club', text: 'Documentary about the club origin and its community-sports journey.', award: 'Audience Award · FIDOCS 2022', cta: 'View on CineChile' },
      people: { title: 'People of the club', intro: 'Chris appears as founder and main public face; Aaron and Waldo as visible references in the process.' },
      timeline: [
        { year: '2019', event: 'Public launch of Disforia FC in Chile with football as core branch.' },
        { year: '2021', event: 'National media started covering the project.' },
        { year: '2022', event: 'Disforia Fútbol Club documentary wins FIDOCS Audience Award.' },
        { year: '2024', event: 'Active branches consolidated with stronger media visibility.' },
        { year: '2026', event: 'Preparation to represent the club at Gay Games XII Valencia.' },
      ],
    },
    footballPage: {
      title: 'Football',
      intro: 'Main branch focused on competition, belonging, and safety for trans and non-binary people.',
      training: 'How we train: periodic sessions with technical work, collective play, and match preparation.',
      audience: 'Who it is for: trans and non-binary people with or without previous experience.',
      join: 'What to expect: supported onboarding, name/pronoun respect, and team dynamics.',
      cta: 'I want to join football',
    },
    basketballPage: {
      title: 'Basketball',
      intro: 'Active branch combining technical development, consistency, and community sport.',
      training: 'How we train: fundamentals routines, collective dynamics, and internal scrimmages.',
      audience: 'Who it is for: trans and non-binary people wanting to start or return to basketball.',
      join: 'What to expect: safe environment, progressive learning, and sustained participation.',
      cta: 'I want to join basketball',
    },
    pressPage: {
      title: 'Documentaries and press',
      intro: 'Unified archive of audiovisual content and media coverage about the club.',
      documentaryTitle: 'Official documentary',
      documentaryText: 'Disforia Fútbol Club documents the project origin, impact, and community dimension.',
      pressTitle: 'Media coverage',
    },
    contactPage: {
      title: 'Contact and social channels',
      intro: 'Official active channels for donations, partnerships, media, and invitations.',
      cards: [
        { title: 'Official Instagram', text: 'Primary channel for day-to-day contact and coordination.', cta: 'Open Instagram', href: externalLinks.instagram, external: true },
        { title: 'Valencia 2026 GoFundMe', text: 'Main channel for campaign donations.', cta: 'Donate now', href: externalLinks.gofundme, external: true },
      ],
    },
    valencia: {
      hero: 'Help us reach Gay Games XII Valencia 2026. Representing Chile as a trans and non-binary club is about opening paths for people who still cannot find a safe place in sport.',
      games: 'Gay Games XII is an inclusive international sports event with high symbolic and competitive value.',
      why: 'Reaching Valencia matters in sports, community, and political terms: more visibility means more safe spaces for trans and non-binary people.',
      quote: 'football became an embrace, support, community, and family.',
      needs: ['Team registration', 'International and local travel', 'Accommodation', 'Sports operations and equipment'],
      transparencyTitle: 'How your contribution is used',
      testimonials: [
        { quote: 'Training in Disforia gave me back the desire to play without hiding who I am.', author: 'Club member' },
        { quote: 'Reaching Valencia would send a message to the whole trans community: we do belong in sport.', author: 'Football branch member' },
      ],
      faq: [
        { q: 'Where is campaign progress updated?', a: 'On the club Instagram and in the official GoFundMe campaign page.' },
        { q: 'How can I help if I cannot donate?', a: 'Share the campaign, connect allies, and spread it in your network.' },
      ],
      donate: 'Donate on GoFundMe',
      sponsor: 'Support campaign',
      spread: 'Share campaign',
      contact: 'Message us on Instagram',
    },
    supportPage: {
      intro: 'Supporting the club today means supporting sport, community, and public impact.',
      cards: [
        { title: 'Donate', text: 'Direct contribution to the active campaign toward Valencia 2026.', cta: 'Donate on GoFundMe', href: externalLinks.gofundme, external: true },
        { title: 'Sponsor', text: 'Financial, logistics, or visibility support for the squad.', cta: 'Coordinate sponsorship', href: externalLinks.instagram, external: true },
        { title: 'Spread', text: 'Share the campaign across social channels, media, and sports spaces.', cta: 'Spread campaign', href: externalLinks.instagram, external: true },
      ],
    },
    joinPage: {
      intro: 'Join the club to train, collaborate, or build new sports activities.',
      cards: [
        { title: 'I want to play / train', text: 'Contact us to review schedules and active branches.', cta: 'Message on Instagram', href: externalLinks.instagram, external: true },
        { title: 'I want to collaborate', text: 'You can support logistics, production, or communications.', cta: 'Offer collaboration', href: externalLinks.instagram, external: true },
        { title: 'I want to invite Disforia', text: 'For matches, activities, and community events.', cta: 'Send invitation', href: externalLinks.instagram, external: true },
      ],
    },
  },
};

export type { Copy, Person };

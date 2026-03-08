import { externalLinks, Locale } from './site';

type NavItem = { href: string; label: string };

type Person = {
  name: string;
  shortName?: string;
  role: string;
  quote?: string;
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
    press: { title: string; links: { title: string; href: string; description: string; cta: string }[] };
    support: { title: string; paths: string[] };
    join: { title: string; paths: string[] };
  };
  club: {
    manifesto: string;
    history: string;
    documentary: { title: string; text: string; award: string; cta: string };
    people: {
      title: string;
      intro: string;
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
    spread: string;
    contact: string;
  };
  supportPage: { intro: string; cards: { title: string; text: string }[] };
  joinPage: { intro: string; cards: { title: string; text: string; cta: string; href: string; external?: boolean }[] };
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
        subtitle: 'Entrenamos y competimos con una convicción simple: el deporte puede ser exigente y también un lugar real de pertenencia.',
        primary: 'Conocer el club',
        secondary: 'Apoyar Valencia 2026',
        kicker: 'Desde 2019 · deporte, comunidad y pertenencia',
      },
      legitimacy: ['Desde 2019', 'Fútbol como rama principal', 'Básquet y vóley activos', 'Documental premiado en FIDOCS 2022', 'Presencia sostenida en medios'],
      about: {
        title: 'Qué es Disforia',
        body: 'Somos un club deportivo con base comunitaria. Entrenamos, competimos y sostenemos un espacio donde personas trans y no binarias habitan el deporte con dignidad.',
        quote: 'Es una familia, es un espacio seguro para jugar a la pelota.',
      },
      branches: {
        title: 'Ramas del club',
        items: [
          { title: 'Fútbol', text: 'Rama principal del club. Entrenamientos regulares, amistosos y proyección competitiva.', featured: true },
          { title: 'Básquet', text: 'Espacio activo de juego y formación que acompaña la expansión del club.' },
          { title: 'Vóley', text: 'Rama en crecimiento, con foco en participación sostenida y continuidad deportiva.' },
        ],
      },
      valencia: {
        title: 'Rumbo a Gay Games XII València 2026',
        text: 'Valencia 2026 es una campaña deportiva activa para sostener inscripción, viaje y operación del equipo.',
        donate: 'Ir al GoFundMe',
        sponsor: 'Cómo auspiciar',
      },
      people: {
        title: 'Rostros del club',
        intro: 'Personas visibles del club y voces públicas de su camino deportivo.',
        list: [
          {
            name: 'Christopher Erlandsen',
            shortName: 'Chris',
            role: 'Fundador de Disforia y principal rostro público del club.',
            quote: 'Es una familia, es un espacio seguro para jugar a la pelota.',
            image: { src: '/images/chris-erlandsen.svg', alt: 'Retrato editorial de Christopher Erlandsen' },
            featured: true,
          },
          {
            name: 'Aaron Domke',
            role: 'Referente visible en la expansión del club y en la rama de básquet.',
            image: { src: '/images/aaron-domke.svg', alt: 'Retrato editorial de Aaron Domke' },
          },
          {
            name: 'Christofer Waldo Robledo Alfaro',
            shortName: 'Waldo',
            role: 'Integrante visible y voz del club en espacios públicos.',
            quote: 'vi que tenía un propósito y que era necesario',
            image: { src: '/images/waldo-robledo.svg', alt: 'Retrato editorial de Christofer Waldo Robledo Alfaro' },
          },
        ],
      },
      press: {
        title: 'Prensa y reconocimiento',
        links: [
          { title: 'The Clinic', href: 'https://www.theclinic.cl/2021/09/10/disforia-futbol-club-un-espacio-deportivo-seguro-para-personas-trans-y-no-binarias/', description: 'Reportaje sobre el origen del club y su rol como espacio deportivo seguro en Chile.', cta: 'Leer nota' },
          { title: 'Galio', href: 'https://galio.cl/2024/06/28/disforia-club-el-1-equipo-deportivo-para-personas-trans-y-no-binarias-de-chile/', description: 'Cobertura sobre el proyecto deportivo y su consolidación pública reciente.', cta: 'Ver cobertura' },
          { title: 'Distintas Latitudes', href: 'https://distintaslatitudes.net/historias/reportaje/disforia-fc-futbol-trans', description: 'Historia editorial regional sobre fútbol, comunidad y representación.', cta: 'Leer reportaje' },
          { title: 'TNT Sports', href: 'https://tntsports.cl/videos/disforiafc_en_nept_1-vf20240628mp4.html', description: 'Video en medio deportivo nacional sobre el presente competitivo de Disforia.', cta: 'Ver video' },
          { title: 'Cruzados', href: 'https://cruzados.cl/news/detail/equipo-de-jugadores-trans-visito-entrenamiento-de-universidad-catolica/', description: 'Cobertura institucional de una jornada compartida con Universidad Católica.', cta: 'Leer publicación' },
          { title: 'CineChile', href: 'https://cinechile.cl/pelicula/disforia-futbol-club/', description: 'Ficha pública del documental Disforia Fútbol Club y su recorrido de exhibición.', cta: 'Ver ficha' },
        ],
      },
      support: { title: 'Cómo apoyar', paths: ['Donar', 'Auspiciar', 'Difundir'] },
      join: { title: 'Cómo sumarte', paths: ['Jugar / entrenar', 'Colaborar', 'Invitar al club'] },
    },
    club: {
      manifesto: 'Disforia FC existe para hacer del deporte un espacio seguro, competitivo y colectivo para personas trans y no binarias en Chile.',
      history: 'El origen público del club se remonta a 2019. Desde entonces, Disforia crece como proyecto deportivo con foco en entrenamiento, juego y comunidad.',
      documentary: {
        title: 'Disforia Fútbol Club',
        text: 'Documental sobre la historia del club y su camino en el deporte comunitario.',
        award: 'Premio del Público · FIDOCS 2022',
        cta: 'Ver en CineChile',
      },
      people: {
        title: 'Personas del club',
        intro: 'Chris se presenta como fundador y principal rostro público. Aaron y Waldo aparecen como integrantes visibles del proceso deportivo del club.',
      },
      timeline: [
        { year: '2019', event: 'Inicio público del club en Chile.' },
        { year: '2021', event: 'Primeras coberturas en prensa nacional.' },
        { year: '2022', event: 'Premio del Público en FIDOCS para el documental.' },
        { year: '2024', event: 'Mayor presencia en medios deportivos y culturales.' },
        { year: '2026', event: 'Ruta internacional a Gay Games XII València.' },
      ],
    },
    valencia: {
      hero: 'Valencia 2026 es un objetivo deportivo y comunitario para representar a Disforia en competencia internacional.',
      games: 'Gay Games XII València 2026 se realizará del 27 de junio al 4 de julio de 2026.',
      why: 'El cierre de inscripciones de equipos de fútbol es el 1 de abril de 2026. La campaña busca llegar preparados y con el equipo financiado.',
      quote: 'football became an embrace, support, community, and family.',
      needs: ['Inscripciones', 'Viaje', 'Alojamiento', 'Equipamiento y operación'],
      donate: 'Donar en GoFundMe',
      sponsor: 'Auspiciar campaña',
      spread: 'Difundir campaña',
      contact: 'Escribir por Instagram',
    },
    supportPage: {
      intro: 'Sostener al club es sostener deporte, comunidad y proyección para Valencia 2026.',
      cards: [
        { title: 'Donar', text: 'Aporte directo para financiar la campaña activa rumbo a Gay Games XII València 2026.' },
        { title: 'Auspiciar', text: 'Tres formatos: financiamiento directo, apoyo en especie/logística y difusión en medios/alianzas.' },
        { title: 'Difundir', text: 'Comparte la campaña en redes, medios y comunidades deportivas para ampliar alcance.' },
        { title: 'Alianzas', text: 'Buscamos colaboración con clubes, medios, organizaciones y espacios culturales/deportivos.' },
      ],
    },
    joinPage: {
      intro: 'Si quieres ser parte, este es el canal activo para conectar con el club.',
      cards: [
        { title: 'Quiero jugar / entrenar', text: 'Escríbenos para conocer horarios, ramas activas y próximos encuentros.', cta: 'Escríbenos por Instagram', href: externalLinks.instagram, external: true },
        { title: 'Quiero colaborar', text: 'Puedes apoyar en producción, gestión, logística o comunicación.', cta: 'Ofrecer colaboración por Instagram', href: externalLinks.instagram, external: true },
        { title: 'Quiero invitar a Disforia', text: 'Para partidos, actividades o encuentros deportivos/comunitarios.', cta: 'Enviar invitación por Instagram', href: externalLinks.instagram, external: true },
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
        subtitle: 'We train and compete with a clear commitment: sport can be demanding and still a real place of belonging.',
        primary: 'Meet the club',
        secondary: 'Support Valencia 2026',
        kicker: 'Since 2019 · sport, community, and belonging',
      },
      legitimacy: ['Since 2019', 'Football as main branch', 'Active basketball and volleyball branches', 'Audience Award at FIDOCS 2022', 'Sustained media coverage'],
      about: {
        title: 'What Disforia is',
        body: 'We are a community-rooted sports club. We train, compete, and sustain a space where trans and non-binary people belong in sport with dignity.',
        quote: 'It is a family, a safe space to play football.',
      },
      branches: {
        title: 'Club branches',
        items: [
          { title: 'Football', text: 'Main branch. Regular training, friendly matches, and competitive projection.', featured: true },
          { title: 'Basketball', text: 'Active play and development space supporting the club’s growth.' },
          { title: 'Volleyball', text: 'Growing branch focused on sustained participation and sports continuity.' },
        ],
      },
      valencia: {
        title: 'Road to Gay Games XII València 2026',
        text: 'Valencia 2026 is an active sports campaign focused on registrations, travel, and team operations.',
        donate: 'Go to GoFundMe',
        sponsor: 'Sponsorship options',
      },
      people: {
        title: 'Faces of the club',
        intro: 'Visible members of the club and public voices from its sports journey.',
        list: [
          {
            name: 'Christopher Erlandsen',
            shortName: 'Chris',
            role: 'Disforia founder and principal public face of the club.',
            quote: 'It is a family, a safe space to play football.',
            image: { src: '/images/chris-erlandsen.svg', alt: 'Editorial portrait of Christopher Erlandsen' },
            featured: true,
          },
          {
            name: 'Aaron Domke',
            role: 'Visible reference in the club’s expansion and in the basketball branch.',
            image: { src: '/images/aaron-domke.svg', alt: 'Editorial portrait of Aaron Domke' },
          },
          {
            name: 'Christofer Waldo Robledo Alfaro',
            shortName: 'Waldo',
            role: 'Visible member and club voice in public spaces.',
            quote: 'I saw it had a purpose and that it was necessary.',
            image: { src: '/images/waldo-robledo.svg', alt: 'Editorial portrait of Christofer Waldo Robledo Alfaro' },
          },
        ],
      },
      press: {
        title: 'Press and recognition',
        links: [
          { title: 'The Clinic', href: 'https://www.theclinic.cl/2021/09/10/disforia-futbol-club-un-espacio-deportivo-seguro-para-personas-trans-y-no-binarias/', description: 'Feature on the club’s origin and its role as a safe sports space in Chile.', cta: 'Read feature' },
          { title: 'Galio', href: 'https://galio.cl/2024/06/28/disforia-club-el-1-equipo-deportivo-para-personas-trans-y-no-binarias-de-chile/', description: 'Coverage on the sports project and its recent public consolidation.', cta: 'Read coverage' },
          { title: 'Distintas Latitudes', href: 'https://distintaslatitudes.net/historias/reportaje/disforia-fc-futbol-trans', description: 'Regional story on football, community, and representation.', cta: 'Read report' },
          { title: 'TNT Sports', href: 'https://tntsports.cl/videos/disforiafc_en_nept_1-vf20240628mp4.html', description: 'National sports media video about Disforia’s current competitive path.', cta: 'Watch video' },
          { title: 'Cruzados', href: 'https://cruzados.cl/news/detail/equipo-de-jugadores-trans-visito-entrenamiento-de-universidad-catolica/', description: 'Institutional coverage of a shared training day with Universidad Católica.', cta: 'Read update' },
          { title: 'CineChile', href: 'https://cinechile.cl/pelicula/disforia-futbol-club/', description: 'Public record page for the documentary Disforia Fútbol Club.', cta: 'View record' },
        ],
      },
      support: { title: 'How to support', paths: ['Donate', 'Sponsor', 'Spread the word'] },
      join: { title: 'How to join', paths: ['Play / train', 'Collaborate', 'Invite the club'] },
    },
    club: {
      manifesto: 'Disforia FC exists to make sport a safe, competitive, and collective space for trans and non-binary people in Chile.',
      history: 'The club’s public origin dates back to 2019. Since then, Disforia has grown as a sports project centered on training, play, and community.',
      documentary: {
        title: 'Disforia Fútbol Club',
        text: 'Documentary about the club’s history and path in community sport.',
        award: 'Audience Award · FIDOCS 2022',
        cta: 'View on CineChile',
      },
      people: {
        title: 'People of the club',
        intro: 'Chris appears as founder and main public face. Aaron and Waldo are shown as visible members of the club’s sports process.',
      },
      timeline: [
        { year: '2019', event: 'Public origin of the club in Chile.' },
        { year: '2021', event: 'First national media coverage.' },
        { year: '2022', event: 'FIDOCS Audience Award for the documentary.' },
        { year: '2024', event: 'Expanded presence in sports and cultural media.' },
        { year: '2026', event: 'International path to Gay Games XII València.' },
      ],
    },
    valencia: {
      hero: 'Valencia 2026 is a sports and community objective to represent Disforia in international competition.',
      games: 'Gay Games XII València 2026 will take place from June 27 to July 4, 2026.',
      why: 'Team registrations for football close on April 1st, 2026. The campaign focuses on arriving prepared and fully funded.',
      quote: 'football became an embrace, support, community, and family.',
      needs: ['Registrations', 'Travel', 'Accommodation', 'Equipment and operations'],
      donate: 'Donate on GoFundMe',
      sponsor: 'Sponsor campaign',
      spread: 'Spread campaign',
      contact: 'Message us on Instagram',
    },
    supportPage: {
      intro: 'Supporting the club means supporting sport, community, and projection toward Valencia 2026.',
      cards: [
        { title: 'Donate', text: 'Direct support for the active campaign toward Gay Games XII València 2026.' },
        { title: 'Sponsor', text: 'Three formats: direct funding, in-kind/logistics support, and media/alliance visibility.' },
        { title: 'Spread the word', text: 'Share the campaign across social channels, media, and sports communities.' },
        { title: 'Partnerships', text: 'We seek collaboration with clubs, media, organizations, and cultural/sports spaces.' },
      ],
    },
    joinPage: {
      intro: 'If you want to join, this is the active channel to connect with the club.',
      cards: [
        { title: 'I want to play / train', text: 'Message us to check schedules, active branches, and upcoming sessions.', cta: 'Message us on Instagram', href: externalLinks.instagram, external: true },
        { title: 'I want to collaborate', text: 'You can support production, operations, logistics, or communications.', cta: 'Offer collaboration via Instagram', href: externalLinks.instagram, external: true },
        { title: 'I want to invite Disforia', text: 'For matches, activities, and sports/community events.', cta: 'Send invitation via Instagram', href: externalLinks.instagram, external: true },
      ],
    },
  },
};

export type { Copy, Person };

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
    people: { title: string; intro: string };
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
  supportPage: { intro: string; cards: { title: string; text: string; cta: string; href: string; external?: boolean }[] };
  joinPage: { intro: string; cards: { title: string; text: string; cta: string; href: string; external?: boolean }[] };
};

export const copy: Record<Locale, Copy> = {
  es: {
    nav: [
      { route: 'home', label: 'Inicio' },
      { route: 'club', label: 'El club' },
      { route: 'valencia', label: 'Valencia 2026' },
      { route: 'support', label: 'Apoya' },
      { route: 'join', label: 'Súmate' },
    ],
    common: { clubName: 'Disforia FC', switchTo: 'EN', supportCTA: 'Apoyar campaña', contactEmail: null },
    home: {
      hero: {
        title: 'club deportivo trans y no binario de chile',
        subtitle: 'Entrenamos y competimos sin soltar lo más importante: que el deporte también sea un lugar de pertenencia.',
        primary: 'Conocer el club',
        secondary: 'Apoyar Valencia 2026',
        kicker: 'Desde 2019 · deporte, comunidad y pertenencia',
      },
      credibility: [
        { title: 'Proyecto activo desde 2019', detail: 'Recorrido deportivo sostenido con presencia pública comprobable.' },
        { title: 'Entrenamiento y competencia real', detail: 'Fútbol como base y ramas activas en básquet y vóley.' },
        { title: 'Cobertura y archivo público', detail: 'Documental premiado y notas en prensa deportiva y cultural.' },
      ],
      about: {
        title: 'Qué es Disforia',
        body: 'Club deportivo trans y no binario que entrena, compite y cuida comunidad en Chile.',
        quote: 'Es una familia, es un espacio seguro para jugar a la pelota.',
      },
      branches: {
        title: 'Ramas del club',
        items: [
          { title: 'Fútbol', text: 'Rama principal con entrenamientos regulares y proyección competitiva.', featured: true },
          { title: 'Básquet', text: 'Rama activa con foco en juego, constancia y crecimiento.' },
          { title: 'Vóley', text: 'Proceso en desarrollo con participación deportiva sostenida.' },
        ],
      },
      valencia: {
        title: 'Rumbo a Gay Games XII València 2026',
        text: 'Campaña activa para sostener inscripción, viaje y operación del equipo.',
        donate: 'Ir al GoFundMe',
        sponsor: 'Cómo apoyar',
      },
      people: {
        title: 'Rostros del club',
        intro: 'Personas que hoy ayudan a sostener el recorrido público del club.',
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
            role: 'Referente visible en la expansión deportiva y en la rama de básquet.',
            image: { src: '/images/aaron-domke.svg', alt: 'Retrato editorial de Aaron Domke' },
          },
          {
            name: 'Christofer Waldo Robledo Alfaro',
            shortName: 'Waldo',
            role: 'Integrante visible y vocería pública en actividades del club.',
            image: { src: '/images/waldo-robledo.svg', alt: 'Retrato editorial de Christofer Waldo Robledo Alfaro' },
          },
        ],
      },
      press: {
        title: 'Prensa y reconocimiento',
        links: [
          { title: 'The Clinic', href: 'https://www.theclinic.cl/2021/09/10/disforia-futbol-club-un-espacio-deportivo-seguro-para-personas-trans-y-no-binarias/', description: 'Origen del club y espacio deportivo seguro.', cta: 'Leer nota' },
          { title: 'Galio', href: 'https://galio.cl/2024/06/28/disforia-club-el-1-equipo-deportivo-para-personas-trans-y-no-binarias-de-chile/', description: 'Consolidación pública del proyecto deportivo.', cta: 'Ver cobertura' },
          { title: 'Distintas Latitudes', href: 'https://distintaslatitudes.net/historias/reportaje/disforia-fc-futbol-trans', description: 'Historia regional sobre fútbol y comunidad.', cta: 'Leer reportaje' },
          { title: 'TNT Sports', href: 'https://tntsports.cl/videos/disforiafc_en_nept_1-vf20240628mp4.html', description: 'Cobertura audiovisual de la ruta competitiva.', cta: 'Ver video' },
          { title: 'Cruzados', href: 'https://cruzados.cl/news/detail/equipo-de-jugadores-trans-visito-entrenamiento-de-universidad-catolica/', description: 'Jornada compartida con Universidad Católica.', cta: 'Leer cobertura' },
          { title: 'CineChile', href: 'https://cinechile.cl/pelicula/disforia-futbol-club/', description: 'Ficha pública del documental del club.', cta: 'Ver ficha' },
        ],
      },
      support: { title: 'Cómo apoyar', paths: ['Donar', 'Auspiciar', 'Difundir'] },
      join: { title: 'Cómo sumarte', paths: ['Jugar / entrenar', 'Colaborar', 'Invitar al club'] },
    },
    club: {
      manifesto: 'Disforia FC existe para que el deporte sea un espacio seguro, competitivo y colectivo para personas trans y no binarias en Chile.',
      history: 'El origen público del club se registra desde 2019, con fútbol como base y una expansión sostenida en ramas activas.',
      documentary: { title: 'Disforia Fútbol Club', text: 'Documental sobre el origen del club y su recorrido en deporte comunitario.', award: 'Premio del Público · FIDOCS 2022', cta: 'Ver en CineChile' },
      people: { title: 'Personas del club', intro: 'Chris aparece como fundador y rostro principal; Aaron y Waldo como integrantes visibles del proceso deportivo.' },
      timeline: [
        { year: '2019', event: 'Inicio público de Disforia FC en Chile, con fútbol como rama principal.' },
        { year: '2021', event: 'Primeras coberturas nacionales que visibilizan el proyecto.' },
        { year: '2022', event: 'El documental Disforia Fútbol Club obtiene el Premio del Público en FIDOCS.' },
        { year: '2024', event: 'Consolidación de ramas activas y mayor presencia en medios.' },
        { year: '2026', event: 'Preparación para representar al club en Gay Games XII València.' },
      ],
    },
    valencia: {
      hero: 'Valencia 2026 es un objetivo deportivo y comunitario para representar a Disforia en competencia internacional.',
      games: 'Gay Games XII València 2026 se realizará entre el 27 de junio y el 4 de julio de 2026.',
      why: 'El cierre de equipos de fútbol es el 1 de abril de 2026. La campaña busca llegar con operación deportiva cubierta.',
      quote: 'el fútbol se convirtió en abrazo, en apoyo, en comunidad y en familia.',
      needs: ['Inscripción', 'Viaje', 'Alojamiento', 'Operación'],
      donate: 'Donar en GoFundMe',
      sponsor: 'Apoyar campaña',
      spread: 'Difundir campaña',
      contact: 'Escríbenos por Instagram',
    },
    supportPage: {
      intro: 'Apoyar al club hoy es sostener deporte, comunidad y proyección internacional.',
      cards: [
        { title: 'Donar', text: 'Apoyo directo a la campaña activa rumbo a Valencia 2026.', cta: 'Donar en GoFundMe', href: externalLinks.gofundme, external: true },
        { title: 'Auspiciar', text: 'Aportes financieros, logísticos o de visibilidad para la campaña.', cta: 'Coordinar por Instagram', href: externalLinks.instagram, external: true },
        { title: 'Difundir', text: 'Comparte la campaña en redes, medios y comunidades deportivas.', cta: 'Difundir desde Instagram', href: externalLinks.instagram, external: true },
        { title: 'Alianzas', text: 'Abrimos colaboración con clubes, organizaciones y espacios culturales.', cta: 'Proponer alianza por Instagram', href: externalLinks.instagram, external: true },
      ],
    },
    joinPage: {
      intro: 'Canal activo para conectar hoy con el club.',
      cards: [
        { title: 'Quiero jugar / entrenar', text: 'Escríbenos para revisar horarios y ramas activas.', cta: 'Escríbenos por Instagram', href: externalLinks.instagram, external: true },
        { title: 'Quiero colaborar', text: 'Puedes apoyar producción, logística o comunicación.', cta: 'Ofrecer colaboración', href: externalLinks.instagram, external: true },
        { title: 'Quiero invitar a Disforia', text: 'Para partidos, actividades y encuentros deportivos.', cta: 'Enviar invitación', href: externalLinks.instagram, external: true },
      ],
    },
  },
  en: {
    nav: [
      { route: 'home', label: 'Home' },
      { route: 'club', label: 'Club' },
      { route: 'valencia', label: 'Valencia 2026' },
      { route: 'support', label: 'Support' },
      { route: 'join', label: 'Join' },
    ],
    common: { clubName: 'Disforia FC', switchTo: 'ES', supportCTA: 'Support campaign', contactEmail: null },
    home: {
      hero: {
        title: 'trans and non-binary sports club from Chile',
        subtitle: 'We train and compete without losing what matters most: sport can also be a place of belonging.',
        primary: 'Meet the club',
        secondary: 'Support Valencia 2026',
        kicker: 'Since 2019 · sport, community, and belonging',
      },
      credibility: [
        { title: 'Active project since 2019', detail: 'Sustained sports work with public traceability and continuity.' },
        { title: 'Real training and competition', detail: 'Football as the main branch with active basketball and volleyball.' },
        { title: 'Public media record', detail: 'Awarded documentary and consistent sports and cultural press coverage.' },
      ],
      about: {
        title: 'What is Disforia',
        body: 'A trans and non-binary sports club that trains, competes, and protects community in Chile.',
        quote: 'It is a family, a safe space to play football.',
      },
      branches: {
        title: 'Club branches',
        items: [
          { title: 'Football', text: 'Main branch with regular training and competitive projection.', featured: true },
          { title: 'Basketball', text: 'Active branch focused on play, continuity, and growth.' },
          { title: 'Volleyball', text: 'Ongoing process with sustained sports participation.' },
        ],
      },
      valencia: {
        title: 'Road to Gay Games XII València 2026',
        text: 'Active campaign to cover registration, travel, and team operations.',
        donate: 'Open GoFundMe',
        sponsor: 'How to support',
      },
      people: {
        title: 'People of the club',
        intro: 'People who help sustain the club’s public journey today.',
        list: [
          {
            name: 'Christopher Erlandsen',
            shortName: 'Chris',
            role: 'Founder of Disforia and main public face of the club.',
            quote: 'It is a family, a safe space to play football.',
            image: { src: '/images/chris-erlandsen.svg', alt: 'Editorial portrait of Christopher Erlandsen' },
            featured: true,
          },
          {
            name: 'Aaron Domke',
            role: 'Visible reference in sports expansion and in the basketball branch.',
            image: { src: '/images/aaron-domke.svg', alt: 'Editorial portrait of Aaron Domke' },
          },
          {
            name: 'Christofer Waldo Robledo Alfaro',
            shortName: 'Waldo',
            role: 'Visible member and public voice in club activities.',
            image: { src: '/images/waldo-robledo.svg', alt: 'Editorial portrait of Christofer Waldo Robledo Alfaro' },
          },
        ],
      },
      press: {
        title: 'Press and recognition',
        links: [
          { title: 'The Clinic', href: 'https://www.theclinic.cl/2021/09/10/disforia-futbol-club-un-espacio-deportivo-seguro-para-personas-trans-y-no-binarias/', description: 'Origin story and safe sports space.', cta: 'Read' },
          { title: 'Galio', href: 'https://galio.cl/2024/06/28/disforia-club-el-1-equipo-deportivo-para-personas-trans-y-no-binarias-de-chile/', description: 'Coverage of current public consolidation.', cta: 'Read' },
          { title: 'Distintas Latitudes', href: 'https://distintaslatitudes.net/historias/reportaje/disforia-fc-futbol-trans', description: 'Regional story on football and community.', cta: 'Read' },
          { title: 'TNT Sports', href: 'https://tntsports.cl/videos/disforiafc_en_nept_1-vf20240628mp4.html', description: 'Sports video coverage of the club path.', cta: 'Watch' },
          { title: 'Cruzados', href: 'https://cruzados.cl/news/detail/equipo-de-jugadores-trans-visito-entrenamiento-de-universidad-catolica/', description: 'Shared training coverage with UC.', cta: 'Read' },
          { title: 'CineChile', href: 'https://cinechile.cl/pelicula/disforia-futbol-club/', description: 'Public record of the documentary.', cta: 'View' },
        ],
      },
      support: { title: 'How to support', paths: ['Donate', 'Sponsor', 'Spread the word'] },
      join: { title: 'How to join', paths: ['Play / train', 'Collaborate', 'Invite the club'] },
    },
    club: {
      manifesto: 'Disforia FC exists so sport can be a safe, competitive, and collective space for trans and non-binary people in Chile.',
      history: 'The club’s public origin dates back to 2019, with football as the base and sustained expansion into active branches.',
      documentary: { title: 'Disforia Fútbol Club', text: 'Documentary about the club’s origin and community sports journey.', award: 'Audience Award · FIDOCS 2022', cta: 'View on CineChile' },
      people: { title: 'People of the club', intro: 'Chris appears as founder and main public face; Aaron and Waldo are shown as visible members of the sports process.' },
      timeline: [
        { year: '2019', event: 'Public launch of Disforia FC in Chile, with football as the core branch.' },
        { year: '2021', event: 'First national coverage making the project visible.' },
        { year: '2022', event: 'The documentary Disforia Fútbol Club wins the FIDOCS Audience Award.' },
        { year: '2024', event: 'Sustained growth of active branches and stronger media presence.' },
        { year: '2026', event: 'Preparation to represent the club at Gay Games XII València.' },
      ],
    },
    valencia: {
      hero: 'Valencia 2026 is a sports and community objective to represent Disforia in international competition.',
      games: 'Gay Games XII València 2026 takes place from June 27 to July 4, 2026.',
      why: 'Football team registrations close on April 1, 2026. The campaign focuses on reaching the event with operations covered.',
      quote: 'football became an embrace, support, community, and family.',
      needs: ['Registration', 'Travel', 'Accommodation', 'Operations'],
      donate: 'Donate on GoFundMe',
      sponsor: 'Support campaign',
      spread: 'Spread campaign',
      contact: 'Message us on Instagram',
    },
    supportPage: {
      intro: 'Supporting the club today means supporting sport, community, and international projection.',
      cards: [
        { title: 'Donate', text: 'Direct support for the active campaign toward Valencia 2026.', cta: 'Donate on GoFundMe', href: externalLinks.gofundme, external: true },
        { title: 'Sponsor', text: 'Financial, logistics, and visibility support for the campaign.', cta: 'Coordinate via Instagram', href: externalLinks.instagram, external: true },
        { title: 'Spread the word', text: 'Share the campaign in social channels, media, and sports communities.', cta: 'Share from Instagram', href: externalLinks.instagram, external: true },
        { title: 'Partnerships', text: 'We are open to collaboration with clubs, organizations, and cultural spaces.', cta: 'Propose a partnership', href: externalLinks.instagram, external: true },
      ],
    },
    joinPage: {
      intro: 'This is the active channel to connect with the club today.',
      cards: [
        { title: 'I want to play / train', text: 'Message us to review schedules and active branches.', cta: 'Message us on Instagram', href: externalLinks.instagram, external: true },
        { title: 'I want to collaborate', text: 'You can support production, logistics, or communications.', cta: 'Offer collaboration', href: externalLinks.instagram, external: true },
        { title: 'I want to invite Disforia', text: 'For matches, activities, and sports/community events.', cta: 'Send invitation', href: externalLinks.instagram, external: true },
      ],
    },
  },
};

export type { Copy, Person };

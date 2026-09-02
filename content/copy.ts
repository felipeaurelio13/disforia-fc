import { BranchKey, directivaPortraits, externalLinks, Locale } from './site';
import { RouteKey } from '@/lib/routes';

type NavItem = { label: string } & ({ route: RouteKey } | { anchor: string });

type Person = {
  name: string;
  shortName?: string;
  role: string;
  pronouns?: string;
  quote?: string;
  image?: { src: string; alt: string };
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
  footer: {
    badge: string;
    description: string;
    note: string;
    navTitle: string;
    campaignEyebrow: string;
    campaignTitle: string;
    campaignText: string;
    instagramCta: string;
    joinCta: string;
  };
  home: {
    hero: { title: string; subtitle: string; primary: string; secondary: string; kicker: string };
    about: { title: string; body: string; quote: string };
    branches: { title: string; items: { key: BranchKey; title: string; text: string; featured?: boolean; schedule: string; location: string; instagram: string; instagramUrl: string }[] };
    impact: { title: string; intro: string; items: { title: string; text: string }[] };
    roadmap: { title: string; intro: string; milestones: { year: string; title: string; detail: string }[] };
    valencia: {
      title: string;
      text: string;
      donate: string;
      sponsor: string;
      badge: string;
      instagram: string;
      supportTitle: string;
      supportIntro: string;
      supportItems: { title: string; text: string }[];
      officialTitle: string;
      officialCta: string;
      progressLabel: string;
      remainingLabel: string;
    };
    people: { title: string; intro: string; groups: Array<{ title?: string; list: Person[] }> };
    press: {
      title: string;
      eyebrow: string;
      intro: string;
      featuredLabel: string;
      featuredIntro: string;
      secondaryTitle: string;
      secondaryIntro: string;
      archiveCta: string;
      continuationLabel: string;
      continuationIntro: string;
      stats: {
        span: string;
        references: string;
        coverage: string;
      };
      links: { title: string; href: string; description: string; cta: string }[];
    };
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
  pressPage: {
    title: string;
    intro: string;
    filmSectionTitle: string;
    filmShortLabel: string;
    filmFeatureLabel: string;
    filmFeatureStatus: string;
    filmDirector: string;
    filmFestivals: string;
    teaserTitle: string;
    teaserText: string;
    digitalReportTitle: string;
    digitalReportText: string;
    digitalReportBadge: string;
    galleryTitle: string;
    galleryText: string;
    pressTitle: string;
    filmTitle: string;
    categoryLabels: Record<string, string>;
    readMore: string;
  };
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
      { anchor: 'club', label: 'El club' },
      { anchor: 'branches', label: 'Deporte' },
      { anchor: 'valencia', label: 'Valencia 2026' },
      { route: 'press', label: 'Prensa' },
      { anchor: 'support', label: 'Apoya' },
    ],
    common: { clubName: 'Disforia FC', switchTo: 'EN', supportCTA: 'Apoyar al club', contactEmail: null },
    footer: {
      badge: 'Desde 2019',
      description: 'Primer club deportivo trans y no binario de Chile. Entrenamos, competimos y construimos pertenencia.',
      note: 'De la cancha a la incidencia pública, el club sostiene deporte, comunidad y representación tras su histórico podio en Valencia 2026.',
      navTitle: 'Explorar',
      campaignEyebrow: 'Hito histórico',
      campaignTitle: 'Gay Games XII Valencia 2026',
      campaignText: 'Disforia FC representó a Chile en España y obtuvo la medalla de bronce en Fútbol 7. Tu aporte sostiene entrenamientos, implementación y futuros torneos.',
      instagramCta: 'Escribir por Instagram',
      joinCta: 'Cómo participar',
    },
    home: {
      hero: {
        title: 'Disforia FC: deporte trans y no binario con orgullo, cuidado y competencia.',
        subtitle: 'Somos el primer club deportivo para personas trans y no binarias de Chile. Desde 2019 entrenamos y competimos construyendo un espacio seguro, afectivo y políticamente explícito.',
        primary: 'Conoce al club',
        secondary: 'Hito Valencia 2026',
        kicker: 'Desde 2019 · deporte, comunidad y pertenencia',
      },
      about: {
        title: 'Por qué nació Disforia FC',
        body: 'Nacimos porque muchas personas trans y no binarias fueron excluidas del deporte formal. Disforia FC responde con entrenamiento, cuidado colectivo y competencia real en un espacio seguro.',
        quote: 'Es una familia, es un espacio seguro para jugar a la pelota.',
      },
      branches: {
        title: 'Ramas deportivas',
        items: [
          { key: 'football', title: 'Fútbol', text: 'Rama principal con entrenamientos regulares, juego competitivo y preparación para torneos.', featured: true, schedule: 'Lunes y Miércoles 19:00–21:00', location: 'Coordinado por Instagram', instagram: '@disforia_fc', instagramUrl: externalLinks.instagramFootball },
          { key: 'basketball', title: 'Básquetbol', text: 'Rama activa con entrenamientos periódicos y enfoque comunitario-deportivo.', schedule: 'Martes y Jueves 19:00–21:00', location: 'Coordinado por Instagram', instagram: '@disforiabskt', instagramUrl: externalLinks.instagramBasket },
          { key: 'volleyball', title: 'Vóley', text: 'Rama en desarrollo y articulación progresiva de entrenamientos.', schedule: 'Convocatorias periódicas', location: 'Coordinado por Instagram', instagram: '@disforiavoley', instagramUrl: externalLinks.instagramVolleyball },
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
      roadmap: {
        title: 'Hitos cronológicos de Disforia FC',
        intro: 'Recorrido deportivo y social de un club pionero trans y no binario en Chile, con impacto que ya se reconoce a nivel latinoamericano.',
        milestones: [
          {
            year: '2019',
            title: 'Fundación y crecimiento inicial',
            detail: 'Chris Erlandsen inicia el equipo con 6 jugadores, suben a 18 en pocas semanas y se consolida una rotación cercana a 200 personas entre 15 y 45 años.',
          },
          {
            year: '2021',
            title: 'Cortometraje con alcance iberoamericano',
            detail: 'Se estrena el cortometraje Disforia Fútbol Club de Inti Lorca y entra al circuito de Premios Platino en Madrid, amplificando su visibilidad internacional.',
          },
          {
            year: '2022',
            title: 'Alianzas visibles y premios en festivales',
            detail: 'Participan en el Día de la Visibilidad Trans con Universidad Católica y el corto es reconocido en Festival de Cine Sin Límites, Diverso Cinema y Resistencia Film Fest.',
          },
          {
            year: '2023',
            title: 'Título histórico en São Paulo',
            detail: 'Ganan el Campeonato LGBT+ de fútbol 7 en Brasil, considerado el primer torneo nacional exclusivo para personas trans, y reciben reconocimiento en el Congreso Nacional.',
          },
          {
            year: '2024',
            title: 'Expansión multideporte y consolidación',
            detail: 'Tercera posición en el Campeonato Galdys Marín en Santiago. Se fortalecen básquet y vóley, crece la cobertura en TNT Sports y No Es Para Tanto.',
          },
          {
            year: '2025',
            title: 'Primer Torneo de Fútbol Trans Regional',
            detail: 'Disforia Senior gana el Primer Torneo de Fútbol Trans de la Región Metropolitana, celebrado en octubre, consolidando la presencia inclusiva en el deporte nacional.',
          },
          {
            year: '2026',
            title: 'Bronce en Gay Games XII Valencia',
            detail: 'Disforia FC viaja a España representando a Chile en los Gay Games 2026 y conquista la medalla de bronce en Fútbol 7, marcando un hito histórico de visibilidad y deporte trans internacional.',
          },
        ],
      },
      valencia: {
        title: 'Hito histórico: Gay Games XII Valencia 2026',
        text: 'Cada aporte permite sostener la operación del club, la mantención de entrenamientos y proyectar a Disforia FC hacia nuevas competencias tras ganar la medalla de bronce en Fútbol 7 en España.',
        donate: 'Apoyar al club en GoFundMe',
        sponsor: 'Cómo apoyar',
        badge: 'Medalla de bronce',
        instagram: 'Ver registro en Instagram',
        supportTitle: 'Impacto del hito',
        supportIntro: 'La participación en Valencia consolidó la presencia internacional del club y abrió camino para más deportistas trans y no binaries.',
        supportItems: [
          {
            title: 'Representación internacional',
            text: 'Primer equipo chileno trans y no binario en competir y subir al podio en los Gay Games.',
          },
          {
            title: 'Medalla de bronce en Fútbol 7',
            text: 'Rendimiento deportivo competitivo en canchas internacionales frente a delegaciones de todo el mundo.',
          },
          {
            title: 'Visibilidad e incidencia',
            text: 'Cobertura en medios internacionales y nacionales que visibilizan el derecho al deporte seguro.',
          },
        ],
        officialTitle: 'Resultados del torneo',
        officialCta: 'Ver sitio oficial de Gay Games',
        progressLabel: 'Meta financiada',
        remainingLabel: 'Por financiar',
      },
      people: {
        title: 'Directiva',
        intro: 'Personas que lideran la gestión del club.',
        groups: [
          {
            list: [
              {
                name: 'Christopher Erlandsen Lorca',
                pronouns: 'él/elle',
                role: 'Fundador',
                image: { src: '/images/Equipo de trabajo/Chris.jpeg', alt: 'Christopher Erlandsen Lorca, Fundador de Disforia FC' },
              },
            ],
          },
          {
            title: 'Directiva',
            list: [
              {
                name: 'Mateo Alonso Godoy',
                pronouns: 'él',
                role: 'Presidente',
              },
              {
                name: 'Román Araneda',
                pronouns: 'él',
                role: 'Tesorero',
                image: { src: '/images/Equipo de trabajo/Roman.JPG', alt: 'Román Araneda, Tesorero de Disforia FC' },
              },
            ],
          },
          {
            title: 'Líderes de ramas',
            list: [
              {
                name: 'Tyro',
                pronouns: 'elle',
                role: 'Liderazgo fútbol',
                image: { src: '/images/Equipo de trabajo/Tyro.JPG', alt: 'Tyro, Liderazgo de fútbol en Disforia FC' },
              },
              {
                name: 'Violeta',
                pronouns: 'ella',
                role: 'Liderazgo fútbol',
                image: { src: '/images/Equipo de trabajo/Violeta.jpeg', alt: 'Violeta, Liderazgo de fútbol en Disforia FC' },
              },
              {
                name: 'Mimí',
                pronouns: 'elle',
                role: 'Liderazgo básquetbol',
              },
              {
                name: 'Álvaro',
                pronouns: 'él',
                role: 'Liderazgo vóley',
                image: { src: '/images/Equipo de trabajo/Alvaro.jpeg', alt: 'Álvaro, Liderazgo de vóley en Disforia FC' },
              },
            ],
          },
          {
            title: 'Contacto',
            list: [
              {
                name: 'Charo Astorga Pinto',
                pronouns: 'él/ella',
                role: 'Relacionador público',
                image: { src: '/images/Equipo de trabajo/Charo.jpeg', alt: 'Charo Astorga Pinto, Relacionador público de Disforia FC' },
              },
            ],
          },
        ],
      },
      press: {
        title: 'Documentales y prensa destacados',
        eyebrow: 'Archivo editorial',
        intro: 'Notas, reportajes y coberturas que han registrado el origen, la expansión y la visibilidad pública de Disforia FC.',
        featuredLabel: 'Cobertura destacada',
        featuredIntro: 'Una portada principal y dos recortes clave para entender cómo Disforia FC entró en la conversación pública.',
        secondaryTitle: 'Más prensa seleccionada',
        secondaryIntro: 'Notas que ampliaron el contexto deportivo, cultural y regional del proyecto.',
        archiveCta: 'Ver archivo completo',
        continuationLabel: 'Sigue en prensa',
        continuationIntro: 'La página completa reúne documental, teaser, galería y archivo editorial en un recorrido continuo.',
        stats: {
          span: 'Ventana editorial',
          references: 'Referencias',
          coverage: 'Cobertura',
        },
        links: [
          { title: 'The Clinic', href: 'https://www.theclinic.cl/2026/06/24/mas-que-un-equipo-de-futbol-una-familia-disforia-f-c-el-primer-club-trans-y-no-binario-de-chile-que-hara-historia-representando-a-nuestro-pais-en-los-gay-games-2026/', description: 'Reportaje en profundidad sobre el viaje de Disforia FC a los Gay Games de Valencia.', cta: 'Leer reportaje' },
          { title: 'El País', href: 'https://elpais.com/espana/comunidad-valenciana/2026-07-02/valencia-vive-sus-gay-games-es-un-espacio-politico-donde-las-personas-trans-podemos-jugar-igual-que-el-resto.html', description: 'Cobertura internacional desde Valencia sobre la visibilidad trans en el deporte.', cta: 'Leer nota completa' },
          { title: 'Galio', href: 'https://galio.cl/2024/06/28/disforia-club-el-1-equipo-deportivo-para-personas-trans-y-no-binarias-de-chile/', description: 'Cobertura fotográfica y consolidación pública del proyecto.', cta: 'Ver cobertura' },
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
      people: { title: 'Directiva del club', intro: 'Equipo directivo que lidera la gestión y proyección del club.' },
      timeline: [
        { year: '2019', event: 'Inicio público de Disforia FC en Chile, con fútbol como rama principal.' },
        { year: '2021', event: 'Coberturas nacionales comienzan a visibilizar el proyecto.' },
        { year: '2022', event: 'El documental Disforia Fútbol Club obtiene el Premio del Público en FIDOCS.' },
        { year: '2024', event: 'Consolidación de ramas activas y mayor presencia en medios.' },
        { year: '2026', event: 'Participación histórica en los Gay Games XII Valencia y medalla de bronce en Fútbol 7.' },
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
      intro: 'Archivo unificado de contenidos audiovisuales, cobertura periodística y exhibiciones internacionales del documental.',
      filmSectionTitle: 'El documental',
      filmShortLabel: 'Cortometraje',
      filmFeatureLabel: 'Largometraje',
      filmFeatureStatus: 'En producción',
      filmDirector: 'Dirección',
      filmFestivals: 'Festivales y premios',
      teaserTitle: 'Teaser del largometraje',
      teaserText: 'Adelanto del largometraje producido por Nicolás Videla para Cinespecie.',
      digitalReportTitle: 'Cápsula audiovisual y testimonios',
      digitalReportText: 'Registro de entrenamientos, entrevistas a integrantes del club y la vivencia cotidiana en la cancha.',
      digitalReportBadge: 'Reportaje en video',
      galleryTitle: 'Galería',
      galleryText: 'Registro editorial del equipo, fotogramas del documental y encuentros deportivos.',
      pressTitle: 'Cobertura en medios',
      filmTitle: 'Catálogos y festivales',
      categoryLabels: { press: 'Prensa', tv: 'Televisión', sport: 'Deporte', film: 'Cine' },
      readMore: 'Ver más',
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
      hero: 'Disforia FC hizo historia en los Gay Games XII Valencia 2026. Representar a Chile como club trans y no binario y subir al podio con la medalla de bronce es abrir camino para quienes aún buscan un lugar seguro en el deporte.',
      games: 'Gay Games XII es un evento deportivo internacional inclusivo de alto valor simbólico y competitivo que reunió a más de 10.000 atletas de todo el mundo.',
      why: 'Valencia significó un salto deportivo, comunitario y político: demostramos en la cancha que las personas trans y no binarias pertenecemos y competimos al más alto nivel.',
      quote: 'el fútbol se convirtió en abrazo, en apoyo, en comunidad y en familia.',
      needs: ['Sostenimiento de entrenamientos', 'Indumentaria e implementación', 'Mantención de canchas seguras', 'Proyección a nuevos torneos'],
      transparencyTitle: '¿Cómo impacta tu apoyo al club?',
      testimonials: [
        { quote: 'Entrenar en Disforia me devolvió las ganas de jugar sin esconder quién soy.', author: 'Integrante del club' },
        { quote: 'Subir al podio en Valencia fue una señal para toda la comunidad: sí hay lugar para nosotres en el deporte.', author: 'Integrante del plantel en Valencia' },
      ],
      faq: [
        { q: '¿Cómo puedo seguir apoyando al club?', a: 'A través de donaciones en GoFundMe, auspicios y difusión de nuestras actividades en redes sociales.' },
        { q: '¿Cómo puedo sumarme a los entrenamientos?', a: 'Escribiéndonos directamente por Instagram en cualquiera de nuestras ramas activas.' },
      ],
      donate: 'Apoyar en GoFundMe',
      sponsor: 'Sumarse como auspiciador',
      spread: 'Compartir en redes',
      contact: 'Escríbenos por Instagram',
    },
    supportPage: {
      intro: 'Apoyar al club hoy es sostener deporte, comunidad e incidencia pública tras nuestro histórico logro internacional.',
      cards: [
        { title: 'Donar', text: 'Aporte directo al sostenimiento de entrenamientos, indumentaria y competencias del club.', cta: 'Donar en GoFundMe', href: externalLinks.gofundme, external: true },
        { title: 'Auspiciar', text: 'Apoyo financiero, logístico o de visibilidad para el equipo.', cta: 'Coordinar auspicio', href: externalLinks.instagram, external: true },
        { title: 'Difundir', text: 'Comparte las actividades y logros del club en redes, medios y espacios deportivos.', cta: 'Difundir logros', href: externalLinks.instagram, external: true },
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
      { anchor: 'club', label: 'About' },
      { anchor: 'branches', label: 'Sports' },
      { anchor: 'valencia', label: 'Valencia 2026' },
      { route: 'press', label: 'Press' },
      { anchor: 'support', label: 'Support' },
    ],
    common: { clubName: 'Disforia FC', switchTo: 'ES', supportCTA: 'Support the club', contactEmail: null },
    footer: {
      badge: 'Since 2019',
      description: 'Chile’s first trans and non-binary sports club. We train, compete, and build belonging.',
      note: 'From the pitch to public advocacy, the club sustains sport, community, and representation following its historic podium in Valencia 2026.',
      navTitle: 'Explore',
      campaignEyebrow: 'Historic milestone',
      campaignTitle: 'Gay Games XII Valencia 2026',
      campaignText: 'Disforia FC represented Chile in Spain and won the bronze medal in Football 7. Your support sustains training, gear, and upcoming tournaments.',
      instagramCta: 'Message on Instagram',
      joinCta: 'How to join',
    },
    home: {
      hero: {
        title: 'Disforia FC: trans and non-binary sport with pride, care, and competition.',
        subtitle: 'We are Chile’s first sports club for trans and non-binary people. Since 2019, we train and compete while building a safe, caring, and politically explicit space.',
        primary: 'Meet the club',
        secondary: 'Valencia 2026 Milestone',
        kicker: 'Since 2019 · sport, community, and belonging',
      },
      about: {
        title: 'Why Disforia FC was born',
        body: 'We were born because many trans and non-binary people were excluded from formal sport. Disforia FC responds with training, collective care, and real competition in a safe space.',
        quote: 'It is a family, a safe space to play football.',
      },
      branches: {
        title: 'Sports branches',
        items: [
          { key: 'football', title: 'Football', text: 'Main branch with regular training, competitive play, and tournament preparation.', featured: true, schedule: 'Monday & Wednesday 7:00–9:00 PM', location: 'Coordinated via Instagram', instagram: '@disforia_fc', instagramUrl: externalLinks.instagramFootball },
          { key: 'basketball', title: 'Basketball', text: 'Active branch with periodic training and a community-sport focus.', schedule: 'Tuesday & Thursday 7:00–9:00 PM', location: 'Coordinated via Instagram', instagram: '@disforiabskt', instagramUrl: externalLinks.instagramBasket },
          { key: 'volleyball', title: 'Volleyball', text: 'Branch in development with progressive training articulation.', schedule: 'Periodic callouts', location: 'Coordinated via Instagram', instagram: '@disforiavoley', instagramUrl: externalLinks.instagramVolleyball },
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
      roadmap: {
        title: 'Disforia FC chronological milestones',
        intro: 'A sports and social timeline of a pioneering trans and non-binary club in Chile with growing impact across Latin America.',
        milestones: [
          {
            year: '2019',
            title: 'Foundation and early growth',
            detail: 'Chris Erlandsen launches the team with 6 players, grows to 18 within weeks, and builds a football rotation close to 200 people aged 15 to 45.',
          },
          {
            year: '2021',
            title: 'Short film reaches Ibero-American circuit',
            detail: 'Inti Lorca releases the Disforia Fútbol Club short film, later connected to the Platino Awards circuit in Madrid and broader international visibility.',
          },
          {
            year: '2022',
            title: 'Public alliances and festival recognition',
            detail: 'The club joins Trans Visibility Day at Universidad Católica while the short film is awarded in Festival de Cine Sin Límites, Diverso Cinema, and Resistencia Film Fest.',
          },
          {
            year: '2023',
            title: 'Historic title in São Paulo',
            detail: 'Disforia wins the LGBT+ 7-a-side tournament in Brazil, described as the first national trans-exclusive tournament, and is recognized in Chile’s National Congress.',
          },
          {
            year: '2024',
            title: 'Multisport expansion and consolidation',
            detail: 'Third place finish at the Galdys Marín Championship in Santiago. Basketball and volleyball branches scale up, media exposure grows through TNT Sports and No Es Para Tanto.',
          },
          {
            year: '2025',
            title: 'First Regional Trans Football Tournament',
            detail: 'Disforia Senior wins the First Trans Football Tournament of the Metropolitan Region, held in October, solidifying inclusive presence in national sports.',
          },
          {
            year: '2026',
            title: 'Bronze at Gay Games XII Valencia',
            detail: 'Disforia FC travels to Spain representing Chile at the 2026 Gay Games and wins the bronze medal in Football 7, marking a historic international milestone for trans visibility and sport.',
          },
        ],
      },
      valencia: {
        title: 'Historic Milestone: Gay Games XII Valencia 2026',
        text: 'Every contribution helps sustain club operations, regular training sessions, and upcoming tournaments after winning the bronze medal in Football 7 in Spain.',
        donate: 'Support the club on GoFundMe',
        sponsor: 'How to support',
        badge: 'Bronze Medal',
        instagram: 'View highlights on Instagram',
        supportTitle: 'Milestone impact',
        supportIntro: 'Competing in Valencia solidified the club’s international presence and paved the way for more trans and non-binary athletes.',
        supportItems: [
          {
            title: 'International representation',
            text: 'First Chilean trans and non-binary team to compete and reach the podium at the Gay Games.',
          },
          {
            title: 'Bronze medal in Football 7',
            text: 'Competitive sports performance on international pitches against delegations worldwide.',
          },
          {
            title: 'Visibility & advocacy',
            text: 'Coverage in international and national press highlighting the right to safe sports.',
          },
        ],
        officialTitle: 'Tournament results',
        officialCta: 'View the official Gay Games site',
        progressLabel: 'Funded goal',
        remainingLabel: 'Still to fund',
      },
      people: {
        title: 'Board',
        intro: 'People leading the club\'s management.',
        groups: [
          {
            list: [
              {
                name: 'Christopher Erlandsen Lorca',
                pronouns: 'he/ey',
                role: 'Founder',
                image: { src: '/images/Equipo de trabajo/Chris.jpeg', alt: 'Christopher Erlandsen Lorca, Founder of Disforia FC' },
              },
            ],
          },
          {
            title: 'Executive Board',
            list: [
              {
                name: 'Mateo Alonso Godoy',
                pronouns: 'he',
                role: 'President',
              },
              {
                name: 'Román Araneda',
                pronouns: 'he',
                role: 'Treasurer',
                image: { src: '/images/Equipo de trabajo/Roman.JPG', alt: 'Román Araneda, Treasurer of Disforia FC' },
              },
            ],
          },
          {
            title: 'Branch Leaders',
            list: [
              {
                name: 'Tyro',
                pronouns: 'ey',
                role: 'Football leadership',
                image: { src: '/images/Equipo de trabajo/Tyro.JPG', alt: 'Tyro, Football leadership at Disforia FC' },
              },
              {
                name: 'Violeta',
                pronouns: 'she',
                role: 'Football leadership',
                image: { src: '/images/Equipo de trabajo/Violeta.jpeg', alt: 'Violeta, Football leadership at Disforia FC' },
              },
              {
                name: 'Mimí',
                pronouns: 'ey',
                role: 'Basketball leadership',
              },
              {
                name: 'Álvaro',
                pronouns: 'he',
                role: 'Volleyball leadership',
                image: { src: '/images/Equipo de trabajo/Alvaro.jpeg', alt: 'Álvaro, Volleyball leadership at Disforia FC' },
              },
            ],
          },
          {            title: 'Contact',            list: [
              {
                name: 'Charo Astorga Pinto',
                pronouns: 'he/she',
                role: 'Public Relations',
                image: { src: '/images/Equipo de trabajo/Charo.jpeg', alt: 'Charo Astorga Pinto, Public Relations of Disforia FC' },
              },
            ],
          },
        ],
      },
      press: {
        title: 'Featured documentaries and press',
        eyebrow: 'Editorial archive',
        intro: 'Articles, features, and coverage documenting the origin, growth, and public visibility of Disforia FC.',
        featuredLabel: 'Featured coverage',
        featuredIntro: 'One lead story and two key clippings showing how Disforia FC entered the public conversation.',
        secondaryTitle: 'More selected press',
        secondaryIntro: 'Stories that expanded the project sports, cultural, and regional context.',
        archiveCta: 'View full archive',
        continuationLabel: 'Continue in press',
        continuationIntro: 'The full page brings together the documentary, teaser, gallery, and editorial archive in one continuous flow.',
        stats: {
          span: 'Editorial span',
          references: 'References',
          coverage: 'Coverage',
        },
        links: [
          { title: 'The Clinic', href: 'https://www.theclinic.cl/2026/06/24/mas-que-un-equipo-de-futbol-una-familia-disforia-f-c-el-primer-club-trans-y-no-binario-de-chile-que-hara-historia-representando-a-nuestro-pais-en-los-gay-games-2026/', description: 'In-depth feature on the journey of Disforia FC to the Valencia Gay Games.', cta: 'Read feature' },
          { title: 'El País', href: 'https://elpais.com/espana/comunidad-valenciana/2026-07-02/valencia-vive-sus-gay-games-es-un-espacio-politico-donde-las-personas-trans-podemos-jugar-igual-que-el-resto.html', description: 'International coverage from Valencia on trans visibility in sports.', cta: 'Read full article' },
          { title: 'Galio', href: 'https://galio.cl/2024/06/28/disforia-club-el-1-equipo-deportivo-para-personas-trans-y-no-binarias-de-chile/', description: 'Photo feature on the project’s public consolidation with exclusive shoot.', cta: 'View coverage' },
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
      people: { title: 'Club board', intro: 'Leadership team managing the club\'s direction and operations.' },
      timeline: [
        { year: '2019', event: 'Public launch of Disforia FC in Chile with football as core branch.' },
        { year: '2021', event: 'National media started covering the project.' },
        { year: '2022', event: 'Disforia Fútbol Club documentary wins FIDOCS Audience Award.' },
        { year: '2024', event: 'Active branches consolidated with stronger media visibility.' },
        { year: '2026', event: 'Historic participation at the Gay Games XII Valencia and bronze medal in Football 7.' },
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
      filmSectionTitle: 'The documentary',
      filmShortLabel: 'Short film',
      filmFeatureLabel: 'Feature film',
      filmFeatureStatus: 'In production',
      filmDirector: 'Director',
      filmFestivals: 'Festivals and awards',
      teaserTitle: 'Feature film teaser',
      teaserText: 'Preview of the feature film produced by Nicolás Videla for Cinespecie.',
      digitalReportTitle: 'Video feature & testimonies',
      digitalReportText: 'Footage of training sessions, member interviews, and everyday community life on the pitch.',
      digitalReportBadge: 'Video feature',
      galleryTitle: 'Gallery',
      galleryText: 'Editorial records of the team, documentary stills, and sports encounters.',
      pressTitle: 'Media coverage',
      filmTitle: 'Catalogues and festivals',
      categoryLabels: { press: 'Press', tv: 'Television', sport: 'Sport', film: 'Film' },
      readMore: 'Read more',
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
      hero: 'Disforia FC made history at the Gay Games XII Valencia 2026. Representing Chile as a trans and non-binary club and reaching the podium with the bronze medal opens paths for those still seeking a safe space in sport.',
      games: 'Gay Games XII is an inclusive international sports event with high symbolic and competitive value that gathered over 10,000 athletes worldwide.',
      why: 'Valencia represented a sports, community, and political leap: we proved on the pitch that trans and non-binary people belong and compete at the highest level.',
      quote: 'football became an embrace, support, community, and family.',
      needs: ['Sustaining training sessions', 'Team gear & sports equipment', 'Safe pitch & court maintenance', 'Preparation for upcoming tournaments'],
      transparencyTitle: 'How does your support impact the club?',
      testimonials: [
        { quote: 'Training in Disforia gave me back the desire to play without hiding who I am.', author: 'Club member' },
        { quote: 'Reaching the podium in Valencia sent a message to the whole community: we do belong in sport.', author: 'Valencia squad member' },
      ],
      faq: [
        { q: 'Where is campaign progress updated?', a: 'On the club Instagram and in the official GoFundMe campaign page.' },
        { q: 'How can I join training sessions?', a: 'Message us directly on Instagram for any of our active sports branches.' },
      ],
      donate: 'Support on GoFundMe',
      sponsor: 'Join as sponsor',
      spread: 'Share on social',
      contact: 'Message us on Instagram',
    },
    supportPage: {
      intro: 'Supporting the club today means supporting sport, community, and public impact following our historic international achievement.',
      cards: [
        { title: 'Donate', text: 'Direct contribution to sustain training sessions, equipment, and club competitions.', cta: 'Donate on GoFundMe', href: externalLinks.gofundme, external: true },
        { title: 'Sponsor', text: 'Financial, logistics, or visibility support for the squad.', cta: 'Coordinate sponsorship', href: externalLinks.instagram, external: true },
        { title: 'Spread', text: 'Share the club’s activities and achievements across social channels, media, and sports spaces.', cta: 'Spread achievements', href: externalLinks.instagram, external: true },
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

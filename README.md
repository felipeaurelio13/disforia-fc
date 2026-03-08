# Disforia FC Website

Sitio oficial bilingüe (ES/EN) para Disforia FC, construido con Next.js App Router + TypeScript + Tailwind.

## Stack
- Next.js 14 (App Router)
- React 18
- TypeScript (strict)
- Tailwind CSS
- Contenido editable local (`content/`)
- Jest

## Estructura
- `app/`: rutas y páginas (`/`, `/es`, `/en`, subpáginas)
- `components/`: header, footer, secciones y UI
- `components/ui/SafeImage.tsx`: imagen segura con fallback elegante
- `content/`: copy y datos editoriales
- `lib/assets.ts`: helper único de rutas públicas (`withBasePath`)
- `lib/routes.ts`: helper único de rutas internas bilingües (`localizedPath`)
- `lib/`: utilidades (GitHub Pages, Valencia)
- `tests/`: pruebas unitarias

## Assets en GitHub Pages (basePath)
El proyecto se exporta estático (`output: 'export'`) y usa:
- `basePath` + `assetPrefix` dinámicos desde `GITHUB_REPOSITORY` en Actions.
- `NEXT_PUBLIC_BASE_PATH` inyectado desde `next.config.mjs`.

Para resolver imágenes públicas sin rutas rotas:
1. Usa siempre `SafeImage` para logo/retratos.
2. `SafeImage` llama internamente a `withBasePath('/images/...')`.
3. No armar rutas manuales con `/${repo}` en componentes.

## SafeImage
`components/ui/SafeImage.tsx` soporta:
- `src`, `alt`, `className`
- modo `fill`
- o `width`/`height`
- `fallbackLabel` opcional

Si falla la carga:
- no se muestra icono roto del navegador
- se renderiza un fallback visual premium con gradiente + iniciales
- se conserva el layout

## Cómo cargar/reemplazar logo y retratos
1. Sube/reemplaza archivos en `public/images/`.
2. Ajusta rutas en `content/copy.ts` (`home.people.list[].image.src`) o en componentes que usen logo.
3. Mantén nombres consistentes para evitar cambios múltiples.

## Valencia 2026: modos `narrative` y `tracked`
Archivo: `content/site.ts` (`valenciaFunding`).

- `campaignMode: 'narrative'`
  - no muestra tracker numérico
  - muestra campaña activa + categorías de apoyo
  - CTA a GoFundMe e Instagram

- `campaignMode: 'tracked'`
  - requiere `tracked.target`, `tracked.raised`, `tracked.breakdown`, `tracked.nextMilestone`
  - muestra progreso, porcentaje y restante

También se mantienen hechos oficiales editables en `officialFacts`.

## Editar CTA oficiales
- Instagram y GoFundMe: `content/site.ts` → `externalLinks`
- Textos de CTA: `content/copy.ts`


## Rutas bilingües (ES/EN)
- Navegación y CTAs resuelven rutas con `localizedPath(lang, route)` desde `lib/routes.ts`.
- Slugs activos por idioma:
  - ES: `/es/club`, `/es/valencia-2026`, `/es/apoya`, `/es/sumate`
  - EN: `/en/club`, `/en/valencia-2026`, `/en/support`, `/en/join`
- Se evita mantener dos árboles de navegación manuales: ambos idiomas comparten las mismas `route keys` en `content/copy.ts`.

## Build estático y deploy
- `next.config.mjs`: `output: 'export'`, `trailingSlash: true`, `images.unoptimized: true`
- Deploy recomendado: `.github/workflows/deploy-pages.yml` con `npm ci`, `next build` y deploy de `out/`

## Scripts
- `npm test`
- `npm run build`


## Registro de cambios recientes
- Refactor visual integral al nuevo design system (magenta/azul, superficies claras, tipografía Inter, hero con gradiente y microinteracciones de 220ms) aplicado en layout, header, home y bloques reutilizables.
- Implementación completa de checklist UX: nueva IA con páginas dedicadas de Fútbol, Básquetbol, Documentales y prensa, Contacto y redes, además de reforzar Home y Valencia 2026 con narrativa, impacto, transparencia, testimonios y FAQ.
- Navegación bilingüe ampliada en `lib/routes.ts` con slugs localizados para nuevas secciones y CTA persistente de donación en header (mobile + desktop).
- Mejoras de accesibilidad y usabilidad: `skip to content`, enlaces más descriptivos y estructura de conversión más clara por página.
- Se incorpora `docs/guia-editorial.md` como guía interna de tono, pronombres y lenguaje inclusivo.
- Upgrade visual mobile-first: footer editorial con release visible, CTA reforzado de Valencia 2026 y tipografía display serif local para mejorar legibilidad sin depender de descargas externas.
- Se agregaron SVG locales de ramas (fútbol, básquet, vóley) para cubrir imágenes faltantes con placeholders controlados.

- Se incorpora `docs/ux-auditoria-disforia-fc.md` con auditoría integral de contenido, IA, tono, accesibilidad y propuesta de estructura/copy para reforzar conversión de la campaña Valencia 2026.

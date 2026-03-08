# Disforia FC Website

Sitio oficial bilingüe (ES/EN) de Disforia FC con Next.js App Router y export estático para GitHub Pages.

## Stack final
- Next.js 14 (App Router)
- React 18 + TypeScript strict
- Tailwind CSS v3.4 (se mantiene por estabilidad del build actual)
- Design system UI interno (API estilo shadcn para navegación y primitives reutilizables)
- Tipografía variable consolidada por stack/fallback CSS:
  - Archivo Variable / Archivo (display: hero, títulos, navegación, botones, cifras)
  - Inter Variable / Inter (body y copy largo)
- Jest + Testing Library

## Qué se conservó del sistema previo
- Export estático compatible con Pages: `output: 'export'`, `trailingSlash`, `images.unoptimized`.
- Resolución de assets con `withBasePath` (`lib/assets.ts`).
- Ruteo bilingüe único con `localizedPath` (`lib/routes.ts`).
- Fallback centralizado de imágenes con `SafeImage`.
- Contenido centralizado por locale (`content/copy.ts`).
- Modelo Valencia 2026 `campaignMode: narrative | tracked` (`content/site.ts`, `lib/valencia.ts`).

## Sistema visual (refactor incremental)
### Tokens y estilos globales
Editar en:
- `app/globals.css` (tokens CSS y ritmo vertical)
- `tailwind.config.ts` (paleta y extensiones de tema)

Paleta consolidada:
- sky `#89C2E3`
- magenta `#BD2B71`
- lavender `#835CA3`
- charcoal `#000000`
- offwhite `#FFFFFF`
- softgray `#D9D9D9`

### Componentes base reutilizables
Archivo: `components/ui.tsx`
- `Container`
- `Section` + `SectionHeader`
- `Card`
- `Badge`
- `Separator`
- `ButtonLink` (`primary`, `secondary`, `ghost`, `text`)

### Navegación
- Desktop: `components/ui/navigation-menu.tsx`
- Header completo + menú móvil: `components/SiteHeader.tsx`

## Contenido y paridad ES/EN
- Editar copy en `content/copy.ts`.
- Mantener una sola estructura de datos para ambos idiomas.
- Evitar hardcode de slugs: usar siempre `localizedPath(lang, routeKey)`.

Slugs activos:
- ES: `/es/club`, `/es/valencia-2026`, `/es/apoya`, `/es/sumate`
- EN: `/en/club`, `/en/valencia-2026`, `/en/support`, `/en/join`

## Assets e imágenes
### `withBasePath` (`lib/assets.ts`)
- Normaliza rutas locales y aplica `NEXT_PUBLIC_BASE_PATH` cuando corresponde.
- No crear rutas manuales con prefijos de repo dentro de componentes.

### `SafeImage` (`components/ui/SafeImage.tsx`)
- Wrapper recomendado para imágenes críticas.
- Soporta `fill` o `width/height`.
- Fallback visual sin icono roto y conservación de layout.

## Valencia 2026 (narrative/tracked)
- Fuente de verdad: `content/site.ts` (`valenciaFunding`).
- `narrative`: muestra estado y categorías, sin tracker numérico.
- `tracked`: muestra objetivo, recaudado, desglose, milestone y progreso.

## Build y deploy
- Build: `npm run build`
- Tests: `npm test`
- Workflow recomendado: `.github/workflows/deploy-pages.yml` con `npm ci` y deploy de `out/`.

## Registro breve de esta sesión
- Reestructuración de la paleta del manual de marca (celeste/magenta/morado/blanco/negro) en tokens globales y Tailwind para evitar colores fuera de estándar.
- Actualización del hero y de los assets del logo/icono para reflejar exactamente la nueva identidad cromática.
- Release actualizado a `0.9.1`.

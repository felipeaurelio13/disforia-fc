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
- sky `#87C2E3`
- magenta `#B34173`
- lavender `#84719D`
- charcoal `#111111`
- offwhite `#F5F5F5`
- softgray `#DAD6D9`

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
- Refactor visual incremental mobile-first de tokens, tipografía, navbar/footer y primitives.
- Home y bloques principales refactorizados con mayor consistencia visual y menor densidad de ruido.
- Páginas de soporte/súmate/ramas/prensa/contacto alineadas al mismo sistema de cards y acciones.
- Release actualizado a `0.9.0`.

# Disforia FC Website

Sitio oficial bilingüe (ES/EN) para Disforia FC, construido con Next.js App Router + TypeScript + Tailwind.

## Stack
- Next.js (App Router)
- TypeScript (strict)
- Tailwind CSS
- Contenido editable local (archivos TS)
- Jest para pruebas base

## Estructura
- `app/`: rutas y páginas (`/`, `/es`, `/en`, subpáginas)
- `components/`: header, footer, secciones reutilizables y UI base
- `content/`: contenido bilingüe, enlaces oficiales, datos Valencia 2026
- `lib/`: utilidades reutilizables
- `tests/`: pruebas unitarias

## Dónde editar contenido
- Textos y navegación bilingüe: `content/copy.ts`
- Enlaces oficiales y fuentes editoriales: `content/site.ts`
- Progreso y presupuesto de Valencia 2026: `content/site.ts` (`valenciaFunding`)

## Cómo cambiar links
Editar `externalLinks` en `content/site.ts`.

## Cómo agregar fotos y personas
1. Subir imágenes a `public/`.
2. Reemplazar placeholders visuales en componentes/páginas.
3. Editar personas en `content/copy.ts` (`home.people.list`).

## Cómo actualizar Valencia 2026
Editar `valenciaFunding` en `content/site.ts`:
- `target`
- `raised`
- `breakdown`

## Build estático (GitHub Pages)
`next.config.mjs` usa `output: 'export'` + `images.unoptimized` para compatibilidad de despliegue estático.

Además, el sitio ajusta automáticamente `basePath` y `assetPrefix` en GitHub Actions a partir de `GITHUB_REPOSITORY`, y activa `trailingSlash` para mejorar compatibilidad en hosting estático.

## Deploy automático con GitHub Actions
1. Ir a **Settings → Pages** en GitHub.
2. En **Source**, seleccionar **GitHub Actions**.
3. Hacer push a `main`.
4. El workflow `.github/workflows/deploy-pages.yml` instalará dependencias, ejecutará tests, hará build (`next build`) y publicará `out/` en GitHub Pages.

No se requieren secrets adicionales para este flujo.

## Sesión actual (registro)
- Se creó una primera versión completa del sitio bilingüe con las páginas solicitadas.
- Se centralizó contenido editable en archivos TS.
- Se implementó estructura visual sobria, deportiva y editorial.
- Se agregó prueba unitaria base para cálculo de avance de Valencia 2026.
- Se dejó listo el pipeline de GitHub Actions para desplegar en GitHub Pages.
- Se agregó validación unitaria para la resolución de `basePath`/`assetPrefix` según entorno.

- Se corrigió el workflow de GitHub Pages para usar `npm ci` y se versionó `package-lock.json`, evitando fallos por lockfile ausente en Actions.
- Se añadió `.gitignore` base para excluir `node_modules` y artefactos de build/tests del repositorio.

- Se implementó un upgrade visual integral de la home y de la capa global de UI (tipografía Archivo + Inter, ritmo editorial, jerarquías premium, CTAs refinados y microinteracciones con reveal progresivo).
- Se centralizaron tokens visuales (contenedores, spacing, radios, bordes, overlays y timing de motion) en `app/globals.css` y `tailwind.config.ts`.
- Se introdujo el componente `Reveal` con IntersectionObserver y respeto por `prefers-reduced-motion`, para motion suave sin dependencias externas pesadas.
- Se robusteció `getValenciaProgress` para acotar el porcentaje a 0–100 y se extendieron pruebas unitarias de Valencia para cubrir el caso de sobre-financiamiento.
- Se actualizó la versión visible del sitio en footer a `v0.3.0`.


- Se reemplazó el uso de contacto inventado por rutas internas y mensajes de “por confirmar”, evitando correos/formularios no oficiales.
- Se actualizaron placeholders de personas en ES/EN para mantener contenido editable sin nombres no aprobados.
- Se ajustó la lógica de avance de Valencia 2026 para soportar datos no configurados (`null`) y mostrar estado pendiente de actualización manual.
- Se actualizó la versión visible del sitio en footer a `v0.4.0`.
- Se rediseñó la navegación con menú móvil explícito, targets táctiles de 48px y jerarquía mobile-first.
- Se incorporó contenido editorial real de liderazgos visibles (Chris, Aaron, Waldo) en home, con estructura formal pública en sección discreta y editable.
- Se integraron citas editoriales en Home, Valencia 2026 y Súmate sin sobrecargar la narrativa.
- Se añadieron imágenes locales editables para rostros visibles usando `next/image` con `sizes` para mejor rendimiento móvil.
- Se actualizó la versión visible del sitio en footer a `v0.5.0`.

- Se ejecutó una limpieza mobile-first de la home (espaciados, jerarquía, tarjetas y CTAs), reduciendo ruido visual y reforzando legibilidad táctil.
- Se integró un logo SVG local de Disforia FC en header y hero para mejorar reconocimiento de marca en móvil.
- Se incorporaron citas editoriales por cada persona visible en la sección de rostros.
- Se actualizó la versión visible del sitio en footer a `v0.6.0`.

- Se ejecutó una corrección editorial y mobile-first estricta: eliminación de placeholders públicos, limpieza ES/EN, refuerzo de CTA reales (Instagram + GoFundMe), y rediseño de Home/Club/Valencia/Apoya/Súmate para mayor credibilidad y acción.
- Se reforzó la corrección editorial pública: Waldo y Aaron quedaron sin citas no validadas, el bloque de Apoya ahora tiene CTA accionables por tarjeta, y El Club mejora documental + recorrido público con tratamiento visual más editorial.

# Agent Knowledge Log

## Patrones de este repo
- Mantener contenido editable en `content/` y UI en `components/`.
- Evitar duplicación de lógica de idioma: usar `content/copy.ts` por locale.
- Compatibilidad GitHub Pages: mantener `output: 'export'` en Next config.
- Footer incluye versión visible para seguimiento de release.
- Cuando se despliegue en GitHub Pages desde Actions, resolver `basePath` y `assetPrefix` dinámicamente desde `GITHUB_REPOSITORY`.

## Aprendizajes de la sesión
- Entorno actual no permite descargar dependencias de npm (403), por lo que validaciones automáticas pueden quedar bloqueadas sin cache local.
- Mantener placeholders de imagen hasta recibir assets oficiales del club.
- El flujo recomendado de Pages para este repo usa `.github/workflows/deploy-pages.yml` con build estático en `out/` y deploy con `actions/deploy-pages`.

- Para GitHub Actions con `actions/setup-node` y `cache: npm`, es obligatorio mantener `package-lock.json` versionado y preferir `npm ci` en CI.

- Para upgrades visuales grandes, centralizar tokens en `app/globals.css` + `tailwind.config.ts` y mantener componentes de estructura en `components/ui.tsx` evita drift de estilos.
- Motion recomendado: `IntersectionObserver` + clases CSS `opacity/transform` con fallback por `prefers-reduced-motion`, sin sumar librerías de animación cuando no son necesarias.


- Si aún no hay canal oficial de contacto validado por el club, evitar `mailto` y formularios funcionales; usar CTAs internos y texto “por confirmar”.
- Para el tracker de campañas, soportar valores `null` en contenido y representar “pendiente” en UI para mantener edición manual sin scraping.

- Upgrade mobile-first: priorizar navegación táctil con menú móvil explícito, `min-h-12` en acciones y copy más corto por bloque mejora uso en 320–414px.
- Para contenido humano real, centralizar liderazgos/quotes/estructura formal en `content/copy.ts` evita hardcode en componentes y permite edición editorial segura.
- Cuando se usen retratos temporales, preferir assets locales ligeros (SVG) + `next/image` con `sizes` para evitar CLS y mantener control de performance.

- Corrección editorial estricta en sitio público: se eliminaron placeholders visibles y versionado público en footer; contacto temporal unificado a Instagram + GoFundMe.
- Valencia 2026 quedó sin tracker vacío en producción: si no hay montos, se muestra campaña activa sin cifras placeholders.

- En home mobile, reemplazar listas de “credenciales” tipo chip por 2–3 evidencias con título + contexto mejora comprensión y reduce sensación de relleno.

- Cuando aparezcan huecos verticales excesivos, ajustar primero el token global `--space-section` y los offsets de `Section`/footer antes de intervenir cada página, para mantener consistencia de ritmo visual.
- Resolver assets en Pages con un helper único (`lib/assets.ts`) + `NEXT_PUBLIC_BASE_PATH` evita rutas rotas de logo/retratos en export estático.
- `SafeImage` centraliza fallback visual elegante y elimina iconos rotos del navegador en bloques críticos (header, hero, personas).
- Valencia 2026 ahora usa modelo explícito `campaignMode: narrative | tracked`; en modo narrative se oculta todo tracker numérico sin depender de `null` públicos.

- Paridad de slugs bilingües: navegación y CTAs ahora usan `lib/routes.ts` con keys compartidas; EN usa `/support` y `/join` sin ramas paralelas de contenido.

- Para solicitudes estratégicas no-code, dejar entregable versionado en `docs/` (auditoría + copy listo) facilita revisión editorial y continuidad entre sesiones.

- Cuando el entorno bloquea `npm install` (403), implementar componentes con API compatible local (estilo shadcn) permite evolucionar UI sin romper CI ni static export.
- Para tests de componentes Next/React con TS en este repo, configurar `jest.config.js` con transformación `tsx` (`jsx: react-jsx`) evita errores de parseo en imports de componentes.

- Refactor incremental exitoso: centralizar primitives (`Card`, `Badge`, `SectionHeader`, `Separator`) en `components/ui.tsx` permite modernizar secciones sin reescribir rutas ni contenido.
- Para tipografía variable estable en Next 14, usar `next/font` (Archivo + Inter) aplicado por variables CSS evita drift entre hero/body y mantiene performance en static export.
- Decisión técnica: mantener Tailwind v3.4 en este ciclo reduce riesgo de regresión en Pages; priorizar consolidación de tokens y componentes antes de migrar a v4.

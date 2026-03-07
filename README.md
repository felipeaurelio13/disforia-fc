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

## Sesión actual (registro)
- Se creó una primera versión completa del sitio bilingüe con las páginas solicitadas.
- Se centralizó contenido editable en archivos TS.
- Se implementó estructura visual sobria, deportiva y editorial.
- Se agregó prueba unitaria base para cálculo de avance de Valencia 2026.

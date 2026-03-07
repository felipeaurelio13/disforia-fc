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

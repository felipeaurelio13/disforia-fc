# Agent Knowledge Log

## Patrones de este repo
- Mantener contenido editable en `content/` y UI en `components/`.
- Evitar duplicación de lógica de idioma: usar `content/copy.ts` por locale.
- Compatibilidad GitHub Pages: mantener `output: 'export'` en Next config.
- Footer incluye versión visible para seguimiento de release.

## Aprendizajes de la sesión
- Entorno actual no permite descargar dependencias de npm (403), por lo que validaciones automáticas pueden quedar bloqueadas sin cache local.
- Mantener placeholders de imagen hasta recibir assets oficiales del club.

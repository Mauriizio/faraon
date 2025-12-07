# Guía rápida para la X roja en GitHub

Si al empujar la rama ves una **X roja** en GitHub, significa que alguna comprobación automática falló (build, lint, deploy, etc.). El push se completa, pero la rama/PR se marca como fallida.

## Qué hacer
1. **Reproduce los checks localmente**:
   - `npm run lint`
   - `npm run build`
2. Si todo pasa localmente, comprueba en GitHub qué check falló (por ejemplo, deploy de Vercel) y corrige el error o reintenta el check.
3. Evita usar `--force` salvo que sea necesario; si lo usas, asegúrate de que los checks vuelvan a ejecutarse después del push.

## Por qué sucede
- El servidor de CI/preview no pudo descargar algún recurso externo (p. ej., fuentes).
- Falta de dependencias o pasos previos antes del build.
- Se forzó un push y se reemplazó un commit que tenía checks aprobados por uno nuevo sin los fixes.

Mantén las dependencias instaladas (`npm install`) y ejecuta los comandos anteriores antes de cada push para detectar fallos antes que GitHub.

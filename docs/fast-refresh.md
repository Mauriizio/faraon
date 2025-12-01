# Fast Refresh mensajes en Next.js 16

Los avisos repetidos `Fast Refresh had to perform a full reload when ./node_modules/next/dist/client/image-component.js changed` indican que el runtime tuvo que recargar la página completa en lugar de aplicar solo el parche de HMR. Esto suele ocurrir cuando:

- Se actualiza una dependencia interna de Next (`next/image` en este caso) por cambios de código, reinstalación de paquetes o al resolver un conflicto de merge que deja el archivo temporalmente diferente.
- Hay conflictos de merge sin resolver en componentes que se renderizan (por ejemplo, `Hero.tsx` mostraba marcadores `<<<<<<< HEAD`). Mientras existan, el compilador falla y fuerza recargas completas.

Cómo resolver o evitar los avisos:

1. Revisa y resuelve todos los conflictos de merge en los archivos mostrados en la traza (por ejemplo, elimina los marcadores `<<<<<<<`, `=======`, `>>>>>>>`).
2. Asegúrate de que `npm install` terminó correctamente y no faltan dependencias.
3. Reinicia el dev server (`npm run dev`) después de resolver conflictos o reinstalar paquetes para limpiar el estado de HMR.

Los log de `GET / ... (compile: Xms, render: Yms)` indican el tiempo de compilación y renderizado de cada ruta. Las primeras visitas suelen ser más lentas porque Next compila la página; las siguientes son rápidas (`compile` muy bajo) al reutilizar la caché.

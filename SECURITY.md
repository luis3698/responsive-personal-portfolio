# Política de seguridad

## Qué cubre este repositorio

Este repositorio contiene un sitio web estático: HTML, CSS y JavaScript que se
ejecutan en el navegador de quien lo visita. No hay servidor propio, ni base de
datos, ni sesiones de usuario, así que la superficie de ataque es pequeña.

Aun así, hay cosas que sí me interesa que me reportes:

- **XSS** o cualquier ejecución de código no prevista en la página.
- **Dependencias externas comprometidas o desactualizadas**: el sitio carga
  Remixicon, Swiper, PDF.js y ScrollReveal desde CDN, además de Google Fonts.
- **Fuga de datos personales**: si un archivo del repositorio expone
  información privada que no debería estar publicada.
- **Enlaces externos rotos o secuestrados**, incluido cualquier dominio caducado
  al que el sitio apunte.
- **Problemas en el formulario de contacto** o en el manejo de los datos que
  envía.

Lo que **no** entra: los proyectos que el portafolio muestra viven en sus
propios repositorios, y sus vulnerabilidades se reportan allí.

## Versiones con soporte

El sitio se despliega desde la rama `main`. Solo esa versión recibe
correcciones; no hay versiones anteriores con soporte.

| Versión | Soporte |
| ------- | ------- |
| `main`  | ✅      |
| Otras ramas o forks | ❌ |

## Cómo reportar

**No abras una incidencia pública para un problema de seguridad.**

Escríbeme en privado a **luisgerardomancilla3698@gmail.com** con el asunto
`[Seguridad] responsive-personal-portfolio` e incluye:

- Qué encontraste y qué impacto tendría.
- Los pasos para reproducirlo.
- La URL o el archivo afectado.
- Una captura o un fragmento de código, si ayuda a entenderlo.

También puedes usar el
[reporte privado de vulnerabilidades](https://github.com/luis3698/responsive-personal-portfolio/security/advisories/new)
de GitHub, si está habilitado.

## Qué puedes esperar

- **Acuse de recibo:** dentro de los 5 días hábiles siguientes.
- **Diagnóstico:** te confirmo si lo reproduje y qué pienso hacer, dentro de los
  15 días.
- **Corrección:** según la gravedad; en un sitio estático como este suele ser
  cuestión de un commit.
- **Crédito:** si quieres, te menciono en el commit o en las notas del arreglo.

Te pido que me des un margen razonable para corregir antes de hacer público el
hallazgo. Gracias por tomarte el tiempo de reportarlo.

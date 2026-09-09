# Cómo contribuir

Gracias por pasarte por aquí. Este repositorio es mi portafolio personal, así
que las contribuciones que más agradezco son las correcciones: un enlace roto,
una falta de ortografía, un problema de accesibilidad o algo que no se ve bien
en tu navegador o en tu teléfono.

## Antes de empezar

- **¿Encontraste un error?** Abre una [incidencia](https://github.com/luis3698/responsive-personal-portfolio/issues/new/choose)
  con la plantilla de reporte de error. Cuéntame qué navegador y qué tamaño de
  pantalla usaste; con una captura basta para ubicarlo.
- **¿Se te ocurre una mejora?** Ábrela como incidencia antes de escribir código.
  Al ser un portafolio personal, hay cambios de diseño o de contenido que
  prefiero mantener como están, y así te ahorras el trabajo.
- **¿Un cambio pequeño y obvio?** Un typo o un enlace roto puedes mandarlo
  directo como pull request, sin incidencia previa.

## Requisitos

Ninguno más allá de un navegador y un editor. El sitio es HTML, CSS y
JavaScript sin compilación: no hay `npm install`, ni bundler, ni framework.

## Verlo en tu equipo

Clona el repositorio y sírvelo desde un servidor estático. Abrir el
`index.html` con doble clic funciona a medias, porque algunas rutas y el visor
de PDF se comportan distinto bajo `file://`.

```bash
git clone https://github.com/luis3698/responsive-personal-portfolio.git
cd responsive-personal-portfolio
python -m http.server 8000
```

Luego abre <http://localhost:8000>. Si usas VS Code, la extensión Live Server
hace lo mismo con un clic.

## Estructura

```
index.html              Todo el sitio, en una sola página
assets/css/main.css     Estilos, con variables CSS y media queries al final
assets/js/main.js       Menú, tema claro/oscuro, Swiper y el visor de PDF
assets/img/             Logos de tecnologías, foto de perfil e imágenes de proyectos
assets/documents/       CV, diplomas y certificados en PDF
assets/documents/manuales/   Manuales de funcionalidad y capturas de los proyectos
```

## Estilo del código

No hay linter configurado, así que la regla es sencilla: **que tu cambio se
parezca al código que lo rodea**.

- Indentación de 4 espacios en HTML, 2 en CSS y JS.
- Clases CSS en [BEM](http://getbem.com/naming/), como ya se usan en todo el
  proyecto: `.portfolio__title`, `.nav__link`, `.btn--primary`.
- Colores, tipografías, radios y sombras salen de las variables CSS definidas
  en `:root`. Si necesitas un valor nuevo, agrégalo ahí en vez de escribirlo
  suelto en una regla.
- Los textos visibles van en español.
- Toda imagen necesita su `alt`, y todo enlace externo `target="_blank"` con
  `rel="noopener"`.

## Pull requests

1. Crea una rama desde `main`: `git checkout -b arregla-enlace-cv`.
2. Haz commits pequeños y con mensajes descriptivos, en imperativo:
   `Corrige enlace roto del CV`, no `cambios`.
3. Antes de abrirlo, revisa tu cambio en el navegador —en escritorio y en
   móvil— y comprueba que la consola no muestre errores nuevos.
4. Abre el pull request y completa la plantilla. Si el cambio se ve, agrega una
   captura de antes y después.

Reviso los pull requests cuando puedo; ten paciencia si tardo unos días.

## Lo que no voy a aceptar

Para ahorrarte el esfuerzo, estos cambios los voy a cerrar:

- Modificaciones a mi información personal: nombre, foto, experiencia,
  certificados o datos de contacto.
- Reescrituras del sitio en un framework (React, Vue, Astro...). Que sea HTML,
  CSS y JS sin dependencias es una decisión deliberada.
- Cambios de diseño amplios sin haberlos conversado antes en una incidencia.

## Código de conducta

Al participar aceptas el [código de conducta](CODE_OF_CONDUCT.md) del proyecto.

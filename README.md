# Portafolio personal — Luis Gerardo Mancilla

Sitio web personal donde presento mi perfil como Ingeniero de Sistemas, mi
experiencia profesional, mis proyectos y mis certificaciones. Está construido
con HTML, CSS y JavaScript puros, sin frameworks ni dependencias.

[![Ver el sitio](https://img.shields.io/badge/Ver%20el%20sitio-2563EB?style=for-the-badge&logo=googlechrome&logoColor=white)](https://luis3698.github.io/responsive-personal-portfolio/)
[![Licencia MIT](https://img.shields.io/badge/Licencia-MIT-22C55E?style=for-the-badge)](LICENSE)

**🔗 Sitio en vivo:** <https://luis3698.github.io/responsive-personal-portfolio/>

## Contenido del sitio

| Sección | Qué muestra |
|---|---|
| **Inicio** | Presentación y acceso directo a mi CV en PDF |
| **Sobre mí** | Mi perfil como Ingeniero de Sistemas y Tecnólogo en ADSI |
| **Experiencia** | Trayectoria profesional en desarrollo, soporte y bases de datos |
| **Habilidades** | Herramientas y tecnologías con las que trabajo |
| **Educación** | Formación académica y titulaciones |
| **Servicios** | Lo que ofrezco a clientes y empresas |
| **Proyectos** | Proyectos destacados con enlaces y manuales de funcionalidad |
| **Certificaciones** | Diplomas y certificados descargables en PDF |
| **Contacto** | Formulario y redes para escribirme |

## Tecnologías

- **HTML5** — estructura y contenido semántico
- **CSS3** — diseño responsive con Flexbox y Grid, sin frameworks
- **JavaScript (vanilla)** — navegación, interacciones y animaciones
- **GitHub Pages** — alojamiento y despliegue automático

## Estructura del proyecto

```
.
├── index.html              # Página única con todas las secciones
├── assets/
│   ├── css/main.css        # Estilos del sitio
│   ├── js/main.js          # Interacciones y navegación
│   ├── img/                # Imágenes, iconos y logos de tecnologías
│   └── documents/          # CV, certificados y manuales en PDF
└── .github/                # Plantillas de issues y pull requests
```

## Ejecutarlo en local

No necesita instalación ni proceso de compilación. Basta con clonar el
repositorio y abrir el archivo `index.html`:

```bash
git clone https://github.com/luis3698/responsive-personal-portfolio.git
cd responsive-personal-portfolio
```

Para evitar problemas al cargar las rutas de los PDF y las imágenes, conviene
servirlo por HTTP en lugar de abrir el archivo directamente:

```bash
python -m http.server 8000
```

Luego abre <http://localhost:8000> en el navegador.

## Despliegue

El sitio se publica automáticamente con **GitHub Pages** desde la rama `main`.
Cada push a `main` actualiza <https://luis3698.github.io/responsive-personal-portfolio/>.

## Contacto

- **Correo:** luisgerardomancilla3698@gmail.com
- **LinkedIn:** [luis-mancilla](https://www.linkedin.com/in/luis-mancilla-750327374/)
- **GitHub:** [@luis3698](https://github.com/luis3698)
- **Ubicación:** San Gil, Santander, Colombia

## Licencia

Publicado bajo la licencia [MIT](LICENSE). El código es libre de reutilizar;
los documentos personales y certificados de la carpeta `assets/documents/`
no lo son.

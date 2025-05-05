# 🌀 Project 1 – Circle Web

## 🔗 Enlaces importantes

- **Repositorio GitHub:** [https://github.com/AryFlo/project1_circle_web](https://github.com/AryFlo/project1_circle_web)
- **Web en vivo:** [https://proyect1-ironhack.netlify.app/](https://proyect1-ironhack.netlify.app/)

---

## 📝 Descripción del Proyecto

Este es mi primer proyecto completo de desarrollo web como estudiante de Ironhack, en el que recreé el sitio de una agencia ficticia de diseño web, siguiendo un diseño proporcionado en Figma. El proyecto consiste en una página principal, una sección de proyectos y una página de contacto. Fue construido utilizando HTML, CSS y JavaScript, y está completamente responsive para adaptarse a dispositivos móviles.

---

## 🎯 Objetivos del Proyecto

- Replicar un diseño preexistente (desde Figma) usando HTML y CSS.
- Asegurar una experiencia de usuario fluida y responsive en distintas resoluciones de pantalla.
- Utilizar JavaScript para manipular el DOM e implementar funcionalidades interactivas.
- Consumir una API para poblar dinámicamente contenido de proyectos.
- Validar un formulario mediante JavaScript.
- Implementar buenas prácticas de desarrollo web: estructura modular, semántica, KISS y DRY.
- Publicar el proyecto en línea usando Git y Netlify.

---

## Estructura del sitio

El sitio está compuesto por las siguientes páginas:

- `index.html`: Página principal con hero, marcas, servicios, testimonios y proyectos recientes.
- `projects/[uuid].html`: Páginas individuales generadas dinámicamente con los detalles de cada proyecto.
- `pages/404.html`: Página de error personalizada.
- `styles/`: Carpeta de hojas de estilo CSS reutilizables.
- `scripts/`: Contiene `projects.js` para manejar la lógica de carga de datos.

## Consumo de datos dinámicos

Los proyectos se cargan desde una API externa:

```
https://raw.githubusercontent.com/ironhack-jc/mid-term-api/main/projects
```

- En la página de detalle (`[uuid].html`), se identifica el proyecto por `uuid` y se carga su información completa.
- También se muestran 3 proyectos relacionados seleccionados dinámicamente.

## Tecnologías utilizadas

- **HTML5 / CSS3:** Para la estructura y estilos del sitio.
- **JavaScript (ES6):** Para manejar la lógica de renderizado dinámico y consumo de API.
- **Netlify:** Para el despliegue del sitio.
- **Git / GitHub:** Control de versiones y colaboración.

---

## ⚙️ Funcionalidades Implementadas

### 1. HTML & CSS
- Diseño fiel al archivo Figma, incluyendo fuentes, colores y márgenes.
- Estructura semántica y reutilizable de componentes (header, footer, secciones).
- Diseño responsive para móvil, tablet y desktop con media queries.

### 2. JavaScript
- **Consumo de API:** Se realiza una petición a la API `https://raw.githubusercontent.com/ironhack-jc/mid-term-api/main/projects` para cargar dinámicamente información de proyectos.
- **Detalle de proyecto (1.html):** Muestra el proyecto con `uuid = 1` y otros tres proyectos distintos de forma aleatoria.
- **Validación de formulario:** Se bloquea el envío si el campo "name" contiene "Ironhack" o si los campos están vacíos o mal formateados.
- **Página 404 personalizada:** Redireccionamiento automático si el `uuid` no existe.
- **Menú responsivo:** Desplegable en pantallas pequeñas (BONUS).

---

## ✅ Requisitos Técnicos Cumplidos

| Requisito | Cumplido |
|-----------|----------|
| Sitio visible en el navegador | ✅ |
| HTML, CSS y JS en archivos separados | ✅ |
| Proyecto en GitHub con múltiples commits | ✅ |
| Desplegado en Netlify | ✅ |
| Diseño responsive en distintas resoluciones | ✅ |
| Replicación del diseño de Figma | ✅ |
| Interacciones DOM en JavaScript | ✅ |
| Validación de formulario con alertas JS | ✅ |
| Página de error 404 personalizada (BONUS) | ✅ |
| Menú responsive (BONUS) | ✅ |

---

## Responsividad

El diseño es completamente adaptable a pantallas de escritorio, tablets y móviles. Se usaron `flexbox`, `media queries` y unidades relativas (`%`, `em`, `vh`, `vw`) para garantizar una buena experiencia en todos los dispositivos.

## Estructura del repositorio

```
📁 /root
├── index.html
├── projects/
│   └── [uuid].html
├── pages/
│   └── 404.html
├── styles/
│   ├── header.css
│   ├── footer.css
│   └── main.css
├── scripts/
│   └── projects.js
└── assets/
    └── (imágenes y logos)
```



## Créditos

Proyecto realizado como parte del Bootcamp de Frontend de **Ironhack**.
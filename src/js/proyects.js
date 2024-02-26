import {
  capcus,
  splitter,
  cubc,
  fylo,
  todoapp,
  countriesapp,
  react,
  css,
  github,
  js,
  material,
  firebase,
  reduxIcon,
  html,
} from "../assets";

export const proyectsImages = [
  {
    name: "CapCus",
    src: capcus,
    alt: "CapCus image",
    description:
      "Esta aplicación fue desarrollada como proyecto universitario para sustituir los equipos tradicionales de los profesores, como las listas de asistencia y de calificación. Esta aplicación está dirigida a profesores que buscan una herramienta digital para gestionar sus clases de forma más eficiente.",
    funcionalidades: [
      {
        titulo: "Creación de grupos, materias y usuarios:",
        description:
          "Permite organizar a los estudiantes y las clases de forma eficiente.",
      },
      {
        titulo: "Registro de asistencia y calificaciones:",
        description: " Simplifica el seguimiento del progreso de los alumnos.",
      },
      ,
      {
        titulo: "Cálculo automático de calificaciones:",
        description: "Ahorra tiempo a los profesores en tareas tediosas.",
      },
      ,
      {
        titulo:
          "Visualización de la calificación individual y del promedio del grupo:",
        description: "Ofrece una visión completa del rendimiento académico.",
      },
      {
        titulo: "Edición y eliminación de datos:",
        description: "Permite mantener la información actualizada.",
      },
      {
        titulo:
          "Registro de usuarios con correo electrónico o cuentas de Google:",
        description: "Facilita el acceso a la aplicación.",
      },
      {
        titulo: "Inicio de sesión seguro:",
        description: " Protege la información confidencial.",
      },
    ],
    tecnologias: [
      {
        nombre: "React",
        descripcion:
          "Biblioteca JavaScript para crear interfaces de usuario interactivas.",
        icono: react,
        url: "https://reactjs.org/",
      },
      {
        nombre: "Material UI",
        descripcion:
          "Biblioteca de componentes de interfaz de usuario para React.",
        icono: material,
        url: "https://mui.com/",
      },
      {
        nombre: "CSS",
        descripcion: "Lenguaje de estilo para dar formato a las páginas web.",
        icono: css,
        url: "https://developer.mozilla.org/es/docs/Web/CSS",
      },
      {
        nombre: "Firebase",
        descripcion: "Plataforma de desarrollo de aplicaciones web en la nube.",
        icono: firebase,
        url: "https://firebase.google.com/",
      },
      {
        nombre: "React Redux",
        descripcion:
          "Biblioteca para administrar el estado de la aplicación en React.",
        icono: reduxIcon,
        url: "https://react-redux.js.org/",
      },
    ],
  },
  {
    name: "Countries App",
    src: countriesapp,
    alt: "Countries App image",
    description:
      "Desarrollé una aplicación que consume la API Countries REST para mostrar información completa y actualizada de cada país del mundo, con una interfaz atractiva, animaciones y diseño adaptable para una experiencia de usuario excepcional.",
    funcionalidades: [
      {
        titulo: "Descubre el mundo:",
        description:
          "Explora una lista completa de países con sus datos actualizados.",
      },
      {
        titulo: "Información detallada:",
        description:
          "Profundiza en cada país y conoce su moneda, fronteras, población, idiomas y mucho más.",
      },
      {
        titulo: "Personaliza tu experiencia:",
        description:
          "Alterna entre temas claro y oscuro para una visualización óptima.",
      },
      {
        titulo: "Animaciones atractivas:",
        description:
          "Disfruta de una interfaz intuitiva con animaciones que te guiarán en tu viaje.",
      },
      {
        titulo: "Diseño adaptable:",
        description:
          "Accede a la aplicación desde cualquier dispositivo con una experiencia optimizada.",
      },
    ],
    tecnologias: [
      {
        nombre: "React",
        descripcion:
          "Una biblioteca de JavaScript para crear interfaces de usuario interactivas.",
        icono: react,
        url: "https://reactjs.org/",
      },
      {
        nombre: "HTML",
        descripcion: "El lenguaje de marcado estándar para crear páginas web.",
        icono: html,
        url: "https://developer.mozilla.org/es/docs/Web/HTML",
      },
      {
        nombre: "CSS",
        descripcion:
          "Un lenguaje de estilo para dar formato a las páginas web.",
        icono: css,
        url: "https://developer.mozilla.org/es/docs/Web/CSS",
      },
    ],
  },
  {
    name: "Splitter",
    src: splitter,
    description:
      "Desarrollé una aplicación que facilita la división de cuentas y el cálculo de propinas, con opciones personalizables y una interfaz intuitiva para una experiencia sencilla y práctica.",
    funcionalidades: [
      {
        titulo: "División de cuentas: ",
        description:
          "Divide la cuenta entre varios amigos de forma rápida y sencilla.",
      },
      {
        titulo: "Cálculo de propina",
        description:
          "Obtén el porcentaje de propina que deseas dejar y el total final de la cuenta.",
      },
      {
        titulo: "Multitud de opciones:",
        description:
          "Divide la cuenta entre cualquier número de personas y personaliza el porcentaje de propina.",
      },
      {
        titulo: "Uso individual:",
        description:
          "Perfecta también para calcular la propina cuando pagas solo.",
      },
      {
        titulo: "Interfaz intuitiva:",
        description:
          "Diseño simple y fácil de usar para una experiencia agradable.",
      },
    ],
    tecnologias: [
      {
        nombre: "React",
        descripcion:
          "Una biblioteca de JavaScript para crear interfaces de usuario interactivas.",
        icono: react,
        url: "https://reactjs.org/",
      },
      {
        nombre: "HTML",
        descripcion: "El lenguaje de marcado estándar para crear páginas web.",
        icono: html,
        url: "https://developer.mozilla.org/es/docs/Web/HTML",
      },
      {
        nombre: "CSS",
        descripcion:
          "Un lenguaje de estilo para dar formato a las páginas web.",
        icono: css,
        url: "https://developer.mozilla.org/es/docs/Web/CSS",
      },
    ],
  },
  {
    name: "Fylo Landing Page",
    src: fylo,
    description:
      "Este proyecto es una landing page creada que he desarrollado como parte de los retos de Frontend Mentor. Es un proyecto en el que he aprendido mucho sobre, combinación de colores, diseño web adaptable",
    tecnologias: [
      {
        nombre: "React",
        descripcion:
          "Una biblioteca de JavaScript para crear interfaces de usuario interactivas.",
        icono: react,
        url: "https://reactjs.org/",
      },
      {
        nombre: "HTML",
        descripcion: "El lenguaje de marcado estándar para crear páginas web.",
        icono: html,
      },
      {
        nombre: "CSS",
        descripcion:
          "Un lenguaje de estilo para dar formato a las páginas web.",
        icono: css,
      },
    ],
  },
  {
    name: "Rediseño del sitio web del Instituto CUBC",
    src: cubc,
    description:
      "Este proyecto es un rediseño del sitio web del Instituto CUBC, utilizando React y CSS. El objetivo principal era mejorar el diseño y la velocidad de la página web existente.",
    tecnologias: [
      {
        nombre: "React",
        descripcion:
          "Una biblioteca de JavaScript para crear interfaces de usuario interactivas.",
        icono: react,
      },
      {
        nombre: "HTML",
        descripcion: "El lenguaje de marcado estándar para crear páginas web.",
        icono: html,
      },
      {
        nombre: "CSS",
        descripcion:
          "Un lenguaje de estilo para dar formato a las páginas web.",
        icono: css,
      },
    ],
  },
  {
    name: "App ToDo - Reto Frontend Mentor",
    src: todoapp,
    description:
      'Este proyecto es una aplicación "To-Do" que he desarrollado como parte de los retos de Frontend Mentor. Es un proyecto en el que he aprendido mucho sobre el uso del storage web.',
    tecnologias: [
      {
        nombre: "React",
        descripcion:
          "Una biblioteca de JavaScript para crear interfaces de usuario interactivas.",
        icono: react,
      },
      {
        nombre: "HTML",
        descripcion: "El lenguaje de marcado estándar para crear páginas web.",
        icono: html,
      },
      {
        nombre: "CSS",
        descripcion:
          "Un lenguaje de estilo para dar formato a las páginas web.",
        icono: css,
      },
    ],
  },
];

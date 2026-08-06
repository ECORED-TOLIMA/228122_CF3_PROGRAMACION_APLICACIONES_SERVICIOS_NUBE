export default {
  global: {
    Name: 'Fundamentos de algoritmia y solución de problemas',
    Description:
      'Aborda los fundamentos de la lógica y la algoritmia, desde el pensamiento algorítmico y el análisis de problemas hasta el diseño, representación y prueba de algoritmos. Integra elementos básicos de programación, estructuras de control y datos, promoviendo la programación modular y el uso de herramientas que facilitan soluciones estructuradas y eficientes.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Fundamentos de lógica y algoritmia',
        desarrolloContenidos: true,
        subMenu: [
          { numero: '1.1', titulo: 'Concepto de algoritmo', hash: 't_1_1' },
          {
            numero: '1.2',
            titulo: 'Pensamiento algorítmico y solución de problemas',
            hash: 't_1_2',
          },
          { numero: '1.3', titulo: 'Análisis del problema', hash: 't_1_3' },
          {
            numero: '1.4',
            titulo: 'Lógica matemática y lógica proposicional',
            hash: 't_1_4',
          },
          { numero: '1.5', titulo: 'Tipo de algoritmos', hash: 't_1_5' },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Metodologías para el diseño de algoritmos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Metodologías de análisis y diseño de algoritmos',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Notación de algoritmos mediante seudocódigo',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Representación de algoritmos con diagramas de flujo',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo: 'Herramientas para la creación y prueba de algoritmos',
            hash: 't_2_4',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Elementos básicos de la programación',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Identificadores y palabras reservadas',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Variables, constantes, contadores y acumuladores',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Tipos de datos (enteros, reales, booleanos)',
            hash: 't_3_3',
          },
          {
            numero: '3.4',
            titulo: 'Operadores y jerarquía de operadores',
            hash: 't_3_4',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Estructuras de control y estructuras de datos',
        desarrolloContenidos: true,
        subMenu: [
          { numero: '4.1', titulo: 'Estructura secuencial', hash: 't_4_1' },
          { numero: '4.2', titulo: 'Estructuras condicionales', hash: 't_4_2' },
          {
            numero: '4.3',
            titulo: 'Estructuras de iteración o repetitivas (for, while)',
            hash: 't_4_3',
          },
          {
            numero: '4.4',
            titulo: 'Estructuras de datos básicas: vectores y matrices',
            hash: 't_4_4',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Programación modular y pruebas de algoritmos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '5.1',
            titulo: 'Concepto de programación modular',
            hash: 't_5_1',
          },
          {
            numero: '5.2',
            titulo: 'Características de los módulos según funcionalidad',
            hash: 't_5_2',
          },
          {
            numero: '5.3',
            titulo: 'Errores comunes en algoritmos',
            hash: 't_5_3',
          },
          {
            numero: '5.4',
            titulo: 'Parámetros de entrada y salida en los módulos',
            hash: 't_5_4',
          },
          {
            numero: '5.5',
            titulo: 'Pruebas de escritorio o trazas de algoritmos',
            hash: 't_5_5',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/228122_CF03__CFA.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [],
  glosario: [
    {
      termino: 'Algoritmo',
      significado:
        'Conjunto finito y ordenado de pasos que permiten resolver un problema o ejecutar una tarea específica de manera lógica.',
    },
    {
      termino: 'Constante',
      significado:
        'Valor fijo que no se modifica durante la ejecución del algoritmo o programa.',
    },
    {
      termino: 'Diagrama de flujo',
      significado:
        'Representación gráfica de un algoritmo que utiliza símbolos estandarizados para mostrar el flujo de procesos y decisiones.',
    },
    {
      termino: 'Estructura condicional',
      significado:
        'Mecanismo que permite tomar decisiones dentro de un algoritmo según el cumplimiento de una condición.',
    },
    {
      termino: 'Lógica proposicional',
      significado:
        'Rama de la lógica que trabaja con proposiciones que pueden ser verdaderas o falsas y se relacionan mediante conectores lógicos.',
    },
    {
      termino: 'Operador',
      significado:
        'Símbolo que permite realizar operaciones matemáticas, lógicas o de comparación entre datos.',
    },
    {
      termino: 'Pensamiento algorítmico',
      significado:
        'Habilidad para analizar problemas, descomponerlos y diseñar soluciones estructuradas paso a paso.',
    },
    {
      termino: 'Programación modular',
      significado:
        'Técnica que consiste en dividir un programa en módulos independientes, facilitando su desarrollo, mantenimiento y reutilización.',
    },
    {
      termino: 'Seudocódigo',
      significado:
        'Forma de representar algoritmos mediante un lenguaje estructurado similar al lenguaje natural, sin depender de un lenguaje de programación específico.',
    },
    {
      termino: 'Variable',
      significado:
        'Espacio de memoria que almacena datos que pueden cambiar durante la ejecución de un programa.',
    },
  ],
  referencias: [
    {
      referencia:
        'Aho, A. V., Lam, M. S., Sethi, R. & Ullman, J. D. (2006). <em>Compilers: Principles, Techniques, and Tools (2nd ed.).</em> Pearson.',
      link: '',
    },
    {
      referencia:
        'Cormen, T. H., Leiserson, C. E., Rivest, R. L. & Stein, C. (2022). <em>Introduction to Algorithms (4th ed.).</em> MIT Press.',
      link: '',
    },
    {
      referencia:
        'Deitel, P. & Deitel, H. (2017). <em>C How to Program (8th ed.)</em>. Pearson.',
      link: '',
    },
    {
      referencia:
        'Joyanes Aguilar, L. (2013). <em>Fundamentos de programación: algoritmos, estructura de datos y objetos (5ª ed.)</em>. McGraw-Hill.',
      link: '',
    },
    {
      referencia:
        'Knuth, D. E. (1997). <em>The Art of Computer Programming, Volume 1: Fundamental Algorithms (3rd ed.)</em>. Addison-Wesley.',
      link: '',
    },
    {
      referencia:
        'Pressman, R. S., & Maxim, B. R. (2020). <em>Ingeniería de software: un enfoque práctico (9ª ed.)</em>. McGraw-Hill.',
      link: '',
    },
    {
      referencia:
        'Rosen, K. H. (2019). <em>Discrete Mathematics and Its Applications (8th ed.)</em>. McGraw-Hill.',
      link: '',
    },
    {
      referencia:
        'Sebesta, R. W. (2016). <em>Concepts of Programming Languages (11th ed.)</em>. Pearson.',
      link: '',
    },
    {
      referencia:
        'Sommerville, I. (2016). <em>Software Engineering (10th ed.)</em>. Pearson.',
      link: '',
    },
    {
      referencia:
        'Wirth, N. (1976). <em>Algorithms + Data Structures = Programs.</em> Prentice Hall.',
      link: '',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo:
            'Profesional G06. Responsable Ecosistema de Recursos Educativos Digitales (RED)',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Diana Rocío Possos Beltrán',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Francisco José Vásquez Suárez',
          cargo: 'Desarrollador <em>full stack</em>',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Andrés Felipe Velandia Espitia',
          cargo: 'Evaluador instruccional',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'José Jaime Luis Tang Pinzón',
          cargo: 'Diseñador de contenidos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Veimar Celis Melendez',
          cargo: 'Desarrollador <em>full stack</em>',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Gilberto Junior Rodríguez Rodríguez',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'María Fernanda Pineda Mora',
          cargo: 'Evaluadora de contenidos inclusivos y accesibles',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Jorge Bustos Gómez',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}

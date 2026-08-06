<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    p.mb-4 Este componente formativo se orienta al desarrollo integral de competencias en lógica, algoritmia y programación, fundamentales para la formación en el área de desarrollo de #[i software]. Inicia con la comprensión de los conceptos básicos de algoritmo y el fortalecimiento del pensamiento algorítmico, permitiendo analizar problemas de manera estructurada y proponer soluciones lógicas sustentadas en la lógica matemática y proposicional.
    .bloque-texto-g.C01.p-3.p-sm-4.p-md-5.mb-4
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/intro/img1.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Posteriormente, aborda metodologías para el diseño de algoritmos, promoviendo el uso de herramientas como el seudocódigo y los diagramas de flujo, que facilitan la representación clara y ordenada de soluciones. Se integran también herramientas tecnológicas para la creación, validación y prueba de algoritmos, fortaleciendo la capacidad de abstracción y modelado.
    .row.justify-content-center.mb-4
      .col.col-lg-auto.col-8.col-md-4.order-lg-1.order-1.mb-lg-0.mb-3
        figure
          img(src='@/assets/curso/temas/intro/img2.svg', alt='')
      .col.col-lg-9.col-12.order-lg-2.order-2
        p.mb-0(data-aos="fade-down") El componente continúa con los elementos básicos de la programación, incluyendo el manejo de identificadores, variables, constantes, operadores y su correcta jerarquización, aspectos esenciales para la construcción de soluciones funcionales. Asimismo, se profundiza en las estructuras de control (secuenciales, condicionales e iterativas) y en el manejo de estructuras de datos básicas como vectores y matrices, permitiendo el desarrollo de soluciones más robustas y eficientes.
    .row.justify-content-center.mb-4
      .col-lg-10
        .p-4.cajon.color-secundario
          p.mb-0 Finalmente, se enfatiza en la programación modular como estrategia para organizar y reutilizar código, junto con la definición de parámetros de entrada y salida en los módulos. Se promueve la validación de soluciones mediante pruebas de escritorio o trazas de algoritmos, garantizando la correcta ejecución y optimización de los procesos desarrollados. Este componente busca formar aprendices capaces de diseñar soluciones lógicas, estructuradas y verificables en contextos reales.
</template>

<script>
export default {
  name: 'Introduccion',
  mounted() {
    this.$nextTick(() => this.$aosRefresh())
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

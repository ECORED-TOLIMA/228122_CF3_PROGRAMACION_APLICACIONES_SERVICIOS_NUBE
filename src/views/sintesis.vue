<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p.mb-5 El componente formativo desarrolla los fundamentos de la lógica y la algoritmia como base para la solución estructurada de problemas, abordando el concepto de algoritmo, el pensamiento algorítmico, el análisis del problema y la lógica matemática. Se estudian metodologías para el diseño de algoritmos mediante seudocódigo y diagramas de flujo, junto con herramientas de creación y prueba. Asimismo, se profundiza en los elementos básicos de la programación, las estructuras de control y de datos, y la programación modular, incluyendo el manejo de errores, parámetros y pruebas de escritorio, con el fin de fortalecer la construcción de soluciones claras, eficientes y verificables.
    .row.justify-content-center
      .col-lg-10.mb-5.bgs.p-4.brad
        figure
          img(src="@/assets/curso/sintesis.svg" alt="En la síntesis se ilustra un mapa conceptual donde se presenta la estructura del componente formativo mediante la interconexión de conceptos clave, desde la lógica y el enfoque algorítmico hasta el diseño y representación de algoritmos. Se destacan los elementos de la programación, las estructuras de control y de datos, así como la modularización, los errores y las pruebas, permitiendo comprender cómo cada tema se articula para construir algoritmos claros, ordenados y funcionales.")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/bullets/icono-pdf.svg" alt="")
          .anexo__texto
            p Anexo. Síntesis
</template>

<script>
export default {
  name: 'Sintesis',
  mounted() {
    this.$nextTick(() => this.$aosRefresh())
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

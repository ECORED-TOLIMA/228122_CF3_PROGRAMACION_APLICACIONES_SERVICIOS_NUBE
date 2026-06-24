<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 4
      h1 Estructuras de control y estructuras de datos
    .row.justify-content-center.align-items-stretch.cajon.C04.mb-4.g-0
      .col-lg-7.col-12.order-lg-2.order-2
        .cajon.C04.p-4.h-100.w-100
          p.mb-4 Constituyen elementos fundamentales en la programación, ya que permiten definir el comportamiento de un algoritmo y organizar la información de manera eficiente. Su correcta implementación garantiza que las soluciones desarrolladas respondan de forma lógica a diferentes condiciones y que los datos sean gestionados adecuadamente durante la ejecución del programa.
          .row.mb-0
            .col-lg-2.d-none.d-lg-block
              figure
                img(src='@/assets/curso/temas/tema4/img2.svg', alt='Imagen decorativa')
            .col-lg-10.col-12
              p.mb-0 Las estructuras de control determinan el flujo de ejecución de las instrucciones, permitiendo establecer secuencias, tomar decisiones y repetir procesos según sea necesario. Por su parte, las estructuras de datos facilitan el almacenamiento y organización de la información, permitiendo manipular conjuntos de datos de forma estructurada.          
      .col-lg-5.col-8.col-md-6.order-lg-1.order-1.mb-lg-0.mb-4
        figure
          img(src='@/assets/curso/temas/tema4/img1.png', alt='Imagen decorativa')
    .row.justify-content-center.mb-4
      .col.col-12
        p.mb-4(data-aos="fade-down") A continuación, se presentan las principales estructuras utilizadas en la programación y sus componentes esenciales:
        .row.justify-content-center.mb-0(data-aos="flip-up")
          .col.col-12
            .titulo-sexto.color-acento-contenido
              h5 Figura 3.
              span Clasificación de las estructuras de control y datos en programación
          .row.justify-content-center
            .d-none.d-lg-block.mb-4
                img(src='@/assets/curso/temas/tema4/img3.svg', alt='Figura 3 que presenta un esquema de las estructuras de programación, donde se distinguen las estructuras de control, incluyendo la estructura secuencial, las estructuras condicionales y las estructuras de iteración y las estructuras de datos, representadas por vectores y matrices, mostrando de forma jerárquica la organización básica de los programas.')
            .d-block.d-lg-none
                img(src='@/assets/curso/temas/tema4/img3_1.svg', alt='Figura 3 que presenta un esquema de las estructuras de programación, donde se distinguen las estructuras de control, incluyendo la estructura secuencial, las estructuras condicionales y las estructuras de iteración y las estructuras de datos, representadas por vectores y matrices, mostrando de forma jerárquica la organización básica de los programas.')
    p.mb-4(data-aos="fade-down") Las estructuras de programación se organizan en dos grandes grupos:
    .row.justify-content-center.mb-4
      .col.col-lg-6.col-12.mb-4.mb-lg-0(data-aos="fade-left")
        .tarjeta-avatar-b
          .tarjeta-avatar-b__img
            .col-lg-12(data-aos="flip-up")
              img(src='@/assets/curso/temas/tema4/img4.svg' alt="Imagen decorativa")
          .tarjeta.tarjeta--C04.px-5.py-3
            .p-4
              h4 Estructuras de control
              p.mb-0 Comprenden la ejecución secuencial de instrucciones, las estructuras condicionales para la toma de decisiones según condiciones específicas y las estructuras repetitivas que permiten ejecutar procesos de forma iterativa.
      .col.col-lg-6.col-12.mb-4.mb-lg-0(data-aos="fade-left")
        .tarjeta-avatar-b
          .tarjeta-avatar-b__img
            .col-lg-12(data-aos="flip-up")
              img(src='@/assets/curso/temas/tema4/img5.svg' alt="Imagen decorativa")
          .tarjeta.tarjeta--C04.px-5.py-3
            .p-4
              h4 Estructuras de datos
              p.mb-0 Facilitan el almacenamiento y la organización de múltiples valores, como los vectores y las matrices, permitiendo un acceso ordenado y eficiente a la información.
              br
    .row.justify-content-center.align-items-center.mb-0
      .col.col-lg-auto.col-6.col-md-4.order-lg-1.order-1.mb-lg-0.mb-3
        figure
          img(src='@/assets/curso/temas/tema4/img6.svg', alt='Imagen decorativa')
      .col.col-lg-9.col-12.order-lg-2.order-2
        .cajon.cajon.C01.px-4.py-3
          p.mb-0(data-aos="fade-down") El dominio de estas estructuras permite desarrollar algoritmos más dinámicos, organizados y eficientes, facilitando la resolución de problemas y el manejo adecuado de la información dentro de los programas.
    
    Separador
    #t_4_1.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 4.1 Estructura secuencial
    .bloque-texto-g.C01.bloque-texto-g--inverso.p-3.p-sm-4.p-md-5.mb-4(data-aos="flip-up")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema4/img7.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0(data-aos="fade-down") Es la forma más básica de organización en la programación, ya que establece que las instrucciones se ejecutan una tras otra en el mismo orden en que han sido definidas. Esta estructura permite desarrollar algoritmos claros y predecibles, donde cada paso depende directamente del anterior, garantizando un flujo lógico continuo sin interrupciones ni decisiones intermedias.
    p(data-aos="fade-down") Su aplicación es fundamental en la construcción de soluciones simples, en las que no se requieren evaluaciones de condiciones ni repeticiones de procesos. A través de la estructura secuencial, se logra organizar de manera ordenada la entrada de datos, el procesamiento de la información y la generación de resultados.
    p.mb-4(data-aos="fade-down") Estas son las actividades principales en una estructura secuencial:
    .row.justify-content-center.mb-4(data-aos="flip-up")
      .col.col-12
        .tarjeta--container.row
          .col-xl.col-lg-6.tarjeta.tarjeta--C01.p-5
            .row.justify-content-center.mb-3
              .col-lg-6.col-4
                figure(data-aos="fade-up")
                  img(src='@/assets/curso/temas/tema4/img8.svg', alt='Imagen decorativa')(style="width: 85%")
            h4.text-center Entrada de datos
            p.mb-5(data-aos="fade-down") Consiste en la recolección de la información necesaria para ejecutar el algoritmo, ya sea mediante lectura de datos o asignación inicial de valores.
          .col-xl.col-lg-6.tarjeta.cajon.C01.p-5
            .row.justify-content-center.mb-3
              .col-lg-6.col-4
                figure(data-aos="fade-up")
                  img(src='@/assets/curso/temas/tema4/img9.svg', alt='Imagen decorativa')(style="width: 85%")
            h4.text-center Procesamiento
            p.mb-5(data-aos="fade-down") Corresponde a la ejecución de operaciones o cálculos que transforman los datos de entrada en resultados, siguiendo un orden lógico definido.
            br
          .col-xl.col-lg-6.tarjeta.cajon.C02.p-5
            .row.justify-content-center.mb-3
              .col-lg-6.col-4
                figure(data-aos="fade-up")
                  img(src='@/assets/curso/temas/tema4/img10.svg', alt='Imagen decorativa')(style="width: 85%")
            h4.text-center Salida de resultados
            p.mb-5(data-aos="fade-down") Implica la presentación de la información obtenida, ya sea en pantalla, archivo u otro medio, permitiendo evidenciar el resultado del proceso.
    p.mb-0(data-aos="fade-down") Esta estructura permite construir algoritmos organizados y fáciles de entender, siendo la base para el desarrollo de estructuras más complejas dentro de la programación.
    
    Separador
    #t_4_2.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 4.2 Estructuras condicionales
    .row.justify-content-center.mb-4
      .col.col-lg-5.col-8.col-md-6.order-lg-1.order-1.mb-lg-0.mb-3
        figure
          img(src='@/assets/curso/temas/tema4/img11.png', alt='Imagen decorativa')
      .col.col-lg-7.col-12.order-lg-2.order-2
        p.mb-4(data-aos="fade-down") Estas estructuras hacen posible que un algoritmo tome decisiones durante su ejecución mediante la evaluación de condiciones específicas, determinando así las acciones que deben realizarse. Aportan flexibilidad al programa, ya que el flujo de ejecución puede modificarse según se cumplan o no ciertas condiciones lógicas, adaptando el comportamiento del algoritmo a distintos escenarios y necesidades del problema.
        .cajon.color-primario.p-4
          p.mb-0(data-aos="fade-down") Su utilización es fundamental cuando una solución requiere analizar diferentes escenarios y ejecutar instrucciones distintas en función de los resultados obtenidos. De esta manera, se logra que el algoritmo responda de forma dinámica a los datos de entrada y a las situaciones planteadas.
    p.mb-4(data-aos="fade-down") Así como las secuenciales, estas estructuras también tienen actividades principales:
    .row.justify-content-center.mb-4
      .col.col-lg-4.col-12.col-lg.mb-4.mb-lg-0(data-aos="flip-up")
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema4/img12.svg' alt='AvatarTop')
          .tarjeta.tarjeta--C02(style= "width: 100%")
            .p-4(data-aos="fade-down")
              h5.text-center Evaluación de condiciones
              p.text-center Consiste en analizar una expresión lógica que puede resultar verdadera o falsa, determinando el camino que seguirá el algoritmo.
      .col.col-lg-4.col-12.col-lg.mb-4.mb-lg-0(data-aos="flip-up")
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema4/img13.svg' alt='AvatarTop')
          .tarjeta.tarjeta--C02(style= "width: 100%")
            .p-4(data-aos="fade-down")
              h5.text-center Toma de decisiones
              p.text-center Permite seleccionar entre una o varias alternativas de ejecución, utilizando estructuras como si... entonces... sino.
      .col.col-lg-4.col-12.mb-lg-0(data-aos="flip-up")
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema4/img14.svg' alt='AvatarTop')
          .tarjeta.tarjeta--C02(style= "width: 100%")
            .p-4(data-aos="fade-down")
              h5.text-center Ejecución de bloques de instrucciones
              p.text-center Se realizan acciones específicas dependiendo del resultado de la condición evaluada, asegurando que el algoritmo actúe de acuerdo con la lógica definida.
    .row.justify-content-center.mb-0
      .col.col-lg-10.col-12
        .cajon.cajon.C05.px-4.py-3
          p.mb-0(data-aos="fade-down") La correcta implementación de estructuras condicionales permite desarrollar algoritmos más inteligentes y adaptativos, facilitando la resolución de problemas que requieren análisis, comparación y toma de decisiones dentro del proceso de programación.
    
    Separador
    #t_4_3.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 4.3 Estructuras de iteración o repetitivas (for, while)
    .row.justify-content-center.mb-4
      .col.col-lg-5.col-8.col-md-6.order-lg-2.order-1.mb-lg-0.mb-3
        figure
          img(src='@/assets/curso/temas/tema4/img15.svg', alt='Imagen decorativa')
      .col.col-lg-7.col-12.order-lg-1.order-2
        p.mb-4(data-aos="fade-down") Permiten ejecutar un conjunto de instrucciones varias veces, de acuerdo con una condición o un número determinado de repeticiones. Estas estructuras son esenciales en la programación, ya que facilitan la automatización de procesos y evitan la repetición innecesaria de código, haciendo las soluciones más eficientes y organizadas.
        .cajon.color-primario.p-4.mb-4
          p.mb-0(data-aos="fade-down") Su aplicación es fundamental cuando se requiere procesar datos de forma continua, realizar cálculos repetitivos o recorrer conjuntos de información. A través de estructuras como for y while, el algoritmo puede controlar la cantidad de veces que se ejecuta un bloque de instrucciones, garantizando precisión en el resultado.
        p.mb-0(data-aos="fade-down") Las actividades principales en el uso de estructuras de iteración son:
    .row.justify-content-center.align-items-center.px-3.mb-4(data-aos="flip-up")
      .col-lg-6.col-12.mb-md-0.order-lg-2.order-2.mb-lg-0
        LineaTiempoD.color-acento-botones.especial
          .row(numero="1" titulo="Definición de la condición")
            .col-12.mb-4.mb-md-0
              ul.lista-ul.mb-0
                li.mb-0
                  i.lista-ul__vineta
                  p Establecimiento del criterio que controla la repetición.
                li.mb-0
                  i.lista-ul__vineta
                  p Puede ser una condición lógica (while) o un rango (for).
                li.mb-0
                  i.lista-ul__vineta
                  p Inicialización de variables de control.
          .row(numero="2" titulo="Ejecución del ciclo")
            .col-12.mb-4.mb-md-0
              ul.lista-ul.mb-0
                li.mb-0
                  i.lista-ul__vineta
                  p Desarrollo de las instrucciones dentro del ciclo.
                li.mb-0
                  i.lista-ul__vineta
                  p Procesamiento de datos en cada iteración.
                li.mb-0
                  i.lista-ul__vineta
                  p Aplicación de operaciones definidas en el algoritmo.
          .row(numero="3" titulo="Actualización de variables")
            .col-12.mb-4.mb-md-0
              ul.lista-ul.mb-0
                li.mb-0
                  i.lista-ul__vineta
                  p Modificación de contadores o variables de control.
                li.mb-0
                  i.lista-ul__vineta
                  p Ajuste de la condición para avanzar en el ciclo.
                li.mb-0
                  i.lista-ul__vineta
                  p Preparación para la siguiente iteración.
          .row(numero="4" titulo="Finalización del ciclo")
            .col-12.mb-4.mb-md-0
              ul.lista-ul.mb-0
                li.mb-0
                  i.lista-ul__vineta
                  p Evaluación de la condición de salida.
                li.mb-0
                  i.lista-ul__vineta
                  p Terminación del ciclo cuando no se cumple la condición.
                li.mb-0
                  i.lista-ul__vineta
                  p Continuación del flujo normal del algoritmo.
      .col-lg-4.col-sm-4.col-5.order-lg-1.order-1.mb-lg-0.mb-4.d-none.d-lg-block
        figure
          img(src='@/assets/curso/temas/tema4/img16.png', alt='Imagen decorativa')
    .row.justify-content-center.mb-0
      .col.col-lg-10.col-12
        .cajon.cajon.C05.px-4.py-3
          p.mb-0(data-aos="fade-down") El uso adecuado de las estructuras de iteración permite desarrollar algoritmos más dinámicos y eficientes, optimizando el procesamiento de información y facilitando la solución de problemas que requieren repetición de tareas dentro de la programación.
    
    Separador
    #t_4_4.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 4.4 Estructuras de datos básicas: vectores y matrices
    .row.justify-content-center.mb-4
      .col.col-lg-4.col-8.col-md-6.order-lg-1.order-1.mb-lg-0.mb-3
        figure
          img(src='@/assets/curso/temas/tema4/img17.png', alt='Imagen decorativa')
      .col.col-lg-8.col-12.order-lg-2.order-2
        p.mb-4(data-aos="fade-down") Permiten organizar y almacenar información de manera estructurada dentro de un programa, facilitando su acceso, manipulación y procesamiento. Su uso es fundamental cuando se requiere trabajar con múltiples datos relacionados, optimizando la gestión de la información y mejorando la eficiencia de los algoritmos.
        .cajon.color-secundario.p-4
          p.mb-0(data-aos="fade-down") Estas estructuras permiten representar conjuntos de datos de forma ordenada, lo que facilita la realización de operaciones como recorridos, búsquedas y cálculos. Su correcta implementación contribuye a desarrollar soluciones más organizadas, escalables y adaptables a diferentes contextos.
    p.mb-4(data-aos="fade-down") Sus actividades principales son:
    .tarjeta.tarjeta--BG02.p-md-5.p-4.mb-0(data-aos="flip-down").mb-4
      .tarjeta.tarjeta--blanca.p-4.p-md-5
        PasosB.color-acento-botones 
          .row.justify-content-center.p-4(titulo="")
            .col-lg-6.order-lg-2.order-2
              h4 Definición de la estructura de datos
              p Selección del tipo de estructura adecuada según la necesidad del problema, ya sea un vector (una dimensión) o una matriz (dos dimensiones).
              ul.lista-ul.mb-0
                li.mb-0
                  i.lista-ul__vineta
                  p.mb-0 Identificación del tamaño o dimensión requerida.
                li.mb-0
                  i.lista-ul__vineta
                  p Asignación de memoria para almacenar los datos.
            .col-lg-6.col-10.order-lg-1.order-1.mb-lg-0.mb-4
              figure
                img(src='@/assets/curso/temas/tema4/img18.png', alt='Imagen decorativa')
          .row.justify-content-center.p-4(titulo="")
            .col-lg-6.order-lg-2.order-2
              h4 Ingreso de datos
              p Incorporación de valores dentro de la estructura, ya sea de forma manual o mediante procesos automáticos.
              ul.lista-ul.mb-0
                li.mb-0
                  i.lista-ul__vineta
                  p.mb-0 Captura de información en posiciones específicas.
                li.mb-0
                  i.lista-ul__vineta
                  p Validación de los datos ingresados.
            .col-lg-6.col-10.order-lg-1.order-1.mb-lg-0.mb-4
              figure
                img(src='@/assets/curso/temas/tema4/img19.png', alt='Imagen decorativa')
          .row.justify-content-center.p-4(titulo="")
            .col-lg-6.order-lg-2.order-2
              h4 Procesamiento de la información
              p Manipulación de los datos almacenados para realizar operaciones específicas.
              ul.lista-ul.mb-0
                li.mb-0
                  i.lista-ul__vineta
                  p.mb-0 Recorrido de los elementos mediante ciclos.
                li.mb-0
                  i.lista-ul__vineta
                  p Aplicación de cálculos o transformaciones.
            .col-lg-6.col-10.order-lg-1.order-1.mb-lg-0.mb-4
              figure
                img(src='@/assets/curso/temas/tema4/img20.png', alt='Imagen decorativa')
          .row.justify-content-center.p-4(titulo="")
            .col-lg-6.order-lg-2.order-2
              h4 Obtención de resultados
              p Extracción y presentación de la información procesada.
              ul.lista-ul.mb-0
                li.mb-0
                  i.lista-ul__vineta
                  p.mb-0 Consulta de valores almacenados.
                li.mb-0
                  i.lista-ul__vineta
                  p Visualización de resultados en diferentes formatos.
            .col-lg-6.col-10.order-lg-1.order-1.mb-lg-0.mb-4
              figure
                img(src='@/assets/curso/temas/tema4/img21.png', alt='Imagen decorativa')
    .row.justify-content-center.mb-0
      .col.col-lg-10.col-12
        .cajon.cajon.C05.px-4.py-3
          p.mb-0(data-aos="fade-down") El uso adecuado de vectores y matrices permite estructurar la información de manera lógica y eficiente, facilitando la resolución de problemas que requieren el manejo de grandes volúmenes de datos dentro de la programación.
</template>

<script>
export default {
  name: 'Tema4',
  mounted() {
    this.$nextTick(() => this.$aosRefresh())
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

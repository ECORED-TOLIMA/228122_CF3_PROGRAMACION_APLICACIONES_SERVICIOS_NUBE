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
          p.mb-4 Las estructuras de control y las estructuras de datos constituyen elementos fundamentales en la programación, ya que permiten definir el comportamiento de un algoritmo y organizar la información de manera eficiente. Su correcta implementación garantiza que las soluciones desarrolladas respondan de forma lógica a diferentes condiciones y que los datos sean gestionados adecuadamente durante la ejecución del programa.
          .row.mb-0
            .col-lg-2.d-none.d-lg-block
              figure
                img(src='@/assets/curso/temas/tema4/img2.svg', alt='')
            .col-lg-10.col-12
              p.mb-0 Las estructuras de control determinan el flujo de ejecución de las instrucciones, permitiendo establecer secuencias, tomar decisiones y repetir procesos según sea necesario. Por su parte, las estructuras de datos facilitan el almacenamiento y la organización de la información, permitiendo manipular conjuntos de datos de forma estructurada.
      .col-lg-5.col-8.col-md-6.order-lg-1.order-1.mb-lg-0.mb-4
        figure
          img(src='@/assets/curso/temas/tema4/img1.png', alt='')
        
    p.mb-4(data-aos="fade-down") Las estructuras utilizadas en programación pueden clasificarse en dos grandes grupos:

    .row.justify-content-center.mb-4(data-aos="flip-up")
      .col.col-12
        .tarjeta--container.row
          .col-xl.col-lg-6.tarjeta.tarjeta--C01.p-5
            .row.justify-content-center.mb-3
              .col-lg-4.col-4
                figure(data-aos="fade-up")
                  img(src='@/assets/curso/temas/tema4/img4.svg', alt='')(style="width: 85%")
            h4.text-center Estructuras de control
            p.mb-0(data-aos="fade-down") Comprenden la ejecución secuencial de instrucciones, las estructuras condicionales para la toma de decisiones según condiciones específicas y las estructuras repetitivas que permiten ejecutar procesos de forma iterativa. Estas estructuras hacen posible controlar el comportamiento de un algoritmo de acuerdo con los requerimientos de la solución planteada.
          .col-xl.col-lg-6.tarjeta.cajon.C02.p-5
            .row.justify-content-center.mb-3
              .col-lg-4.col-4
                figure(data-aos="fade-up")
                  img(src='@/assets/curso/temas/tema4/img5.svg', alt='')(style="width: 85%")
            h4.text-center Estructuras de datos
            p.mb-0(data-aos="fade-down") Facilitan el almacenamiento y la organización de múltiples valores, como los vectores y las matrices, permitiendo un acceso ordenado y eficiente a la información. Su utilización contribuye al manejo adecuado de grandes cantidades de datos y favorece la construcción de soluciones más organizadas y escalables.

    .row.justify-content-center.align-items-center.mb-0
      .col.col-lg-auto.col-6.col-md-4.order-lg-1.order-1.mb-lg-0.mb-3
        figure
          img(src='@/assets/curso/temas/tema4/img6.svg', alt='')
      .col.col-lg-9.col-12.order-lg-2.order-2
        .cajon.cajon.C01.px-4.py-3
          p.mb-0(data-aos="fade-down") La adecuada selección y aplicación de estas estructuras permite desarrollar algoritmos más dinámicos, organizados y eficientes, facilitando la resolución de problemas y el manejo adecuado de la información dentro de los programas.
    
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
                  img(src='@/assets/curso/temas/tema4/img8.svg', alt='')(style="width: 85%")
            h4.text-center Entrada de datos
            p.mb-5(data-aos="fade-down") Consiste en la recolección de la información necesaria para ejecutar el algoritmo, ya sea mediante lectura de datos o asignación inicial de valores.
          .col-xl.col-lg-6.tarjeta.cajon.C01.p-5
            .row.justify-content-center.mb-3
              .col-lg-6.col-4
                figure(data-aos="fade-up")
                  img(src='@/assets/curso/temas/tema4/img9.svg', alt='')(style="width: 85%")
            h4.text-center Procesamiento
            p.mb-5(data-aos="fade-down") Corresponde a la ejecución de operaciones o cálculos que transforman los datos de entrada en resultados, siguiendo un orden lógico definido.
            br
          .col-xl.col-lg-6.tarjeta.cajon.C02.p-5
            .row.justify-content-center.mb-3
              .col-lg-6.col-4
                figure(data-aos="fade-up")
                  img(src='@/assets/curso/temas/tema4/img10.svg', alt='')(style="width: 85%")
            h4.text-center Salida de resultados
            p.mb-5(data-aos="fade-down") Implica la presentación de la información obtenida, ya sea en pantalla, archivo u otro medio, permitiendo evidenciar el resultado del proceso.
    p.mb-0(data-aos="fade-down") Esta estructura permite construir algoritmos organizados y fáciles de entender, siendo la base para el desarrollo de estructuras más complejas dentro de la programación.
    
    Separador
    #t_4_2.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 4.2 Estructuras condicionales
    .row.justify-content-center.mb-4
      .col.col-lg-5.col-8.col-md-6.order-lg-1.order-1.mb-lg-0.mb-3
        figure
          img(src='@/assets/curso/temas/tema4/img11.png', alt='')
      .col.col-lg-7.col-12.order-lg-2.order-2
        p.mb-4(data-aos="fade-down") Estas estructuras hacen posible que un algoritmo tome decisiones durante su ejecución mediante la evaluación de condiciones específicas, determinando así las acciones que deben realizarse. Aportan flexibilidad al programa, ya que el flujo de ejecución puede modificarse según se cumplan o no ciertas condiciones lógicas, adaptando el comportamiento del algoritmo a distintos escenarios y necesidades del problema.
        .cajon.color-primario.p-4
          p.mb-0(data-aos="fade-down") Su utilización es fundamental cuando una solución requiere analizar diferentes escenarios y ejecutar instrucciones distintas en función de los resultados obtenidos. De esta manera, se logra que el algoritmo responda de forma dinámica a los datos de entrada y a las situaciones planteadas.
    p.mb-4(data-aos="fade-down") Así como las secuenciales, estas estructuras también tienen actividades principales:
    .row.justify-content-center.mb-4
      .col.col-lg-4.col-12.col-lg.mb-4.mb-lg-0(data-aos="flip-up")
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema4/img12.svg' alt='')
          .tarjeta.tarjeta--C02(style= "width: 100%")
            .p-4(data-aos="fade-down")
              h5.text-center Evaluación de condiciones
              p.text-center Consiste en analizar una expresión lógica que puede resultar verdadera o falsa, determinando el camino que seguirá el algoritmo.
      .col.col-lg-4.col-12.col-lg.mb-4.mb-lg-0(data-aos="flip-up")
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema4/img13.svg' alt='')
          .tarjeta.tarjeta--C02(style= "width: 100%")
            .p-4(data-aos="fade-down")
              h5.text-center Toma de decisiones
              p.text-center Permite seleccionar entre una o varias alternativas de ejecución, utilizando estructuras como si... entonces... sino.
      .col.col-lg-4.col-12.mb-lg-0(data-aos="flip-up")
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema4/img14.svg' alt='')
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
          img(src='@/assets/curso/temas/tema4/img15.svg', alt='')
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
              p.mb-0 Consiste en establecer el criterio que controla la repetición del ciclo. Esta condición puede corresponder a una expresión lógica, como en las estructuras while, o a un rango definido de repeticiones, como ocurre en las estructuras for. En esta etapa también se realiza la inicialización de las variables de control necesarias para el funcionamiento del ciclo.
          .row(numero="2" titulo="Ejecución del ciclo")
            .col-12.mb-4.mb-md-0
              p.mb-0 Corresponde al desarrollo de las instrucciones que se ejecutan de forma repetitiva durante cada iteración. En esta fase se realiza el procesamiento de datos y la aplicación de las operaciones definidas dentro del algoritmo.
          .row(numero="3" titulo="Actualización de variables")
            p.mb-0 Implica la modificación de contadores o variables de control utilizadas para gestionar la repetición. Esta actualización permite ajustar la condición del ciclo y preparar la siguiente iteración.
          .row(numero="4" titulo="Finalización del ciclo")
            p.mb-0 Se produce cuando la condición de repetición deja de cumplirse. En este momento se termina la ejecución del ciclo y el algoritmo continúa con el flujo normal de las instrucciones restantes.
      .col-lg-4.col-sm-4.col-5.order-lg-1.order-1.mb-lg-0.mb-4.d-none.d-lg-block
        figure
          img(src='@/assets/curso/temas/tema4/img16.png', alt='')
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
          img(src='@/assets/curso/temas/tema4/img17.png', alt='')
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
                img(src='@/assets/curso/temas/tema4/img18.png', alt='')
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
                img(src='@/assets/curso/temas/tema4/img19.png', alt='')
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
                img(src='@/assets/curso/temas/tema4/img20.png', alt='')
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
                img(src='@/assets/curso/temas/tema4/img21.png', alt='')
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

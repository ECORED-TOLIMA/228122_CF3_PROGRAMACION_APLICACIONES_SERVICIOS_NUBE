<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 3
      h1 Elementos básicos de la programación
    .row.justify-content-center.mb-4
      .col.col-lg-3.col-8.col-md-6.order-lg-1.order-1.mb-lg-0.mb-3
        figure
          img(src='@/assets/curso/temas/tema3/img1.svg', alt='')
      .col.col-lg-9.col-12.order-lg-2.order-2
        .cajon.color-primario.px-4.py-3.mb-4
          p.mb-0(data-aos="fade-down") Los elementos básicos de la programación constituyen el conjunto de fundamentos que permiten estructurar soluciones de manera lógica, organizada y funcional dentro del desarrollo de <em>software</em>. Estos elementos proporcionan las bases necesarias para la construcción de algoritmos implementables en un lenguaje de programación, garantizando claridad, precisión y control en el manejo de la información.
        .row.mb-0
          .col-lg-auto.d-none.d-lg-block
            figure
              img(src='@/assets/curso/temas/tema3/img2.svg', alt='')
          .col-lg-10.col-12
            p.mb-0 Su adecuada comprensión es esencial para establecer instrucciones correctas, manipular datos y definir comportamientos dentro de un programa. Estos componentes no solo permiten escribir código, sino también comprender cómo se procesan los datos y cómo se ejecutan las operaciones en un entorno computacional.
    p.mb-4(data-aos="fade-down") Entre los elementos fundamentales de la programación se encuentran:
    .row.justify-content-center.align-items-center.mb-4(data-aos="flip-up")
      SlyderF.color-acento-botones(columnas="col-lg-6 col-xl-4")
        .tarjeta.BG01.p-4
          .row.justify-content-center.mb-3
            .col-lg-6.col-sm-4.col-6
              img(src='@/assets/curso/temas/tema3/img3.svg' alt='')
          h4.text-center Identificadores
          p.text-center.mb-5 Nombres asignados a variables, funciones u otros elementos, que permiten su reconocimiento dentro del programa.
          br
        .tarjeta.BG01.p-4
          .row.justify-content-center.mb-3
            .col-lg-6.col-sm-4.col-6
              img(src='@/assets/curso/temas/tema3/img4.svg' alt='')
          h4.text-center Palabras reservadas
          p.text-center Términos propios del lenguaje de programación que tienen un significado específico y no pueden ser utilizados como identificadores.
        .tarjeta.BG01.p-4
          .row.justify-content-center.mb-3
            .col-lg-6.col-sm-4.col-6
              img(src='@/assets/curso/temas/tema3/img5.svg' alt='')
          h4.text-center Variables y constantes
          p.text-center Estructuras que permiten almacenar datos; las variables pueden cambiar su valor, mientras que las constantes permanecen fijas.
        .tarjeta.BG01.p-4
          .row.justify-content-center.mb-3
            .col-lg-6.col-sm-4.col-6
              img(src='@/assets/curso/temas/tema3/img6.svg' alt='')
          h4.text-center Contadores y acumuladores
          p.text-center Tipos especiales de variables utilizadas para contar eventos o acumular resultados durante la ejecución de un algoritmo.
        .tarjeta.BG01.p-4
          .row.justify-content-center.mb-3
            .col-lg-6.col-sm-4.col-6
              img(src='@/assets/curso/temas/tema3/img7.svg' alt='')
          h4.text-center Operadores
          p.text-center Símbolos que permiten realizar operaciones matemáticas, lógicas o relacionales sobre los datos.
        .tarjeta.BG01.p-4
          .row.justify-content-center.mb-3
            .col-lg-6.col-sm-4.col-6
              img(src='@/assets/curso/temas/tema3/img8.svg' alt='')
          h4.text-center Jerarquía de operadores
          p.text-center Define el orden en el que se ejecutan las operaciones dentro de una expresión.
    .row.justify-content-center.align-items-center.mb-0
      .col.col-lg-auto.col-6.col-md-4.order-lg-1.order-1.mb-lg-0.mb-3
        figure
          img(src='@/assets/curso/temas/tema3/img9.svg', alt='')
      .col.col-lg-9.col-12.order-lg-2.order-2
        .cajon.cajon.C01.px-4.py-3
          p.mb-0(data-aos="fade-down") El dominio de estos elementos permite desarrollar programas estructurados, comprensibles y eficientes, facilitando la correcta implementación de algoritmos y el control del flujo de ejecución dentro de cualquier lenguaje de programación.
    
    Separador
    #t_3_1.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 3.1 Identificadores y palabras reservadas
    p.mb-4(data-aos="fade-down") Los identificadores y las palabras reservadas constituyen elementos esenciales en la escritura de programas, ya que permiten definir, organizar y dar significado a las instrucciones dentro de un lenguaje de programación. Su correcto uso facilita la comprensión del código, mejora su legibilidad y evita errores durante el proceso de desarrollo. Su diferencia radica en:
    .row.justify-content-center.mb-4(data-aos="flip-up")
      .col.col-12
        .tarjeta--container.row
          .col-xl.col-lg-6.tarjeta.tarjeta--C01.p-5
            .row.justify-content-center.mb-3
              .col-lg-5.col-4
                figure(data-aos="fade-up")
                  img(src='@/assets/curso/temas/tema3/img10.svg', alt='')(style="width: 85%")
            h4.text-center Identificadores
            p.mb-0(data-aos="fade-down") Corresponden a los nombres asignados a variables, funciones, constantes u otros elementos del programa. Su correcta definición permite referenciar, almacenar y manipular datos de forma clara y organizada. Deben seguir reglas sintácticas del lenguaje (como iniciar con letra y evitar caracteres especiales) y utilizarse con criterios de legibilidad para facilitar la comprensión y el mantenimiento del código.
          .col-xl.col-lg-6.tarjeta.cajon.C02.p-5
            .row.justify-content-center.mb-3
              .col-lg-5.col-4
                figure(data-aos="fade-up")
                  img(src='@/assets/curso/temas/tema3/img11.svg', alt='')(style="width: 85%")
            h4.text-center Palabras reservadas
            p.mb-0(data-aos="fade-down") Son términos propios del lenguaje de programación que poseen un significado predefinido y no pueden emplearse como identificadores. Cumplen funciones específicas dentro de la estructura del programa, como definir tipos de datos, controlar el flujo de ejecución o declarar estructuras. Su correcta aplicación permite que el programa sea interpretado correctamente por el compilador o intérprete y garantiza la coherencia lógica del código.
    .row.justify-content-center.mb-4
      .col.col-12
        p.mb-0(data-aos="fade-down") Para garantizar un uso adecuado, es importante tener en cuenta las siguientes consideraciones:
    .row.justify-content-center.align-items-center.px-3.mb-4(data-aos="flip-up")
      .col-lg-6.col-12.mb-md-0.order-lg-1.order-2.mb-lg-0
        LineaTiempoD.color-acento-botones.especial
          .row(numero="A" titulo="Identificadores")
            .col-12.mb-4.mb-md-0
              p.mb-0 Deben ser claros, descriptivos y coherentes con la función que representan dentro del programa.
          .row(numero="B" titulo="Reglas de nomenclatura")
            .col-12.mb-4.mb-md-0
              p.mb-0 Los identificadores deben iniciar con una letra o guion bajo, no contener espacios y evitar caracteres especiales no permitidos.
          .row(numero="C" titulo="Uso de palabras reservadas")
            .col-12.mb-4.mb-md-0
              p.mb-0 No pueden emplearse como nombres de variables o funciones, ya que están destinadas a definir estructuras propias del lenguaje.
          .row(numero="D" titulo="Legibilidad del código")
            .col-12.mb-4.mb-md-0
              p.mb-0 Se recomienda utilizar nombres significativos que faciliten la comprensión del programa por parte de otros desarrolladores.
          .row(numero="E" titulo="Consistencia")
            .col-12.mb-4.mb-md-0
              p.mb-0 Mantener un estilo uniforme en la escritura de identificadores a lo largo del código.
      .col-lg-4.col-sm-4.col-5.order-lg-2.order-1.mb-lg-0.mb-4.d-none.d-lg-block
        figure
          img(src='@/assets/curso/temas/tema3/img12.png', alt='')
    .row.justify-content-center.mb-0
      .col.col-lg-10.col-12
        .cajon.cajon.C05.px-4.py-3
          p.mb-0(data-aos="fade-down") El manejo adecuado de identificadores y palabras reservadas permite construir programas más organizados, comprensibles y libres de ambigüedades, contribuyendo a una mejor calidad en el desarrollo de <em>software</em>.
    
    Separador
    #t_3_2.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 3.2 Variables, constantes, contadores y acumuladores
    .row.justify-content-center.mb-4
      .col.col-lg-5.col-8.col-md-6.order-lg-1.order-1.mb-lg-0.mb-3
        figure
          img(src='@/assets/curso/temas/tema3/img13.png', alt='')
      .col.col-lg-7.col-12.order-lg-2.order-2
        .row.mb-4
          .col-lg-auto.d-none.d-lg-block
            figure
              img(src='@/assets/curso/temas/tema3/img14.svg', alt='')
          .col-lg-9.col-12
            p.mb-0 Son elementos fundamentales en la programación, ya que permiten gestionar y manipular la información durante la ejecución de un algoritmo. Su adecuada utilización es clave para controlar el flujo de datos, realizar operaciones y obtener resultados coherentes dentro de una solución computacional.
        .cajon.cajon.color-secundario.p-4.mb-4
          p.mb-0(data-aos="fade-down") Estos elementos cumplen funciones específicas dentro del programa y facilitan la organización lógica de los datos, permitiendo almacenar, actualizar y procesar información de acuerdo con las necesidades del problema planteado.        
    p.mb-4(data-aos="fade-down") Para su correcta aplicación, se requiere considerar las siguientes características:
    .row.justify-content-center.mb-4(data-aos="flip-up")
      .col.col-12
        .titulo-sexto.color-acento-contenido
          h5 Tabla 2.
          span Elementos de almacenamiento y control de datos en programación
        .tabla-a.color-acento-contenido
          table
            thead
              tr
                th(data-aos="fade-down")(style= "width: 30%") Elemento
                th(data-aos="fade-down")(style= "width: 35%") Descripción
                th(data-aos="fade-down")(style= "width: 35%") Ejemplo
            tbody
              tr
                td(data-aos="fade-down")(style="background-color: #F0F8FF") Variables
                td(data-aos="fade-down")(style="background-color: #F0F8FF") Espacios de memoria que almacenan datos que pueden cambiar durante la ejecución del programa.
                td(data-aos="fade-down")(style="background-color: #F0F8FF") Una variable almacena la edad del usuario y cambia cuando se ingresa un nuevo valor.
              tr
                td(data-aos="fade-down") Constantes
                td(data-aos="fade-down") Valores fijos que no se modifican a lo largo del proceso, garantizando estabilidad en ciertas operaciones.
                td(data-aos="fade-down") El valor de IVA se define como constante para que no se modifique durante el cálculo.
              tr
                td(data-aos="fade-down")(style="background-color: #F0F8FF") Contadores
                td(data-aos="fade-down")(style="background-color: #F0F8FF") Variables utilizadas para llevar el registro del número de veces que ocurre un evento o se ejecuta una acción, generalmente incrementándose de forma secuencial.
                td(data-aos="fade-down")(style="background-color: #F0F8FF") Un contador registra cuántos estudiantes han sido procesados en un ciclo.
              tr
                td(data-aos="fade-down") Acumuladores
                td(data-aos="fade-down") Variables que permiten sumar o integrar valores de manera progresiva, almacenando resultados parciales durante la ejecución del algoritmo.
                td(data-aos="fade-down") Un acumulador suma las calificaciones para calcular el promedio final.
    .row.justify-content-center.mb-0
      .col.col-lg-4.col-8.col-md-6.order-lg-1.order-1.mb-lg-0.mb-3
        figure
          img(src='@/assets/curso/temas/tema3/img15.svg', alt='')
      .col.col-lg-6.col-12.order-lg-2.order-2
        p.mb-3(data-aos="fade-down") Estos elementos no solo almacenan información, sino que permiten estructurar el comportamiento del programa, facilitando la toma de decisiones y la repetición de procesos. Su uso adecuado contribuye a la construcción de soluciones más claras, eficientes y organizadas.
        .cajon.cajon.color-primario.p-4.mb-0
          p.mb-0(data-aos="fade-down") De esta manera, el manejo correcto de variables, constantes, contadores y acumuladores fortalece la lógica de programación, permitiendo desarrollar algoritmos funcionales y adaptables a diferentes contextos de aplicación.
    
    Separador
    #t_3_3.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 3.3 Tipos de datos (enteros, reales, booleanos)
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-6.order-lg-1.order-2
        .cajon.color-primario.p-4.mb-4
          p.mb-0 Los tipos de datos permiten clasificar la información que será utilizada dentro de un algoritmo o programa. Su función es definir la naturaleza de los valores que se almacenan y procesan, facilitando la realización de operaciones y garantizando la coherencia de los resultados obtenidos.
        p.mb-0 La identificación adecuada del tipo de dato es fundamental para representar correctamente la información y evitar errores durante el procesamiento. Cada tipo de dato posee características particulares que determinan la forma en que puede utilizarse dentro de una solución computacional.
      .col-lg-6.col-8.col-md-6.order-lg-2.order-1.mb-lg-0.mb-3
        figure
          img(src='@/assets/curso/temas/tema3/img16.png', alt='')
    .titulo.mb-4(data-aos="fade-left")
      img(src='@/assets/curso/ico.svg', alt='')
      h4 Clasificación de los tipos de datos básicos
    p.mb-4 A continuación, se presentan los tipos de datos más utilizados en la programación:
    .row.justify-content-center.mb-5(data-aos="flip-up")
      .col.col-12
        .titulo-sexto.color-acento-contenido
          h5 Tabla 3.
          span Clasificación de los tipos de datos básicos
        .tabla-a.color-acento-contenido
          table
            thead
              tr
                th(data-aos="fade-down")(style= "width: 30%") Tipo de dato
                th(data-aos="fade-down")(style= "width: 35%") Descripción
                th(data-aos="fade-down")(style= "width: 35%") Ejemplo
            tbody
              tr
                td(data-aos="fade-down")(style="background-color: #F0F8FF") Entero
                td(data-aos="fade-down")(style="background-color: #F0F8FF") Representa números sin parte decimal.
                td(data-aos="fade-down")(style="background-color: #F0F8FF") 10, -5, 0
              tr
                td(data-aos="fade-down") Real
                td(data-aos="fade-down") Representa números que contienen parte decimal.
                td(data-aos="fade-down") 3.14, -2.5
              tr
                td(data-aos="fade-down")(style="background-color: #F0F8FF") Booleano
                td(data-aos="fade-down")(style="background-color: #F0F8FF") Representa valores lógicos utilizados para evaluar condiciones.
                td(data-aos="fade-down")(style="background-color: #F0F8FF") Verdadero, Falso
              tr
                td(data-aos="fade-down") Carácter
                td(data-aos="fade-down") Representa un único símbolo, letra o número.
                td(data-aos="fade-down") A, 5, %
              tr
                td(data-aos="fade-down")(style="background-color: #F0F8FF") Cadena
                td(data-aos="fade-down")(style="background-color: #F0F8FF") Representa un conjunto de caracteres o texto.
                td(data-aos="fade-down")(style="background-color: #F0F8FF") Hola mundo


    
    .row.justify-content-center.align-items-strench.mb-4
      .col-lg-9.col-12.order-lg-2.order-2
        .titulo.mb-4(data-aos="fade-left")
          img(src='@/assets/curso/ico.svg', alt='')
          h4  Características de los tipos de datos
        p.mb-4(data-aos="fade-down") Cada tipo de dato cumple una función específica dentro de los algoritmos:
        
        ol.lista-ol--cuadro.lista-ol--separador.mb-0
          li
            .lista-ol--cuadro__vineta
              span.text-bold 1
            p.mb-0 #[b Entero]: utilizado para conteos, cantidades y operaciones que no requieren decimales.
          li
            .lista-ol--cuadro__vineta
              span.text-bold 2
            p.mb-0 #[b Real]: empleado en cálculos que requieren precisión decimal.
          li
            .lista-ol--cuadro__vineta
              span.text-bold 3
            p.mb-0 #[b Booleano]: utilizado en la evaluación de condiciones y toma de decisiones.
          li
            .lista-ol--cuadro__vineta
              span.text-bold 4
            p.mb-0 #[b Carácter]: permite representar símbolos individuales.
          li
            .lista-ol--cuadro__vineta
              span.text-bold 5
            p.mb-0 #[b Cadena]: facilita el manejo de palabras, frases y mensajes.
      .col-lg-3.col-8.col-md-6.order-lg-1.order-1.mb-lg-0.mb-4
        figure.mb-0
          img(src='@/assets/curso/temas/tema3/img18.png', alt='')


    .row.justify-content-center.align-items-strench.mb-4
      .col-lg-6.col-12.order-lg-1.order-2
        .row.justify-content-center.mb-4
          .col.col-12
            .titulo.mb-4(data-aos="fade-left")
              img(src='@/assets/curso/ico.svg', alt='')
              h4  Importancia del uso adecuado de tipos de datos
        p.mb-4(data-aos="fade-down") La correcta selección de los tipos de datos permite:

        ul.lista-ul--color.mt-4(data-aos="fade-down")
          li
            i.fas.fa-cloud-arrow-down
            p.mb-0 Representar adecuadamente la información.
          li
            i.fas.fa-cloud-arrow-down
            p.mb-0 Evitar errores durante el procesamiento.
          li
            i.fas.fa-cloud-arrow-down
            p.mb-0 Optimizar el uso de recursos.
          li
            i.fas.fa-cloud-arrow-down
            p.mb-0 Facilitar la comprensión y mantenimiento de los algoritmos.
          li
            i.fas.fa-cloud-arrow-down
            p.mb-0 Mejorar la calidad de las soluciones desarrolladas.

        p.mb-0(data-aos="fade-down") Como complemento a los conceptos abordados sobre tipos de datos, se recomienda revisar el siguiente video, donde se presenta un algoritmo básico que ejemplifica la definición de variables, la asignación de valores y la presentación de resultados, favoreciendo la comprensión práctica del uso de distintos tipos de datos dentro de un programa:
      .col-lg-4.col-8.col-md-6.order-lg-2.order-1.mb-lg-0.mb-4
        figure.mb-0
          img(src='@/assets/curso/temas/tema3/img19.svg', alt='')
    .row.justify-content-center.align-items-center           
      .col.col-lg-12
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/v4yGWb55qkk?si=mG38oNRpou4Eg21C" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    
    Separador
    #t_3_4.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 3.4 Operadores y jerarquía de operadores
    p.mb-4(data-aos="fade-down") Los operadores y la jerarquía de operadores constituyen elementos esenciales en la programación, ya que permiten realizar operaciones sobre los datos y definir el orden en que estas se ejecutan dentro de una expresión. Su correcta aplicación es fundamental para garantizar resultados precisos y evitar errores en la lógica de los algoritmos.
    .bloque-texto-g.C01.p-3.p-sm-4.p-md-5.mb-4(data-aos="flip-down")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema3/img20.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p Los operadores son símbolos que permiten efectuar cálculos, comparaciones y evaluaciones lógicas, facilitando la manipulación de la información dentro de un programa. Por su parte, la jerarquía de operadores establece el orden de prioridad en la ejecución de dichas operaciones, determinando cómo se resuelven las expresiones cuando intervienen múltiples operadores.
    p.mb-4(data-aos="fade-down") La siguiente es una explicación puntual de tipos de operadores:
    .row.justify-content-center.mb-4
      .col.col-lg-6.col-12.mb-4.mb-lg-0(data-aos="fade-left")
        .tarjeta-avatar-b
          .tarjeta-avatar-b__img
            .col-lg-12(data-aos="flip-up")
              img(src='@/assets/curso/temas/tema3/img21.svg' alt='')
          .tarjeta.tarjeta--C04.px-5.py-3
            .p-4
              h4 Operadores aritméticos
              p.mb-0 Permiten realizar cálculos matemáticos como suma, resta, multiplicación y división, mientras que los operadores relacionales se utilizan para comparar valores, generando resultados de tipo verdadero o falso.
      .col.col-lg-6.col-12.mb-4.mb-lg-0(data-aos="fade-left")
        .tarjeta-avatar-b
          .tarjeta-avatar-b__img
            .col-lg-12(data-aos="flip-up")
              img(src='@/assets/curso/temas/tema3/img22.svg' alt='')
          .tarjeta.tarjeta--C04.px-5.py-3
            .p-4
              h4 Operadores lógicos
              p.mb-0 Permiten combinar y relacionar condiciones dentro de un algoritmo mediante expresiones como y, o y no, facilitando la evaluación de múltiples criterios y la toma de decisiones complejas en estructuras condicionales y repetitivas.
    .row.justify-content-center.mb-0
      .col.col-lg-10.col-12
        p.mb-4(data-aos="fade-down") La jerarquía de operadores define el orden en que se evalúan las operaciones, priorizando primero las expresiones entre paréntesis, luego las operaciones aritméticas, seguidas de las relacionales y finalmente las lógicas; en este sentido, el uso de paréntesis permite modificar dicho orden, asegurando que ciertas operaciones se ejecuten primero según la necesidad del algoritmo.
        .cajon.cajon.C05.px-4.py-3
          p.mb-0(data-aos="fade-down") El dominio de los operadores y su jerarquía permite construir expresiones claras, coherentes y libres de ambigüedades, facilitando el control del flujo lógico dentro de los programas y garantizando la correcta ejecución de las soluciones desarrolladas.
</template>

<script>
export default {
  name: 'Tema3',
  mounted() {
    this.$nextTick(() => this.$aosRefresh())
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

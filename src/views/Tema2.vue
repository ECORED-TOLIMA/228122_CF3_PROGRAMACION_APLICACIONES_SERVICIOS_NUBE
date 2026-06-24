<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 2
      h1 Metodologías para el diseño de algoritmos
    p.mb-4(data-aos="fade-down") Las metodologías para el diseño de algoritmos constituyen un conjunto de enfoques estructurados que orientan la construcción de soluciones lógicas, facilitando la transformación de problemas en procedimientos claros, ordenados y verificables. Su aplicación permite garantizar que los algoritmos sean comprensibles, eficientes y adaptables a diferentes contextos de solución.
    .row.justify-content-center.mb-4
      .col.col-lg-5.col-8.col-md-6.order-lg-1.order-1.mb-lg-0.mb-3
        figure
          img(src='@/assets/curso/temas/tema2/img1.png', alt='Imagen decorativa')
      .col.col-lg-7.col-12.order-lg-2.order-2
        .cajon.color-primario.p-4.mb-4
          p.mb-0(data-aos="fade-down") Estas metodologías no se limitan a la simple escritura de instrucciones, sino que implican un proceso organizado que inicia con el análisis del problema y culmina con la validación de la solución propuesta. A través de ellas, se promueve el uso de herramientas y técnicas que permiten representar, evaluar y optimizar algoritmos antes de su implementación en un lenguaje de programación.
        .row.mb-0
          .col-lg-auto.d-none.d-lg-block
            figure
              img(src='@/assets/curso/temas/tema2/img2.svg', alt='Imagen decorativa')
          .col-lg-10.col-12
            p.mb-0 Dependiendo del enfoque y la complejidad del problema, las metodologías pueden variar en su forma de aplicación, integrando diferentes estrategias de análisis, modelado y representación. Esto permite seleccionar el método más adecuado según las características del problema y los objetivos planteados.
    p.mb-0(data-aos="fade-down") La correcta aplicación de estas metodologías es fundamental para definir la estructura del algoritmo, establecer los pasos necesarios, seleccionar herramientas de representación como el seudocódigo o los diagramas de flujo, y garantizar que la solución sea lógica, coherente y funcional. De esta manera, se convierten en un elemento clave para el desarrollo de soluciones eficientes dentro del proceso de programación.
    
    Separador
    #t_2_1.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 2.1 Metodologías de análisis y diseño de algoritmos
    p(data-aos="fade-down") Las metodologías de análisis y diseño de algoritmos establecen un marco estructurado para abordar la solución de problemas de manera lógica, organizada y eficiente. Estas metodologías orientan al usuario desde la comprensión inicial del problema hasta la construcción de una solución formal, asegurando coherencia entre los requerimientos planteados y el resultado obtenido.
    p.mb-4(data-aos="fade-down") Desde esta perspectiva:
    .row.justify-content-center.mb-4
      .col.col-lg-6.col-12.mb-4.mb-lg-0(data-aos="fade-left")
        .tarjeta-avatar-b
          .tarjeta-avatar-b__img
            .col-lg-12(data-aos="flip-up")
              img(src='@/assets/curso/temas/tema2/img3.svg' alt="Imagen decorativa")
          .tarjeta.tarjeta--C04.px-5.py-3
            .p-4
              p.mb-0 El análisis se enfoca en identificar los elementos esenciales del problema, tales como datos de entrada, procesos y resultados esperados.
      .col.col-lg-6.col-12.mb-4.mb-lg-0(data-aos="fade-left")
        .tarjeta-avatar-b
          .tarjeta-avatar-b__img
            .col-lg-12(data-aos="flip-up")
              img(src='@/assets/curso/temas/tema2/img4.svg' alt="Imagen decorativa")
          .tarjeta.tarjeta--C04.px-5.py-3
            .p-4
              p.mb-0 Mientras que el diseño permite definir la secuencia de pasos que darán forma al algoritmo.
              br
    .row.justify-content-center.align-items-center.mb-4
      .col.col-lg-auto.col-6.col-md-4.order-lg-1.order-1.mb-lg-0.mb-3
        figure
          img(src='@/assets/curso/temas/tema2/img5.svg', alt='Imagen decorativa')
      .col.col-lg-9.col-12.order-lg-2.order-2
        .cajon.cajon.C01.px-4.py-3
          p.mb-0(data-aos="fade-down") Este enfoque facilita la planificación de soluciones antes de su implementación, reduciendo errores y mejorando la calidad del resultado.
    .row.justify-content-center.mb-4
      .col.col-12
        p.mb-0(data-aos="fade-down") A continuación, se presentan algunas metodologías clave utilizadas en el análisis y diseño de algoritmos:
    .row.justify-content-center.mb-4(data-aos="flip-up")
      .col.col-12
        .titulo-sexto.color-acento-contenido
          h5 Tabla 1.
          span Enfoques metodológicos para el análisis y diseño de algoritmos
        .tabla-a.color-acento-contenido
          table
            thead
              tr
                th(data-aos="fade-down")(style= "width: 30%") Metodología
                th(data-aos="fade-down")(style= "width: 35%") Descripción
                th(data-aos="fade-down")(style= "width: 35%") Ejemplo
            tbody
              tr
                td(data-aos="fade-down")(style="background-color: #F0F8FF") Descomposición del problema
                td(data-aos="fade-down")(style="background-color: #F0F8FF") Consiste en dividir un problema complejo en partes más simples para facilitar su comprensión y solución.
                td(data-aos="fade-down")(style="background-color: #F0F8FF") Un sistema de ventas se divide en registro de clientes, productos, pagos y facturación.
              tr
                td(data-aos="fade-down") Diseño descendente (<em>top-down</em>)
                td(data-aos="fade-down") Inicia desde una visión general del problema y se descompone progresivamente en subprocesos más detallados.
                td(data-aos="fade-down") Se define primero “calcular promedio final” y luego se descompone en ingreso de notas, cálculo y resultado.
              tr
                td(data-aos="fade-down")(style="background-color: #F0F8FF") Diseño ascendente (<em>bottom-up</em>)
                td(data-aos="fade-down")(style="background-color: #F0F8FF") Construye la solución a partir de componentes básicos que se integran para formar un sistema completo.
                td(data-aos="fade-down")(style="background-color: #F0F8FF") Se crean funciones básicas (sumar, contar, promediar) y luego se integran en un sistema completo.
              tr
                td(data-aos="fade-down") Refinamiento progresivo
                td(data-aos="fade-down") Mejora gradual del algoritmo, pasando de una idea general a una solución más detallada y precisa.
                td(data-aos="fade-down") Un algoritmo inicia de forma general y se detalla paso a paso hasta incluir validaciones y excepciones.
              tr
                td(data-aos="fade-down")(style="background-color: #F0F8FF") Abstracción
                td(data-aos="fade-down")(style="background-color: #F0F8FF") Permite enfocarse en los aspectos relevantes del problema, omitiendo detalles innecesarios en las primeras etapas del diseño.
                td(data-aos="fade-down")(style="background-color: #F0F8FF") Un cajero automático se diseña considerando acciones generales como retirar o consultar saldo, sin detalles internos.
              tr
                td(data-aos="fade-down") Modularización
                td(data-aos="fade-down") Organiza la solución en módulos independientes que facilitan la comprensión, mantenimiento y reutilización del algoritmo.
                td(data-aos="fade-down") Un sistema académico se organiza en módulos independientes como matrícula, notas y reportes.
    .row.justify-content-center.mb-0
      .col.col-lg-10.col-12
        .cajon.cajon.C02.px-4.py-3
          p.mb-0(data-aos="fade-down") La aplicación de estas metodologías permite estructurar soluciones claras, eficientes y adaptables, fortaleciendo el proceso de diseño algorítmico y garantizando una base sólida para su posterior implementación en programación.
    
    Separador
    #t_2_2.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 2.2 Notación de algoritmos mediante seudocódigo
    .row.justify-content-center.mb-4
      .col.col-lg-3.col-8.col-md-6.order-lg-2.order-1.mb-lg-0.mb-3
        figure
          img(src='@/assets/curso/temas/tema2/img7.svg', alt='Imagen decorativa')
      .col.col-lg-9.col-12.order-lg-1.order-2
        .row.mb-4
          .col-lg-auto.d-none.d-lg-block
            figure
              img(src='@/assets/curso/temas/tema2/img6.svg', alt='Imagen decorativa')
          .col-lg-10.col-12
            p.mb-0 La notación de algoritmos mediante seudocódigo es una técnica fundamental que permite representar soluciones de manera clara, estructurada y comprensible, sin depender de un lenguaje de programación específico. Su uso facilita la transición entre el análisis del problema y la implementación, permitiendo expresar la lógica de un algoritmo de forma ordenada y fácilmente interpretable.
        .cajon.color-primario.p-4.mb-4
          p.mb-0(data-aos="fade-down") El seudocódigo se caracteriza por utilizar un lenguaje cercano al natural, combinado con estructuras propias de la programación, lo que permite describir procesos, decisiones y repeticiones de manera precisa. Esta herramienta es ampliamente utilizada en etapas iniciales del desarrollo, ya que permite validar la lógica antes de codificar.
        p.mb-0(data-aos="fade-down") A continuación, se presentan algunos elementos clave en la notación de algoritmos mediante seudocódigo:
    .tarjeta.tarjeta--BG02.p-md-5.p-4.mb-4(data-aos="flip-down")
      .tarjeta.tarjeta--blanca.p-4.p-md-5
        PasosB.color-acento-botones 
          .row.justify-content-center.p-4(titulo="")
            .col-lg-6.order-lg-2.order-2
              h4 Estructura secuencial
              p Establece la ejecución de instrucciones de manera ordenada y consecutiva, de inicio a fin, sin saltos ni decisiones intermedias. Cada paso se realiza después del anterior, garantizando un flujo lógico y predecible del algoritmo.
            .col-lg-6.col-10.order-lg-1.order-1.mb-lg-0.mb-4
              figure
                img(src='@/assets/curso/temas/tema2/img8.png', alt='Imagen decorativa')
          .row.justify-content-center.p-4(titulo="")
            .col-lg-6.order-lg-2.order-2
              h4 Estructuras condicionales
              p Permiten que el algoritmo tome decisiones a partir de la evaluación de una o varias condiciones lógicas. Mediante expresiones como si… entonces… sino, el flujo de ejecución se adapta según se cumpla o no una condición determinada.
            .col-lg-6.col-10.order-lg-1.order-1.mb-lg-0.mb-4
              figure
                img(src='@/assets/curso/temas/tema2/img9.png', alt='Imagen decorativa')
          .row.justify-content-center.p-4(titulo="")
            .col-lg-6.order-lg-2.order-2
              h4 Estructuras repetitivas
              p Facilitan la ejecución reiterada de un conjunto de instrucciones mientras se cumpla una condición específica o durante un número definido de repeticiones. Se implementan mediante ciclos como mientras, para o repetir, optimizando procesos repetitivos.
            .col-lg-6.col-10.order-lg-1.order-1.mb-lg-0.mb-4
              figure
                img(src='@/assets/curso/temas/tema2/img10.png', alt='Imagen decorativa')
          .row.justify-content-center.p-4(titulo="")
            .col-lg-6.order-lg-2.order-2
              h4 Variables y asignación
              p Permiten almacenar, modificar y utilizar datos durante la ejecución del algoritmo. A través de la asignación, una variable puede recibir valores iniciales o resultados de operaciones, funcionando como un espacio de memoria temporal.
            .col-lg-6.col-10.order-lg-1.order-1.mb-lg-0.mb-4
              figure
                img(src='@/assets/curso/temas/tema2/img11.png', alt='Imagen decorativa')
          .row.justify-content-center.p-4(titulo="")
            .col-lg-6.order-lg-2.order-2
              h4 Entrada de datos
              p Conjunto de instrucciones destinadas a capturar información proporcionada por el usuario u otras fuentes externas. Comandos como leer permiten introducir datos necesarios para que el algoritmo procese la información correctamente.
            .col-lg-6.col-10.order-lg-1.order-1.mb-lg-0.mb-4
              figure
                img(src='@/assets/curso/temas/tema2/img12.png', alt='Imagen decorativa')
          .row.justify-content-center.p-4(titulo="")
            .col-lg-6.order-lg-2.order-2
              h4 Salida de datos
              p Instrucciones que muestran los resultados del procesamiento del algoritmo al usuario. Mediante acciones como escribir o imprimir, se comunican valores, mensajes o conclusiones de forma clara y comprensible.
            .col-lg-6.col-10.order-lg-1.order-1.mb-lg-0.mb-4
              figure
                img(src='@/assets/curso/temas/tema2/img13.png', alt='Imagen decorativa')
          .row.justify-content-center.p-4(titulo="")
            .col-lg-6.order-lg-2.order-2
              h4 Indentación y organización
              p Uso adecuado de sangrías, espacios y alineación del texto para representar visualmente la estructura lógica del algoritmo. Una correcta indentación mejora la legibilidad, facilita la comprensión y reduce errores en la interpretación del seudocódigo.
            .col-lg-6.col-10.order-lg-1.order-1.mb-lg-0.mb-4
              figure
                img(src='@/assets/curso/temas/tema2/img14_1.png', alt='Imagen decorativa')
    p.mb-0(data-aos="fade-down") El uso adecuado del seudocódigo permite diseñar algoritmos claros, coherentes y libres de errores lógicos, facilitando su posterior implementación en cualquier lenguaje de programación. De esta manera, se convierte en una herramienta esencial para el desarrollo estructurado de soluciones en el ámbito de la programación.
    
    Separador
    #t_2_3.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 2.3 Representación de algoritmos con diagramas de flujo
    p.mb-4(data-aos="fade-down") La representación de algoritmos mediante diagramas de flujo constituye una técnica visual que permite describir de manera gráfica la secuencia de pasos necesarios para resolver un problema. Esta forma de representación facilita la comprensión de la lógica del algoritmo, al mostrar de manera clara la relación entre las diferentes operaciones, decisiones y procesos involucrados.
    .bloque-texto-g.C01.bloque-texto-g--inverso.p-3.p-sm-4.p-md-5.mb-4(data-aos="flip-up")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema2/img14.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0(data-aos="fade-down") A diferencia de otras formas de notación, los diagramas de flujo utilizan símbolos estandarizados que permiten interpretar fácilmente el comportamiento del algoritmo, independientemente del lenguaje de programación que se utilice posteriormente. Su aplicación es especialmente útil en etapas de análisis y diseño, ya que permite identificar errores lógicos y mejorar la organización de la solución.
    p.mb-4(data-aos="fade-down") Para garantizar una correcta representación, es necesario utilizar elementos gráficos que definan cada parte del proceso. Entre los más utilizados se encuentran:
    .row.justify-content-center.align-items-center.px-3.mb-4(data-aos="flip-up")
      .col-lg-6.col-12.mb-md-0.order-lg-1.order-2.mb-lg-0
        LineaTiempoD.color-acento-botones.especial
          .row(numero="1" titulo="Inicio y fin")
            .col-12.mb-4.mb-md-0
              p.mb-0 Indican el punto de partida y finalización del algoritmo.
          .row(numero="2" titulo="Proceso")
            .col-12.mb-4.mb-md-0
              p.mb-0 Representa una acción o instrucción que debe ejecutarse.
          .row(numero="3" titulo="Entrada/salida")
            .col-12.mb-4.mb-md-0
              p.mb-0 Se utiliza para indicar la recepción o presentación de datos.
          .row(numero="4" titulo="Decisión")
            .col-12.mb-4.mb-md-0
              p.mb-0 Permite evaluar condiciones y tomar diferentes caminos según el resultado.
          .row(numero="5" titulo="Líneas de flujo")
            .col-12.mb-4.mb-md-0
              p.mb-0 Conectan los símbolos y muestran la dirección del proceso.
          .row(numero="6" titulo="Conectores")
            .col-12.mb-4.mb-md-0
              p.mb-0 facilitan la continuidad del diagrama cuando este se extiende o se divide.
      .col-lg-4.col-sm-4.col-5.order-lg-2.order-1.mb-lg-0.mb-4.d-none.d-lg-block
        figure
          img(src='@/assets/curso/temas/tema2/img15.png', alt='Imagen decorativa')
    .row.justify-content-center.mb-4
      .col.col-lg-10.col-12
        p.mb-0(data-aos="fade-down") Para una mejor comprensión, se relaciona la estructura de un diagrama de flujo con los elementos mencionados:
    .row.justify-content-center.mb-4(data-aos="flip-up")
      .col-lg-12.col-12
        .titulo-sexto.color-primario
          h5 Figura 1.
          span Símbolos en diagramas de flujo
      .row.justify-content-center
        .d-none.d-lg-block.mb-4
            img(src='@/assets/curso/temas/tema2/img16.svg', alt='Figura 1 que presenta un diagrama de flujo con los símbolos estandarizados utilizados en el diseño de algoritmos, incluyendo el símbolo terminal (inicio y fin), procesos, entrada y salida de datos, decisiones, líneas de flujo y conectores, organizados de manera secuencial para ilustrar el recorrido lógico y la toma de decisiones dentro de un procedimiento.')
        .d-block.d-lg-none
            img(src='@/assets/curso/temas/tema2/img16_1.svg', alt='Figura 1 que presenta un diagrama de flujo con los símbolos estandarizados utilizados en el diseño de algoritmos, incluyendo el símbolo terminal (inicio y fin), procesos, entrada y salida de datos, decisiones, líneas de flujo y conectores, organizados de manera secuencial para ilustrar el recorrido lógico y la toma de decisiones dentro de un procedimiento.')
    .row.justify-content-center.align-items-center.mb-0
      .col.col-lg-10.col-12
        .cajon.cajon.C01.px-4.py-3
          p.mb-0(data-aos="fade-down") El uso adecuado de diagramas de flujo permite estructurar algoritmos de forma visual, ordenada y comprensible, contribuyendo a una mejor planificación de soluciones y facilitando su posterior implementación en un lenguaje de programación.
    
    Separador
    #t_2_4.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 2.4 Herramientas para la creación y prueba de algoritmos
    .row.justify-content-center.mb-4
      .col.col-lg-3.col-8.col-md-6.order-lg-1.order-1.mb-lg-0.mb-3
        figure
          img(src='@/assets/curso/temas/tema2/img17.png', alt='Imagen decorativa')
      .col.col-lg-9.col-12.order-lg-2.order-2
        p.mb-4(data-aos="fade-down") Las herramientas para la creación y prueba de algoritmos constituyen un apoyo fundamental en el proceso de diseño, validación y optimización de soluciones lógicas. Estas permiten transformar ideas en representaciones estructuradas, facilitando la verificación del funcionamiento del algoritmo antes de su implementación en un lenguaje de programación.
        .cajon.color-primario.px-4.py-3.mb-0
          p.mb-0(data-aos="fade-down") Su utilización no solo contribuye a mejorar la claridad y organización de los algoritmos, sino que también permite identificar errores, evaluar la lógica planteada y asegurar que los resultados obtenidos sean coherentes con los objetivos definidos. De esta manera, se fortalece el proceso de desarrollo, reduciendo fallos y mejorando la calidad de las soluciones.
    p.mb-4(data-aos="fade-down") Entre las principales herramientas utilizadas en la creación y prueba de algoritmos se encuentran:
    AcordionA.mb-4(tipo="a" clase-tarjeta="tarjeta tarjeta--C03" data-aos="zoom-in")
      .row.justify-content-center(titulo="Herramientas de diseño")
        .col-12.col-lg-6.order-lg-1.order-2
          ul.lista-ul.mb-0
            li.mb-0
              i.lista-ul__vineta
              p Editores de seudocódigo: permiten estructurar algoritmos de manera clara utilizando una sintaxis cercana al lenguaje natural.
            li.mb-0
              i.lista-ul__vineta
              p <em>Software</em> para diagramas de flujo: facilitan la representación gráfica de los procesos mediante símbolos estandarizados.
            li.mb-0
              i.lista-ul__vineta
              p Entornos de modelado: apoyan la organización y visualización de la lógica del algoritmo antes de su implementación.
        .col-12.col-lg-6.order-lg-2.order-1.mb-lg-0.mb-4
          figure
            img(src='@/assets/curso/temas/tema2/img18.png', alt='Imagen decorativa')
      .row.justify-content-center(titulo="Herramientas de prueba")
        .col-12.col-lg-6.order-lg-1.order-2
          ul.lista-ul.mb-0
            li.mb-0
              i.lista-ul__vineta
              p Pruebas de escritorio: permiten simular paso a paso la ejecución del algoritmo para verificar su comportamiento.
            li.mb-0
              i.lista-ul__vineta
              p Simuladores de algoritmos: ayudan a validar la lógica mediante la ejecución controlada de instrucciones.
            li.mb-0
              i.lista-ul__vineta
              p Herramientas de depuración básica: permiten identificar errores en la secuencia lógica o en el manejo de datos.
        .col-12.col-lg-6.order-lg-2.order-1.mb-lg-0.mb-4
          figure
            img(src='@/assets/curso/temas/tema2/img19.png', alt='Imagen decorativa')
      .row.justify-content-center(titulo="Herramientas de apoyo")
        .col-12.col-lg-6.order-lg-1.order-2
          ul.lista-ul.mb-0
            li.mb-0
              i.lista-ul__vineta
              p Plataformas educativas: ofrecen entornos interactivos para diseñar y probar algoritmos.
            li.mb-0
              i.lista-ul__vineta
              p Lenguajes de programación básicos: permiten implementar y validar algoritmos en entornos reales.
        .col-12.col-lg-6.order-lg-2.order-1.mb-lg-0.mb-4
          figure
            img(src='@/assets/curso/temas/tema2/img20.png', alt='Imagen decorativa')
    .row.justify-content-center.align-items-center.mb-0
      .col.col-lg-2.col-8.col-md-6.order-lg-1.order-1.mb-lg-0.mb-3
        figure
          img(src='@/assets/curso/temas/tema2/img21.svg', alt='Imagen decorativa')
      .col.col-lg-8.col-12.order-lg-2.order-2
        .cajon.cajon.C04.p-4
          p.mb-0(data-aos="fade-down") La adecuada selección y uso de estas herramientas permite fortalecer el proceso de construcción de algoritmos, asegurando soluciones más precisas, funcionales y alineadas con los requerimientos planteados, facilitando su transición hacia el desarrollo de <em>software</em>.
</template>

<script>
export default {
  name: 'Tema2',
  mounted() {
    this.$nextTick(() => this.$aosRefresh())
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

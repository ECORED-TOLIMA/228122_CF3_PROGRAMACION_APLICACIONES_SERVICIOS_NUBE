<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 1
      h1 Fundamentos de lógica y algoritmia
    figure.mb-4
      img(src='@/assets/curso/temas/tema1/img1.png', alt='')
    p.mb-3 Los fundamentos de lógica y algoritmia proporcionan la base conceptual para desarrollar soluciones en programación, permitiendo estructurar procesos de forma ordenada, coherente y orientada a resolver problemas. A continuación, una breve diferenciación:
    .row.justify-content-center.mb-4
      .col.col-lg-6.col-12.mb-4.mb-lg-0(data-aos="fade-left")
        .tarjeta-avatar-b.h-100
          .tarjeta-avatar-b__img
            .col-lg-12(data-aos="flip-up")
              img(src='@/assets/curso/temas/tema1/img2.svg' alt="Imagen decorativa")
          .tarjeta.tarjeta--C04.px-5.py-3
            .p-4
              h4 Algoritmo
              p.mb-0 Se entiende como una secuencia finita y lógica de pasos.
      .col.col-lg-6.col-12.mb-4.mb-lg-0(data-aos="fade-left")
        .tarjeta-avatar-b.h-100
          .tarjeta-avatar-b__img
            .col-lg-12(data-aos="flip-up")
              img(src='@/assets/curso/temas/tema1/img3.svg' alt="Imagen decorativa")
          .tarjeta.tarjeta--C04.px-5.py-3
            .p-4
              h4 Pensamiento algorítmico
              p.mb-0 Fortalece la capacidad de analizar, descomponer y modelar situaciones problemáticas para generar soluciones estructuradas y eficientes.
    .row.justify-content-center.align-items-center
      .col-lg-10
        .row.mb-4
          .col-lg-auto.d-none.d-lg-block
            img(src='@/assets/curso/temas/tema1/img4.svg', alt='')
          .col-lg-10
            p.mb-0 Desde esta perspectiva, se promueve el análisis del problema como etapa fundamental, en la cual se identifican los datos de entrada, los procesos requeridos y los resultados esperados, garantizando una comprensión clara del contexto antes de plantear una solución. Este proceso se articula con el uso de la lógica matemática y proposicional, que proporciona las bases para establecer condiciones, relaciones y decisiones mediante el uso de proposiciones, conectores lógicos y valores de verdad.
        .p-4.cajon.color-primario
          p.mb-0 De acuerdo con los principios del razonamiento lógico, se fomenta el desarrollo de habilidades analíticas, críticas y estructuradas, esenciales para la construcción de algoritmos eficientes y verificables. De esta manera, se consolida como un eje fundamental, al facilitar la transición hacia el diseño y desarrollo de soluciones computacionales en contextos reales.

    Separador
    #t_1_1.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 1.1 Concepto de algoritmo
    p.mb-3 Para comprender adecuadamente el concepto de algoritmo, es necesario reconocer los elementos fundamentales que lo componen dentro del ámbito de la lógica y la programación. A continuación, se presentan algunos conceptos clave:
    .row.justify-content-center.align-items-center.mb-4(data-aos="flip-up")
      SlyderF.mb-5(columnas="col-lg-6 col-xl-4")
        .tarjeta.BG01.p-4
          .row.justify-content-center.mb-3
            .col-lg-6.col-sm-4.col-6
              img(src='@/assets/curso/temas/tema1/img5.svg' alt='AvatarTop')
          h4.text-center Algoritmo
          p.mb-5.text-center Secuencia finita, ordenada y lógica de pasos que permiten resolver un problema o realizar una tarea específica.
        .tarjeta.BG01.p-4
          .row.justify-content-center.mb-3
            .col-lg-6.col-sm-4.col-6
              img(src='@/assets/curso/temas/tema1/img6.svg' alt='AvatarTop')
          h4.text-center Entrada
          p.mb-0.text-center Conjunto de datos iniciales que el algoritmo requiere para su ejecución.
        .tarjeta.BG01.p-4
          .row.justify-content-center.mb-3
            .col-lg-6.col-sm-4.col-6
              img(src='@/assets/curso/temas/tema1/img7.svg' alt='AvatarTop')
          h4.text-center Proceso
          p.mb-0.text-center Conjunto de operaciones o instrucciones que transforman los datos de entrada en resultados.
        .tarjeta.BG01.p-4
          .row.justify-content-center.mb-3
            .col-lg-6.col-sm-4.col-6
              img(src='@/assets/curso/temas/tema1/img8.svg' alt='AvatarTop')
          h4.text-center Salida
          p.mb-0.text-center Resultado obtenido después de ejecutar el algoritmo.
        .tarjeta.BG01.p-4
          .row.justify-content-center.mb-3
            .col-lg-6.col-sm-4.col-6
              img(src='@/assets/curso/temas/tema1/img9.svg' alt='AvatarTop')
          h4.text-center Finitud
          p.mb-0.text-center Característica que indica que todo algoritmo debe tener un inicio y un final definidos.
        .tarjeta.BG01.p-4
          .row.justify-content-center.mb-3
            .col-lg-6.col-sm-4.col-6
              img(src='@/assets/curso/temas/tema1/img10.svg' alt='AvatarTop')
          h4.text-center Precisión
          p.mb-0.text-center Propiedad que asegura que cada paso del algoritmo está claramente definido y no genera ambigüedad.
        .tarjeta.BG01.p-4
          .row.justify-content-center.mb-3
            .col-lg-6.col-sm-4.col-6
              img(src='@/assets/curso/temas/tema1/img11.svg' alt='AvatarTop')
          h4.text-center Orden lógico
          p.mb-0.text-center Secuencia estructurada que garantiza la correcta ejecución de las instrucciones.
        .tarjeta.BG01.p-4
          .row.justify-content-center.mb-3
            .col-lg-6.col-sm-4.col-6
              img(src='@/assets/curso/temas/tema1/img12.svg' alt='AvatarTop')
          h4.text-center Eficiencia
          p.mb-0.text-center Capacidad del algoritmo para resolver un problema utilizando de manera óptima los recursos disponibles.
        .tarjeta.BG01.p-4
          .row.justify-content-center.mb-3
            .col-lg-6.col-sm-4.col-6
              img(src='@/assets/curso/temas/tema1/img13.svg' alt='AvatarTop')
          h4.text-center Generalidad
          p.mb-0.text-center Propiedad que permite que un algoritmo pueda aplicarse a diferentes casos dentro de un mismo tipo de problema.
    .row.justify-content-center.align-items-center
      .col-lg-10
        .row.justify-content-center.mb-4
          .col.col-lg-auto.col-6.col-md-4.order-lg-1.order-1.mb-lg-0.mb-3
            img(src='@/assets/curso/temas/tema1/img14.svg', alt='')
          .col.col-lg-10.col-12.order-lg-2.order-2
            .p-4.cajon.C01
              p.mb-0 El dominio de estos conceptos permite comprender la estructura y funcionamiento de los algoritmos, facilitando el desarrollo de soluciones claras, organizadas y eficientes en el contexto de la programación.

    Separador
    #t_1_2.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 1.2 Pensamiento algorítmico y solución de problemas
    p.mb-4(data-aos="fade-down") El desarrollo del pensamiento algorítmico es fundamental para abordar de manera estructurada la solución de problemas en el contexto de la programación. Este proceso permite organizar ideas, identificar relaciones y construir soluciones lógicas a partir del análisis detallado de una situación.
    .row.justify-content-center.mb-4
      .col.col-lg-4.col-8.col-md-6.order-lg-1.order-1.mb-lg-0.mb-3
        figure
          img(src='@/assets/curso/temas/tema1/img15.png', alt='Imagen decorativa')
      .col.col-lg-8.col-12.order-lg-2.order-2
        .cajon.color-primario.p-4.mb-4
          p.mb-0(data-aos="fade-down") En primer lugar, el pensamiento algorítmico implica la capacidad de descomponer un problema en partes más pequeñas y manejables, facilitando su comprensión y tratamiento. Este enfoque permite identificar claramente los datos de entrada, los procesos necesarios y los resultados esperados.
        p.mb-4(data-aos="fade-down") Asimismo, se promueve la identificación de patrones y la abstracción de información relevante, lo que contribuye a simplificar problemas complejos y a diseñar soluciones reutilizables. Esta habilidad es clave para optimizar procesos y mejorar la eficiencia en la resolución de situaciones similares.
        .row.mb-0
          .col-lg-auto.d-none.d-lg-block
            figure
              img(src='@/assets/curso/temas/tema1/img16.svg', alt='Imagen decorativa')
          .col-lg-10.col-12
            p.mb-0 De igual manera, el diseño de soluciones paso a paso permite establecer una secuencia lógica de acciones, asegurando que cada etapa del proceso esté claramente definida y organizada. Esto facilita la validación y corrección de errores durante el desarrollo.
    .row.justify-content-center.mb-0
      .col.col-lg-10.col-12
        .cajon.cajon.C02.px-4.py-3
          p.mb-0(data-aos="fade-down") Una adecuada aplicación del pensamiento algorítmico fortalece la capacidad analítica, la toma de decisiones y la resolución eficiente de problemas, consolidándose como una competencia esencial para el aprendizaje y la práctica de la programación.
    
    Separador
    #t_1_3.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 1.3 Análisis del problema
    .bloque-texto-g.C01.bloque-texto-g--inverso.p-3.p-sm-4.p-md-5.mb-4(data-aos="flip-up")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema1/img17.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0(data-aos="fade-down") El análisis del problema es una etapa esencial dentro del proceso de construcción de algoritmos, ya que permite comprender de manera clara y estructurada la situación que se desea resolver. Su adecuada ejecución garantiza que la solución propuesta responda realmente a las necesidades planteadas y evita errores desde las fases iniciales del desarrollo.
    p(data-aos="fade-down") Más que una actividad previa, el análisis del problema constituye un proceso reflexivo que orienta la toma de decisiones, facilita la identificación de variables relevantes y define el alcance de la solución. A través de este, se logra interpretar correctamente el contexto, establecer relaciones entre los elementos involucrados y organizar la información de forma lógica.
    p.mb-4(data-aos="fade-down") El análisis del problema se caracteriza por los siguientes aspectos:
    .row.justify-content-center.align-items-center.mb-5(data-aos="flip-up")
      SlyderF.color-acento-botones(columnas="col-lg-6 col-xl-4")
        .tarjeta.BG01.p-4
          .row.justify-content-center.mb-3
            .col-lg-6.col-sm-4.col-6
              img(src='@/assets/curso/temas/tema1/img18.svg' alt='AvatarTop')
          h4.text-center Comprensión del problema
          p.mb-5.text-center Identificación clara de la situación a resolver, evitando interpretaciones ambiguas.
        .tarjeta.BG01.p-4
          .row.justify-content-center.mb-3
            .col-lg-6.col-sm-4.col-6
              img(src='@/assets/curso/temas/tema1/img19.svg' alt='AvatarTop')
          h4.text-center Identificación de datos de entrada
          p.text-center Reconocimiento de la información inicial necesaria para desarrollar la solución.
        .tarjeta.BG01.p-4
          .row.justify-content-center.mb-3
            .col-lg-6.col-sm-4.col-6
              img(src='@/assets/curso/temas/tema1/img20.svg' alt='AvatarTop')
          h4.text-center Definición de resultados esperados (salida)
          p.text-center Establecimiento del objetivo o resultado que se desea obtener.
        .tarjeta.BG01.p-4
          .row.justify-content-center.mb-3
            .col-lg-6.col-sm-4.col-6
              img(src='@/assets/curso/temas/tema1/img21.svg' alt='AvatarTop')
          h4.text-center Determinación de procesos o transformaciones
          p.text-center Análisis de las operaciones necesarias para convertir las entradas en salidas.
        .tarjeta.BG01.p-4
          .row.justify-content-center.mb-3
            .col-lg-6.col-sm-4.col-6
              img(src='@/assets/curso/temas/tema1/img22.svg' alt='AvatarTop')
          h4.text-center Identificación de restricciones y condiciones
          p.text-center Reconocimiento de límites, reglas o condiciones que afectan la solución.
        .tarjeta.BG01.p-4
          .row.justify-content-center.mb-3
            .col-lg-6.col-sm-4.col-6
              img(src='@/assets/curso/temas/tema1/img23.svg' alt='AvatarTop')
          h4.text-center Descomposición del problema
          p.text-center División del problema en partes más pequeñas y manejables para facilitar su solución.
        .tarjeta.BG01.p-4
          .row.justify-content-center.mb-3
            .col-lg-6.col-sm-4.col-6
              img(src='@/assets/curso/temas/tema1/img24.svg' alt='AvatarTop')
          h4.text-center Abstracción de la información relevante
          p.text-center Selección de los elementos importantes, ignorando información innecesaria.
        .tarjeta.BG01.p-4
          .row.justify-content-center.mb-3
            .col-lg-6.col-sm-4.col-6
              img(src='@/assets/curso/temas/tema1/img25.svg' alt='AvatarTop')
          h4.text-center Organización lógica de la solución
          p.text-center Estructuración coherente de los pasos que permitirán resolver el problema.
    .row.justify-content-center.mb-0
      .col.col-lg-10.col-12
        .cajon.cajon.C02.color-secundario.px-4.py-3
          .row.mb-0
            .col-lg-2.d-none.d-lg-block
              figure
                img(src='@/assets/curso/temas/tema1/img26.svg', alt='Imagen decorativa')
            .col-lg-10.col-12
              p.mb-0 En este sentido, el análisis del problema cumple una función fundamental en la construcción de algoritmos, ya que permite diseñar soluciones más precisas, eficientes y alineadas con los objetivos planteados, fortaleciendo las bases del pensamiento lógico y la programación.
    
    Separador
    #t_1_4.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 1.4 Lógica matemática y lógica proposicional
    .row.justify-content-center.mb-4
      .col.col-lg-4.col-8.col-md-6.order-lg-1.order-1.mb-3.mb-lg-0
        figure
          img(src='@/assets/curso/temas/tema1/img27.svg', alt='Imagen decorativa')
      .col.col-lg-8.col-12.order-lg-2.order-2
        p.mb-4(data-aos="fade-down") La lógica matemática y la lógica proposicional constituyen el fundamento teórico que permite estructurar el razonamiento dentro del diseño de algoritmos y la programación. Su aplicación facilita la construcción de soluciones coherentes, basadas en reglas claras que permiten analizar situaciones, establecer relaciones y tomar decisiones de manera precisa.
        .cajon.color-primario.px-4.py-3
          p.mb-0(data-aos="fade-down") A diferencia de otros enfoques intuitivos, la lógica proposicional se basa en el uso de proposiciones, entendidas como enunciados que pueden ser verdaderos o falsos, lo que permite evaluar condiciones y determinar el comportamiento de un algoritmo frente a diferentes escenarios. Este enfoque es esencial para la formulación de estructuras condicionales y el control del flujo de ejecución en los programas.
    p.mb-4(data-aos="fade-down") Estos fundamentos se apoyan en una serie de elementos que garantizan la consistencia del razonamiento lógico, entre ellos:
    .cajon.cajon.C03.p-5.mb-4
      SlyderB(:datos="datosSlyder")
    .row.justify-content-center.mb-0
      .col.col-lg-10.col-12
        .cajon.cajon.C02.color-secundario.px-4.py-3
          p.mb-0(data-aos="fade-down") En el contexto de la programación, la lógica matemática y proposicional permite estructurar condiciones, validar decisiones y controlar el flujo de ejecución de los algoritmos. De esta manera, se convierte en un componente esencial para garantizar que las soluciones desarrolladas sean correctas, consistentes y alineadas con los requerimientos planteados.
    
    Separador
    #t_1_5.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 1.5 Tipos de algoritmos
    .row.justify-content-center.mb-4.align-items-center
      .col.col-lg-4.col-8.col-md-6.order-lg-2.order-1.mb-3.mb-lg-0
        figure
          img(src='@/assets/curso/temas/tema1/img34.png', alt='Imagen decorativa')
      .col.col-lg-8.col-12.order-lg-1.order-2
        p.mb-4(data-aos="fade-down") Los tipos de algoritmos permiten clasificar las soluciones de acuerdo con su estructura, comportamiento y forma de ejecución, facilitando la selección de la estrategia más adecuada para resolver un problema. Esta clasificación contribuye a comprender cómo se organizan las instrucciones y cómo responde un algoritmo ante diferentes escenarios.
        .cajon.color-primario.p-4.mb-0
          p.mb-0(data-aos="fade-down") A diferencia de un enfoque único, los algoritmos pueden diseñarse bajo distintas formas según la lógica que se requiera implementar, lo que permite adaptarlos a problemas simples o complejos. Esta diversidad favorece la eficiencia, la claridad y la optimización de las soluciones en programación.
    p.mb-4(data-aos="fade-down") Estos tipos se agrupan en diferentes categorías que orientan su aplicación, entre ellos:
    .row.justify-content-center.mb-4.mb-lg-0
      .col-lg-10
        .d-block.d-lg-none.mb-4
          figure
            img(src='@/assets/curso/temas/tema1/img35_1.svg', alt='Imagen decorativa')
        .d-none.d-lg-block.mb-4
          ImagenInfografica.color-acento-botones(data-aos="zoom-in")
            template(v-slot:imagen)
              figure.mb-5
                img(src='@/assets/curso/temas/tema1/img35.svg', alt="Imagen decorativa")
            .tarjeta.color-acento-contenido.p-3(x="27%" y="4%" numero="+")
              p Ejecutan instrucciones en un orden lineal, sin interrupciones ni evaluaciones de condiciones.
            .tarjeta.color-acento-contenido.p-3(x="64.5%" y="4%" numero="+")
              p Incorporan decisiones que permiten seleccionar diferentes caminos según se cumplan o no ciertas condiciones.
            .tarjeta.color-acento-contenido.p-3(x="101.8%" y="4%" numero="+")
              p Ejecutan un conjunto de instrucciones varias veces mediante estructuras de repetición.
            .tarjeta.color-acento-contenido.p-3(x="27%" y="64.5%" numero="+")
              p Se definen a sí mismos para resolver problemas dividiéndolos en subproblemas más pequeños.
            .tarjeta.color-acento-contenido.p-3(x="64.5%" y="64.5%" numero="+")
              p Describen procesos sin necesidad de cálculos numéricos, centrados en acciones o pasos descriptivos.
            .tarjeta.color-acento-contenido.p-3(x="101.8%" y="64.5%" numero="+")
              p Implican operaciones matemáticas y cálculos para obtener resultados numéricos.
          p.mb-4(data-aos="fade-down") En el contexto de la programación, el reconocimiento de los tipos de algoritmos permite diseñar soluciones más adecuadas, optimizar recursos y mejorar la organización lógica de los procesos, garantizando resultados eficientes y acordes a los requerimientos planteados.
          .row.justify-content-center.align-items-center.mb-4
            .col.col-lg-2.col-8.col-md-6.order-lg-1.order-1.mb-lg-0.mb-3
              figure
                img(src='@/assets/curso/temas/tema1/img37.svg', alt='Imagen decorativa')
            .col.col-lg-10.col-12.order-lg-2.order-2
              .cajon.cajon.C04.px-4.py-3
                p.mb-0(data-aos="fade-down") Además de su clasificación básica, los algoritmos pueden analizarse desde diferentes enfoques que permiten comprender mejor su comportamiento, eficiencia y aplicabilidad en la resolución de problemas. Esta ampliación facilita seleccionar la estructura más adecuada según el contexto y los requerimientos planteados.
          p.mb-4(data-aos="fade-down") Desde el punto de vista de su comportamiento y diseño, los algoritmos también pueden clasificarse de la siguiente manera:
      .row.justify-content-center.align-items-center.px-3.mb-4(data-aos="flip-up")
        .col-lg-6.col-12.mb-md-0.order-lg-1.order-2.mb-lg-0
          LineaTiempoD.color-acento-botones.especial
            .row(numero="1" titulo="Algoritmos determinísticos")
              .col-12.mb-4.mb-md-0
                p.mb-0 Producen siempre el mismo resultado cuando se ejecutan con las mismas condiciones de entrada, garantizando consistencia en la solución.
            .row(numero="2" titulo="Algoritmos no determinísticos")
              .col-12.mb-4.mb-md-0
                p.mb-0 Pueden generar diferentes resultados a partir de las mismas entradas, dependiendo de factores como aleatoriedad o múltiples caminos de ejecución.
            .row(numero="3" titulo="Algoritmos eficientes")
              .col-12.mb-4.mb-md-0
                p.mb-0 Optimizan el uso de recursos como tiempo y memoria, logrando soluciones rápidas y con menor consumo computacional.
            .row(numero="4" titulo="Algoritmos ineficientes")
              .col-12.mb-4.mb-md-0
                p.mb-0 Requieren mayor tiempo o recursos para ejecutarse, lo que puede afectar el rendimiento del sistema.
            //- .row(numero="5" titulo="Algoritmos iterativos")
            //-   .col-12.mb-4.mb-md-0
            //-     p.mb-0 Resuelven problemas mediante la repetición de instrucciones hasta cumplir una condición específica.
            //- .row(numero="6" titulo="Algoritmos recursivos")
            //-   .col-12.mb-4.mb-md-0
            //-     p.mb-0 Abordan problemas dividiéndolos en subproblemas similares, utilizando llamadas a sí mismos hasta llegar a un caso base.
        .col-lg-4.col-sm-4.col-5.order-lg-2.order-1.mb-lg-0.mb-4.d-none.d-lg-block
          figure
            img(src='@/assets/curso/temas/tema1/img37.png', alt='Imagen decorativa')
    p.mb-4(data-aos="fade-down") Asimismo, desde el enfoque de su implementación, es importante considerar:
    .row.justify-content-center.mb-0
      .col-xl-4.col-lg-4.col-md-10.col-12.mb-xl-0
        .crd_hover_txt.mb-4(data-aos="flip-left")(@mouseover="mostrarIndicador = true")
          .indicador--hover(v-if="mostrarIndicador")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/temas/tema1/img38.png", alt="Imagen decorativa")
          .crd_hover_txt--body
            h5.t1.mb-3 Algoritmos estructurados
            h5.t2.mb-2 Algoritmos estructurados
            p Siguen un orden lógico definido basado en secuencia, decisión e iteración.
      .col-xl-4.col-lg-4.col-md-10.col-12.mb-xl-0
        .crd_hover_txt.mb-4(data-aos="flip-left")(@mouseover="mostrarIndicador = true")
          .indicador--hover(v-if="mostrarIndicador")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/temas/tema1/img39.png", alt="Imagen decorativa")
          .crd_hover_txt--body
            h5.t1.mb-3 Algoritmos modulares
            h5.t2.mb-2 Algoritmos modulares
            p Están organizados en partes independientes, facilitando su reutilización y mantenimiento.
      .col-xl-4.col-lg-4.col-md-10.col-12.mb-xl-0
        .crd_hover_txt.mb-4(data-aos="flip-left")(@mouseover="mostrarIndicador = true")
          .indicador--hover(v-if="mostrarIndicador")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/temas/tema1/img40.png", alt="Imagen decorativa")
          .crd_hover_txt--body
            h5.t1.mb-3 Algoritmos paralelos
            h5.t2.mb-2 Algoritmos paralelos
            p Permiten ejecutar varias operaciones simultáneamente, optimizando tiempos de procesamiento en sistemas avanzados.
    p.mb-4(data-aos="fade-down") Esta clasificación ampliada permite comprender que no existe un único tipo de algoritmo aplicable a todos los problemas, sino que la elección depende de factores como la complejidad, los recursos disponibles y los objetivos de la solución.
    .row.justify-content-center.align-items-center.mb-0
      .col.col-lg-auto.col-6.col-md-4.order-lg-1.order-1.mb-lg-0.mb-3
        figure
          img(src='@/assets/curso/temas/tema1/img41.svg', alt='Imagen decorativa')
      .col.col-lg-9.col-12.order-lg-2.order-2
        .cajon.cajon.C01.px-4.py-3
          p.mb-0(data-aos="fade-down") En el contexto formativo, el análisis de los tipos de algoritmos fortalece la capacidad para diseñar soluciones más eficientes, seleccionar estructuras adecuadas y comprender el impacto de sus decisiones en el desempeño del programa.
</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
    // variables de vue
    datosSlyder: [
      {
        titulo: 'Proposición',
        texto:
          'Enunciado declarativo que expresa una idea completa y que puede ser evaluado objetivamente como verdadero o falso. Las proposiciones constituyen la unidad básica del razonamiento lógico y permiten representar condiciones dentro de un algoritmo.',
        imagen: require('@/assets/curso/temas/tema1/img28.png'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'Valores de verdad',
        texto:
          'Indican el estado lógico de una proposición, estableciendo si su contenido es verdadero o falso. Estos valores son esenciales para analizar decisiones y determinar el comportamiento de un algoritmo frente a distintas condiciones.',
        imagen: require('@/assets/curso/temas/tema1/img29.png'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'Conectores lógicos',
        texto:
          'Operadores que permiten relacionar dos o más proposiciones para formar expresiones lógicas compuestas. Incluyen la conjunción (y), disyunción (o), negación (no), implicación (si… entonces) y equivalencia (si y solo si), y son fundamentales para modelar condiciones complejas.',
        imagen: require('@/assets/curso/temas/tema1/img30.png'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'Tablas de verdad',
        texto:
          'Herramientas que presentan de forma sistemática todas las combinaciones posibles de valores de verdad de las proposiciones involucradas en una expresión lógica, facilitando el análisis y la validación del razonamiento lógico.',
        imagen: require('@/assets/curso/temas/tema1/img31.png'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'Expresiones lógicas',
        texto:
          'Combinaciones estructuradas de proposiciones y conectores lógicos que representan condiciones específicas dentro de un algoritmo, permitiendo definir reglas de decisión y controlar el flujo de ejecución de un programa.',
        imagen: require('@/assets/curso/temas/tema1/img32.png'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'Evaluación lógica',
        texto:
          'Proceso mediante el cual se analizan las expresiones lógicas para determinar su valor de verdad final, considerando los valores de las proposiciones y los conectores utilizados, lo que permite decidir qué acciones ejecutar dentro de un algoritmo.',
        imagen: require('@/assets/curso/temas/tema1/img33.png'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
    ],
  }),
  mounted() {
    this.$nextTick(() => this.$aosRefresh())
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

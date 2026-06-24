<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 5
      h1 Programación modular y pruebas de algoritmos
    p.mb-4(data-aos="fade-down") Constituyen una etapa clave en el desarrollo de soluciones, ya que permiten organizar el código en partes funcionales y verificar su correcto funcionamiento antes de su implementación definitiva. Este enfoque facilita la construcción de algoritmos más claros, mantenibles y reutilizables, mejorando la calidad del desarrollo.
    .bloque-texto-g.C01.p-3.p-sm-4.p-md-5.mb-4(data-aos="flip-down")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema5/img1.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p La programación modular consiste en dividir un algoritmo en componentes o módulos independientes, cada uno con una función específica, lo que permite simplificar la complejidad del problema y facilitar su comprensión. Por su parte, las pruebas de algoritmos permiten validar la lógica de la solución, identificar errores y asegurar que los resultados obtenidos sean los esperados.
    .row.justify-content-center.mb-4
      .col.col-lg-12.col-12
        p.mb-0(data-aos="fade-down") Para garantizar una adecuada aplicación de este enfoque, se deben seguir los siguientes pasos:
    .row.justify-content-center.align-items-center.px-3.mb-4(data-aos="flip-up")
      .col-lg-6.col-12.mb-md-0.order-lg-1.order-2.mb-lg-0
        LineaTiempoD.color-acento-botones.especial
          .row(numero="A" titulo="Definición de módulos")
            .col-12.mb-4.mb-md-0
              p.mb-0 Identificar las partes funcionales del algoritmo, asignando a cada módulo una responsabilidad clara y específica dentro de la solución.
          .row(numero="B" titulo="Establecimiento de parámetros de entrada y salida")
            .col-12.mb-4.mb-md-0
              p.mb-0 Definir los datos que recibe y produce cada módulo, asegurando una comunicación adecuada y coherente entre ellos.
          .row(numero="C" titulo="Diseño orientado a la reutilización de código")
            .col-12.mb-4.mb-md-0
              p.mb-0 Construir módulos que puedan emplearse en distintos contextos o problemas, optimizando el tiempo de desarrollo y reduciendo la duplicación de código.
          .row(numero="D" titulo="Pruebas de escritorio (trazas)")
            .col-12.mb-4.mb-md-0
              p.mb-0 Simular paso a paso la ejecución del algoritmo para analizar su comportamiento y detectar errores lógicos antes de su implementación.
          .row(numero="E" titulo="Validación de resultados")
            .col-12.mb-4.mb-md-0
              p.mb-0 Comprobar que las salidas generadas por el algoritmo corresponden a los resultados esperados y cumplen con los objetivos planteados.
      .col-lg-4.col-sm-4.col-5.order-lg-2.order-1.mb-lg-0.mb-4.d-none.d-lg-block
        figure
          img(src='@/assets/curso/temas/tema5/img2.png', alt='Imagen decorativa')
    .row.justify-content-center.align-items-center.mb-0
      .col.col-lg-10.col-12
        .cajon.color-primario.p-4
          .row.justify-content-center
            .col.col-lg-10.col-12.order-lg-2.order-2
              p.mb-0(data-aos="fade-down") La correcta aplicación de la programación modular, junto con la verificación sistemática de los algoritmos, permite desarrollar soluciones más estructuradas, confiables y eficientes, facilitando su mantenimiento y evolución dentro del proceso de desarrollo de <em>software</em>.
            .col.col-lg-2.col-5.order-lg-1.order-1
              figure
                img(src='@/assets/curso/temas/tema5/img3.svg', alt='Imagen decorativa')
    
    Separador
    #t_5_1.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 5.1 Concepto de programación modular
    .row.justify-content-center.mb-4
      .col.col-lg-5.col-8.col-md-6.order-lg-2.order-1.mb-lg-0.mb-3
        figure
          img(src='@/assets/curso/temas/tema5/img4.png', alt='Imagen decorativa')
      .col.col-lg-7.col-12.order-lg-1.order-2
        p.mb-4(data-aos="fade-down") La programación modular es un enfoque de desarrollo que permite estructurar un algoritmo en partes independientes, conocidas como módulos, cada uno con una función específica dentro de la solución. Este concepto facilita la organización del código, reduce la complejidad y mejora la comprensión del programa, permitiendo abordar problemas de manera más ordenada y eficiente.
        .cajon.color-secundario.p-4.mb-4
          p.mb-0(data-aos="fade-down") A través de la modularización, se busca dividir una solución en componentes funcionales que puedan desarrollarse, analizarse y probarse de forma individual, promoviendo la reutilización y el mantenimiento del código. Este enfoque no solo optimiza el proceso de desarrollo, sino que también favorece la escalabilidad de las soluciones.
        p.mb-0(data-aos="fade-down") A continuación, se presentan los elementos fundamentales de la programación modular:
    .row.justify-content-center.mb-4(data-aos="flip-up")
      .col.col-12
        .titulo-sexto.color-acento-contenido
          h5 Tabla 4.
          span Elementos fundamentales de la programación modular
        .tabla-a.color-acento-contenido
          table
            thead
              tr
                th(data-aos="fade-down")(style= "width: 30%") Elemento
                th(data-aos="fade-down")(style= "width: 35%") Descripción
                th(data-aos="fade-down")(style= "width: 35%") Ejemplo
            tbody
              tr
                td(data-aos="fade-down")(style="background-color: #F0F8FF") Módulo
                td(data-aos="fade-down")(style="background-color: #F0F8FF") Unidad funcional que realiza una tarea específica dentro del programa.
                td(data-aos="fade-down")(style="background-color: #F0F8FF") Un módulo calcula el promedio de notas de un estudiante.
              tr
                td(data-aos="fade-down") Independencia funcional
                td(data-aos="fade-down") Cada módulo debe cumplir una función definida sin depender excesivamente de otros.
                td(data-aos="fade-down") El módulo de cálculo funciona sin depender del módulo de entrada de datos.
              tr
                td(data-aos="fade-down")(style="background-color: #F0F8FF") Interfaz de comunicación
                td(data-aos="fade-down")(style="background-color: #F0F8FF") Define cómo los módulos intercambian información mediante parámetros de entrada y salida.
                td(data-aos="fade-down")(style="background-color: #F0F8FF") Un módulo recibe dos números y devuelve el resultado de la operación.
              tr
                td(data-aos="fade-down") Reutilización
                td(data-aos="fade-down") Permite utilizar módulos en diferentes programas o contextos sin necesidad de rediseñarlos.
                td(data-aos="fade-down") El mismo módulo de validación se usa en varios programas.
              tr
                td(data-aos="fade-down")(style="background-color: #F0F8FF") Mantenibilidad
                td(data-aos="fade-down")(style="background-color: #F0F8FF") Facilita la modificación y corrección del código sin afectar todo el sistema.
                td(data-aos="fade-down")(style="background-color: #F0F8FF") Se corrige un módulo sin modificar el resto del sistema.
    .row.justify-content-center.align-items-center.mb-0
      .col.col-lg-auto.col-6.col-md-4.order-lg-1.order-1.mb-lg-0.mb-3
        figure
          img(src='@/assets/curso/temas/tema5/img5.svg', alt='Imagen decorativa')
      .col.col-lg-9.col-12.order-lg-2.order-2
        .cajon.cajon.C01.px-4.py-3
          p.mb-0(data-aos="fade-down") La aplicación de la programación modular permite desarrollar soluciones más organizadas, comprensibles y eficientes, contribuyendo a la calidad del <em>software</em> y facilitando su evolución en el tiempo.
    
    Separador
    #t_5_2.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 5.2 Características de los módulos según funcionalidad
    .row.justify-content-center.align-items-stretch.cajon.C04.mb-4.g-0
      .col-lg-7.col-12.order-lg-2.order-2
        .cajon.C04.p-4.h-100.w-100
          p.mb-5 Las características de los módulos según su funcionalidad permiten definir cómo se organizan, interactúan y cumplen su propósito dentro de un programa. Estas características garantizan que cada módulo aporte de manera específica a la solución general, facilitando la claridad, el orden y la eficiencia en el desarrollo de algoritmos.
          .row.mb-0
            .col-lg-2.d-none.d-lg-block
              figure
                img(src='@/assets/curso/temas/tema5/img7.svg', alt='Imagen decorativa')
            .col-lg-10.col-12
              p.mb-0 Un módulo funcional debe diseñarse de manera que cumpla una tarea concreta, evitando sobrecargar su propósito o generar dependencias innecesarias. Esto permite que el programa sea más fácil de comprender, mantener y escalar en el tiempo.
      .col-lg-5.col-8.col-md-6.order-lg-1.order-1.mb-lg-0.mb-4
        figure
          img(src='@/assets/curso/temas/tema5/img6.png', alt='Imagen decorativa')
    .row.justify-content-center.align-items-strench.mb-4
      .col-lg-7.col-12.order-lg-2.order-2
        p.mb-4(data-aos="fade-down") Estas características permiten:
        ul.lista-ul--color.mt-4(data-aos="fade-down")
          li
            i.fas.fa-cloud-arrow-down
            p.mb-0 Garantizar que cada módulo cumpla una función específica dentro del sistema.
          li
            i.fas.fa-cloud-arrow-down
            p.mb-0 Facilitar la comprensión del programa mediante la separación de responsabilidades.
          li
            i.fas.fa-cloud-arrow-down
            p.mb-0 Mejorar la organización del código y su estructura lógica.
          li
            i.fas.fa-cloud-arrow-down
            p.mb-0 Permitir la reutilización de módulos en diferentes contextos o soluciones.
          li
            i.fas.fa-cloud-arrow-down
            p.mb-0 Reducir errores al trabajar de forma independiente sobre cada módulo.
        p.mb-0(data-aos="fade-down") El proceso para definir las características funcionales de los módulos es el siguiente:
      .col-lg-5.col-8.col-md-6.order-lg-1.order-1.mb-lg-0.mb-4
        figure.mb-0
          img(src='@/assets/curso/temas/tema5/img8.svg', alt='Imagen decorativa')
    .row.justify-content-center.align-items-center.px-3.mb-4(data-aos="flip-up")
      .col-lg-6.col-12.mb-md-0.order-lg-1.order-2.mb-lg-0
        LineaTiempoD.color-acento-botones.especial
          .row(numero="1" titulo="Identificar la función del módulo")
            .col-12.mb-4.mb-md-0
              ul.lista-ul.mb-0
                li.mb-0
                  i.lista-ul__vineta
                  p Determinar la tarea específica que debe cumplir.
                li.mb-0
                  i.lista-ul__vineta
                  p Delimitar su responsabilidad dentro del algoritmo.
          .row(numero="2" titulo="Definir entradas y salidas")
            .col-12.mb-4.mb-md-0
              ul.lista-ul.mb-0
                li.mb-0
                  i.lista-ul__vineta
                  p Establecer los datos que recibe el módulo.
                li.mb-0
                  i.lista-ul__vineta
                  p Determinar la información que entrega como resultado.
          .row(numero="3" titulo="Diseñar la lógica interna")
            .col-12.mb-4.mb-md-0
              ul.lista-ul.mb-0
                li.mb-0
                  i.lista-ul__vineta
                  p Estructurar las instrucciones necesarias para cumplir su función.
                li.mb-0
                  i.lista-ul__vineta
                  p Garantizar coherencia y simplicidad en su desarrollo.
          .row(numero="4" titulo="Validar funcionamiento del módulo")
            .col-12.mb-4.mb-md-0
              ul.lista-ul.mb-0
                li.mb-0
                  i.lista-ul__vineta
                  p Verificar que cumple correctamente su propósito.
                li.mb-0
                  i.lista-ul__vineta
                  p Probar su comportamiento con diferentes datos.
          .row(numero="4" titulo="Integrar con otros módulos")
            .col-12.mb-4.mb-md-0
              ul.lista-ul.mb-0
                li.mb-0
                  i.lista-ul__vineta
                  p Asegurar la correcta comunicación entre módulos.
                li.mb-0
                  i.lista-ul__vineta
                  p Validar su interacción dentro del sistema completo.
      .col-lg-4.col-sm-4.col-5.order-lg-2.order-1.mb-lg-0.mb-4.d-none.d-lg-block
        figure
          img(src='@/assets/curso/temas/tema5/img9.png', alt='Imagen decorativa')
    .row.justify-content-center.mb-0
      .col.col-lg-10.col-12
        .cajon.cajon.C05.px-4.py-3
          p.mb-0(data-aos="fade-down") La adecuada definición de las características funcionales de los módulos permite desarrollar soluciones más organizadas, eficientes y mantenibles, fortaleciendo la calidad del <em>software</em> y facilitando su evolución en distintos contextos de aplicación.
    
    Separador
    #t_5_3.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 5.3 Errores comunes en algoritmos
    .row.justify-content-center.align-items-center.mb-4
      .col.col-lg-1.col-6.col-md-4.order-lg-1.order-1.mb-lg-0.mb-3
        figure
          img(src='@/assets/curso/temas/tema5/img10.svg', alt='Imagen decorativa')
      .col.col-lg-11.col-12.order-lg-2.order-2
        p.mb-0(data-aos="fade-down") Los errores en algoritmos constituyen una de las principales causas de fallos en el desarrollo de soluciones informáticas, ya que afectan directamente la lógica, el funcionamiento y los resultados esperados. Identificarlos y corregirlos oportunamente es fundamental para garantizar la calidad, eficiencia y confiabilidad de los programas.
    .bloque-texto-g.C01.bloque-texto-g--inverso.p-3.p-sm-4.p-md-5.mb-4(data-aos="flip-up")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema5/img11.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0(data-aos="fade-down") Durante el proceso de diseño y validación de algoritmos, es común que se presenten inconsistencias relacionadas con la lógica, el manejo de datos o la estructura de las instrucciones. Estos errores pueden originarse desde el análisis del problema o durante la implementación, lo que hace necesario aplicar estrategias de verificación como las pruebas de escritorio.
    .row.justify-content-center.mb-4
      .col.col-lg-10.col-12
        .cajon.cajon.C05.px-4.py-3
          p.mb-0(data-aos="fade-down") A diferencia de los errores de programación específicos de un lenguaje, los errores en algoritmos están relacionados con la lógica de la solución, por lo que pueden detectarse incluso antes de codificar.
    
    .titulo.mb-4(data-aos="fade-left")
      img(src='@/assets/curso/ico.svg', alt='Imagen decorativa')
      h4 Clasificación de errores en algoritmos
    p.mb-4(data-aos="fade-down") A continuación, se presentan los errores más frecuentes:
        
    .row.justify-content-center.mb-4(data-aos="flip-up")
      .col.col-12
        .titulo-sexto.color-acento-contenido
          h5 Tabla 5.
          span Tipos de errores comunes en algoritmos
        .tabla-a.color-acento-contenido
          table
            thead
              tr
                th(data-aos="fade-down")(style= "width: 30%") Tipo de error
                th(data-aos="fade-down")(style= "width: 35%") Descripción
                th(data-aos="fade-down")(style= "width: 35%") Ejemplo
            tbody
              tr
                td(data-aos="fade-down")(style="background-color: #F0F8FF") Error lógico
                td(data-aos="fade-down")(style="background-color: #F0F8FF") El algoritmo se ejecuta, pero el resultado es incorrecto.
                td(data-aos="fade-down")(style="background-color: #F0F8FF") Fórmula mal planteada.
              tr
                td(data-aos="fade-down") Error de sintaxis
                td(data-aos="fade-down") Incorrecta escritura de instrucciones (en programación).
                td(data-aos="fade-down") Falta de símbolos.
              tr
                td(data-aos="fade-down")(style="background-color: #F0F8FF") Error de ejecución
                td(data-aos="fade-down")(style="background-color: #F0F8FF") Ocurre durante la ejecución del algoritmo.
                td(data-aos="fade-down")(style="background-color: #F0F8FF") División por cero.
              tr
                td(data-aos="fade-down") Error de datos
                td(data-aos="fade-down") Datos de entrada incorrectos o no validados.
                td(data-aos="fade-down") Ingresar texto en lugar de número.
              tr
                td(data-aos="fade-down")(style="background-color: #F0F8FF") Error de flujo
                td(data-aos="fade-down")(style="background-color: #F0F8FF") Mala organización del orden de instrucciones.
                td(data-aos="fade-down")(style="background-color: #F0F8FF") Saltos incorrectos en el algoritmo.
    .row.justify-content-center.align-items-center.mb-4
      .col.col-lg-auto.col-6.col-md-4.order-lg-1.order-1.mb-lg-0.mb-3
        figure
          img(src='@/assets/curso/temas/tema5/img12.svg', alt='Imagen decorativa')
      .col.col-lg-9.col-12.order-lg-2.order-2
        .cajon.cajon.C01.px-4.py-3
          p.mb-0(data-aos="fade-down") Igualmente, se relaciona un diagrama de fujo sobre la detección de errores y con ello se puede apreciar de manera directa el debido accionar ante un acontecimiento real:
    .row.justify-content-center.mb-4
      .col.col-lg-12.col-12
        .row.justify-content-center.mb-4(data-aos="flip-up")
          .col.col-12
            .titulo-sexto.color-acento-contenido
              h5 Figura 4.
              span Proceso de detección de errores en algoritmos
          .row.justify-content-center
            .d-none.d-lg-block.mb-4
                img(src='@/assets/curso/temas/tema5/img13.svg', alt='Figura 4 que muestra un diagrama de flujo del proceso para arrancar un vehículo, donde se representan de forma secuencial acciones como insertar la llave, ubicar el cambio en punto muerto y girar la llave, junto con una decisión que evalúa si el motor arranca, derivando en acciones alternativas como poner el cambio en primera o llamar al mecánico hasta llegar al fin del proceso.')
            .d-block.d-lg-none
              img(src='@/assets/curso/temas/tema5/img13_1.svg', alt='Figura 4 que muestra un diagrama de flujo del proceso para arrancar un vehículo, donde se representan de forma secuencial acciones como insertar la llave, ubicar el cambio en punto muerto y girar la llave, junto con una decisión que evalúa si el motor arranca, derivando en acciones alternativas como poner el cambio en primera o llamar al mecánico hasta llegar al fin del proceso.')
    p.mb-4(data-aos="fade-down") A continuación, se presenta un análisis sobre los errores más comunes que pueden surgir durante el diseño y desarrollo de algoritmos. Comprender sus causas y consecuencias resulta fundamental para mejorar la lógica de programación y la calidad del <em>software</em>. Asimismo, se proponen estrategias prácticas que contribuyen a prevenir fallos, optimizar el proceso de desarrollo y garantizar resultados correctos y confiables:
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-10.col-12
        PasosA.color-primario(tipo="n")
          .row.justify-content-center
            .col-lg-6.order-lg-1.order-2(data-aos="fade-down")
              h4 Causas frecuentes de errores en algoritmos
              ul.lista-ul.mb-0
                li.mb-0
                  i.lista-ul__vineta
                  p.mb-0 Falta de comprensión del problema.
                li.mb-0
                  i.lista-ul__vineta
                  p.mb-0 Definición incorrecta de variables o tipos de datos.
                li.mb-0
                  i.lista-ul__vineta
                  p.mb-0 Uso inadecuado de operadores o condiciones.
                li.mb-0
                  i.lista-ul__vineta
                  p.mb-0 Omisión de casos especiales o extremos.
                li.mb-0
                  i.lista-ul__vineta
                  p.mb-0 Mala estructuración del flujo lógico.
            .col-lg-5.col-12.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-up")
              img(src='@/assets/curso/temas/tema5/img14.png', alt="Imagen decorativa")          
          .row.justify-content-center
            .col-lg-5.col-12.mb-lg-0.mb-4(data-aos="fade-up")
              img(src='@/assets/curso/temas/tema5/img15.png', alt="Imagen decorativa")          
            .col-lg-6(data-aos="fade-down")
              h4.text-start Consecuencias de los errores
              ul.lista-ul.mb-0.text-start
                li.mb-0
                  i.lista-ul__vineta
                  p.mb-0 Resultados incorrectos.
                li.mb-0
                  i.lista-ul__vineta
                  p.mb-0 Fallos en la ejecución del programa.
                li.mb-0
                  i.lista-ul__vineta
                  p.mb-0 Pérdida de tiempo en corrección.
                li.mb-0
                  i.lista-ul__vineta
                  p.mb-0 Baja calidad del <em>software</em>.
          .row.justify-content-center
            .col-lg-6.order-lg-1.order-2(data-aos="fade-down")
              h4 Estrategias para evitar errores
              ul.lista-ul.mb-0
                li.mb-0
                  i.lista-ul__vineta
                  p.mb-0 Realizar análisis detallado del problema.
                li.mb-0
                  i.lista-ul__vineta
                  p.mb-0 Utilizar seudocódigo y diagramas de flujo.
                li.mb-0
                  i.lista-ul__vineta
                  p.mb-0 Aplicar pruebas de escritorio.
                li.mb-0
                  i.lista-ul__vineta
                  p.mb-0 Validar datos de entrada.
                li.mb-0
                  i.lista-ul__vineta
                  p.mb-0 Revisar paso a paso el algoritmo.
            .col-lg-5.col-12.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-up")
              img(src='@/assets/curso/temas/tema5/img16.png', alt="Imagen decorativa")
    p.mb-4(data-aos="fade-down") Para comprender de mejor manera el funcionamiento del algoritmo y la identificación de errores lógicos, se presenta el siguiente video, en el cual se explica paso a paso un ejemplo práctico donde se evidencia cómo una operación incorrecta dentro del proceso afecta el resultado final del programa:
    .row.justify-content-center.align-items-center.mb-0
      .col.col-lg-12
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/3bbIQeEBAgE?si=GAlKlELXvPG3yR68" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    
    Separador
    #t_5_4.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 5.4 Parámetros de entrada y salida en los módulos
    p.mb-4(data-aos="fade-down") Constituyen un elemento esencial en la programación modular, ya que permiten establecer la comunicación entre los diferentes componentes de un algoritmo. Estos parámetros definen qué información recibe un módulo para su ejecución y qué resultados genera una vez finaliza su procesamiento, garantizando coherencia en el flujo de datos dentro del sistema.
    .row.justify-content-center.mb-4
      .col.col-lg-10.col-12
        .cajon.color-primario.p-4.mb-0
          p.mb-0(data-aos="fade-down") Una adecuada definición de los parámetros permite que los módulos funcionen de manera independiente, facilitando su reutilización y evitando dependencias innecesarias. Además, contribuye a que el intercambio de información sea claro, controlado y alineado con la funcionalidad de cada módulo.
    p.mb-4(data-aos="fade-down") Para garantizar un uso correcto de los parámetros, es importante considerar los siguientes criterios:
    .row.justify-content-center.align-items-center.mb-4(data-aos="flip-up")
      SlyderF.color-acento-botones(columnas="col-lg-6 col-xl-4")
        .tarjeta.BG01.p-4
          .row.justify-content-center.mb-3
            .col-lg-5.col-sm-4.col-6
              img(src='@/assets/curso/temas/tema5/img17.svg' alt='AvatarTop')
          h4.text-center Parámetros de entrada
          p.mb-5 Corresponden a los datos que el módulo recibe para poder ejecutar su función.
          br
        .tarjeta.BG01.p-4
          .row.justify-content-center.mb-3
            .col-lg-5.col-sm-4.col-6
              img(src='@/assets/curso/temas/tema5/img18.svg' alt='AvatarTop')
          h4.text-center Parámetros de salida 
          p Representan los resultados generados por el módulo después de procesar la información.
        .tarjeta.BG01.p-4
          .row.justify-content-center.mb-3
            .col-lg-5.col-sm-4.col-6
              img(src='@/assets/curso/temas/tema5/img19.svg' alt='AvatarTop')
          h4.text-center Claridad en la definición 
          p Los parámetros deben estar claramente especificados para evitar ambigüedades en su uso.
        .tarjeta.BG01.p-4
          .row.justify-content-center.mb-3
            .col-lg-5.col-sm-4.col-6
              img(src='@/assets/curso/temas/tema5/img20.svg' alt='AvatarTop')
          h4.text-center Tipo de datos
          p Es necesario definir el tipo de información que se recibe y se devuelve, garantizando coherencia en el procesamiento.
        .tarjeta.BG01.p-4
          .row.justify-content-center.mb-3
            .col-lg-5.col-sm-4.col-6
              img(src='@/assets/curso/temas/tema5/img21.svg' alt='AvatarTop')
          h4.text-center Independencia del módulo
          p Los parámetros permiten que cada módulo funcione sin depender directamente de otros, favoreciendo la modularidad.
    .row.justify-content-center.mb-0
      .col.col-12
        p.mb-0(data-aos="fade-down") Una vez definidos los parámetros, es importante establecer cómo se gestionan dentro del programa, considerando el siguiente proceso:
    .row
      .col-12
        .px-5.py-4
          .row.align-items-center.BG03(data-aos="fade-down")
            .col-lg-4.d-none.d-lg-block.py-0.px-3
              figure(data-aos="zoom-in")
                img(src="@/assets/curso/temas/tema5/img22.png", alt="Imagen decorativa")
            .col-lg-8.p-5.py-4
              SlyderF.custom.color-acento-botones.px-4.py-0(columnas="col-lg-6 col-xl-6")
                .tarjeta.tarjeta--slyder.px-4.py-4
                  .row.justify-content-center.mb-3
                    .col-5.col-lg-8
                      img(src="@/assets/curso/temas/tema5/img23.svg", alt="Imagen decorativa").img100.m-auto
                  p Identificación de los datos requeridos por el módulo y establecimiento de los valores iniciales.
                .tarjeta.tarjeta--slyder.p-4
                  .row.justify-content-center.mb-3
                    .col-5.col-lg-8
                      img(src="@/assets/curso/temas/tema5/img24.svg", alt="Imagen decorativa").img100.m-auto
                  p Ejecución de las instrucciones del módulo y transformación de los datos de entrada.
                .tarjeta.tarjeta--slyder.p-4
                  .row.justify-content-center.mb-3
                    .col-5.col-lg-8
                      img(src="@/assets/curso/temas/tema5/img25.svg", alt="Imagen decorativa").img100.m-auto
                  p Obtención de resultados a partir del procesamiento y preparación de los datos para ser retornados.
                .tarjeta.tarjeta--slyder.p-4
                  .row.justify-content-center.mb-3
                    .col-5.col-lg-8
                      img(src="@/assets/curso/temas/tema5/img26.svg", alt="Imagen decorativa").img100.m-auto
                  p Envío de resultados al módulo principal u otros módulos y continuidad del flujo del programa.
    p.mb-0(data-aos="fade-down") La correcta definición y gestión de los parámetros de entrada y salida permite construir programas más organizados, coherentes y funcionales, asegurando una adecuada comunicación entre módulos y facilitando el desarrollo de soluciones eficientes en programación.
    
    Separador
    #t_5_5.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 5.5 Pruebas de escritorio o trazas de algoritmos
    .row.justify-content-center.mb-4
      .col.col-lg-5.col-8.col-md-6.order-lg-1.order-1.mb-lg-0.mb-3
        figure
          img(src='@/assets/curso/temas/tema5/img27.png', alt='Imagen decorativa')
      .col.col-lg-7.col-12.order-lg-2.order-2
        p.mb-4(data-aos="fade-down") Constituyen una técnica fundamental para verificar el correcto funcionamiento de una solución antes de su implementación en un lenguaje de programación. Este proceso permite simular paso a paso la ejecución del algoritmo, analizando cómo se comportan las variables y validando que los resultados obtenidos sean coherentes con lo esperado.
        .cajon.color-secundario.p-4.mb-4
          p.mb-0(data-aos="fade-down") A través de las trazas, se identifican posibles errores lógicos, inconsistencias o fallos en la secuencia de instrucciones, lo que facilita la corrección temprana y mejora la calidad del algoritmo. Esta práctica fortalece el pensamiento analítico y permite comprender con mayor claridad el flujo de ejecución.
    p.mb-4 Para realizar adecuadamente las pruebas de escritorio, se deben considerar las siguientes actividades:
    .row.justify-content-center.mb-4(data-aos="flip-up")
      .col.col-12
        .tarjeta--container.row
          .col-xl.col-lg-6.tarjeta.tarjeta--C01.p-5
            .row.justify-content-center.mb-3
              .col-lg-7.col-4
                figure(data-aos="fade-up")
                  img(src='@/assets/curso/temas/tema5/img28.svg', alt='Imagen decorativa')(style="width: 85%")
            h4.text-center A. Definición de datos de prueba
            p.mb-5(data-aos="fade-down") Selección de valores de entrada que permitan evaluar diferentes escenarios del algoritmo, incluyendo casos normales, extremos y posibles errores.
          .col-xl.col-lg-6.tarjeta.cajon.C01.p-5
            .row.justify-content-center.mb-3
              .col-lg-7.col-4
                figure(data-aos="fade-up")
                  img(src='@/assets/curso/temas/tema5/img29.svg', alt='Imagen decorativa')(style="width: 85%")
            h4.text-center B. Ejecución paso a paso
            p.mb-0(data-aos="fade-down") Seguimiento detallado de cada instrucción del algoritmo, registrando los cambios en las variables en cada etapa del proceso.
          .col-xl.col-lg-6.tarjeta.cajon.C02.p-5
            .row.justify-content-center.mb-3
              .col-lg-7.col-4
                figure(data-aos="fade-up")
                  img(src='@/assets/curso/temas/tema5/img30.svg', alt='Imagen decorativa')(style="width: 85%")
            h4.text-center C. Registro de resultados
            p.mb-0(data-aos="fade-down") Documentación de los valores obtenidos en cada iteración o paso, generalmente mediante tablas de trazabilidad.
          .col-xl.col-lg-6.tarjeta.tarjeta--C05.p-5
            .row.justify-content-center.mb-3
              .col-lg-7.col-4
                figure(data-aos="fade-up")
                  img(src='@/assets/curso/temas/tema5/img31.svg', alt='Imagen decorativa')(style="width: 85%")
            h4.text-center D. Análisis y validación
            p.mb-0(data-aos="fade-down") Comparación de los resultados obtenidos con los esperados, identificando posibles inconsistencias o errores en la lógica.
    p.mb-0(data-aos="fade-down") La aplicación de pruebas de escritorio permite asegurar que los algoritmos sean correctos, eficientes y confiables, facilitando su implementación posterior y reduciendo la probabilidad de errores en el desarrollo de programas.
        
</template>

<script>
export default {
  name: 'Tema5',
  mounted() {
    this.$nextTick(() => this.$aosRefresh())
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

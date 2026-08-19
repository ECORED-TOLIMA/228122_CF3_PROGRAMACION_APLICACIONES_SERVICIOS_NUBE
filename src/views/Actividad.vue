<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    #Actividad
      Actividad(:cuestionario="cuestionario")
</template>

<script>
import Actividad from 'ecored-pkg-fliz/plugin/components/actividad/Actividad.vue'
import ActividadPregunta from '@/components/ActividadPregunta.vue'

const ActividadConRetroalimentacionHTML = {
  extends: Actividad,
  components: { ActividadPregunta },
}

export default {
  name: 'ActividadDidactica',
  components: { Actividad: ActividadConRetroalimentacionHTML },
  data: () => ({
    cuestionario: {
      tema: 'Fundamentos de algoritmia y solución de problemas',
      titulo: 'Cuestionario',
      introduccion:
        '<b>Objetivo:</b> evaluar los conocimientos fundamentales en lógica, algoritmia y programación, abordando desde el análisis de problemas hasta la implementación de estructuras de control y modularidad.',
      barajarPreguntas: true,
      titulo_aprobado: '¡BUEN TRABAJO!',
      titulo_reprobado: 'VUELVA A INTENTARLO.',
      preguntas: [
        {
          id: 1,
          texto:
            'Cuál de las siguientes acciones describe mejor la aplicación de un algoritmo en la vida real:',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Escribir código sin orden.', esCorrecta: false },
            {
              id: 'b',
              texto: 'Seguir una receta paso a paso para cocinar.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Dibujar un diagrama sin lógica.',
              esCorrecta: false,
            },
            { id: 'd', texto: 'Un compilador.', esCorrecta: false },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Un algoritmo se aplica cuando se siguen pasos ordenados para lograr un resultado.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 2,
          texto:
            'Si un estudiante divide un problema complejo en partes pequeñas para resolverlo, ¿qué habilidad está aplicando?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Programación estructurada.', esCorrecta: false },
            { id: 'b', texto: 'Codificación.', esCorrecta: false },
            { id: 'c', texto: 'Compilación.', esCorrecta: false },
            { id: 'd', texto: 'Pensamiento algorítmico.', esCorrecta: true },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Esta habilidad permite simplificar problemas y facilitar su solución.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 3,
          texto:
            'Antes de programar, ¿qué acción garantiza una mejor comprensión del problema?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Escribir código directamente.',
              esCorrecta: false,
            },
            { id: 'b', texto: 'Ejecutar el programa.', esCorrecta: false },
            {
              id: 'c',
              texto: 'Analizar entradas, procesos y salidas.',
              esCorrecta: true,
            },
            { id: 'd', texto: 'Crear gráficos.', esCorrecta: false },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! El análisis previo evita errores y mejora la solución.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 4,
          texto:
            'Si una condición en un algoritmo puede ser verdadera o falsa, ¿qué tipo de lógica se está utilizando?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Lógica aritmética.', esCorrecta: false },
            { id: 'b', texto: 'Lógica proposicional.', esCorrecta: true },
            { id: 'c', texto: 'Lógica gráfica.', esCorrecta: false },
            { id: 'd', texto: 'Lógica estructural.', esCorrecta: false },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! La lógica proposicional trabaja con valores de verdad.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 5,
          texto:
            'Cuando en un algoritmo se combinan dos condiciones con “y”, ¿qué tipo de operador se está utilizando?',
          imagen: require('@/assets/actividad/imagen5.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Aritmético.', esCorrecta: false },
            { id: 'b', texto: 'Relacional.', esCorrecta: false },
            { id: 'c', texto: 'Lógico.', esCorrecta: true },
            { id: 'd', texto: 'Secuencial.', esCorrecta: false },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Los operadores lógicos permiten evaluar múltiples condiciones.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 6,
          texto:
            'Si un problema se resuelve iniciando desde lo general hasta llegar a detalles específicos, ¿qué metodología se está aplicando?',
          imagen: require('@/assets/actividad/imagen6.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Bottom-up.', esCorrecta: false },
            { id: 'b', texto: 'Iterativa.', esCorrecta: false },
            { id: 'c', texto: 'Modular.', esCorrecta: false },
            { id: 'd', texto: 'Top-down.', esCorrecta: true },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! El enfoque descendente facilita la organización de soluciones.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 7,
          texto:
            '¿Qué herramienta permite describir un algoritmo sin necesidad de usar un lenguaje de programación?',
          imagen: require('@/assets/actividad/imagen7.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Seudocódigo.', esCorrecta: true },
            { id: 'b', texto: 'Compilador.', esCorrecta: false },
            { id: 'c', texto: 'Editor de texto.', esCorrecta: false },
            { id: 'd', texto: 'Navegador.', esCorrecta: false },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! El seudocódigo facilita la comprensión de la lógica.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 8,
          texto:
            'Si se desea visualizar gráficamente las decisiones y procesos de un algoritmo, ¿qué se debería usar?',
          imagen: require('@/assets/actividad/imagen8.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Tabla.', esCorrecta: false },
            { id: 'b', texto: 'Diagrama de flujo.', esCorrecta: true },
            { id: 'c', texto: 'Código fuente.', esCorrecta: false },
            { id: 'd', texto: 'Consola.', esCorrecta: false },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Los diagramas permiten entender el flujo del algoritmo.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 9,
          texto:
            '¿Qué acción permite verificar paso a paso el funcionamiento de un algoritmo sin ejecutarlo en un programa?',
          imagen: require('@/assets/actividad/imagen9.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Codificación.', esCorrecta: false },
            { id: 'b', texto: 'Compilación.', esCorrecta: false },
            { id: 'c', texto: 'Prueba de escritorio.', esCorrecta: true },
            { id: 'd', texto: 'Documentación.', esCorrecta: false },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Es una técnica clave para validar la lógica.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 10,
          texto:
            'Si se nombra una variable como “edadUsuario”, ¿qué se está utilizando correctamente?',
          imagen: require('@/assets/actividad/imagen10.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Operador.', esCorrecta: false },
            { id: 'b', texto: 'Constante.', esCorrecta: false },
            { id: 'c', texto: 'Condición.', esCorrecta: false },
            { id: 'd', texto: 'Identificador.', esCorrecta: true },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Los identificadores deben ser claros y descriptivos.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 11,
          texto:
            '¿Qué ocurre si se intenta modificar un valor definido como constante en un programa?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Se ejecuta normalmente.', esCorrecta: false },
            {
              id: 'b',
              texto: 'Genera un error o no cambia el valor.',
              esCorrecta: true,
            },
            { id: 'c', texto: 'Se convierte en variable.', esCorrecta: false },
            { id: 'd', texto: 'Se elimina.', esCorrecta: false },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Las constantes no pueden cambiar durante la ejecución.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 12,
          texto:
            'Si se necesita contar cuántas veces se repite una acción, ¿qué tipo de variable debe usar?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Contador.', esCorrecta: true },
            { id: 'b', texto: 'Constante.', esCorrecta: false },
            { id: 'c', texto: 'Vector.', esCorrecta: false },
            { id: 'd', texto: 'Acumulador.', esCorrecta: false },
          ],
          mensaje_correcto:
            '¡Excelente trabajo!Los contadores registran repeticiones.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 13,
          texto:
            '¿Qué operador se usaría para verificar si un valor es mayor que otro?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: '+.', esCorrecta: false },
            { id: 'b', texto: 'AND.', esCorrecta: false },
            { id: 'c', texto: '>.', esCorrecta: true },
            { id: 'd', texto: '=.', esCorrecta: false },
          ],
          mensaje_correcto: '¡Excelente trabajo! Es un operador relacional.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 14,
          texto:
            '¿Qué sucede en un algoritmo cuando se ejecutan instrucciones una tras otra sin condiciones ni repeticiones?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Ciclo.', esCorrecta: false },
            { id: 'b', texto: 'Secuencia lógica.', esCorrecta: true },
            { id: 'c', texto: 'Decisión.', esCorrecta: false },
            { id: 'd', texto: 'Iteración.', esCorrecta: false },
          ],
          mensaje_correcto: '¡Excelente trabajo! Es una estructura secuencial.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 15,
          texto:
            'Si un algoritmo debe decidir entre dos caminos según una condición, ¿qué estructura se debe usar?',
          imagen: require('@/assets/actividad/imagen5.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Secuencial.', esCorrecta: false },
            { id: 'b', texto: 'Condicional.', esCorrecta: true },
            { id: 'c', texto: 'Vector.', esCorrecta: false },
            { id: 'd', texto: 'Modular.', esCorrecta: false },
          ],
          mensaje_correcto: '¡Excelente trabajo! Permite tomar decisiones.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 16,
          texto: '¿En qué caso se podría usar un ciclo while?',
          imagen: require('@/assets/actividad/imagen6.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Para repetir acciones mientras se cumpla una condición.',
              esCorrecta: true,
            },
            { id: 'b', texto: 'Para definir variables.', esCorrecta: false },
            { id: 'c', texto: 'Para sumar valores.', esCorrecta: false },
            { id: 'd', texto: 'Para comparar datos.', esCorrecta: false },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Es útil cuando no se sabe cuántas veces repetir.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 17,
          texto:
            'Si se necesita almacenar varias notas de estudiantes en una sola estructura, ¿qué se usaría?',
          imagen: require('@/assets/actividad/imagen7.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Operador.', esCorrecta: false },
            { id: 'b', texto: 'Vector.', esCorrecta: true },
            { id: 'c', texto: 'Condicional.', esCorrecta: false },
            { id: 'd', texto: 'Módulo.', esCorrecta: false },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Permite almacenar múltiples datos.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 18,
          texto: '¿Qué ventaja tiene dividir un programa en módulos?',
          imagen: require('@/assets/actividad/imagen8.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Aumenta el tamaño del código.',
              esCorrecta: false,
            },
            { id: 'b', texto: 'Elimina variables.', esCorrecta: false },
            {
              id: 'c',
              texto: 'Evita el uso de operadores.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Mejora la organización y reutilización.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Facilita mantenimiento y comprensión.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 19,
          texto: '¿Qué función cumplen los parámetros de entrada en un módulo?',
          imagen: require('@/assets/actividad/imagen9.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Mostrar resultados.', esCorrecta: false },
            {
              id: 'b',
              texto: 'Recibir datos para procesarlos.',
              esCorrecta: true,
            },
            { id: 'c', texto: 'Ejecutar ciclos.', esCorrecta: false },
            { id: 'd', texto: 'Definir condiciones.', esCorrecta: false },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Permiten el funcionamiento del módulo.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 20,
          texto:
            '¿Por qué es importante realizar pruebas de escritorio antes de programar?',
          imagen: require('@/assets/actividad/imagen10.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Para ejecutar código.', esCorrecta: false },
            { id: 'b', texto: 'Para compilar programas.', esCorrecta: false },
            {
              id: 'c',
              texto: 'Para detectar errores en la lógica del algoritmo.',
              esCorrecta: true,
            },
            { id: 'd', texto: 'Para diseñar interfaces.', esCorrecta: false },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Permite corregir errores antes de implementar.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
      ],
      mensaje_final_aprobado:
        'Ha superado la actividad y demuestra sólidos conocimientos sobre el componente formativo.',
      mensaje_final_reprobado:
        'No ha superado la actividad. Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>

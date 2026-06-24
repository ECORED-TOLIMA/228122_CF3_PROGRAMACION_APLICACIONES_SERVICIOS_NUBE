# GuÃ­a de maquetaciÃ³n parametrizada

Esta guÃ­a documenta el proceso para maquetar un recurso educativo a partir de los documentos fuente ubicados en `fuentes/`.

La guÃ­a no depende de un nÃºmero de componente fijo. Debe funcionar para `CF01`, `CF02`, `CF03` o cualquier componente futuro, siempre que conserve la estructura base del formato institucional.

## 1. Identificar los documentos fuente

Dentro de `fuentes/` se deben ubicar, como mÃ­nimo:

```txt
CF_XX_*.docx
Actividad_didactica_CFXX.docx
```


Donde `XX` corresponde al nÃºmero del componente formativo.

Reglas:

- Usar el documento `.docx` principal asociado al componente. Puede empezar por `CF_`, incluir `CFXX` o usar otra convenciÃ³n institucional equivalente.
- Usar el documento de actividad cuyo nombre empiece por `Actividad_didactica_`.
- Si el nombre cambia ligeramente, priorizar el contenido y no un nombre rÃ­gido.
- Ignorar archivos auxiliares que no correspondan al componente, por ejemplo pruebas o borradores.

## 2. Extraer la informaciÃ³n general del componente

En la tabla inicial del documento principal se toman estos campos:

| Campo del Word | Archivo destino | Propiedad destino |
| --- | --- | --- |
| `NOMBRE DEL COMPONENTE FORMATIVO` | `src/config/titulo.js` | exportaciÃ³n principal |
| `NOMBRE DEL COMPONENTE FORMATIVO` | `src/config/global.js` | `global.Name` |
| `BREVE DESCRIPCIÃ“N` | `src/config/global.js` | `global.Description` |

Formato esperado:

```js
// src/config/titulo.js
module.exports = 'Nombre del componente formativo'
```

```js
// src/config/global.js
global: {
  Name: 'Nombre del componente formativo',
  Description: 'Breve descripciÃ³n del recurso',
}
```

## 3. Revisar la guÃ­a de diseÃ±o `.xd`

Antes de maquetar la introducciÃ³n o cualquier tema, revisar si en `fuentes/` existe un archivo de diseÃ±o `.xd` asociado al componente.

La guÃ­a `.xd` se usa como referencia para interpretar la intenciÃ³n visual del contenido:

- distribuciÃ³n de bloques;
- uso de imÃ¡genes;
- presencia de tablas, tarjetas, listados, destacados u otros recursos;
- jerarquÃ­a visual entre tÃ­tulos, textos y apoyos grÃ¡ficos;
- paleta cromÃ¡tica y estilo general del componente.

Reglas de uso:

- El documento Word sigue siendo la fuente oficial del contenido textual.
- El archivo `.xd` orienta la forma de presentar ese contenido en la maquetaciÃ³n.
- Si el `.xd` contiene textos de apoyo, placeholders o fragmentos que no coinciden con el Word, prevalece el Word.
- Antes de pasar contenido a una vista `.vue`, se debe revisar cÃ³mo fue resuelto visualmente ese bloque en el `.xd`.

### OrganizaciÃ³n de imÃ¡genes por tema

Las imÃ¡genes exportadas desde el `.xd` deben organizarse dentro de:

```txt
src/assets/curso/temas/
```

Usar una carpeta por cada secciÃ³n o tema del componente, por ejemplo:

```txt
src/assets/curso/temas/intro/
src/assets/curso/temas/tema1/
src/assets/curso/temas/tema2/
```

Reglas:

- Guardar en cada carpeta Ãºnicamente los recursos correspondientes a esa secciÃ³n.
- Nombrar las imÃ¡genes de forma secuencial y consistente, por ejemplo `img1.png`, `img2.svg`, etc.
- Elegir el formato segÃºn la naturaleza del recurso:
  - `.svg` para vectores, Ã­conos, diagramas simples e ilustraciones escalables.
  - `.png` para fotografÃ­as, composiciones rasterizadas o imÃ¡genes con efectos que no convenga reconstruir como vector.
- Antes de maquetar una secciÃ³n, verificar quÃ© recursos visuales del `.xd` deben exportarse y en quÃ© formato.

## 4. Construir el menÃº principal

Ubicar la secciÃ³n equivalente a la tabla de contenidos. SegÃºn el documento puede aparecer como:

```txt
TABLA DE CONTENIDOS
A. TABLA DE CONTENIDOS
```

La entrada `IntroducciÃ³n` no se replica en los temas, porque ya existe como ruta independiente.

Reglas:

- Cada tema principal se convierte en `tema1`, `tema2`, `tema3`, etc.
- Cada subtema conserva su numeraciÃ³n original en `numero`.
- El texto visible se copia en `titulo`, sin alterar su sentido.
- Cada subtema usa un `hash` con el patrÃ³n `t_numero_subnumero`, por ejemplo `t_4_3`.
- Si se agregan temas nuevos, tambiÃ©n deben existir su ruta y su vista correspondiente.

Ejemplo:

```js
{
  nombreRuta: 'tema1',
  numero: '1',
  titulo: 'TÃ­tulo del tema principal',
  desarrolloContenidos: true,
  subMenu: [
    {
      numero: '1.1',
      titulo: 'TÃ­tulo del subtema',
      hash: 't_1_1',
    },
  ],
}
```

## 5. Sincronizar rutas y vistas

Revisar `src/router/index.js`.

Cada tema presente en `menuPrincipal.menu` debe tener:

- `path`
- `name`
- `component`

Ejemplo:

```js
{
  path: 'tema4',
  name: 'tema4',
  component: () =>
    import(/* webpackChunkName: "tema4" */ '../views/Tema4.vue'),
}
```

Si el tema no existe todavÃ­a:

- Crear `src/views/Tema#.vue`.
- Tomar como base una vista existente.
- Ajustar el nÃºmero visible y el nombre del componente.

## 6. Limpiar el submenÃº institucional

En `src/config/global.js`, retirar de `menuPrincipal.subMenu` la entrada visible:

```js
{
  nombreRuta: 'complementario',
  icono: 'far fa-folder-open',
  titulo: 'Material complementario',
}
```

La ruta puede permanecer en el router si el proyecto la conserva.

## 7. Configurar glosario y referencias

### Glosario

Ubicar la secciÃ³n equivalente a:

```txt
GLOSARIO
F. GLOSARIO
```

Cada fila de la tabla `TÃ‰RMINO / SIGNIFICADO` se transforma en:

```js
{
  termino: 'TÃ©rmino',
  significado: 'DefiniciÃ³n',
}
```

Reglas:

- Mantener el orden del documento.
- Retirar dos puntos finales del tÃ©rmino si los trae.
- Reemplazar cualquier ejemplo genÃ©rico de plantilla.

### Referencias bibliogrÃ¡ficas

Ubicar la secciÃ³n equivalente a:

```txt
REFERENCIAS BIBLIOGRÃFICAS
G. REFERENCIAS BIBLIOGRÃFICAS
```

Cada referencia se transforma en:

```js
{
  referencia: 'Referencia bibliogrÃ¡fica',
  link: '',
}
```

Reglas:

- Mantener el orden del Word.
- Si existe enlace explÃ­cito, asignarlo en `link`.
- Si no existe, dejar `link: ''`.

## 8. Crear tÃ­tulos y anclajes en las vistas de tema

Por cada subtema del menÃº, crear su anclaje en `src/views/Tema#.vue`.

Formato:

```pug
Separador
#t_1_1.titulo-segundo.color-acento-contenido(data-aos="fade-left")
  h2 1.1 TÃ­tulo del subtema
```

Reglas:

- El `h1` de cada vista debe coincidir con el tÃ­tulo del tema principal.
- El `hash` del menÃº se vuelve el `id` del bloque Pug.
- Antes de cada tÃ­tulo de segundo nivel se agrega `Separador`.
- Los anclajes se ubican dentro del contenedor principal del tema.

## 9. Configurar introducciÃ³n y sÃ­ntesis

### IntroducciÃ³n

Ubicar la secciÃ³n equivalente a:

```txt
INTRODUCCIÃ“N
B. INTRODUCCIÃ“N
```

Pasar los pÃ¡rrafos narrativos a `src/views/Introduccion.vue`.

### SÃ­ntesis

Ubicar la secciÃ³n equivalente a:

```txt
SÃNTESIS
D. SÃNTESIS
```

Pasar los pÃ¡rrafos narrativos a `src/views/sintesis.vue`.

Reglas comunes:

- Cada pÃ¡rrafo narrativo del Word se convierte en una etiqueta `p`.
- No incluir rÃ³tulos de diagramas, textos duplicados ni fragmentos pertenecientes a imÃ¡genes.
- Conservar la estructura visual existente de la plantilla.

### Texto alternativo de la sÃ­ntesis

Si el Word contiene comentarios con el prefijo:

```txt
Texto alternativo:
```

usar el comentario correspondiente a la sÃ­ntesis para completar el atributo `alt` de:

```pug
img(src="@/assets/curso/sintesis.svg", alt="")
```

## 10. Configurar la actividad didÃ¡ctica

Desde `Actividad_didactica_CFXX.docx` o su variante institucional equivalente, completar `src/views/Actividad.vue`.

Campos generales:

| Campo del Word | Destino |
| --- | --- |
| `Objetivo de la actividad` | `introduccion`, precedido por `<b>Objetivo:</b>` |
| Mensaje de aprobaciÃ³n | `mensaje_final_aprobado` |
| Mensaje de no aprobaciÃ³n | `mensaje_final_reprobado` |

Reglas por pregunta:

- Cada bloque `Pregunta N` se convierte en un objeto.
- La opciÃ³n marcada con `X` queda con `esCorrecta: true`.
- Las demÃ¡s opciones quedan con `esCorrecta: false`.
- Mantener `barajarRespuestas: true`.
- Validar que cada pregunta tenga exactamente una respuesta correcta.

Reglas de imÃ¡genes:

- Las imÃ¡genes se toman desde `src/assets/actividad/`.
- Identificar cuÃ¡ntas imÃ¡genes `imagen#.png` existen realmente en el proyecto.
- Asignarlas en secuencia y reiniciar el ciclo al llegar al final.
- Ejemplo: si existen `imagen1.png` a `imagen4.png`, la pregunta 5 vuelve a usar `imagen1.png`.

## 11. ValidaciÃ³n final

Antes de cerrar la maquetaciÃ³n:

- Verificar que `titulo.js`, `global.js`, router, vistas y actividad correspondan al mismo componente.
- Confirmar que el nÃºmero de temas del menÃº coincida con las rutas y archivos `Tema#.vue`.
- Confirmar que todos los `hash` del menÃº existan como anclajes en las vistas.
- Confirmar que glosario, referencias, introducciÃ³n, sÃ­ntesis y actividad ya no conserven textos genÃ©ricos.
- Ejecutar el formateador del proyecto si los archivos modificados lo requieren.

## Registro de aplicaciÃ³n por componente

Esta secciÃ³n se actualiza cada vez que la guÃ­a se aplique a un proyecto concreto.

Formato sugerido:

```txt
Componente aplicado: CFXX
Documento principal usado: fuentes/CF_XX_*.docx
Documento de actividad usado: fuentes/Actividad_didactica_CFXX.docx
Estado: pendiente / en progreso / completado
Observaciones: ...
```


## AplicaciÃ³n actual

```txt
Componente aplicado: CF01
Documento principal usado: fuentes/13350039_CF01_DI.docx
Documento de actividad usado: fuentes/Actividad_didactica_CF_01.docx
DiseÃ±o usado: fuentes/CF1_13350039.xd
Estado: completado
Observaciones: el proyecto actual dispone de imagen1.png a imagen10.png para la actividad; la secuencia se reutilizÃ³ de forma cÃ­clica en las 20 preguntas.
```

```txt
Componente aplicado: CF02
Documento principal usado: fuentes/13350039_CF02_DI.docx
Documento de actividad usado: fuentes/Actividad_didactica_CF02.docx
Diseño usado: fuentes/CF2_13350039.xd
Estado: completado
Observaciones: se creó una primera maquetación textual con cuatro temas, anclajes, tablas, glosario, referencias, introducción, síntesis y actividad didáctica. El proyecto dispone de imagen1.png a imagen10.png para la actividad; la secuencia se reutilizó de forma cíclica en las 20 preguntas. No se exportaron recursos visuales del archivo .xd.
```

```txt
Componente aplicado: CF03
Documento principal usado: fuentes/CF_03_228146.docx
Documento de actividad usado: fuentes/Actividad_didactica_CF03.docx
Diseño usado: fuentes/CF03_228122.xd
Estado: en progreso
Observaciones: se completó la estructura textual inicial con cinco temas, 22 anclajes, tablas, glosario, referencias, introducción, síntesis y 20 preguntas. El proyecto dispone de imagen1.png a imagen4.png para la actividad y se reutilizan de forma cíclica. Está pendiente la exportación y aplicación detallada de recursos visuales del archivo .xd.
```

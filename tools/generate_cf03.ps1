$ErrorActionPreference = 'Stop'

Add-Type -AssemblyName System.IO.Compression.FileSystem

function Read-WordXml([string]$Path) {
  $zip = [System.IO.Compression.ZipFile]::OpenRead((Resolve-Path $Path))
  try {
    $entry = $zip.GetEntry('word/document.xml')
    $reader = [System.IO.StreamReader]::new($entry.Open())
    try { return [xml]$reader.ReadToEnd() } finally { $reader.Dispose() }
  } finally { $zip.Dispose() }
}

function Get-NodeText($Node, $Ns) {
  return (($Node.SelectNodes('.//w:t', $Ns) | ForEach-Object { $_.'#text' }) -join '').Trim()
}

function Escape-PugText([string]$Text) {
  $clean = $Text -replace "`r|`n", ' '
  $clean = $clean -replace '\s{2,}', ' '
  if ($clean.Length % 2 -eq 0) {
    $half = $clean.Length / 2
    if ($clean.Substring(0, $half) -eq $clean.Substring($half)) {
      $clean = $clean.Substring(0, $half)
    }
  }
  return $clean.Trim()
}

function Js([string]$Text) {
  return ($Text -replace '\\', '\\' -replace "'", "\'" -replace "`r|`n", ' ').Trim()
}

function Write-Utf8([string]$Path, [string]$Content) {
  $absolute = [System.IO.Path]::GetFullPath((Join-Path (Get-Location) $Path))
  [System.IO.File]::WriteAllText($absolute, $Content, [System.Text.UTF8Encoding]::new($false))
}

$mainDoc = Read-WordXml 'fuentes/CF_03_228146.docx'
$ns = [System.Xml.XmlNamespaceManager]::new($mainDoc.NameTable)
$ns.AddNamespace('w', 'http://schemas.openxmlformats.org/wordprocessingml/2006/main')

$themes = @(
  @{ Number = 1; Title = 'Fundamentos de lógica y algoritmia'; Subs = [ordered]@{
      'Concepto de algoritmo' = 't_1_1';
      'Pensamiento algorítmico y solución de problemas' = 't_1_2';
      'Análisis del problema' = 't_1_3';
      'Lógica matemática y lógica proposicional' = 't_1_4';
      'Tipos de algoritmos' = 't_1_5'
    } },
  @{ Number = 2; Title = 'Metodologías para el diseño de algoritmos'; Subs = [ordered]@{
      'Metodologías de análisis y diseño de algoritmos' = 't_2_1';
      'Notación de algoritmos mediante seudocódigo' = 't_2_2';
      'Representación de algoritmos con diagramas de flujo' = 't_2_3';
      'Herramientas para la creación y prueba de algoritmos' = 't_2_4'
    } },
  @{ Number = 3; Title = 'Elementos básicos de la programación'; Subs = [ordered]@{
      'Identificadores y palabras reservadas' = 't_3_1';
      'Variables, constantes, contadores y acumuladores' = 't_3_2';
      'Tipos de datos (enteros, reales, booleanos)' = 't_3_3';
      'Operadores y jerarquía de operadores' = 't_3_4'
    } },
  @{ Number = 4; Title = 'Estructuras de control y estructuras de datos'; Subs = [ordered]@{
      'Estructura secuencial' = 't_4_1';
      'Estructuras condicionales' = 't_4_2';
      'Estructuras de iteración o repetitivas (for, while)' = 't_4_3';
      'Estructuras de datos básicas: vectores y matrices' = 't_4_4'
    } },
  @{ Number = 5; Title = 'Programación modular y pruebas de algoritmos'; Subs = [ordered]@{
      'Concepto de programación modular' = 't_5_1';
      'Características de los módulos según funcionalidad' = 't_5_2';
      'Errores comunes en algoritmos' = 't_5_3';
      'Parámetros de entrada y salida en los módulos' = 't_5_4';
      'Pruebas de escritorio o trazas de algoritmos' = 't_5_5'
    } }
)

$bodyNodes = @($mainDoc.SelectNodes('//w:body/*', $ns))
$developmentIndex = -1
$synthesisIndex = -1
for ($i = 0; $i -lt $bodyNodes.Count; $i++) {
  $text = Get-NodeText $bodyNodes[$i] $ns
  if ($text -eq 'DESARROLLO DE CONTENIDOS:') { $developmentIndex = $i }
  if ($developmentIndex -ge 0 -and $text -eq 'SÍNTESIS') { $synthesisIndex = $i; break }
}

foreach ($theme in $themes) {
  $lines = [System.Collections.Generic.List[string]]::new()
  $lines.Add('<template lang="pug">')
  $lines.Add('.curso-main-container.pb-3')
  $lines.Add('  BannerInterno')
  $lines.Add('  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5')
  $lines.Add('    .titulo-principal.color-acento-contenido(data-aos="flip-up")')
  $lines.Add('      .titulo-principal__numero')
  $lines.Add("        span $($theme.Number)")
  $lines.Add("      h1 $($theme.Title)")

  $active = $false
  $tableNumber = 0
  for ($i = $developmentIndex + 1; $i -lt $synthesisIndex; $i++) {
    $node = $bodyNodes[$i]
    $text = Escape-PugText (Get-NodeText $node $ns)

    if ($text -eq $theme.Title) { $active = $true; continue }
    if ($active -and ($themes.Title -contains $text)) { break }
    if (-not $active -or -not $text) { continue }

    if ($theme.Subs.Contains($text)) {
      $id = $theme.Subs[$text]
      $number = $id.Substring(2) -replace '_', '.'
      $lines.Add('')
      $lines.Add('    Separador')
      $lines.Add("    #$id.titulo-segundo.color-acento-contenido(data-aos=`"fade-left`")")
      $lines.Add("      h2 $number $text")
      continue
    }

    if ($node.LocalName -eq 'tbl') {
      $tableNumber++
      $rows = @($node.SelectNodes('./w:tr', $ns))
      $lines.Add('    .tabla-a.color-acento-contenido.mb-5')
      $lines.Add('      table')
      for ($rowIndex = 0; $rowIndex -lt $rows.Count; $rowIndex++) {
        $cells = @($rows[$rowIndex].SelectNodes('./w:tc', $ns))
        $lines.Add('        tr')
        foreach ($cell in $cells) {
          $cellText = Escape-PugText (Get-NodeText $cell $ns)
          $tag = if ($rowIndex -eq 0) { 'th' } else { 'td' }
          $lines.Add("          $tag $cellText")
        }
      }
      continue
    }

    if ($text -match '^Tabla \d+\.') {
      $lines.Add("    p.text-center.fw-bold.mb-2 $text")
    } elseif ($text -match '^Figura \d+\.') {
      $lines.Add("    p.text-center.fw-bold.mb-4 $text")
    } elseif ($text.Length -gt 900) {
      # SmartArt text is often duplicated and concatenated in the Word XML.
      continue
    } else {
      $lines.Add("    p.mb-3 $text")
    }
  }

  $lines.Add('')
  $lines.Add('</template>')
  $lines.Add('')
  $lines.Add('<script>')
  $lines.Add('export default {')
  $lines.Add("  name: 'Tema$($theme.Number)',")
  $lines.Add('  mounted() {')
  $lines.Add('    this.$nextTick(() => this.$aosRefresh())')
  $lines.Add('  },')
  $lines.Add('  updated() {')
  $lines.Add('    this.$aosRefresh()')
  $lines.Add('  },')
  $lines.Add('}')
  $lines.Add('</script>')
  Write-Utf8 "src/views/Tema$($theme.Number).vue" ($lines -join "`n")
}

$activityDoc = Read-WordXml 'fuentes/Actividad_didactica_CF03.docx'
$activityNs = [System.Xml.XmlNamespaceManager]::new($activityDoc.NameTable)
$activityNs.AddNamespace('w', 'http://schemas.openxmlformats.org/wordprocessingml/2006/main')
$rows = foreach ($row in $activityDoc.SelectNodes('//w:tr', $activityNs)) {
  ,@($row.SelectNodes('./w:tc', $activityNs) | ForEach-Object { Get-NodeText $_ $activityNs })
}

$objective = ($rows | Where-Object { $_[0] -eq 'Objetivo de la actividad' } | Select-Object -First 1)[1]
$approved = ($rows | Where-Object { $_[0] -like 'Mensaje cuando supera*' } | Select-Object -First 1)[1]
$failed = ($rows | Where-Object { $_[0] -like 'Mensaje cuando el porcentaje*' } | Select-Object -First 1)[1]
$questions = [System.Collections.Generic.List[object]]::new()
$current = $null
foreach ($row in $rows) {
  if ($row[0] -match '^Pregunta (\d+)$') {
    if ($current) { $questions.Add($current) }
    $current = [ordered]@{ Id = [int]$Matches[1]; Text = $row[1]; Options = [System.Collections.Generic.List[object]]::new(); Correct = ''; Incorrect = '' }
  } elseif ($current -and $row[0] -match '^Opción ([a-d])\)') {
    $current.Options.Add([ordered]@{ Id = $Matches[1]; Text = $row[1]; Correct = ($row.Count -gt 2 -and $row[2] -match 'X') })
  } elseif ($current -and $row[0] -eq 'Comentario respuesta correcta') {
    $current.Correct = $row[1]
  } elseif ($current -and $row[0] -eq 'Comentario respuesta incorrecta') {
    $current.Incorrect = $row[1]
  }
}
if ($current) { $questions.Add($current) }

$activity = [System.Collections.Generic.List[string]]::new()
$activity.Add('<template lang="pug">')
$activity.Add('.curso-main-container.pb-3')
$activity.Add('  BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")')
$activity.Add('  .container.tarjeta.tarjeta--blanca.p-4.p-md-5')
$activity.Add('    #Actividad')
$activity.Add('      Actividad(:cuestionario="cuestionario")')
$activity.Add('</template>')
$activity.Add('')
$activity.Add('<script>')
$activity.Add("import Actividad from 'ecored-pkg-fliz/plugin/components/actividad/Actividad.vue'")
$activity.Add('export default {')
$activity.Add("  name: 'ActividadDidactica',")
$activity.Add('  components: { Actividad },')
$activity.Add('  data: () => ({')
$activity.Add('    cuestionario: {')
$activity.Add("      tema: 'Fundamentos de algoritmia y solución de problemas',")
$activity.Add("      titulo: 'Cuestionario',")
$activity.Add("      introduccion: '<b>Objetivo:</b> $(Js $objective)',")
$activity.Add('      barajarPreguntas: true,')
$activity.Add("      titulo_aprobado: '¡BUEN TRABAJO!',")
$activity.Add("      titulo_reprobado: 'VUELVA A INTENTARLO.',")
$activity.Add('      preguntas: [')
foreach ($question in $questions) {
  $imageNumber = (($question.Id - 1) % 4) + 1
  $activity.Add('        {')
  $activity.Add("          id: $($question.Id),")
  $activity.Add("          texto: '$(Js $question.Text)',")
  $activity.Add("          imagen: require('@/assets/actividad/imagen$imageNumber.png'),")
  $activity.Add('          barajarRespuestas: true,')
  $activity.Add('          opciones: [')
  foreach ($option in $question.Options) {
    $correctText = if ($option.Correct) { 'true' } else { 'false' }
    $activity.Add("            { id: '$($option.Id)', texto: '$(Js $option.Text)', esCorrecta: $correctText },")
  }
  $activity.Add('          ],')
  $activity.Add("          mensaje_correcto: '$(Js $question.Correct)',")
  $activity.Add("          mensaje_incorrecto: '$(Js $question.Incorrect)',")
  $activity.Add('        },')
}
$activity.Add('      ],')
$activity.Add("      mensaje_final_aprobado: '$(Js $approved)',")
$activity.Add("      mensaje_final_reprobado: '$(Js $failed)',")
$activity.Add('    },')
$activity.Add('  }),')
$activity.Add('}')
$activity.Add('</script>')
Write-Utf8 'src/views/Actividad.vue' ($activity -join "`n")

Write-Output "Generadas $($themes.Count) vistas y $($questions.Count) preguntas para CF03."

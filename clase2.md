# Anatomía de un documento HTML

Los elementos HTML no son muy útiles por sí mismos. Ahora veremos cómo combinar los elementos individuales para formar una página HTML completa:  
~~~
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Mi página de prueba</title>
  </head>
  <body>
    <p>Esta es mi página</p>
  </body>
</html>
~~~

`<!DOCTYPE html>` esta etiqueta no indica que se trata de la última versión de html.  
`<html></html>`: El elemento `<html>`. Este elemento envuelve todo el contenido de la página. A veces se lo conoce como el elemento raíz.  
`<head></head>`: El elemento `<head>` (cabecera). Este elemento actúa como contenedor para todos los parámetros que quieras incluir en el documento HTML que no serán visibles a los visitantes de la página. Incluye cosas como palabras clave y la descripción de la página que quieras mostrar en los resultados de búsqueda, así como la hoja de estilo para formatear nuestro contenido, declaraciones de codificación de caracteres y más.  
`<meta charset="utf-8">`: Este elemento establece que tu documento HTML usará la codificación UTF-8, que incluye la gran mayoría de caracteres de todos los idiomas humanos escritos. En resumen: puede gestionar cualquier contenido textual que pongas en tu documento. No hay razón para no configurar este valor y te puede ayudar a evitar problemas más adelante.  
`<title></title>`: El elemento `<title>`. Este establece el título de la página, que es el título que aparece en la pestaña del navegador en la que se carga la página. El título de la página también se utiliza para describir la página cuando se marca como favorita.  
`<body></body>`: El elemento `<body>`. Contiene todo el contenido que quieres mostrar a los usuarios cuando visitan tu página, ya sea texto, imágenes, vídeos, juegos, pistas de audio reproducibles o cualquier otra cosa.  

## ¿Qué hay en la cabecera HTML?

La cabecera HTML es el contenido del elemento `<head>`, a diferencia del contenido del elemento `<body>` (que sí se muestra en la página cuando se carga en el navegador), el contenido de la cabecera no se muestra en la página. Por el contrario, la función de la cabecera es contener los metadatos del documento.  

### Añadir un título

El elemento `<title>` se usa para poner un título al documento. Sin embargo, esto se puede confundir con el elemento `<h1>`, que se utiliza para poner un encabezado de nivel superior al cuerpo de tu contenido, esto también se conoce como el título de la página. **¡Pero son cosas diferentes!**  
- El elemento `<h1>` aparece en la página cuando se carga en el navegador, en general debería haber uno solo por página, para especificar el título del contenido de tu página.  
- El elemento `<title>` es un metadato que representa el título de todo el documento HTML (no del contenido del documento).

### Metadatos: el elemento meta

Los metadatos son datos que describen datos, y HTML tiene una forma «oficial» de introducir metadatos en un documento, el elemento `<meta>`. Hay diferentes tipos de elementos `<meta>` que se pueden incluir en el `<head>` de tu página, pero sólo vamos a explicar algunas cuestiones con las que seguramente te vas a encontrar, solo para que te hagas una idea.  
Muchos elementos `<meta>` incluyen atributos name y content:  
- name especifica el tipo de metadato del que se trata; es decir, qué tipo de información contiene.
- content especifica el contenido del metadato en sí.

Dos de esos metadatos que resultan útiles de incluir en tu página definen al autor de la página y proporcionan una descripción concisa de la página. 
~~~
<meta name="author" content="Chris Mills">
<meta name="description" content="El área de aprendizaje de MDN pretende proporcionar a los recién llegados a la web todo lo que deben saber para empezar a desarrollar páginas web y aplicaciones web.">
~~~
**Nota:**   
Muchas características `<meta>` ya no se usan. Por ejemplo, los motores de búsqueda ignoran el elemento `<meta>` (`<meta name="keywords" content="pon, tus, palabras clave, aquí">`), que se supone que facilita palabras clave para motores de búsqueda de forma que se determine la relevancia de esa página según diferentes términos de búsqueda, porque los spammers rellenaban la lista de palabras clave con cientos de palabras clave que sesgan los resultados.

### Agregar iconos personalizados a tu sitio

Para enriquecer un poco más el diseño de tu sitio puedes añadir en tus metadatos referencias a iconos personalizados, que se mostrarán en determinados contextos. El más común de ellos es el **favicon** (abreviatura de favorite icon - icono «favorito», referido al uso que se le da en las listas de «favoritos» o de marcadores («bookmarks»).

El humilde favicon ha existido durante muchos años. Es el primer icono de este tipo: un icono cuadrado de 16 píxeles que se utiliza en varios lugares. Es posible que veas (según el navegador) favicons que se muestran en la pestaña del navegador que contiene cada página abierta y junto a las páginas marcadas en el panel de marcadores.

Para añadir un favicon a tu página:
1. Guárdalo en el mismo directorio que la página index de tu sitio, en formato .ico (la mayoría de los buscadores admiten favicon en los formatos más comunes como .gif o .png, pero usar el formato ICO garantiza que funcionará hasta en Internet Explorer 6.)
2. Añade la siguiente línea de referencia en el `<head>` de tu HTML:  

~~~
<link rel="shortcut icon" href="favicon.ico" type="image/x-icon">
~~~

### Aplicar CSS y JavaScript a HTML

Prácticamente todos los sitios web usan CSS para darles un buen aspecto y JavaScript para añadir funcionalidades interactivas, como reproductores de vídeo, mapas, juegos y demás. La manera más habitual de añadir CSS y JavaScript a una página web es con los elementos `<link>` y el elemento `<script>`, respectivamente.
- El elemento `<link>` siempre debe ir dentro del `<head>` de tu documento. Este toma dos atributos, rel="stylesheet", que indica que es la hoja de estilo del documento, y href, que contiene la ruta al archivo de la hoja de estilo: 
~~~
<link rel="stylesheet" href="my-css-file.css">
~~~
- El elemento `<script>` también debería ir en el head, y debería incluir un atributo src con la ruta al JavaScript que quieres cargar, que básicamente le dice al navegador que cargue el JavaScript al mismo tiempo que el HTML de la página. Esto es útil porque hace que todo el HTML se cargue antes de ejecutar el JavaScript, para que no haya errores porque el JavaScript ha intentado acceder a un elemento HTML que todavía no existe. De hecho hay múltiples formas de gestionar la carga del JavaScript en una página, pero esta es «a prueba de bombas» para los navegadores modernos.
~~~
<script src="my-js-file.js"></script>
~~~
**Nota:**  
El elemento `<script>` puede parecer un elemento vacío pero no lo es, y por lo tanto necesita una etiqueta de cierre. En vez de apuntar a un archivo de script externo, también puedes colocar tu código dentro del elemento `<script>`.

### Establecer el idioma principal del documento
Por último, merece la pena mencionar que debes especificar el idioma de tu página. Esto se puede hacer añadiendo el atributo lang a la etiqueta de apertura del HTML:
~~~
<html lang="es">
~~~

## Elementos semánticos de HTML en el body 

Es bueno entender el significado global de todos los elementos definitorios de las secciones HTML en detalle; Por el momento, estas son las definiciones principales:
- `<main>` encierra el contenido particular a esta página. Utilizaremos `<main>` solamente una vez para cada página y lo situaremos directamente dentro del elemento `<body>`. Es mejor que no lo anidemos en otros elementos.
- `<article>` encuadra un bloque de contenido que tiene sentido por sí mismo aparte del resto de la página.
- `<section>` es parecido al elemento `<article>`, pero se usa más para agrupar cada parte de la página que, por su funcionalidad, constituye una sección en sí misma (por ejemplo un conjunto de titulares y resúmenes). Se considera una buena práctica comenzar cada una de estas secciones con un título de encabezado (heading); observa que podemos subdividir artículos (`<article>`) en distintas secciones (`<section>`), o también secciones en distintos artículos, dependiendo del contexto.
- `<aside>` incluye contenido que no está directamente relacionado con el contenido principal, pero que puede aportar información adicional relacionada indirectamente con él (resúmenes, biografías del autor, enlaces relacionados, etc.).
- `<header>` representa un grupo de contenido introductorio. Si este es «hijo» de un elemento `<body>`, se convertirá en el encabezado principal del sitio web, pero si es hijo de un elemento `<article>` o un elemento `<section>`, entonces simplemente será el encabezado particular de cada sección (por favor, no lo confundas con títulos y encabezados).
- `<nav>` contiene la funcionalidad de navegación principal de la página. Los enlaces secundarios, no entrarán en la navegación.
- `<footer>` representa un grupo de contenido al final de una página.


# Clase 4

## Imágenes

El elemento de imagen HTML `<img>` representa una imagen en el documento.  
Se trata de un elemento vacío (lo que significa que no contiene texto o etiqueta de cierre) que requiere de por lo menos de un atributo para ser utilizado: src (a veces denominado por su nombre completo, source). 

**Nota:**   
Los navegadores no siempre muestran la imagen a la que el elemento hace referencia. Es el caso de los navegadores no gráficos (incluyendo aquellos usados por personas con discapacidad visual), sí el usuario elige no mostrar la imagen, o sí el navegador es incapaz de mostrarla porque no es válida o soportada. En ese caso, el navegador la reemplazará con el texto definido en el atributo **alt**.  
~~~
<img src="mdn-logo-sm.png" alt="Logo MDN">
~~~

### Atributos elementales

**src**  
La URL de la imagen. Este atributo es obligatorio para el elemento `<img>`.
**alt**  
Este atributo define el texto alternativo que describe la imagen, texto que los usuarios verán si la URL de la imagen es errónea o la imagen tiene un formato no soportado o si la imagen aún no se ha descargado.
**height**  
La altura de la imagen en píxeles.
**width**  
El ancho de la imagen en píxeles.

### ¿Qué hay que escribir exactamente en el atributo alt? 

Esto depende en primer lugar de por qué la imagen está en ese lugar. En otras palabras, qué se pierde si la imagen no aparece:
- **Decoración:** Para las imágenes decorativas deberían utilizarse imágenes de fondo CSS. Pero si es inevitable usar HTML, la mejor forma de hacerlo es con alt="". Si la imagen no es parte del contenido, el lector de pantalla no debería malgastar el tiempo en leerla.
- **Contenido:** Si tu imagen proporciona información significativa, proporciona la misma información en un texto alternativo (alt) breve. O mejor aún, en el texto principal que todos pueden ver. No escribas texto alternativo redundante. Si la imagen se describe en el cuerpo principal del texto de modo adecuado, puedes simplemente usar alt="".
- **Enlace:** Al poner una imagen dentro de una etiqueta `<a>` para convertirla en un enlace, aun debes proporcionar texto de enlace accesible. En tal caso podrías escribirlo dentro del mismo elemento `<a>`, o dentro del atributo alt de la imagen. Lo que mejor funcione en tu caso.
- **Texto:** No deberías poner tu texto en imágenes.  Si tu título de encabezado principal necesita, por ejemplo, un sombreado paralelo, usa CSS para ello en vez de poner el texto en una imagen. Pero, si realmente no puedes evitarlo, deberías proporcionar el texto en el atributo alt.


### Contenedores semánticos de imágenes

Utilizar los elementos HTML5 `<figure>` y `<figcaption>`. Estos se crearon exactamente para: proporcionar un contenedor semántico para las figuras y vincular claramente la figura con el pie. Por ejemplo:  
~~~
<figure>
  <img src="images/dinosaurio.jpg" alt="La cabeza y el torso de un esqueleto de dinosaurio; tiene una cabeza grande con dientes largos y afilados" width="400” height="341">
  <figcaption>Exposición de un T-Rex en el museo de la Universidad de Manchester.</figcaption>
</figure>
~~~

## Tablas

Una tabla es un conjunto estructurado de datos distribuidos en filas y columnas. Una tabla permite buscar con rapidez y facilidad valores entre diferentes tipos de datos que indiquen algún tipo de conexión.

Para usuarios de lectores de pantalla se debe utilizar el marcado adecuado para realizar una asociación programática entre los elementos de la tabla. Cuando el marcado HTML adecuado está en su lugar, los usuarios de lectores de pantalla pueden navegar a través de las tablas de datos una celda a la vez, y escucharán los encabezados de columna y fila.

### Leyendas de tabla
Las tablas de datos suelen tener un breve texto descriptivo antes o después de la tabla que indica el contenido de esa tabla. Este texto debe asociarse a su tabla respectiva utilizando el `<caption>` elemento. El `<caption>` elemento debe ser lo primero después de la `<table>` etiqueta de apertura.  
Si bien no es necesario que cada tabla tenga un título, un título suele ser muy útil. 

### Identificar encabezados de fila y columna
Un paso fundamental para crear una tabla de datos accesible es designar encabezados de fila y/o columna. En el marcado, el `<td>` elemento se usa para celdas de datos de tabla y el `<th>` elemento se usa para celdas de encabezado de tabla. 

Los encabezados de las tablas nunca deben estar vacíos. Esto suele ser  común para la celda superior izquierda de algunas tablas.

### El atributo scope  
Este atributo identifica si un encabezado de tabla es un encabezado de columna o un encabezado de fila.

El scope atributo le dice al navegador y al lector de pantalla que todo dentro de una columna, que está asociado al encabezado con scope="col", en esa columna, y que una celda con scope="row" es un encabezado para todas las celdas en esa fila.

Todos los elementos `<th>` deben tener siempre un atributo de alcance (scope). Si bien los lectores de pantalla pueden adivinar correctamente si un encabezado es un encabezado de columna o un encabezado de fila según el diseño de la tabla, la asignación de un alcance hace que esto sea inequívoco.

~~~
<table>
	<caption>Fecha de cumpleaños de amigos</caption>
	<tr>
		<th scope="col">Nombre</th>
		<th scope="col">Provincia</th>
		<th scope="col">Fecha cumple</th>
	</tr>
	<tr>
		<th scope="row">Ana</th>
		<td>Salta</td>
		<td>28 de julio</td>
	</tr>
	<tr>
		<th scope="row">Juan</th>
		<td>Córdoba</td>
		<td>8 de agosto</td>
	</tr>
</table>
~~~

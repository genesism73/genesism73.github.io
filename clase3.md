# clase 3

## Listas
Las listas están en todos los aspectos de nuestra vida: desde la lista de compras a la lista de instrucciones que sigues inconscientemente para llegar a casa todos los días, o las listas de instrucciones que sigues en estos tutoriales. Las listas están en todos lados en la web también y hay tres diferentes tipos de listas:  

### Listas no ordenadas
Las listas no ordenadas se usan para marcar listas de artículos cuyo orden no es importante. Por ejemplo, una lista de compras:
- manzana
- pera
- sandía
- uva

Cada lista desordenada comienza con un elemento `<ul>` (unordered list) que delimita todos los elementos de la lista.  
El siguiente paso es delimitar cada artículo de la lista con un elemento `<li>` (list item):  
~~~
<ul>
  <li>manzana</li>
  <li>pera</li>
  <li>sandía</li>
  <li>uva</li>
</ul>
~~~

### Listas ordenadas
Las listas ordenadas son aquellas en las que el orden de los elementos *sí* importa.  
La estructura de marcado es la misma que para las listas no ordenadas, excepto que debes delimitar los elementos de la lista con una etiqueta `<ol>` (ordered list), en lugar de `<ul>`:
~~~
<ol>
  <li>Conduce hasta el final de la calle</li>
  <li>Gira a la derecha</li>
  <li>Sigue derecho por las dos primeras glorietas</li>
  <li>Gira a la izquierda en la tercer glorieta</li>
</ol>
~~~

### Lista descriptiva
El elemento HTML `<dl>`  representa una lista descriptiva. El elemento encierra una lista de grupos de términos (especificados con el uso del elemento `<dt>`) y de descripciones (proveídas con elementos `<dd>`). 
~~~
<p>Navegadores</p>
<dl title=”Navegadores”>
	<dt>Chrome</dt>
	<dd>Un navegador.</dd>
<dt>Firefox</dt>
	<dd>Otro navegador.</dd>
</dl>
~~~

## Enlaces o links
Un enlace básico se crea incluyendo el texto, que queramos convertir en un enlace usando un elemento ancla <a>, dándole un atributo href (también conocido como «Hypertext Reference», «target» u objetivo) que contendrá la dirección web hacia dónde queremos que apunte el enlace.  
~~~
<p>Crea un enlace a <a href="https://www.mozilla.org/es-ES/">la página de inicio de Mozilla</a>.
</p>
~~~

### Buenas prácticas en el uso de los enlaces
**Redacción clara del enlace**  
Hay que lograr que nuestros enlaces sean accesibles para todo tipo de lectores, sin importar el contexto o las herramientas que prefieran. Por ejemplo:  
- Los usuarios de lectores de pantalla suelen saltar de enlace a enlace en la página y los leen todos sin contexto.
- Los motores de búsqueda utilizan el texto de los enlaces para indizar los archivos buscados, por lo que es una buena idea incluir palabras clave al definir el texto de los enlaces para describir de forma efectiva el sitio al que apuntan.
- Los usuarios visuales suelen echar un vistazo rápido a la página y leen solo lo que les interesa, en lugar de leer todo el texto palabra por palabra, y sus miradas van directamente a las características destacadas de la página, como son los enlaces. Este tipo de usuarios encuentra útiles los textos descriptivos que estos contienen.

**Otras indicaciones:**
- No repetir la URL como parte del texto.
- No escribir "link" o "link a" o "enlace" o "enlace a" en el texto del enlace porque es redundante. Los lectores automáticos indican que hay un enlace al encontrarlo. Los usuarios también saben que hay un enlace, porque normalmente se suele cambiar el color del texto y se subraya 
- Redacta la etiqueta del enlace de la manera más breve y concisa posible 
- Minimiza los casos en los que varias copias del mismo texto están vinculadas a diferentes lugares. Esto puede causar problemas a los usuarios de lectores de pantalla, si hay una lista de enlaces fuera de contexto que están etiquetados como "haz clic aquí", "haz clic aquí", "haz clic aquí".






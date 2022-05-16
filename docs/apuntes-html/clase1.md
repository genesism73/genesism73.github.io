# ¿Qué es el HTML?

HTML ("Hypertext Markup Language") no es un lenguaje de programación. Es un lenguaje de marcado que le dice a los navegadores web cómo estructurar las páginas web que estás visitando. Puede ser tan complejo o tan simple como desee el desarrollador web. El HTML consiste en una serie de elementos, que puedes utilizar para encerrar, delimitar o marcar diferentes partes del contenido para hacer que aparezcan de una cierta manera, o actúen de determinada forma. Las etiquetas que delimitan un fragmento de contenido pueden hacer que dicho contenido enlace con otra página, ponga una palabra en cursiva, etcétera. Por ejemplo, dada la siguiente línea de contenido:  
Mi gato es muy gruñón  
Si queremos que la línea sea independiente de otras, podemos especificar que es un párrafo encerrándola con una etiqueta de elemento de párrafo (<p>):
~~~
<p>Mi gato es muy gruñón</p>
~~~
**Nota:** Las etiquetas en HTML no distinguen entre mayúsculas y minúsculas. Así que se pueden escribir tanto en mayúsculas como en minúsculas. Por ejemplo, una etiqueta <title> se puede escribir como `<title>, <TITLE>, <Title>, <TiTle>`, etc., y funcionará correctamente. La mejor práctica, sin embargo, es escribir todas las etiquetas en minúsculas para mantener la coherencia y legibilidad, entre otros motivos.

## Anatomía de un elemento HTML
Exploremos un poco el elemento párrafo:
 
Las principales partes de nuestro elemento son:  
* La etiqueta de apertura: consiste en el nombre del elemento (en este caso, p), encerrado entre paréntesis angulares de apertura y cierre (mayor que y menor que). Esta etiqueta de apertura marca dónde comienza el elemento o comienza a tener efecto. En este ejemplo, precede al comienzo del texto del párrafo.
* El contenido: Este es el contenido del elemento. En este ejemplo, es el texto del párrafo.
* La etiqueta de cierre: Es lo mismo que la etiqueta de apertura, excepto que incluye una barra diagonal antes del nombre del elemento. Esto indica dónde termina el elemento; en este caso, dónde finaliza el párrafo. No incluir una etiqueta de cierre es un error común de principiante, y puede conducir a extraños resultados.  
El elemento lo conforman la etiqueta de apertura, seguida del contenido, seguido de la etiqueta de cierre.

### Elementos anidados
Se pueden poner elementos dentro de otros elementos. Esto se llama anidamiento. Si quisiéramos decir que nuestro gato es muy gruñón, podríamos encerrar la palabra muy en un elemento `<strong>` para que aparezca destacada.
~~~
<p>Mi gato es <strong>muy</strong> gruñón.</p>
~~~
Hay una forma correcta e incorrecta de anidar. En el ejemplo anterior, primero abrimos el elemento p, luego abrimos el elemento strong. Para un anidamiento adecuado, primero debemos cerrar el elemento strong, antes de cerrar el p.
El siguiente es un ejemplo de la forma incorrecta de anidar:
~~~
<p>Mi gato es <strong>muy gruñón.</p></strong>
~~~
Los elementos tienen que abrirse y cerrarse correctamente para que estén claramente dentro o fuera el uno del otro. Con el tipo de superposición en el ejemplo anterior, el navegador tiene que adivinar tu intención. Este tipo de adivinanzas puede producir resultados inesperados.

### Elementos de bloque y elementos en línea
Hay dos categorías importantes de elementos en HTML. Estos son los elementos de bloque y los elementos en línea.

Los elementos de bloque forman un bloque visible en la página. Aparecerán en una línea nueva después de cualquier contenido anterior. Cualquier contenido que vaya después también aparecerá en una línea nueva. Los elementos a nivel de bloque suelen ser elementos estructurales de la página. Por ejemplo, un elemento a nivel de bloque puede representar encabezados, párrafos, listas, menús de navegación o pies de página. Un elemento a nivel de bloque no estaría anidado dentro de un elemento en línea, pero podría estar anidado dentro de otro elemento a nivel de bloque.

Los elementos en línea están contenidos dentro de elementos de bloque y delimitan solo pequeñas partes del contenido del documento; (no párrafos enteros o agrupaciones de contenido) Un elemento en línea no hará que aparezca una nueva línea en el documento. Suele utilizarse con texto. Por ejemplo es el caso de un elemento `<a>` (hipervínculo) o elementos de énfasis como `<em>` o `<strong>`.

Considera el siguiente ejemplo:
~~~
<em>primero</em><em>segundo</em><em>tercero</em>
<p>cuarto</p><p>quinto</p><p>sexto</p>
<em> es un elemento en línea. 
~~~
Así, como puedes observar, los tres primeros elementos se sitúan en la misma línea, uno tras otro sin espacio entre ellos. Por otro lado, `<p>` es un elemento a nivel de bloque. Cada elemento `<p>` aparece en una nueva línea, con un espacio arriba y abajo. (El espaciado se debe al estilo CSS predeterminado que el navegador aplica a los párrafos).

Nota: Los términos «en bloque» (block) y «en línea» (inline), tal como se usan en este tema, no se deberían confundir con los tipos de casillas de CSS que se conocen con el mismo nombre. Aunque de manera predeterminada están relacionados, el hecho de cambiar el tipo de aspecto visual del CSS no cambia la categoría del elemento ni afecta a aquellos elementos que pueda contener. Una de las razones por las que HTML5 abandonó el uso de estos términos fue para evitar este tipo de confusión.

### Elementos vacíos
No todos los elementos siguen el patrón de etiqueta de apertura, contenido y etiqueta de cierre. Algunos elementos consisten solo en una etiqueta única, que se utiliza generalmente para insertar/incrustar algo en el documento en el lugar donde se le quiere incluir. Por ejemplo, el elemento `<img>` inserta una imagen en la página:
~~~
<img src="firefox-icon.png">
~~~
Nota: Los elementos vacíos en ocasiones también se llaman elementos nulos (void elements).

### Atributos
Los elementos también pueden tener atributos. Los atributos tienen este aspecto:
~~~
<p class="nota">Mi gato es muy gruñón</p>  
~~~
Donde class="nota" es un atributo de p.

Los atributos contienen información extra sobre el elemento que no se mostrará en el contenido. En este caso, el atributo class asigna al elemento un identificador que se puede utilizar para dotarlo de información de estilo.
Un atributo debería tener:  
* Un espacio entre este y el nombre del elemento. (Para un elemento con más de un atributo, los atributos también deben estar separados por espacios).
* El nombre del atributo, seguido por un signo igual.
* Un valor del atributo, rodeado de comillas de apertura y cierre.

Otro ejemplo de un elemento es `<a>`. Esto significa ancla. Una ancla puede convertir el texto que encierra en un hipervínculo. Las anclas pueden tener varios atributos, por ejemplo:
* href: El valor de este atributo indica la dirección web a la que se quiere que apunte el enlace, que será hacia donde nos lleve el navegador cuando se haga clic sobre el elemento. Por ejemplo, href="https://www.mozilla.org/".
* title: El atributo title añade información adicional sobre el enlace, como puede ser el título de la página que vinculas. Por ejemplo, title="La página de inicio de Mozilla". Esta información aparecerá cuando se le pase el ratón por encima.
* target: El atributo target especifica el contexto de navegación que va a usar para mostrar el enlace. Por ejemplo, target="_blank" abrirá el enlace en una nueva pestaña. Si quieres mostrar el enlace en la pestaña activa, simplemente omite este atributo.
* id: identifica al elemento y debe ser único. Referencia: H93 
* lang: cambios en el idioma.

### Atributos booleanos
En ocasiones puedes ver atributos escritos sin valor. Esto está permitido. Estos se denominan atributos booleanos. Los atributos booleanos solo pueden tener un valor, que generalmente es el mismo que el nombre del atributo. Por ejemplo, considera el atributo disabled, que puedes asignar a los elementos de entrada del formulario. (Usa esto para deshabilitar los elementos de entrada del formulario para que el usuario no pueda realizar entradas. Los elementos desactivados suelen tener una apariencia atenuada). Por ejemplo:
~~~
<input type="text" disabled="disabled">
~~~
De manera abreviada, también es posible escribirlo como se describe a continuación (además, se ha incluido un elemento de entrada de formulario no desactivado como referencia, para dar una idea más precisa de lo que sucede):
~~~
<!-- el uso del atributo deshabilitado evita que el usuario final introduzca texto en el cuadro de entrada -->
<input type="text" disabled>
<!-- se permite la entrada de texto, ya que no contiene el atributo deshabilitado -->
<input type="text">
~~~
Omitir comillas en valores de atributos
Cuando observas diferentes páginas web, puedes encontrarte con todo tipo de estilos de etiquetado extraños, que incluyen valores de atributos sin comillas. Esto se permite en ciertas circunstancias, pero interrumpirá la edición en otras. Por ejemplo, si volvemos a revisar el ejemplo del enlace, sería posible escribir una versión básica con solo el atributo href, así:
~~~
<a href=https://www.mozilla.org/>mi sitio web favorito</a>
~~~
Sin embargo, las cosas no funcionarán cuando a este estilo se añade el atributo title:
~~~
<a href=https://www.mozilla.org/ title=The Mozilla homepage>mi sitio web favorito</a>
~~~
En este punto el navegador interpretará mal el cambio y pensará que el atributo title corresponde a tres atributos: un atributo title con el valor The y dos atributos booleanos: Mozilla y homepage. 

Incluye siempre las comillas de atributos. Evita tales problemas y da como resultado un código más legible.

¿Comillas simples o dobles?  
En este artículo todos los atributos se han incluido en comillas dobles. Sin embargo, se pueden ver comillas simples en algún código HTML. Es una cuestión de estilo. Puedes elegir libremente cuál prefieres. Ambas líneas de código son equivalentes:
~~~
<a href="http://www.ejemplo.com">Un enlace a mi ejemplo.</a>
<a href='http://www.ejemplo.com'>Un enlace a mi ejemplo.</a>
~~~
Nota: Los atributos no deben estar duplicados. 

## Comentarios HTML
En HTML hay un mecanismo para escribir comentarios en el código. Los comentarios son ignorados por el navegador y, por tanto, son invisibles para el usuario. El propósito de los comentarios es permitirte incluir notas en el código para explicar tu lógica o codificación. Esto es muy útil si regresas a un código base después de estar ausente el tiempo suficiente como para no recordarlo por completo. Del mismo modo, los comentarios son invaluables ya que diferentes personas están realizando cambios y actualizaciones.

Para convertir en un comentario una sección de contenido de tu archivo HTML, debes delimitarlo con los marcadores especiales `<!-- y -->`. Por ejemplo:
~~~
<p>No soy un comentario</p>
<!-- <p>¡Yo sí!</p> -->
~~~

## Fundamentos de texto en HTML
Conceptos básicos: Encabezados y párrafos  
La mayor parte del texto estructurado está compuesto por encabezados y párrafos, independientemente de si lees una historia, un periódico, un libro de texto, una revista, etc.

El contenido estructurado simplifica la experiencia en la lectura y se disfruta más.

En HTML, cada párrafo tiene que estar delimitado por un elemento `<p>`, como en este ejemplo:
~~~
<p>Soy un párrafo, ¡desde luego que lo soy!</p>
~~~
Cada sección tiene que estar delimitada por un elemento de encabezado:
~~~
<h1>Yo soy el título de la historia</h1>
~~~
Hay seis elementos de encabezado: `<h1>, <h2>, <h3>, <h4>, <h5> y <h6>`. Cada elemento representa un nivel de contenido diferente en el documento; `<h1>` representa el título principal, `<h2>` representa el subtítulo, `<h3>` representa el subtítulo del subtítulo, y así sucesivamente.
Por ejemplo, en esta historia, `<h1>` representa el título de la historia, `<h2>` representará el título de cada capítulo y `<h3>` las diferentes secciones del capítulo, y así sucesivamente.
~~~
<h1>El agujero aplastante</h1>

<p>Por Chris Mills</p>

<h2>Capítulo 1: La oscura noche</h2>

<p>Era una noche oscura. En algún lugar, un búho ululó. La lluvia azotó el ...</p>

<h2>Capítulo 2: El silencio eterno</h2>

<p>Nuestro protagonista ni susurrar pudo al ver esa sombría figura ...</p>

<h3>El espectro habla</h3>

<p>Habían pasado varias horas más, cuando de repente el espectro se incorporó y exclamó: "¡Por favor, ten piedad de mi alma!"</p>
~~~

* Debes usar solo un `<h1>` por página; este es el nivel de título superior, y todos los demás se sitúan por debajo de él en la jerarquía.
* Asegúrate de que usas los títulos en el orden correcto en la jerarquía. No uses los `<h3>` para representar subtítulos, seguidos de los `<h2>` para representar los subtítulos de los subtítulos; eso no tiene sentido y provocará resultados extraños.
* De los seis niveles de títulos disponibles, debes procurar no usar más de tres por página, a menos que creas que es realmente necesario. Los documentos con muchos niveles (es decir, una jerarquía de títulos muy profunda) son de difícil manejo y navegación. En esos casos se recomienda, si es posible, separar el contenido en varias páginas.

Contamos con la semántica para todo lo que nos rodea. Nos basamos en experiencias previas para conocer la función de cada objeto cotidiano; cuando miramos un objeto, sabemos cuál debe ser su función. Entonces, por ejemplo, esperamos que un semáforo en rojo signifique "alto" y que un semáforo en verde signifique "avance". Las cosas se pueden complicar muy rápidamente si se aplica la semántica incorrecta. (¿Algún país usa rojo para significar "avance"? Esperemos que no).

De manera similar, debemos asegurarnos de que utilizamos los elementos adecuados y damos a nuestro contenido el significado y función correctos y la apariencia adecuada. En este mismo sentido, el elemento `<h1>` es un elemento semántico que da al texto al que delimita la función (o significado) de un titular de primer nivel en tu página.
~~~
<h1>Este es un titular de primer nivel</h1>
~~~
De manera predeterminada, el navegador le asignará una fuente de gran tamaño para darle el aspecto de un titular (aunque se le podrá dar el estilo que se quisiera usando CSS). Lo más importante es que su valor semántico se va a usar de diferente manera, por ejemplo, por los motores de búsqueda y los lectores de pantalla (como se mencionó antes).

Por otra parte, podrías hacer que cualquier elemento parezca un titular de primer rango. Considera lo siguiente:
~~~
<span style="font-size: 32px; margin: 21px 0;">¿Es este un titular de primer rango?</span>
~~~
Este es un elemento `<span>`. No tiene semántica. Se usa para delimitar contenido cuando se le quiere aplicar CSS (o tratarlo con JavaScript) sin proporcionarle ningún significado extra. Hemos aplicado CSS a este elemento para que parezca un titular de primer nivel, pero al no tener valor semántico, no tiene ninguna de las ventajas añadidas que hemos descrito antes. Es una buena idea usar el elemento HTML apropiado para cada tarea.

## Saltos de línea y líneas horizontales
Dos elementos que debes conocer y utilizarás ocasionalmente son `<br> y <hr>`.  
~~~
<br /> Salto de línea
<hr /> Línea horizontal
~~~
## Énfasis e importancia
En el lenguaje humano, a menudo enfatizamos ciertas palabras para alterar el significado de una frase, y a menudo queremos destacar ciertas palabras como importantes o diferentes en algún sentido. HTML nos dota de diversos elementos semánticos que nos permiten destacar contenido textual con tales efectos, y en esta sección veremos los más comunes.

### Énfasis
Cuando queremos dar énfasis al lenguaje hablado, acentuamos ciertas palabras y así alteramos sutilmente el significado de lo que decimos. De manera similar, en el lenguaje escrito ponemos palabras en cursiva para destacarlas. 

En HTML usamos el elemento `<em>` («emphasis») para marcar estos casos. El documento logra entonces transmitir una lectura más interesante y además así lo reconocen los lectores de pantalla, que lo expresan con un diferente tono de voz. El navegador, de manera predeterminada, aplica el estilo de letra itálica, pero no debes utilizar esta etiqueta solamente para establecer el estilo de letra itálica. Para usar ese estilo, debes utilizar únicamente la etiqueta del elemento <span> y algo de CSS u otra etiqueta con el elemento <i> (ve abajo).
~~~
<p>Me <em>alegro</em> de que no llegues <em>tarde</em>.</p>
~~~
### Importancia fuerte
Para enfatizar palabras importantes al hablar solemos acentuarlas, y al escribir lo hacemos en estilo negrita.

En HTML usamos el elemento `<strong>` (importancia fuerte) para marcar tales expresiones. El documento resulta entonces más útil, y de nuevo los lectores de pantalla reconocen estos elementos y el tono de voz cambia a uno más fuerte. El estilo negrita es el que aplican los navegadores por omisión, pero no debes usar esta etiqueta solamente para aplicar este estilo. Para hacer eso usa el elemento `<span>` y CSS, o un elemento `<b>`.
- Si solo quieres que aparezca en negrita, sin dotar de significado de importancia especial al texto, deberías envolverlo en algún elemento neutro (como `<span>`) y aplicarle la propiedad font-weight.
- Si además realmente la frase o contenido en cuestión tiene especial importancia en un contenido, el uso de `<strong>` le da un enfoque semántico e indicará a los buscadores este hecho.
- La etiqueta `<b>` se usa muy poco en la actualidad. Ocupa menos que la anterior y está reconocida por el estándar y por los navegadores, pero es un vestigio del pasado y realmente no la necesitas. Sería mejor usar la anterior si quieres darle el significado de importante. Salvo que requieras denotar varios niveles de importancia, como hemos visto más arriba.

### Cursiva, negrita, subrayado...
Los elementos que hemos comentado hasta ahora tienen asociada una semántica clara. La situación con `<b>` (negrita o «bold»), `<i>` (cursiva o «italic») y `<u>` (subrayado o «underline») es algo más complicada. Surgieron para que las personas pudieran escribir textos en negrita, cursiva o subrayado en un tiempo en el que pocos navegadores o ninguno admitían el CSS. Elementos como estos, que solo afectan a la presentación y no a la semántica, se conocen como elementos de presentación y no se deberían usar porque, como hemos visto, la semántica es muy importante para la accesibilidad y el SEO, entre otros aspectos.

Una observación prudente acerca del subrayado: La gente suele asociar estrechamente el subrayado con los hipervínculos. Por ello en la web es mejor reservar el subrayado para los enlaces. Utiliza el elemento `<u>` cuando resulte apropiado semánticamente, pero considera usar CSS para cambiar el subrayado predeterminado por algo más adecuado en la web.

[Volver a la página de Inicio](index.md)  

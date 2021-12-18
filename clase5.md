# Formularios

## ¿Qué son los formularios?

Los formularios web son uno de los principales puntos de interacción entre un usuario y un sitio web o aplicación. Los formularios permiten a los usuarios la introducción de datos, que generalmente se envían a un servidor web para su procesamiento y almacenamiento, o se usan en el lado del cliente para provocar de alguna manera una actualización inmediata de la interfaz.

El HTML de un formulario web está compuesto por uno o más controles de formulario, además de algunos elementos adicionales que ayudan a estructurar el formulario general. Los controles pueden ser campos de texto de una o varias líneas, cajas desplegables, botones, casillas de verificación o botones de opción, y se crean principalmente con el elemento `<input>`, aunque hay algunos otros elementos que también hay que conocer.

Los controles de formulario también se pueden programar para forzar la introducción de formatos o valores específicos (validación de formulario), y se combinan con etiquetas de texto que describen su propósito para los usuarios con y sin discapacidad visual.

## El elemento `<form>`

El elemento `<form>` define formalmente un formulario y los atributos que determinan el comportamiento del formulario. Cada vez que desees crear un formulario HTML, debes empezar utilizando este elemento y anidando todo el contenido dentro de él. Muchas tecnologías de asistencia y complementos del navegador pueden descubrir elementos `<form>` e implementar códigos de apoyo especiales para que sean más fáciles de usar.  
- El atributo action define la ubicación (URL) donde se envían los datos que el formulario ha recopilado cuando se validan.
- El atributo method define con qué método HTTP se envían los datos (generalmente get o post).

### El elemento input

El elemento `<input>` permite el ingreso de datos, el atributo más importante es type. Este atributo es muy importante porque define la forma en que el elemento `<input>` aparece y se comporta. 
El atributo type puede ser de diferentes tipos:
- text: campo de texto básico que permite el ingreso de texto de una sola linea 
- email: campo de texto de una sola línea que solo acepta una dirección de correo electrónico.
- date: permite el ingreso de una fecha
- submit: genera un botón para enviar el formulario

### La etiqueta label

Por motivos de usabilidad y accesibilidad incluimos una etiqueta explícita para cada control de formulario. Ten en cuenta el uso del atributo for en todos los elementos `<label>`, que toma como valor el id del control de formulario con el que está asociado; así es como asocias un formulario con su etiqueta.

Hacer esto presenta muchas ventajas porque la etiqueta está asociada al control del formulario y permite que los usuarios con ratón, panel táctil y dispositivos táctiles hagan clic en la etiqueta para activar el control correspondiente, y también proporciona accesibilidad con un nombre que los lectores de pantalla leen a sus usuarios.

### El elmento textarea

Esta etiqueta representa un campo de texto multilínea. No es un elemento vacío, lo que significa que debe tener una etiqueta de apertura y una de cierre.  

### El atributo placeholder

El atributo placeholder en elementos `<input>` y `<textarea>` provee una ayuda a los usuarios acerca de qué debe ser ingresado en el campo. El texto introducido en el placeholder no debe contener «enters» o saltos de línea.

Ejemplo de formulario:

~~~
<form action="" method="post">
    <label for="nombre">Nombre:</label>
    <input type="text" id="nombre" name="nombre">
    <label for="mail">Correo electrónico:</label>
    <input type="email" id="mail" name="mail">
    <label for="mensaje">Mensaje:</label>
    <textarea id="mensaje" name="mensaje" placeholder="Escriba su mensaje aquí"></textarea*> 
    <input type="submit">
 </form>
 ~~~

### Los elementos fieldser y legend

El elemento `<fieldset>` es una forma cómoda de crear grupos de controles de formulario (también denominados widgets) que comparten el mismo propósito, con fines semánticos y de aplicación de estilo. Puedes etiquetar un elemento `<fieldset>` incluyendo un elemento `<legend>` justo debajo de la etiqueta de apertura `<fieldset>`. El contenido textual del elemento `<legend>` describe el propósito del elemento `<fieldset>` que está incluido dentro.

Muchas tecnologías de asistencia utilizarán el elemento `<legend>` como si fuera una parte de la etiqueta de cada control dentro del elemento `<fieldset>` correspondiente. 

### Radio y  checklist

El elemento input, teniendo el valor "radio" en su atributo type, representa una opción que pertenece a un grupo en el que no más de una opción puede ser seleccionada al mismo tiempo. Estos grupos están normalmente conformados por un número de botones de opción, todos compartiendo el mismo valor en el atributo name.  
Para que un conjunto de botones de opción pertenezcan al mismo grupo, todos ellos deberían tener el mismo valor en el atributo name.

En contraste con las casillas de verificación o checklist, el valor del atributo value juega un papel fundamental para los botones de opción. Cuando el formulario es enviado solo la opción seleccionada es enviada con el formulario al agente procesador, quien no tiene otra forma de decidir qué opción ha sido seleccionada más que mirando al valor (value) del control enviado. Este es el motivo por el cual el atributo value de cada opción debe ser único en el grupo.

### Select

El elemento `<select>` de HTML representa un control que muestra un menú de opciones. Las opciones contenidas en el menú son representadas por elementos `<option>`. Tanto select como option deben tener etiquetas de apertura y de cierre.



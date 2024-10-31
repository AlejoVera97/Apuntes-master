## WEB SEMANTICA

Son etiquetas con significado.

Ejemplos de etiquetas semanticas son : Form, table, Article.
Ejemlo de etiquetas no semanticas: Div, Span.

##Header
Encabzado de una agina , seccion o articulo.

-Inclye elemetnos como logo, teto introductorio ,menus de navegacion.
-Puee haber multiples headrs en una misma  pagina
No puede haber un heade dentro de un footer o de otro header.
 
 <div class="header">
 <nav></nav>

 <header class="header">
 <nav></nav>




 ## Footer

 Es el pie de pagina de un sitio web o de una seccion. 

 -puede haber multiples footer de una misma pagina
 -puede incluir informacion: como 
    informacion de contacto
    enlaces a rrss
    mapa de sitio
    formulario de contacto
    creditos.


## Nav 

un conjunto de enelaces de navegacion.
No todos los links deben estar dentro de nav, ya que los reades pueden omitir los  navs al ller el contenido.

## Main

El contenedor para el contenido princnipal de la pagina.
debe haber un solo (no puede haber multiples en la misma pagina)
el mismo no debe incluir contendio de oras secciones por ejeplo , logos, isdebar, navegacion, etc.
no puede ser hijo de etiquetas: artcicle, aside, footer, header, nav.

## Aside

Define un contenido relacionado indirectamente con el contenido princial. por ejemplo:un sideba.
elementos que sulen estan es:
    publicidad.
    biobliografia del ator
    enlaces relaciones 
    informacion de perfil.

## Section

Define un seccion de una pagina, donde se agrupa los contenidos realcionados , normalmemnte incluye un titulo.
una Web se compone de multiples secciones, y cada una con su propio contenido y proposito.

ejemplos:
Capitulo, introduccion, noticias, informacion de contacto. 


## Article

Define un contenido indepentiende el mismo puede ser compartido o reutilizado en otro sitio sin requierir contexto.
Suele incluir un titulo.
Ejemplos de uso:
puede ser un post de un blog.
un arituclo de una revista
un comentario de un usuario.

tanto las secciones como los artiuclos puede estar uno dentro del otro.

## Figure 

Define elementos autocontenidos, como una imagen, un diragrama o tabla, una fotografia.
Dentro de la misma se suele utlizar  la etiquta "igcaption" para describir dicho contenido.

<figure>
<img src="">
<figcaption> 
</fig>


## mark

Define un texto resaltado  normalme se muestra con un fondo amarrillo.  <mark> Texto resaltado </mark>

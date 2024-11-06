# Unidades de medida en CSS: px, %, em , rem.

## Pixeles: 
Son unidades absolutas que representan un punto en la pantalla. Son ideales para matanos que deber precisos y no cambiar en relacion a otros elementos . No se adaptan a disenos responsive.


# Porcentaje
Es una unidad relativa al tamano del elemento padre. Por ejemplo, si un elemento tiene 200px y el hijo tiene 50% , entonces el elemento ocupara 100px.

# Em
La unidad Em es relativa al tama;ao de la fuente del elemtno padre.
Por ejemplo si el padre tiene font-side: 10 px , cada em es de 10px.
Esta unidad es util para crear tamanos de textos y margenes que escalen con el tamano de la fuente. Esto mejora la accesibilidad y flexividad del diseno.

# Rem (root EM)
Es relativa al tamamno de fuente de nuestro elemento raiz ( normalmente es el html)
POr defecto esta es de 16px. Rem es util para mantener una escala consistente en el documento, independientemente en la estrucutra del DOM.

# NOMBRES DE VARIABLES (Y SELECTORES)

-UPPERCASE (toodo en mayusculas)
-lowercase (todos en minusculas)
-Title case (titulos)
-camelCase: 'miClase'
-MascalCase: 'MiClase' 
-kebab-case: 'mi-clase' (archivos)
-sanke_case: 'mi_clase' 

# Especificadad

La especifidad es la forma en lo que los navegadores que reglas de CSS
se aplican a un elemento. Mientras mas especificas mas peso tendra , pero tambien
sera mas dificil de sobreescribir.

Valores que se calculan sumando puntos de tres columnas:

REGLAS:
1-Primer clomuna representa un ID
2-Segunda columna son para clases y sus atributos y ademas para pseudo clases. (:hover),(root),(requird).
3-Tercer columna es para etiquetas p,form,strong,main y sus pseudo.



```css
 .caja{
    backgorud:red;
 }
.box:hover{
    backgound: green;
}
#soyCaja{
    backgourd:blue;
}
'''

```
html
<div id="soyCaja" class="caja box">
<\div>
```

# BEM Css  https://getbem.com/

<button class="boton">
</button>

<div class="tarjeta">
    <img  class="tarjeta__img" src="" alt="">
    <h3 class="tarjeta__titulo"> titulo </h3>
    <p class="tarjeta__texto"> soy un parajo </p>
</div>

# Nomeclatura BEM

-sus nombres son en kebab-case

-bloques:".boton" ".fomulario" ".navegacion"

-elemtnos: son hijos de bloques. Ejemplo: ".formulario__checkbox" ".formulario__boton".

-modificaciones : clases que modifican tanto elemetnos como bloques.
                  Ejemlpos: ".fomulario__boton--disabled"
                            ".fomulario__checkbox--disabled"
                            .[bloque]__[elemento]--[modificar]. {reglas de css}

/*en vez de tener algo como: */
.header .nav .nav-item .nav-link

pasamos a tener:
.header{}
.header__nav{}
.header__nav-item {}
.header__nav-link{}
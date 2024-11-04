
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




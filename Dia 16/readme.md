
Es un sistema para creacion de layouts del estilo de tablas. Se compone de filas y columnas y se pueden anidar uno dentro de otros. una ventaja fuerte a lex es que  

* utilizamos display grid para crear un grid y grid-template-coliums y 
y grid-templete-rows para definir el numero de filas y columnas que tendra mi grid.

```
css
.conteinar{
    display:grid
    grid-template-rows:100px,100px 50px;
    grid-template-columns: 100px 100px 100px;

}
```

podemos indicar a cada item donde  posicionarlo con las reglas de grid-rows-start,
grid-row-end , grid-colum-start- grid-column-end.
Tener en cuenta que se cuenta desde 1.

Si queremos qe un item ocupe 3 columnas y 1 fila , deberiamos idnciar que comience en la columna 1 y termine en la comlumna 4.

```css
Tenemos un conteiner de 3 filas y 4 columnas
.item-1{
    grid-column-star:1;
    grid-column-end:4;
    grid-row-start:1;
    grid-row-end:2;
}


Se pueden invertir el start y el end.
Existen los numeros de filas y columnas negatvios para seleccionar desde el final del grid.
En vez de seleccionar inicio y fin de fila/columna podemos usar span para indicar cuando se expande nuestro grid.

con la regla grid-gap para defeinir un espacio entre fila y columnas.
# Emmet

ver emmet.html


# Variables en CSS

Se pueden crear variables para reutilizar valores en distintas partes del codigo.

- Mejorar la legibilidad del codigo
-Facilitar la actiulizacion de los valores.

Se pueden crear de manera global en la raiz del documento, que el caso de webs es <html>

En otros casos ejemplos en imagenes SVG, es etiqueta<svg>

Ejemplo de uso en bootstrap:


``` css

:root{
    --blue: #1e9ff;
    --white:#fff;
    --danger: red;
    --primary: #aaaccb;
}

.container.dark-mode{
    --primary: #bbbaac;
}

.container{
    background-color: var(--blue);
    color: var(--white);
}


```

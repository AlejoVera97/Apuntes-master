# Transition CSS

Es una forma de cambiar los valores de una propiedad de manera suave y gradual. Se pueden applicar valores numericos o que de color.
Por ejemplo: cambiar tama;o, color de fondo , opacidad , etc.

Propiedades numericas:
width
height
font-side
padding
margin
border-width
opacity
trasnform

Propiedades de coolor
color
background
border-color
box-shadow

## como se define
Propiedades de transition y opueden personalizar de la siguiente manera.

Transition-property: nos indica la propeidad que se animara.

Transition-duration: duracion de la animacion

Transition-timing-funcition: la manera en que se llevara acabo la animacion.

Transition-delay: demora antes de que incide la animacion.

``` css

div{
    transition-property: font-size;
    transition-duration: 4s;
    transition-delay: 2s;
    transition-timing-function: eease-in-out;
}

POdemos unificar las 4 reglas en 1: 
transition: fon-side 4s ease-in-out 2s;
lineal: constante;
ease-in: lento-rapido;
ease-out: rapido-lento;
cubic-zeier(); -timing
```

# Cuvic-bezier
Es una funcion que me permite crear una curva de velocidad personalizada.
https://cubic-bezier.com
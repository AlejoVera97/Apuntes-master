# Scope (alcance de variables)

En JS las variables tienes 3 diferentes alcances.



## Gobal
Son asseccibles desde cualquier parte del codigo.
```js

let nombre="Juan";
function saludar(){
    console.log("hola"+ nombre);
}
saludar();
```





## Local
Son varibles definidas dentro de funciones de codigo.

```js
function saludar(){
    let nombre="Juan";
    console.log("hola"+ nombre);
}
console.log(nombre); // error porque la varible no esta definida.
saludar();
```




## Bloque
Las varibales con `let` o `const` dentro de un bloque(`{}`) solo son accesible dentro de 
ese bloque. Algunos ejemplos de bloque son el `if` o dentro de un `for`. 

```js
if(true){
    let nombre="Juan";
    console.log("hola" + nombre); //Hola juan
}
console.log("Hola" = nombre); // error porque no esta definido.
```



## Hoisting

En Js cuando definidimos una variable con "Var" estas se mueven al inicio del script.
Al usar let o const estas variblaes no se elevaran al inicio del Script( para evitar errores).




## Operadores de comparacion.
Se utilizan para comprar 2 valores
```js
let numero=11;
let esPar = (numero%2== 0); //false
let esImpar =(numero%2 ==1); //true
```

- Igual(==); comprar a ver si 2 valores son iguales
- Estrictamente igual(===); Si son iguales y del mismo tipo.
- Distinto (!=) : compara si 2 valores son distintos.
- Mayor que(>): compara si un valor es mayor que otro
- Menor que(<): compara si un valor es menor que otro
- Mayor o igual (=>) 
- Menor o igual (=<) 

```js
let num1="5";
let num2= 5;

const sonIguales= (num1==num2); // true 
const sonIguales=(num1===num2); // false
```


## Truthy / Falsy

Las variables en Js pueden tener un valor de "Truthy" o "Flasy" 
Un valor true es aquel que se evalua como verdadero en un contexto de booleano, mientras que el flase se evalua como falso.

Podemos usar esta propiedad apra la toma de decisiones en nuestro codigo.

```js
if(valor){
    //se ejecuta si el valor es truthy
    console.log("soy truthy");
}
    else{
        // se ejecuta si el valor es falsy
        console.log("Soy falsy");
    }
```


```js
let numero=16;
if(numero %2 ==0)
console.log("soy par");
else{
    console.log("soy impar");
}
```

## Reduccion de condicionales quitanto el else

Podemos simplicar nuestro codigo condicional quitanto el else.
Esto es util cuando no necesitamos un bloque falsy.

```js

let user="cei";
let pass="abc123";

let mensaje="Clave incorrecta";

if(pass.lenght<= 8){
    mesanje ="La pass debe tener al menos 8 caracteres"
    };
if(pass.includes("")){
    mensaje="La pass no puede tener espacio";
};

console.log(mensaje);
```


## Manipulacion de textos

1. Concatenacion

2. Interpolacion
    Con las plantillas literales(template literals) puede insertar variables o expresiones dentro de una cadena usando "${}"


3. Metodo de String
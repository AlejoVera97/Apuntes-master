## Mas tipos de datos

 - undefiend:  valor que se asigna una variable, pero que no tiene valor.
 - null: es un valor que se asinga a una variable que no tiene valor.
 - NaN: valor que se asigna cuando se esparaba un numero, pero no recibio ese numero.
 - Empty: string que devuelve un valor de '' o " ".
 - Funcion:
 - Fecha:


 ```js

 let noDefinido= undefiend;
 let nulo= null;
 let noEsUnNumero= Nan;
 let vacio= " ";
 let moverLaCola= fuction () {}
 let hoy= new date();
 ```

 Para ver que tipo de dato es una variable podemos usar el operador `typeof`

 ```js
 console.log(typeof noDefinido);
 ```

 ## Consola 
```js
//mensaje informativo
console.log("Mensaje informativo);

//mensaje de error
console.log("Este es un mensaje de error");

//mensaje de advertencia
console.warn("Es es un mensaje de advertencia");

//mensaje de informacion
console.info("mensaje de informacion");

//mesanje de depuracion
console.debug("Este es un mensaje de depuracion");

//mensaje data de datos
console.table(["Manzana" , "banana", "Cereza"]);
```


# Operadores aritmeticos

Se utilizan para operaciones matematicas en JS.

- Suma (+)
- Resta (-)
- Mulplicacion (*)
- Division (/)
- Modulo: (%)
- Incremento (++)
- Decremento (--)
-

```js
let a=10;
let b=5;

let suma= a+b;
let resta= a-b;
let multiplicar= a*b;
let division= a/b;
let modulo= a%b;
let incremento= a++;
let decremento= a--;

let resultado= a+miSuma;
```
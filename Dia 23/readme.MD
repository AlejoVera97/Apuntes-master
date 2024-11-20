# JavaScript

Es una lenguaje de programacion de alto nivel, interpretado y orientado a objetos. 
Se utiliza para crear contenido dinamico e interactivo en sitios web.

-Esta disenado para ser facil y de leer y escribir para humanos.

Interpretado:
- Se ejecuta linea por linea en tiempo real. No nesecita ser compliado.


```js
let numero=1;
console.log("mi numero vale: ", numero);

```



Orientada a objetos: 

JS utiliza un paradigma lo que significa que organiza el codigo en objetos.
Un objeto es una coleccion de propiedades y metodoso que se pueden leer y manipular.

Perro
//Propiedades
-Color
-Nombre
-Size

Metodos:
-ladrar():Hacer un ruido fuerte
-Comer (): ingerir alimentos
-moverLaCola(): demostrar felicidad. 

```js
//Ejemplo de un objeto con propiedades y metodos
let alumno = {
    nombre:"Juan",
    edad: 16,
    saludar: funcion(){
        console.log("Hola , mi nombre es Juan");
    }
}

// quiero imprimir los daots de mi alumno.
console.log(alumno.nombre); 
```

## Donde probar/ codificar JS

- En el navegador: en la pestana de la consola , escribirmos directamente.
- En etiquetas de html "<script></script>", en un principio se recomienda poner las etiquetas al final de body.
- Se puede usar con archivos externos con extension js y linkeado a nuestro a html.

Externos: 
- CodePen.
- JSfidde.
- 

## Funcionalidades 

1. Manipulacion del DOM ( Documentos Object Model): Agregar, modificar o elimnar elementos del HTML y CSS
2. Procesar formularios: Verificar datos ingresados por el usario y realizar complejos de multiples secciones.
3. Manejo de animaciones: manipular efectos visuales y animaciones en nuestra web.
4. Manejo de eventos: Responder a las acciones del usuario. Ej: Click, desplazarse por la web.
5. Comunicacion asincrona con servidores mediante Ajax/Fetch.


## Variables

- Son contenedores que utilizamos para guardar informacion. Esta info puede ser un numero , texto, lista y otros tipos mas.
Nos permite almacenar datos y luego usarlos, modificalos en diferentes partes de nuestro programa.
- En Js la variables se declara con la palabra 'Let' o 'const'. 

## Comentarios en JS

- Simple : //
- Siemplre en la misma linea : //
- Bloque : /*   */
- Comentario de documentacion: Se utiliza /**   */ de funciones y clases.

## tipos de datos 

- Numeros: enteros, decimales, positivos y negativos.
-  Cadena de texto(string)
- Booleanos: V o F .
- Lista (Arrays)
- Objeto : coleccion de propiedades y se escriben con {}


## Los objetos o arrays (son constantes)

## Listas

const AlumnosdeDW = [ "Daniel", "Jaime","Laura" ,"Liz"]
const edades= [25,23,24,25]

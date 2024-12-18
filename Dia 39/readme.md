# Funciones de callback/ promesas

## Concepto de sincronia vs asincronia

La asincronia es la ejecucion de tareas de un orden secuencial, es deunar una detras de otras.
Esto se una para :
-traer informacion de una bd
-traer informacion de una api
- Manipualar nuestro archivos

Para lograr esto, simplemente debemos enviar como parametro una funcion de callback que se ejecuta al finalizar la tarea asincrona.

```js
console.log("paso1");
traerDatos();
console.log("paso3")

 function traerDatos(){
    setTimeout()=>{
        console.log("paso2");
    ,3000);};
```



## Funciones de callback

Como debemos esperar a que una tarea asinrona termina para poder continuar on la siguiente , se utilizan callbacks para realizar una accion despues de que la tarea asincrona ha termiando.




## Promesas
La gran desventajas de los callbacks es que pueden anidar y se vuelven muy dificil de ller y mantener. A esto se le llama 
`callback hell`. Por eso se han creado las `promesas`.


Un promesa es una objeto que represant la terminacion o fracaso de una operacion asincrona.

Puede tener uno de estos 3 estados.
-pendiente: cuando aun no se ha complentado.
-resulta: (con revolve) , cuando se ha completado con extio.
- rechazada(con reject) cuando ocurrio un error.

```js
const miPromesa = new Promise((resolve, reject)=>{
    console.log("intentando hacer lo que te prometi");
    setTimeout(()=>{
        resolve("Exito");

        //reject ("Error");
    },3000);
})
miPromesa.then(resultado => console.log(resultado));
         .catch(error => console.log("tuvimos un error:" , error))
         .finally(()=>console.log("terminar la tarea con error o exito)");
```


## Fetch con promesas

uno de los usos fundamentale de las promesas es el fetch APi para hacer peticiones web.
funcion fetch():
```js
fetch("")
.then(reponse=>respone.json{
.then(datos=>{
    //traer los datos aca
})
.catch();

```


## Feth con async/await

```js
async function traerDatos(){
    
}
```
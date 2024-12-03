# BUCLES: for , foreach , while ,do-while;



- FOR :

Ejecutar un condigo por cantidad de veces. Muy util para trabajar con indices.
```JS
for(let i=0; i<10; i++)
console.log(i);
```

1) Crear una lista con los nombres de sus companeros y mostrarlos en consola con un bucle for.

```js
let compas=["a","b","c","d"];

for(let i=o; i<compas.leght, i++){
console.log(compas[i]);
}
```


-----------------------------------------------------------------


- FOREACH:
A diferencia de for , trabajmos directamente con un metodo de listas y podemos acceder tanto al valor como a su indicie. A diferencia que aca podemos poner variables a cada indice.
```js

const listaNumeros =[1,2,3,4,5,6];
listaNumeros.forEach((numero)=>{
    console.log('elemtno ${numero} y su indice es ${indice}');
});
```

2) Recrear el ejercicio 1 y usando foreach y mostrar el indice del alumno.

```js

const listaAlumnos =["Maria","Alin","Alejo","Lucia","Kristian","Begona"];


listaAlumnos.forEach((alumno,indice)=>{
    console.log(' ${indice++} ${alumno}');
});
```


- WHILE:

3) Ejercicio: crear un bucle while que le pida al usuario un numero (promot) y los vaya sumando hasta que el usuario ingrese el valor0. Mostar el total.

 ```js

 let i=0;
 while(i<10){
    console.log(i);
    i++;

 }
 ```

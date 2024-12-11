## Recordamos el uso de ForEach y Map

- La diferentencia entre uno y el otro es que el forEach no retorna nada , mientras que el map retorna un nuevo array con los resultados de la funcion que se le pasa.

```js
const numeros =[1,2,3,4,5];
const cuadrados =[];

// ejemplo utilizando forEach
numeros.forEach(num)=>{
    console.log(num);
    cuadrados.push(num);
});
console.log(cuadrados);



//ejemplo utilizando map

const cuadradosMap= numeros.map((num)=> num*num);
console.log(cuadradosMap);

```


## Metodos de busqueda dentro de array

Los metodos de bvusquedas se podrian considerar como un metodo map() modificada, que devuelve tanto elelemtnos como boollenaos.

```js
const coches = ["Peugeot","BMW","W","Telsa","Ford","BYD"];

// find
const coche= lista_coches.find((coche) => coche === BMW );
console.log(coche); //BMW

//Some ( booleano , si hay alguna que cumple el requisito)
const tieneTesla =lista_coches.some(coche=> coche ==="Telsa");
console.log(tieneTelsa); // true

//Every ( booleano, si TOdos cumplen el equisitio)
const todosEmpiezanConB = lista_coches.every(coche => coche === "B");
console.log(todosEmpiezanConB); // False

//Filter (todos los elelemtnso que cumplan el requisito)
const cochesConB= lista_coches.filter(coche => coche === "A");

const cochesConT= lista_coches.filter(conche=> coche.includes === "T");
console.log(cochesConT);

// coches con 3 letras
const cochesDeTresLetras= lista_coches.filter(coche => coche.lenght==3 );

```


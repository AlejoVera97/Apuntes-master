## REPASO DE OBJETOS.

```js
const alumno = {
  edad: 33,
  nombre: "Juan",
  saludar: function() {
    console.log(`Hola ${this.nombre}`);
  },
  saludarConFlecha: () => {
    console.log(this);  // El `this` dentro de una función flecha no hace referencia al objeto
    console.log(`Hola ${this.nombre}`);  // Esto no funcionará como esperas
  }
};

```
//1- Constantes y variables.
const sliderImages = document.querySelector('.Slider-images');
//const images = document.querySelectorAll('.Slider-img');
const images = [];
const btnNext = document.querySelector('#btnNext');
const btnPrev = document.querySelector('#btnPrev');
const spanActual = document.getElementById('actual');
const spanTotal = document.getElementById('total');
let currentImageIndex = 0;
let totalImages = images.length;

//Metodo 1
//listar imagenes desde un objeto JS
//const lista_imagenes_json = `[
  //  {
   //     "File": "imagen1.jpg",
  //      "Description": "imagen 1"
 ///   },
 //   {
 //       "File": "imagen2.jpg",
 //       "Description": "imagen 2"
 //   }, 
  //  {
 //      "File": "imagen3.jpg",
  //      "Description": "imagen 3"
//},
 //   {
  //      "File": "imagen4-long.jpg",
  //      "Description": "imagen 4"
 ////   },
//]`;

// convertimos de JSon a objeto
//const lista_imagenes = JSON.parse(lista_imagenes);

//metodo 3
//lista de imagenes obtenida desde una API
let lista_imagenes =[];
function traerImagenesAPI(){
    fetch('./bn.json')
   // .then (response => response.json())
    //.then (data=>(cargarImagenes));
    .then ( repuestaDeMiPromesa => respuestaDeMiPromesa.json())  
    .then (misDatos=> {
        lista_imagenes = misDatos;
        cargarImagenes();
    })


//2- EventListeners
btnNext.addEventListener('click', nextImage);
btnPrev.addEventListener('click', prevImage);


//3- Inicizalicion de codigo
function nextImage() {
    currentImageIndex++;
    if (currentImageIndex >= images.length) {
        currentImageIndex = 0;
    }
    actualizarSlider();
    actualizarContador();
}
function prevImage() {
    currentImageIndex--;
    if (currentImageIndex < 0) {
        currentImageIndex = images.length - 1;
    }
    actualizarSlider();
    actualizarContador();
}
function actualizarSlider() {
    const width = 400;
    sliderImages.style.transform = `translateX(${-width * currentImageIndex}px)`;
}
function actualizarContador() {
    spanActual.textContent = currentImageIndex + 1;
}
function cargarImagenes() {
    // metodo inseguro
    // console.log("Cargando imaganes del Objeto JavaScript lista_imagenes")
    lista_imagenes.map((imagen) => {
        //   sliderImages.innerHTML += `
        //   <img src="0"  onerror="alert('tengo acceso a tu navegador')" />
        //   <img class="Slider-img" src="./img/${imagen.File}" alt="${imagen.Description}">`;


        //metodo seguro
        const img = document.createElement('img');
        img.classList.add("Slider-img");
        img.src = `img/${imagen.File}`;
        img.alt = imagen.Description;

        sliderImages.appendChild(img);
        images.push(img);

    });


    //ahora que tenemos el HTMl cargado, contamos la cantidad imagenes.

    totalImages = images.length;
    spanTotal.textContent = totalImages;
    actualizarContador();
}

cargarImagenes();
agregarIntervalo();




// 4. Funcionalidad de intervalo
// para cuando paso el mouse por encima de SliderImages
sliderImages.addEventListener('mouseover', () => {
    //elimina cualquier timer guardado dentro de intervalos.
    clearInterval(intervalos);
});
sliderImages.addEventListener('mouseout', () => {
    agregarIntervalo();
});
function agregarIntervalo() {
    //guardo en intervalos 
    // crear un intervalo con setinterval(fucion,tiempo)
    intervalos = setInterval(nextImage, 1000);
}



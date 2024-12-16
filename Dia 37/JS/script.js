//1- Constantes y variables.
const sliderImages = document.querySelector('.Slider-images');
const images = document.querySelectorAll('.Slider-img');
const btnNext = document.querySelector('#btnNext');
const btnPrev = document.querySelector('#btnPrev');
const spanActual = document.getElementById('actual');
const spanTotal = document.getElementById('total');
let currentImageIndex = 0;
const totalImages = images.length;



//2- EventListeners
btnNext.addEventListener('click', nextImage);
btnPrev.addEventListener('click', prevImage);


//3- Ejecucion de codigo
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



spanTotal.textContent = totalImages;
actualizarContador();
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


    
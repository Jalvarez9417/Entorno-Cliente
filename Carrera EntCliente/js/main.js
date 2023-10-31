// Obtener elementos del DOM
var img1 = document.getElementById("img1");
var img2 = document.getElementById("img2");
var botonEmpezar = document.getElementById("comenzar");
var botonGanador = document.getElementById("ganador");
var stopButton = document.getElementById("detener");

// Variables de posición y velocidad
let position1 = 0;
let position2 = 0;
let speed1 = 5;
let speed2 = 5;
let intervalId;

// Función para mover las imagenes
const moverImagenes = () => {
  position1 += speed1;
  position2 += speed2;
  img1.style.marginLeft = position1 + "px";
  img2.style.marginLeft = position2 + "px";

  // Verificar si alguno ha llegado al final de la ventana
  //if (position1 >= window.innerWidth ) {
  if (position1 >= window.innerWidth - 150) {
    //Belén. Resto 150 aprox por el tamaño del coche.
    position1 = 0;
  }

  if (position2 >= window.innerWidth) {
    position2 = 0;
  }
};

// Función para iniciar la carrera
var comenzar = () => {
  botonEmpezar.disabled = true;
  botonGanador.disabled = true;
  stopButton.disabled = false;
  speed1 = 5;
  speed2 = 5;

  // Actualiza la posición cada 50 milisegundos
  intervalId = setInterval(moverImagenes, 50);
};

// Función para iniciar la carrera con una imagen más rápida que la otra
var carreraGanador = () => {
  botonEmpezar.disabled = true;
  botonGanador.disabled = true;
  stopButton.disabled = false;
  speed1 = 10;
  speed2 = 5;
  intervalId = setInterval(moverImagenes, 50); // Actualiza la posición cada 50 milisegundos
};

// Función para detener la carrera
var detenerCarrera = () => {
  var comenzar = document.getElementById("comenzar");
  var ganador = document.getElementById("ganador");
  var detener = document.getElementById("detener");

  comenzar.disabled = false;
  ganador.disabled = false;
  detener.disabled = true;

  clearInterval(intervalId);
};

/*
Muy bien Julio,
te he restado 150 px( aproximadamente lo que puede ocupar la iamgen) a window.innerWidth. Porque si no, se pasaba del 100% de la pantalla y salia la barra de 
desplazamiento horizontal.
*/

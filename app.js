const distancia = parseInt(prompt('Ingrese su distancia de recorrido, porfavor:', ''));

const result = distancia + ' metros';

if(Number.isNaN(distancia)){
  document.write('No se ha ingresado los numeros')
} else if(distancia == 0 || distancia <= 1000) {
  document.write('Te recomiendo viajar a pie');
} else if(distancia == 1000 || distancia <= 10000) {
  document.write('Te recomiendo viajar en bicicleta');
} else if(distancia == 10000 || distancia <= 30000) {
  document.write('Te recomiendo viajar en colectivo');
} else if(distancia == 30000 || distancia <= 100000) {
  document.write('Te recomiendo viajar en auto');
} else {
  document.write('Te recomiendo viajar en avion') }


const caja = document.querySelector('#caja');

const titulo = document.createElement('h1');
titulo.textContent = `${result}`;

caja.appendChild(titulo)


 if(titulo) {
   titulo.classList.add('texto')
 } else {
    titulo.classList.remove('texto');
 }
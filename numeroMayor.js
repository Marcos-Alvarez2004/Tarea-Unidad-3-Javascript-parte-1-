const numero1 = parseInt(prompt('Ingrese primer número', ''));
const numero2 = parseInt(prompt('Ingrese segundo número', ''));
const numero3 = parseInt(prompt('Ingrese tercer número', ''));

const result = [numero1, numero2, numero3];

if (numero1 > numero2 && numero1 > numero3) {
  document.write(`el mayor es el ${numero1}`);
} else if (numero2 > numero3) {
  document.write(`el mayor es el ${numero2}`);
} else {
  document.write(`el mayor es el ${numero3}`)
}

const caja = document.querySelector('#caja');

const titulo = document.createElement('h1');
titulo.textContent = `${result}`;


caja.appendChild(titulo)

 if(titulo) {
   titulo.classList.add('texto')
 } else {
    titulo.classList.remove('texto');
 }
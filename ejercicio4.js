//Utiliza un bucle para recorrer todas las cartas de la baraja, desde el 1 al 12 de cada palo. Imprime en pantalla solamente las cartas rojas que sea múltiplos de 3.

let baraja = 'cpdt';

for (i = 0; i < baraja.length; i++) {
   for (j = 1; j <= 12; j++) {
      if ((baraja[i] === 'c' || baraja[i] === 'd') && j % 3 === 0) {
         console.log(j + baraja[i] + ' es roja y multiplo de 3')
      }
   }
};
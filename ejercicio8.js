//Partiendo de la función anterior, modíficala para que además las cartas rojas sumen el doble.

let mano = [
  { palo: "d", valor: 1 },
  { palo: "c", valor: 4 },
  { palo: "t", valor: 3 },
];

function valorCartas(mano) {
  let valorAbsolute = mano.valor;
  if (mano.valor === 1) {
    valorAbsolute = 20;
  } else if (mano.palo === "d" || mano.palo === "c") {
    valorAbsolute = 2 * mano.valor;
  }
  return valorAbsolute;
}

function puntuaMano(mano) {
  total = 0;
  for (i = 0; i < mano.length; i++) {
    total = total + valorCartas(mano[i]);
  }
  return total;
}

let puntuacion = puntuaMano(mano);
console.log(puntuacion);

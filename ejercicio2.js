// Cuántas cartas con número par y negras hay en una baraja de poker

const palo1 = {
  name: 'corazones',
  color: "rojo",
  cartas: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
};
const palo2 = {
  name: 'picas',
  color: "negro",
  cartas: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
};
const palo3 = {
  name: 'treboles',
  color: "negro",
  cartas: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
};
const palo4 = {
  name: 'diameantes',
  color: "rojo",
  cartas: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
};
let parNegra = [];
for (i = 0; i < palo1.cartas.length; i++) {
  if (i % 2 === 0 && palo1.color === 'negro') {
    parNegra.push(i)
  }
};
for (i = 0; i < palo2.cartas.length; i++) {
  if (i % 2 === 0 && palo2.color === 'negro') {
    parNegra.push(i)
  }
}; 
for (i = 0; i < palo3.cartas.length; i++) {
  if (i % 2 === 0 && palo3.color === 'negro') {
    parNegra.push(i)
  }
};
for (i = 0; i < palo4.cartas.length; i++) {
  if (i % 2 === 0 && palo4.color === 'negro') {
    parNegra.push(i)
  }
};

console.log("En una baraja de poker hay " + parNegra.length + " cartas pares de color negro")
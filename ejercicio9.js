let Croupier = {};

Croupier.baraja = [
  { palo: "c", valor: 1 },
  { palo: "d", valor: 4 },
  { palo: "t", valor: 6 },
];

Croupier.mezclar = function () {
  this.baraja.reverse();
};
Croupier.mezclar();

Croupier.baraja[0].valor;

Croupier.repartir = function () {
  console.log(this.baraja[0].valor);
  console.log(this.baraja[0].palo);
};
Croupier.mezclar();
Croupier.repartir();

Croupier.puntuar = function (mano) {
  let total = 0;
  for (i = 0; i < mano.length; i++) {
    total = total + mano[i].valor;
  }
  return total;
};

Croupier.puntuar([
  { palo: "c", valor: 1 },
  { palo: "d", valor: 4 },
  { palo: "t", valor: 6 },
]);

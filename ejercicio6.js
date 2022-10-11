//Programa un ejemplo que almacene en un array todas las cartas de la baraja, cada una representada con 
//un diccionario que tenga un palo y un valor.
let baraja = [];
let palos = ["c", "p", "d", "t"];
for(i = 0; i < palos.length; i++){
  for(j = 1; j <= 12; j++){
    baraja[baraja.length] = {palo: palos[i], valor: j}
  };
};


//Partiendo del array que has construido en el ejercicio anterior, construye un algoritmo que filtre en un 
//nuevo array sólo las cartas rojas, y en otro array las cartas negras.

let cartasNegras = [];
for(i = 0; i < baraja.length; i++){
  if(baraja[i]. palo === "p" || baraja[i]. palo === "t"){
    cartasNegras[cartasNegras.length] = baraja[i]
  };
};

let cartasRojas = [];
for(i = 0; i < baraja.length; i++){
  if(baraja[i]. palo === "c" || baraja[i]. palo === "d"){
    cartasRojas[cartasRojas.length] = baraja[i]
  };
};

//. Partiendo del array que has construido en el ejercicio anterior, construye un algoritmo que filtre en un
// nuevo array las cartas rojas y pares. Luego imprime en la consola la última carta de ese nuevo array.

let rojasPares = [];
for(i = 0; i < cartasRojas.length; i++){
  if(cartasRojas[i].valor %2 === 0){
    rojasPares[rojasPares.length] = cartasRojas[i]
  };
};

console.log(baraja);
console.log(cartasRojas);
console.log(cartasNegras);
console.log(rojasPares);
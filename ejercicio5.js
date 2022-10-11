let cartas = ["5d", "3t", "2c", "12c"];
let founded = false;

for (i = 0; i < cartas.length; i++) {
   if (cartas[i] === "1c") {
      founded = true
   };
};

let result = []
for (i = 0; i < cartas.length; i++) {
   result[result.length] = cartas[i]
   if (cartas[i] === "3t") {
      result[result.length] = "1c"
   };
};

let result2 = [];
for (i = 0; i < cartas.length; i++) {
   if (cartas[i][1] === "d" || cartas[i][1] === "c" || cartas[i][2] === "c") {
      result2[result2.length] = cartas[i]
   };
};

console.log(founded, result, result2)
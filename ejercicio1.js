//calcular los años bisiestos desde el 2022 hasta el 2050

const esBisiesto = (year) => {
   return (year % 400 === 0) ? true :
      (year % 100 === 0) ? false :
         year % 4 === 0;

};

let years = [];
for (i = 2022; i <= 2050; i++){
  if (esBisiesto (i) === true){
    years.push(i)
  };
};

console.log(years);
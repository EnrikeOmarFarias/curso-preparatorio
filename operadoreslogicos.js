function mayor_menor_par(num) {
  if (num > 5 && num < 10 && num % 2 === 0) console.log(true);
  else console.log(false);
}

mayor_menor_par(7);
mayor_menor_par(8);

// Operador OR

function operador_or(str) {
  if (str === "henry" || str.length < 2) console.log(true);
  else console.log(false);
}

operador_or("henry");

function negacion(permiso) {
  if (!permiso) console.log("Tienen permiso");
  else console.log("Sin permiso");
}

negacion(true);
negacion(false);

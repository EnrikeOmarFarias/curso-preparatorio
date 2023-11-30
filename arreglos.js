var colores = ["rojo", "blanco"];

colores.push("Azul");
colores.unshift("verde");
colores.pop();
colores.shift();
console.log(colores);

var incluye_rojo = colores.includes("roja");
console.log(incluye_rojo);

var numeros = [1, 2, 3, 5, 8];
var cumplen_condicion = numeros.every((num) => {
  return num > 5;
});
console.log(cumplen_condicion);

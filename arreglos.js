var colores = ["rojo", "blanco"];

colores.push("Azul"); // Agregar elemento al final del arreglo
colores.unshift("verde"); // Agregar elementos al principio del arreglo
colores.pop(); // Elimina el ultimo elemento
colores.shift(); // Elimina el ultimo elemento
console.log(colores);

var incluye_rojo = colores.includes("roja");
console.log(incluye_rojo);

var numeros = [1, 2, 3, 5, 8];
var cumplen_condicion = numeros.every((num) => {
  return num > 5;
});
console.log(cumplen_condicion);

var listaDECompras = [];
listaDECompras[3] = "tomates";
console.log(listaDECompras[3]);

listaDECompras[1] = "Lechuga";
var elementosDElArray = listaDECompras[1];
console.log(elementosDElArray.length);

console.log(listaDECompras.length);

listaDECompras.push("Melon");
listaDECompras.unshift("Sandia");
listaDECompras.pop();
listaDECompras.shift();

console.log(listaDECompras);

var jugadores = ["Orteguita", "Enzo", "Aymar"];
var incluyeEnzo = jugadores.includes("Enzo");
console.log(incluyeEnzo);

var numerosPares = [2, 4, 6, 8];
numerosPares.every((num) => {
  num / 2 == 0;
});

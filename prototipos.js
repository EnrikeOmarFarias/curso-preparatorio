Array.prototype.mayores_que_tres = function () {
  var arreglo_modificado = [];

  for (let i = 0; i < this.length; i++) {
    if (this[i] > 3) {
      arreglo_modificado.push(false);
    } else {
      arreglo_modificado.push(this[i]);
    }
  }

  return arreglo_modificado;
};

var arreglo = [1, 2, 3, 4, 5];
var nuevo_arreglo = arreglo.mayores_que_tres();

console.log(nuevo_arreglo);

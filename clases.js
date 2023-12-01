function Auto(puertas, color, marca, ruedas, año) {
  this.puertas = puertas;
  this.color = color;
  this.marca = marca;
  this.ruedas = ruedas;
  this.año = año;

  this.informacion = function () {
    console.log("ESte es un " + this.marca + " de color " + this.color);
  };
}

var mi_primer_auto = new Auto(2, "rojo", "ferrari", 4, 2020);

mi_primer_auto.informacion();

console.log(mi_primer_auto);
console.log(mi_primer_auto.marca);

class Autito {
  constructor(puertas, color, marca, ruedas, año) {
    this.puertas = puertas;
    this.color = color;
    this.marca = marca;
    this.ruedas = ruedas;
    this.año = año;
  }

  informacion() {
    console.log("ESte es un auto " + this.marca + " de color " + this.color);
  }
}

mi_segundo_auto = new Auto(4, "Blanco", "Fiat", 4, 2015);

mi_segundo_auto.informacion();

console.log(mi_segundo_auto);
console.log(mi_segundo_auto.marca);

class Futbol {
  constructor(jugador) {
    this.jugador = jugador;
  }

  obtener_nombre() {
    console.log(this.jugador);
  }
}

var argentina = new Futbol("messi");
var brasil = new Futbol("pele");

argentina.obtener_nombre();
brasil.obtener_nombre();

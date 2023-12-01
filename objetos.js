var deportes = {
  con_balon: ["futbol", "basket", "golf"],
  sin_balon: ["boxeo", "surf", "trekking"],
};

var persona = { nombre: "Lucas", edad: 26, estudios: { esProgramador: true } };

console.log(persona.edad);

persona.nombre = "martin";
console.log(persona.nombre);

persona.edad = 62;
console.log(persona.edad);

var autos = {};
autos.marcas = ["ford", "fiat", "ferrari", "tesla"];
delete autos.marcas;
console.log(autos);

var misFunciones = {
  saladar: function () {
    console.log("hola");
  },
};

misFunciones.saladar();

var atuendos = { manos: ["guantes", "anillos"], pies: ["zapatos", "soquetes"] };

atuendos["piernas"] = ["bermudas", "pantalones"];

console.log(atuendos);

var comidas = {};
var diferenciaDeNotaciones = function (propUno, propDos) {
  comidas.propUno = ["frutas", "vegetales"];
  comidas[propDos] = ["hamburguesas", "papas fritas"];
};
diferenciaDeNotaciones("saludable", "nosaludable");
console.log(comidas);

var libro = { autor: "Borges", genero: "Policial", año: 1990 };
var tienePropiedad = libro.hasOwnProperty("nombre");
console.log(tienePropiedad);

var todasLasPropiedades = Object.keys(libro);
console.log(todasLasPropiedades);

var mundo = { continentes: 7, paises: 135, oceanos: 5 };
for (var prop in mundo) {
  console.log("esta es la propiedad: " + prop);
  console.log("este es el valor: " + mundo[prop]);
}

var mascota = {
  animal: "perro",
  raza: "callejero",
  amistos: true,
  dueña: "maria",
  info: function () {
    console.log("mi peror es un " + this.raza);
  },
};

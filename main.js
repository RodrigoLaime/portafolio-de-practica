const menuFlotante = document.querySelector("#menu1");
const iconoMenu = document.querySelector(".menu");

const arrow = document.querySelector('.arrow');

iconoMenu.addEventListener('click', abrirMenu)

arrow.addEventListener('click', cerrarMenu)


function abrirMenu(evento) {
  /* const openMenu = menuFlotante.classList.toggle("inactive")
  if (!openMenu){ */
    menuFlotante.classList.remove("inactive");
    evento.preventDefault();
  }
/* permite omitir recargargar automaticamente la pagina */
/* } */
function cerrarMenu(){
    menuFlotante.classList.add('inactive')
  }
/* z
z
z
z
z
z
z
z
z
z
 */
let saludar = 2;

if (saludar <= 5 && saludar >= 0) {
  console.log("dejame dormir");
} else if (saludar <= 12 && saludar >= 6) {
  console.log("Buenos dias");
} else if (saludar <= 20 && saludar >= 13) {
  console.log("buenas noches");
} else {
  console.log("buenas noches");
}

let dia = 0;
switch (dia) {
  case 0:
    console.log("domingo");
    break;
  case 1:
    console.log("lunes");
    break;
  case 2:
    console.log("Martes");
    break;
  case 3:
    console.log("Miercoles");
    break;
  case 4:
    console.log("Jueves");
    break;
  case 5:
    console.log("Viernes");
    break;
  case 6:
    console.log("Sabado");
    break;
  default:
    break;
}
/* for in */
const YO = {
  nombre: "rodrigo",
  apellido: "laime",
  edad: 20,
};
for (const propiedad in YO) {
  console.log(`key ${propiedad}, valor ${YO[propiedad]}`);
}

let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (const elemento of numeros) {
  console.log(elemento);
}
/* try catch */
try {
  console.log("En el try se agre el codigo a evaluar");
  noExiste;
  console.log("segundo mesaje en try");
} catch (error) {
  console.log("catch, captura cualquier error sugerido o lanzado en el try");
  console.log(error);
} finally {
  console.log(
    "en el bloque de finally se ejecutara siempre al final de un bloque try-catch"
  );
}

try {
  let numero = "y";
  if (isNaN(numero)) {
    throw new Error("El caracter introducido no es un numero");
  }
  console.log("numero * numero");
} catch (error) {
  console.log(`se produjo el siguiente error: ${error}`);
}

/* break y continue */
const number = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let i = 0; i < number.length; i++) {
  if (i === 5) {
    break;
  }
  console.log(number[i]);
}
for (let i = 0; i < number.length; i++) {
  if (i === 5) {
    continue;
  }
  console.log(number[i]);
}

/* destructuracion */
const numer = [1, 2, 3, 4];
//sin destructraccion
let uno = numer[0],
  dos = numer[1],
  tres = numer[2];
console.log(uno, dos, tres);
//con destructraccion
const [one, two, three] = numer;
console.log(one, two, three);

/* objetos literales */
//metod antiguo
let nom = "keny",
  edad = 7;

const perro = {
  nom: nom,
  edad: edad,
  ladrar: function () {
    console.log("guachiguau");
  },
};
console.log(perro);
perro.ladrar();
//metodo nuevo

const dog = {
  nom,
  edad,
  raza: "callejero",
  ladrar() {
    console.log("guachimango");
  },
};
console.log(dog);
dog.ladrar();

/* parametro REST y Operador Spread */
//parametros rest
function sumar(a, b, ...c) {
  let result = a + b;
  c.forEach((n) => {
    result += n;
  });
  return result;
}
console.log(sumar(1, 2));
console.log(sumar(1, 2, 3));
console.log(sumar(1, 2, 34));
console.log(sumar(1, 2, 34, 6, 12));

//operador de propagacion
const arr1 = [1, 2, 3, 4, 5],
  arr2 = [6, 7, 8, 9, 0];
console.log(arr1, arr2);

const arr3 = [arr1, arr2];
console.log(arr3);

const arr4 = [...arr1, ...arr2];
console.log(arr4);

/* arron fuction---------------- */
const suma = (a, b) => a + b;
console.log(suma(8, 9));

const funcionDeVariasLineas = () => {
  console.log("Uno");
  console.log("Dos");
  console.log("Tres");
};
funcionDeVariasLineas();

const nume = [1, 2, 3, 4];
nume.forEach(function (el, index) {
  console.log(`El elemento ${el} esta la posicion ${index}`);
}); //como es una sola linea de codigo se puede omitir las llaves

//problemas de this con arrowfunction
const perrito = {
  nombre: "Kenai",
  ladrar: () => {
    //crearlo asi -ladrar(){}
    console.log(this);
  },
};

/* Prototipos-object------------ */
/* ejemplo de metodo dentro de la nueva instancia */
//funcion constructora
function Animal(nombre, genero) {
  //atributos
  this.nombre = nombre;
  this.genero = genero;
  //metodos
  this.sonar = function () {
    console.log("aga sonido por que estoy vivo");
  };
}
//new crea una nueva instancia, crear un nuevo objeto

const snoopy = new Animal("Snoopy", "Macho"),
  lolaBunny = new Animal("Lola Bunny", "Hembra");

console.log(snoopy);
console.log(lolaBunny);
/* ejemplo de metodo fuera de la instancia agregada al prototipo */

function Animal2(nombre, genero) {
  this.nombre = nombre;
  this.genero = genero;
}

Animal2.prototype.expresar = function () {
  console.log(`soy de genero: ${this.genero}`);
};
Animal2.prototype.saludo = function () {
  console.log(`Hola me llamo ${this.nombre}`);
};
const snoopy2 = new Animal2("Snoopy", "Macho"),
  lolaBunny2 = new Animal2("Lola Bunny", "Hembra");

console.log(snoopy2);
console.log(lolaBunny2);

snoopy2.expresar();
snoopy2.saludo();
lolaBunny2.expresar();
lolaBunny2.saludo();

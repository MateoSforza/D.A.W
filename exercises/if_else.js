// 4.a - Número aleatorio entre 0 y 100 y evaluar si es >= 50
var numero = Math.random() * 100;
if (numero >= 50) {
    console.log("4.a Mayor o igual a 50:", numero);
} else {
    console.log("4.a Menor a 50:", numero);
}

// 4.b - Clasificar edad
var edad = Math.floor(Math.random() * 100);
console.log("4.b Edad generada:", edad);

if (edad < 2) {
    console.log("Bebé");
} else if (edad >= 2 && edad < 12) {
    console.log("Niño");
} else if (edad >= 12 && edad < 19) {
    console.log("Adolescente");
} else if (edad >= 19 && edad < 31) {
    console.log("Joven");
} else if (edad >= 31 && edad < 61) {
    console.log("Adulto");
} else if (edad >= 61 && edad < 76) {
    console.log("Adulto mayor");
} else {
    console.log("Anciano");
}

// 2.a - Convertir a mayúscula
var texto = "javascript";
console.log("2.a Mayúscula:", texto.toUpperCase());

// 2.b - Primeros 5 caracteres
console.log("2.b Primeros 5 caracteres:", texto.substring(0, 5));

// 2.c - Últimos 3 caracteres
var textoLargo = "Hola mundo";
console.log("2.c Últimos 3 caracteres:", textoLargo.slice(-3));

// 2.d - Primera letra en mayúscula, resto en minúscula
var frase = "bienvenido";
var resultado2d = frase.charAt(0).toUpperCase() + frase.slice(1).toLowerCase();
console.log("2.d Capitalizado:", resultado2d);

// 2.e - Eliminar espacios al principio y al final
var textoConEspacio = "  ejemplo texto  ";
console.log("2.e Sin espacios:", textoConEspacio.trim());

// 2.f - Dos palabras, ambas capitalizadas
var textoCompuesto = "hola mundo";
var partes = textoCompuesto.split(" ");
var palabra1 = partes[0].charAt(0).toUpperCase() + partes[0].slice(1).toLowerCase();
var palabra2 = partes[1].charAt(0).toUpperCase() + partes[1].slice(1).toLowerCase();
console.log("2.f Ambas capitalizadas:", palabra1 + " " + palabra2);
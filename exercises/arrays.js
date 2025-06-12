// 3.a - Mostrar por consola los meses 5 y 11 (índice base 0)
var meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
    "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
console.log("3.a Mes 5 y 11:", meses[4], meses[10]);

// 3.b - Ordenar el array de meses alfabéticamente
meses.sort();
console.log("3.b Ordenado:", meses);

// 3.c - Agregar un elemento al principio y al final del array
meses.push("Extra");
meses.unshift("Inicio");
console.log("3.c Agregado al inicio y final:", meses);

// 3.d - Quitar un elemento del principio y del final del array
meses.pop();
meses.shift();
console.log("3.d Quitado el primero y el último:", meses);

// 3.e - Invertir el orden del array
meses.reverse();
console.log("3.e Reverso:", meses);

// 3.f - Unir todos los elementos del array en un solo string separado por guiones
var unidos = meses.join(" - ");
console.log("3.f Meses unidos con guiones:", unidos);

// 3.g - Crear una copia del array que contenga los meses de mayo a noviembre
// NOTA: El array fue alterado por sort(), reverse(), etc., así que lo reiniciamos:
var mesesOriginales = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
    "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
var copia = mesesOriginales.slice(4, 11);
console.log("3.g Copia de mayo a noviembre:", copia);

// 5.a - Mostrar cada palabra con alert()
var palabras = ["Hola", "Mundo", "JavaScript", "Ejercicio", "Loop"];
for (var i = 0; i < palabras.length; i++) {
    alert(palabras[i]);
}

// 5.b - Capitalizar cada palabra
for (var i = 0; i < palabras.length; i++) {
    palabras[i] = palabras[i].charAt(0).toUpperCase() + palabras[i].slice(1);
}
console.log("5.b Palabras capitalizadas:", palabras);

// 5.c - Unir todas las palabras en una frase
var frase = "";
for (var i = 0; i < palabras.length; i++) {
    frase += palabras[i] + " ";
}
console.log("5.c Frase unida:", frase.trim());

// 5.d - Crear un array con números del 0 al 9
var numeros = [];
for (var i = 0; i < 10; i++) {
    numeros.push(i);
}
console.log("5.d Array del 0 al 9:", numeros);

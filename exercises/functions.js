// 6.a - Función suma simple
function suma(a, b) {
    return a + b;
}
console.log("6.a Suma:", suma(3, 7));

// 6.b - Función que valida si los parámetros son números
function sumaValidada(a, b) {
    if (typeof a !== "number" || typeof b !== "number") {
    alert("Uno de los parámetros no es numérico");
    return NaN;
    }
    return a + b;
}
console.log("6.b Suma validada:", sumaValidada(5, "3"));

// 6.c - Función que verifica si un número es entero
function esEntero(n) {
    return Math.floor(n) === n;
}
console.log("6.c ¿Es entero?:", esEntero(5.2));

// 6.d - Función suma con validación de enteros
function sumaEntera(a, b) {
    if (!esEntero(a)) {
    alert("Primer número no es entero, se redondeará");
    a = Math.round(a);
    }
    if (!esEntero(b)) {
    alert("Segundo número no es entero, se redondeará");
    b = Math.round(b);
    }
    return a + b;
}
console.log("6.d Suma con redondeo:", sumaEntera(5.6, 2.2));

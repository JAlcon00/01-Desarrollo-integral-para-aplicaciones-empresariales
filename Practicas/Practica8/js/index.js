function sum(a, b) {
    return a + b;
}
var resultado = sum(2, 3); // 5
console.log(resultado);
var fSum = sum(5, 80);
//fSum = sum(5, 4); // error
console.log(fSum); // 85
// Funciones de orden superior
// Funciones arrow
var sumArrow = function (a, b) { return a + b; };
// Funcion anonima
var funcionAnonima = function () {
    console.log("Hola mundo");
};
funcionAnonima();
// Funcion anonima arrow
var funcionAnonimaArrow = function () { return console.log("Hola mundo desde una funcion anonima arrow"); };
funcionAnonimaArrow();
// console.log(operation(a: number, b: number): number => a * b );
// No es posible hacerlo de esta manera
var operation = function (a, b) { return a * b; };
function saludo(nombre) {
    return "Hola ".concat(nombre);
}
console.log(saludo("Juan"));
// Funcion arrow que no sea anonimo
var saludoArrow = function (nombre) { return "Hola " + nombre; };
saludoArrow("Greys");
function advertencia() {
    console.log("Cuidado!");
}
;
advertencia();
// Void no retorna nada
// never no retorna nada y no tiene fin
function error(mensaje) {
    var mensajeError = document.getElementById("mensajeError");
    mensajeError.innerHTML = "Error en la aplicacion";
    throw new Error(mensaje);
}
var operacion = function (a, b, accion) { return accion === 'sumar' ? a + b : accion === 'restar' ? a - b : accion === 'multiplicar' ? a * b : accion === 'dividir' ? a / b : 0; };
console.log(operacion(5, 5, 'sumar'));
console.log(operacion(5, 5, 'restar'));
console.log(operacion(5, 5, 'multiplicar'));
console.log(operacion(5, 5, 'dividir'));

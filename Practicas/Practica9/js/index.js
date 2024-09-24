console.log("Hola codespaces");
var nuevoHeroe = 'Chapulin Colorado';
function returnName() {
    return nuevoHeroe;
}
var heroeNombre = returnName();
var otraVariable = returnName();
console.log('De que tipo es: ', typeof otraVariable);
// Parametros obligatorios en funciones
var nombreCompleto = function (nombre, apellido) {
    return "".concat(nombre, " ").concat(apellido);
};
var tuNombre = nombreCompleto('Carlos', 'Cerrano');
console.log(tuNombre);
// Parametros opcionales en funciones
var nombreCompleto2 = function (nombre, apellido) {
    return "".concat(nombre || ' no se proporciono nombre ', " ").concat(apellido || ' no se proporciono apellido ');
};
var tuNombre2 = nombreCompleto2('Carlos2');
console.log(tuNombre2);
var nombreCompleto3 = function (nombre, apellido, mayusculas) {
    if (mayusculas === void 0) { mayusculas = false; }
    return mayusculas ? "".concat(nombre || ' no se proporciono nombre ', " ").concat(apellido || ' no se proporciono apellido ').toUpperCase() : "".concat(nombre || ' no se proporciono nombre ', " ").concat(apellido || ' no se proporciono apellido ');
};
var tuNombre3 = nombreCompleto3('Carlos3', 'Cerrano3', true);
console.log(tuNombre3);
//Operador REST
var nombreCompleto4 = function (nombre, edad) {
    var restParametros = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        restParametros[_i - 2] = arguments[_i];
    }
    return "".concat(nombre, " ").concat(restParametros.join(' '), " ").concat(edad);
};
var superman4 = nombreCompleto4('Clark', 22, 'Joseph', 'Kent');
console.log(superman4);

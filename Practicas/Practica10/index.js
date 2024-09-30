console.log('Hola Node.js');


const {nombre , apellido, edad} = require('./datos');

obtenerDatos = require('./obtenerDatos');

console.log(obtenerDatos('Juan', 'Perez', 25));
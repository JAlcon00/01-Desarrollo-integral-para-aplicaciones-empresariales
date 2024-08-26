var miNumero = 10;
miNumero = 10 + 10;
miNumero = miNumero + 10;
console.log(miNumero); // 30
var booleano = true;
booleano = false;
booleano = !booleano;
var encendido = true;
console.log('Encendido es: ', encendido); // true
console.log('Encendido es: ', {encendido}); // true


encendido = true && false;
encendido = true && true;
encendido = false && true;
encendido = false && false;
console.log('Resultado es: ', encendido); // false

let normal:any = 'Hola';
normal = 10;
normal = true;
normal = {};
normal = [];
normal = function() {};

console.log('normal: ',normal);



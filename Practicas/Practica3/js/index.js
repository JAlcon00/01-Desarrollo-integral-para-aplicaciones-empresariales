var normalx = 'Hola mundo';
normalx = 10;
normalx = true;
console.log(normalx);
var usuario = 'Hola nuevo mundo';
console.log(usuario);
var value;
value = true;
value = 'hola mundo';
value = [];
value = {};
value = Math.random;
value = undefined;
value = null;
console.log(value);
var miValor;
console.log("tipo unknown:", miValor);
var value1 = miValor;
var value2 = miValor;
//let value3: boolean = miValor; esto marca un error
//let value4: number = miValor; esto marca un error
var edad = 20;
console.log('edad:', edad);
var sueldo = 1.201;
var total = Number('14785'); // castear un string a number
console.log('Total:', total);
var personaje = "El chavo del 8";
var otroPersonaje = 'El chapulin colorado';
/**
 * Represents another character in the story.
 */
var otroPersonajeMas = "El chompiras y ".concat(personaje);
console.log('Personaje:', personaje);
console.log('Otro personaje:', otroPersonaje);
var heroes = ['Batman', 'Superman', 'Robin'];
var heroe = "Deadpool's House";
console.log(heroe);
console.log(heroe.toUpperCase());
var vengador;
vengador = 'Dr. Strange';
console.log(vengador.charAt(4));
vengador = 150.55;
console.log(vengador.toFixed(1));
console.log(vengador.toFixed(1));
console.log(vengador.toFixed(1));
var personas = ['Peter', 'Tony', 'Steve'];
console.log(personas);
console.log(personas[0].charAt(0));
console.log(personas[1].charAt(0));
console.log(personas[2].charAt(0));
personas.push('Thor');
console.log(personas);
var numeros = [1, 2, 3, 4, 5];
var numeros2 = [6, 7, 8, 9, 10];
console.log(numeros, numeros2);
function imprimirNumeros() {
    var numeros = [1, 2, 3, 4, 5];
    var numeros2 = [6, 7, 8, 9, 10];
    console.log(numeros, numeros2);
    // Print the numbers in the HTML
    var numerosElement = document.getElementById('numeros');
    var numeros2Element = document.getElementById('numeros2');
    if (numerosElement && numeros2Element) {
        numerosElement.innerHTML = numeros.join('');
        numeros2Element.innerHTML = numeros2.join('');
    }
}
imprimirNumeros();
var miArray = ['Hola', 10, 'Mundo', 20];
console.log(miArray);
var miArray2 = ['Mundo', 20, 'Hola', 30];
console.log(miArray2);
var miArray3 = [true, 'Hola', 10, 'Mundo', 20];
console.log(miArray3);
var miArray4 = [1, 2, 3, 4, 5];
function imprimirAlReves(arr) {
    var reversedArray = arr.reverse();
    var miArray4Element = document.getElementById('miArray4');
    if (miArray4Element) {
        miArray4Element.innerHTML = reversedArray.join(', ');
    }
}
function actualizarHTML() {
    var miArrayElement = document.getElementById('miArray');
    var miArray2Element = document.getElementById('miArray2');
    var miArray3Element = document.getElementById('miArray3');
    if (miArrayElement) {
        miArrayElement.innerHTML = miArray.join(', ');
    }
    if (miArray2Element) {
        miArray2Element.innerHTML = miArray2.join(', ');
    }
    if (miArray3Element) {
        miArray3Element.innerHTML = miArray3.join(', ');
    }
}
document.addEventListener('DOMContentLoaded', function (event) {
    actualizarHTML();
    imprimirAlReves(miArray4);
});

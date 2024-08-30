let normalx: any = 'Hola mundo';
normalx = 10;
normalx = true;

console.log(normalx);

let usuario: string = 'Hola nuevo mundo';
console.log(usuario);

let value: any;

value = true;
value = 'hola mundo';
value = [];
value = {};
value = Math.random;
value = undefined;
value = null;

console.log(value);

let miValor: unknown;
console.log("tipo unknown:", miValor);

let value1: unknown = miValor;
let value2: any = miValor;

//let value3: boolean = miValor; esto marca un error
//let value4: number = miValor; esto marca un error

const edad: number = 20;
console.log('edad:', edad);

const sueldo: number = 1.201;
const total: number = Number('14785'); // castear un string a number
console.log('Total:', total);

const personaje: string = `El chavo del 8`;
const otroPersonaje: string = 'El chapulin colorado';
/**
 * Represents another character in the story.
 */
const otroPersonajeMas: string = `El chompiras y ${personaje}`;
console.log('Personaje:', personaje);
console.log('Otro personaje:', otroPersonaje);

const heroes: string[] = ['Batman', 'Superman', 'Robin'];
const heroe: string = `Deadpool's House`;

console.log(heroe);
console.log(heroe.toUpperCase());

let vengador: any;
vengador = 'Dr. Strange';
console.log(vengador.charAt(4));
vengador = 150.55;
console.log(vengador.toFixed(1));
console.log((vengador as number).toFixed(1));
console.log(<number>vengador.toFixed(1));

let personas: string[] = ['Peter', 'Tony', 'Steve'];
console.log(personas);
console.log(personas[0].charAt(0));
console.log(personas[1].charAt(0));
console.log(personas[2].charAt(0));
personas.push('Thor');
console.log(personas);

let numeros: number[] = [1, 2, 3, 4, 5];
let numeros2: Array<number> = [6, 7, 8, 9, 10];
console.log(numeros, numeros2);

function imprimirNumeros() {
    let numeros: number[] = [1, 2, 3, 4, 5];
    let numeros2: Array<number> = [6, 7, 8, 9, 10];
    console.log(numeros, numeros2);

    // Print the numbers in the HTML
    const numerosElement = document.getElementById('numeros');
    const numeros2Element = document.getElementById('numeros2');

    if (numerosElement && numeros2Element) {
        numerosElement.innerHTML = numeros.join('');
        numeros2Element.innerHTML = numeros2.join('');
    }
}

imprimirNumeros();

let miArray: (string | number)[] = ['Hola', 10, 'Mundo', 20];
console.log(miArray);
let miArray2: Array<string | number> = ['Mundo', 20, 'Hola', 30];
console.log(miArray2);
let miArray3: Array<any> = [true, 'Hola', 10, 'Mundo', 20];
console.log(miArray3);
let miArray4: number[] = [1, 2, 3, 4, 5];

function imprimirAlReves(arr: number[]): void {
    const reversedArray = arr.reverse();
    const miArray4Element = document.getElementById('miArray4');
    if (miArray4Element) {
        miArray4Element.innerHTML = reversedArray.join(', ');
    }
}

function actualizarHTML() {
    const miArrayElement = document.getElementById('miArray');
    const miArray2Element = document.getElementById('miArray2');
    const miArray3Element = document.getElementById('miArray3');

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

document.addEventListener('DOMContentLoaded', (event) => {
    actualizarHTML();
    imprimirAlReves(miArray4);
});
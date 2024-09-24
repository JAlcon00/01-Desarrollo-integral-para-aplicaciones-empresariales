function sum(a: number, b: number): number {
    return a + b;
}

let resultado = sum(2, 3); // 5
console.log(resultado);

const fSum = sum(5, 80);
//fSum = sum(5, 4); // error
console.log(fSum); // 85

// Funciones de orden superior

// Funciones arrow

let sumArrow = (a: number, b: number): number => a + b;

// Funcion anonima

let funcionAnonima = function() {
    console.log("Hola mundo");
}
funcionAnonima();

// Funcion anonima arrow
let funcionAnonimaArrow = () => console.log("Hola mundo desde una funcion anonima arrow");
funcionAnonimaArrow();

// console.log(operation(a: number, b: number): number => a * b );
// No es posible hacerlo de esta manera

const operation = (a : number, b: number): number => a * b;

function saludo(nombre: string): string {
    return `Hola ${nombre}`;
}
console.log(saludo("Juan"));

// Funcion arrow que no sea anonimo
const saludoArrow = (nombre: string): string => "Hola " + nombre;
saludoArrow("Greys");

function advertencia(): void {
    console.log("Cuidado!");
};
advertencia();

// Void no retorna nada

// never no retorna nada y no tiene fin

function error(mensaje: string): never {
    let mensajeError : any = document.getElementById("mensajeError");
    mensajeError.innerHTML = "Error en la aplicacion";

    throw new Error(mensaje);
}
//error("Error en la aplicacion");

type accion = 'sumar' | 'restar' | 'multiplicar' | 'dividir';


const operacion = (a: number, b: number, accion: accion): number  =>{ return accion === 'sumar' ? a + b : accion === 'restar' ? a - b : accion === 'multiplicar' ? a * b : accion === 'dividir' ? a / b : 0; }

console.log(operacion(5, 5, 'sumar'));
console.log(operacion(5, 5, 'restar'));
console.log(operacion(5, 5, 'multiplicar'));
console.log(operacion(5, 5, 'dividir'));
let normalx:any = 'Hola mundo';
normalx = 10;
normalx = true;

console.log(normalx);

let usuario: string = 'Hola nuevo mundo '
console.log(usuario)

let value: any;

value = true;
value = 'hola undo';
value = [];
value = {};
value = Math.random;
value = undefined;
value = null;

console.log(value);

let miValor: unknown;
console.log("tipo unkwon:",miValor);

let value1: unknown = miValor;
let value2: any = miValor;

//let value3: boolean = miValor; esto marca un error
//let value4: number = miValor; esto marca un error

const edad: number = 20;
console.log('edad:', edad);

const sueldo: number = 1.201;
const total: number = Number('14785');//castear un string a number
console.log('Total:', total);


const personaje:string =  `El chavo del 8`;
const otroPersonaje: string = 'El chapulin colorado';
const otroPersonajeMas: string = `El chompiras y ${personaje}`;
console.log('Personaje:', personaje);
console.log('Otro personaje:', otroPersonaje);

const heroes: string[] = ['Batman', 'Superman', 'Robin'];
const heroe:string =  `Deadpools House`;

console.log(heroe);
console.log(heroe.toUpperCase());

let vengador:any;
vengador = 'Dr. Strange';
console.log(vengador.charAt(4));
vengador = 150.55;
console.log(vengador.toFixed(1));
console.log((vengador as number).toFixed(1));
console.log(<number>vengador.toFixed(1));
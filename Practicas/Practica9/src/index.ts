console.log("Hola codespaces");

const nuevoHeroe: string = 'Chapulin Colorado';
function returnName(): string {
    return nuevoHeroe;
}

const heroeNombre = returnName();
let otraVariable = returnName();
console.log('De que tipo es: ', typeof otraVariable);

// Parametros obligatorios en funciones
const nombreCompleto = (nombre: string, apellido: string) => {
    return `${nombre} ${apellido}`;
}

const tuNombre = nombreCompleto('Carlos', 'Cerrano');
console.log(tuNombre);

// Parametros opcionales en funciones
const nombreCompleto2 = (nombre?: string, apellido?: string) => {
    return `${nombre || ' no se proporciono nombre '} ${apellido || ' no se proporciono apellido '}`;
}

const tuNombre2 = nombreCompleto2('Carlos2');
console.log(tuNombre2);

const nombreCompleto3 = (nombre?: string, apellido?: string, mayusculas:boolean = false) => {
    return mayusculas ? `${nombre || ' no se proporciono nombre '} ${apellido || ' no se proporciono apellido '}`.toUpperCase() : `${nombre || ' no se proporciono nombre '} ${apellido || ' no se proporciono apellido '}`;
}

const tuNombre3 = nombreCompleto3('Carlos3', 'Cerrano3', true);
console.log(tuNombre3);


//Operador REST

const nombreCompleto4 = (nombre: string, edad: number, ...restParametros: string[]) => {
    return `${nombre} ${restParametros.join(' ')} ${edad}`;
}

const superman4 = nombreCompleto4('Clark', 22, 'Joseph', 'Kent');
console.log(superman4);
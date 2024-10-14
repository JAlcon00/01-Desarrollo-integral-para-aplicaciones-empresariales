const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
document.getElementById('chunk1').textContent = JSON.stringify(_.chunk(array, 7));

let arreglo = ['Juan','','Pedro',0,'Ana',false,'Jose','Carlos',''];
document.getElementById('chunk2').textContent = JSON.stringify(_.chunk(arreglo, 2));
document.getElementById('compact').textContent = JSON.stringify(_.compact(arreglo));

let array1 = ['Superman', 'Batman', 'Flash'];
let array2 = ['Thor', 'Ironman', 'Spiderman'];
document.getElementById('concat').textContent = JSON.stringify(_.concat(array1, array2));

let array3 = ['El Chavo', 'El Chapulin Colorado', 'El Doctor Chapatín'];
let array4 = ['El Chavo','El Chompiras', 'El Botija', 'El Peterete'];
document.getElementById('difference').textContent = JSON.stringify(_.difference(array3, array4));

let array5 = ['a', 'b', 'c', 'd', 'e','f','g','h','i','j'];
document.getElementById('drop').textContent = JSON.stringify(_.drop(array5, 3));

const numeroAleatorio = _.random(0, 100);
document.getElementById('random').textContent = numeroAleatorio;

const saludar = () => {
    document.getElementById('saludo').textContent = 'Hola Mayito, ¿Cómo estás?';
}

const saludarMayito = _.once(saludar);
saludarMayito();
saludarMayito();
saludarMayito();

const users = [
    { usuario: 'Mayito', edad: 25 },
    { usuario: 'Juanito', edad: 30 },
    { usuario: 'Pedrito', edad: 35 },
    { usuario: 'Pablito', edad: 40 },
    { usuario: 'Carlitos', edad: 45 }
];

const sortedUsers = _.sortBy(users, ['edad'],['asc']);
document.getElementById('sortedUsers').textContent = JSON.stringify(sortedUsers);

const obtieneNumero = () => {
    return _.random(0, 100);
}

let result = _.times(50, obtieneNumero);
document.getElementById('times').textContent = JSON.stringify(result);

// Reto 1
const numerosAleatorios = _.times(100, () => _.random(1, 100));
const pares = numerosAleatorios.filter(num => num % 2 === 0);
const impares = numerosAleatorios.filter(num => num % 2 !== 0);
document.getElementById('pares').textContent = 'Pares: ' + pares.join(', ');
document.getElementById('impares').textContent = 'Impares: ' + impares.join(', ');

// Reto 2
const esPrimo = num => {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
};
const primos = numerosAleatorios.filter(esPrimo);
const noPrimos = numerosAleatorios.filter(num => !esPrimo(num));
document.getElementById('primos').textContent = 'Primos: ' + primos.join(', ');
document.getElementById('noPrimos').textContent = 'No Primos: ' + noPrimos.join(', ');

// Reto 3
const nombres = ['Ana', 'Pedro', 'Alberto', 'Juan', 'Andrea', 'Carlos', 'Antonio', 'Luis'];
const empiezanConA = nombres.filter(nombre => nombre.startsWith('A'));
const noEmpiezanConA = nombres.filter(nombre => !nombre.startsWith('A'));
document.getElementById('empiezanConA').textContent = 'Empiezan con A: ' + empiezanConA.join(', ');
document.getElementById('noEmpiezanConA').textContent = 'No empiezan con A: ' + noEmpiezanConA.join(', ');
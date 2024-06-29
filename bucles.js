// 1. Realizar un programa que permita el ingreso de un numero y muestre su tabla de
// multiplicar (Los primeros 10 multiplos).

let valorNumero;

valorNumero = parseInt(prompt("Ingrese un número"));

for (let i = 1; i <= 10; i++) {
    console.log(`${valorNumero} x ${i} = ${valorNumero * i}`);
}

// 2. Realizar un programa que permita el ingreso de numeros los cuales se tienen que ir
// acumulando. El ingreso de datos terminara cuando el usuario ingrese un valor 0

let numerosIngresados, numero;
numerosIngresados = 0

do {
  numero = parseInt(prompt("Ingrese un número"), 10);
  numerosIngresados += numero;
} while (numero !== 0);

console.log(`El resultado de la suma de los números ingresados es: ${numerosIngresados}`);

// 4. Realizar un programa que permita decir si un numero es primo. Un numero es primo
// si solo es divisible por el valor 1 y por si mismo. Ayuda: Usar la operacion de modulo.
// Los numeros solo poseen divisores hasta la mitad del valor del mismo. Ej: 50 tiene
// como divisores 1, 2, 5, 10 y 25. No es primo. Con tener mas de 2 divisores el
// numero ya no es primo.

let numero = 12;


if (numero < 2) {
    console.log("No es primo");
}

if (numero === 2 || numero === 3) {
    console.log("Es primo");
}

if (numero % 2 === 0 || numero % 3 === 0) {
    console.log("No es primo");;
}

for (let i = 5; i <= Math.sqrt(numero); i+=6) {
    if (numero % i === 0 || numero % (i + 2) === 0) {
        console.log("No es primo");
    }
    console.log("Es primo");
    
};

// 7. Dado un array de 10 numeros, realizar un programa que muestre por consola el
// doble de cada uno de los elementos.

let numeros;
numeros = [23, 418, 0, 609, 124, 872, 129, 444, 726, 901];

for (let i = 0; i < numeros.length; i++) {
    console.log(numeros[i] * 2);
}

// 8. Dado un array con al menos 5 objetos comprendidos por un grupo familiar, cada
// objeto representa a 1 persona con al menos 4 propiedades, realizar un programa
// que muestre un mensaje de presentacion por cada elemento del array.

let familia = [
    {
        nombre: "Horacio",
        apellido: "Güemes",
        edad: 27,
        trabajo: "Chofer"
    },
    {
        nombre: "Isidoro",
        apellido: "Güemes",
        edad: 31,
        trabajo: "Cocinero"
    },
    {
        nombre: "Myriam",
        apellido: "Güemes",
        edad: 21,
        trabajo: "Telefonista"
    },
    {
        nombre: "Roberto",
        apellido: "Güemes",
        edad: 42,
        trabajo: "Abogado"
    },
    {
        nombre: "Luis",
        apellido: "Güemes",
        edad: 23,
        trabajo: "Barrendero"
    }
]

for (let i = 0; i < familia.length; i++) {
    let presentacion = `Hola mi nombre es ${familia[i].nombre} y mi apellido ${familia[i].apellido}, tengo ${familia[i].edad} años y trabajo de ${familia[i].trabajo}`;   
    console.log(presentacion);
};

// 9. Dado un array de 10 numeros, realizar un programa que recorra el array y solo
// muestre los numeros impares.

let arregloNumeros = [23, 418, 0, 609, 124, 872, 129, 444, 726, 901];

for (let i = 0; i < arregloNumeros.length; i++) {
    if (arregloNumeros[i] % 2 !== 0) {
        console.log(arregloNumeros[i]);
    }
};

// 10. Realizar un programa que permita la entrada de numeros y calcule la suma de los
// numeros pares por un lado y los impares por otro, el ingreso de dato finaliza cuando
// el usuario ingresa un 0.

let sumaPares, sumaImpares, numero;
sumaPares = 0;
sumaImpares = 0;

do {
    numero = parseInt(prompt("Ingresa un número (0 para finalizar):"), 10);

    if (numero === 0) {
        break;
    }

    if (numero % 2 === 0) {
        sumaPares += numero;
    } else {
        sumaImpares += numero;
    }
} while (numero !== 0);

console.log("Suma de números pares:", sumaPares);
console.log("Suma de números impares:", sumaImpares);

// 11. Dado un array de 10 numeros, realizar un programa que imprima por pantalla el
// numero mas grande.

let numeros, numeroMasGrande;
numeros = [23, 418, 0, 609, 124, 872, 129, 444, 726, 901];
numeroMasGrande = numeros[0];

for (let i = 1; i < numeros.length; i++) {
    if (numeros[i] > numeroMasGrande) {
        numeroMasGrande = numeros[i];
    }
}

console.log("El número más grande es: ", numeroMasGrande);

// 12. Dado un array de 10 numeros, realizar un programa que imprima por pantalla el
// numero mas chico.

let numeros, numeroMasChico;
numeros = [23, 418, 0, 609, 124, 872, 129, 444, 726, 901];

numeroMasChico = numeros[0];

for (let i = 1; i < numeros.length; i++) {
    if (numeros[i] < numeroMasChico) {
        numeroMasChico = numeros[i];
    }
}

console.log("El número más chico es: ", numeroMasChico);

// 13. Realizar un programa que permita jugar a piedra papel o tijeras, se debera poder
// ingresar los nombres de 2 jugadores. En el bucle del juego se debera pedir 1 a 1 las
// manos de cada jugador, y en cada turno se debera seguir jugando solo si se produjo
// un empate. Caso contrario mostrar un mensaje con el nombre de la persona
// ganadora.

let jugador1 = prompt("Ingrese el nombre del jugador 1");
let jugador2 = prompt("Ingrese el nombre del jugador 2");

let juegoJugador1, juegoJugador2;
juegoJugador1 = "";

// 14. Realizar un programa que imprima por consola un triangulo de 5 asteriscos de lado

for (let i = 0; i < 5; i++) {
    let fila = '*';
    for (let j = 0; j < i; j++) {
        fila = fila + '*';
    }
    console.log(fila);
}

// 15. Realizar un programa que imprima por consola un triangulo de 5 asteriscos de lado
// pero invertido.

for (let i = 0; i < 5; i++) {
    let piso = '*****';
    for (let j = 0; j < i; j++) {
        piso = piso.slice(0, -1);
    }
    console.log(piso);
}

// 16. Dado un array de 10 numeros desordenados, realizar un programa que imprima por
// pantalla el array ordenado. (NO USAR SORT, solo ciclos FOR)

let numeros;
numeros = [23, 418, 0, 609, 124, 872, 129, 444, 726, 901];

for (let i = 0; i < numeros.length; i++) {
    for (let j = 0; j < numeros.length - i - 1; j++) {
        if (numeros[j] < numeros[j + 1]) {
            let temp = numeros[j];
            numeros[j] = numeros[j + 1]
            numeros[j + 1] = temp;
        };
    };
};

console.log(numeros);

let notas = [
    {
        id: 1,
        titulo: "Sacar la basura",
        texto: "mi mama me va a retar si no lo hago",
        realizada: true
    },
    {
        id: 2,
        titulo: "Sacar a pasear al perro",
        texto: "me hace pis adentro de casa si no lo saco",
        realizada: false
    },
    {
        id: 3,
        titulo: "Sacar las hojas del techo",
        texto: "si llueve tengo goteras",
        realizada: false
    },
    {
        id: 4,
        titulo: "Llevar a parchar la bicicleta",
        texto: "mañana no puedo salir a trabajar",
        realizada: false
    },
    {
        id: 5,
        titulo: "Comer",
        texto: "quedó comida de ayer",
        realizada: false
    },
    {
        id: 6,
        titulo: "Estudiar eventos",
        texto: "estoy flojo de papeles y no voy a aprovar la task 3",
        realizada: false
    },
    {
        id: 7,
        titulo: "Tomar agua",
        texto: "debo hidratarme bien para no desmayarme",
        realizada: false
    }
];

let idGlobal = 8;

function pintarTarjetas(notas) {
    let contenedor = document.getElementById('contenedortarjetas');
    contenedor.innerHTML = notas.length !== 0 ? '' : "<p id='NN'>NO HAY NOTAS PARA MOSTRAR</p>";
    for (let i = 0; i < notas.length; i++) {
        let tarjeta = document.createElement("div");
        tarjeta.className = "card col m-2";
        tarjeta.innerHTML = `
             <div class="card-body d-flex flex-column ">
                <div class="d-flex justify-content-start align-items-center">
                    <input onClick="marcarRealizada(${notas[i].id})" type="checkbox" class="me-2" ${notas[i].realizada ? 'checked' : ''}>
                    <h5 class="card-title">${notas[i].titulo}</h5>
                </div>
                <p class="card-text ${notas[i].realizada ? 'text-decoration-line-through' : ''}">${notas[i].texto}</p>
             </div>
             <div class="card-footer d-flex justify-content-center">
                 <button onClick="borrarNota(${notas[i].id})" class="btn btn-danger" id="borrar-nota">Borrar nota</button>
             </div>`;
        contenedor.appendChild(tarjeta);
    }
}

pintarTarjetas(notas);

function agregarNota(titulo, texto) {
    let nuevaNota = {
        id: idGlobal++,
        titulo: titulo,
        texto: texto,
        realizada: false
    };
    notas.push(nuevaNota);
}

let guardarNuevaNota = document.getElementById("boton-guardar");
guardarNuevaNota.addEventListener("click", () => {
    let titulo = document.getElementById("titulo").value;
    let texto = document.getElementById("texto").value;
    if (titulo !== "" && texto !== "") {
        agregarNota(titulo, texto);
        document.getElementById('titulo').value = '';
        document.getElementById('texto').value = '';
        pintarTarjetas(notas);
    }
});


function borrarNota(id) {
    notas = notas.filter(nota => nota.id !== id);
    pintarTarjetas(notas);
}


document.getElementById('boton-borrar').addEventListener('click', () => {
    document.getElementById('titulo').value = '';
    document.getElementById('texto').value = '';
});

function marcarRealizada(id) {
    let nota = notas.find(nota => nota.id === id);
    nota.realizada = !nota.realizada;
    pintarTarjetas(notas);
}

function filtrarPorRealizadas(notas) {
    return notas.filter(nota => nota.realizada);
}

function filtrarPorTexto(notas, texto) {
    if (!texto) return notas;
    return notas.filter(nota => nota.titulo.includes(texto) || nota.texto.includes(texto));
}


let filtroRealizadas = document.getElementById('filtro-realizadas');


filtroRealizadas.addEventListener('change', () => {
    let notasFiltradas = filtroRealizadas.checked ? filtrarPorRealizadas(notas) : notas;
    pintarTarjetas(notasFiltradas);
});


function filtrarPorRealizadas(notas) {
    return notas.filter(nota => nota.realizada);
}


const filtroTexto = document.getElementById('filtro-texto');


filtroTexto.addEventListener('input', () => {
    const textoFiltro = filtroTexto.value.toLowerCase();
    const notasFiltradas = filtrarPorTexto(notas, textoFiltro);
    pintarTarjetas(notasFiltradas);
});

function filtrarPorTexto(notas, texto) {
    if (!texto) return notas;
    return notas.filter(nota => nota.titulo.toLowerCase().includes(texto) || nota.texto.toLowerCase().includes(texto));
}

// ** DONE a. Crear un array donde vamos a guardar las notas
// ** DONE b. Agregar un par de notas de prueba como la siguiente
// ** DONE c. Crear una variable idGlobal e inicializala en el mismo valor del ultimo id que
// creaste manualmente, usaremos esto como control de las notas.
// ** DONE d. Crear un div que va a ser el contenedor de las notas.
// ** e. Crear una función que pinte las notas en forma de tarjetas dentro del div
// contenedor.
// ** f. Sobre el div contenedor, crear una pequeña interfaz para crear nuevas notas:
// Un input de texto para el titulo, un textarea para el texto y 2 botones, uno para
// guardar la nota nueva y otro para limpiar los campos.
// * DONE g. Crear una función agregarNota la cual necesitara 2 parametros: titulo y texto. La
// cual deberá crear un objeto de tipo nota como en el punto b y agregarlo al array
// de notas.
// ** h. Al presionar el botón guardar deberá guardar en variables los valores de los inputs
// y verificar si no están vacíos, en cuyo caso deberá llamar a la función que agregara
// la nueva nota y paso seguido volver a pintar las notas en la pantalla.
// ** i. Agregar en el template de la tarjeta en la función que pinta un botón con texto
// “borrar nota” para borrar la nota, para este caso usaremos la propiedad onClick de
// la etiqueta button y dentro de ella llamaremos a una función que crearemos
// llamada borrarNota() que recibirá como parámetro el id de la misma.
// borrarNota(${elemento.id}).
// ** j. Crearemos la función borrarNota la cual necesitara el parámetro id. La misma
// deberá eliminar el elemento cuyo id sea igual al recibido por parámetro y volver a
// pintar las notas para ver reflejado el cambio.
// ** DONE k. Agregar una validación en la función que pinta las tarjetas, la cual deberá mostrar
// un mensaje dentro del div contenedor que diga NO HAY NOTAS PARA MOSTRAR
// en caso de no haber elementos en el array.
// ** l. Al hacer click en el botón borrar que esta junto con el botón guardar se deberán
// limpiar los campos de titulo y de texto.
// ** DONE m. Agregar en el template que pinta las tarjetas un checkbox de la siguiente manera:
// `<input onClick="marcarRealizada(${nota.id})" type="checkbox" ${nota.realizada?
// "checked": ""}>`. El signo de pregunta representa un operador ternario que
// funciona como un if
// (https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/Con
// ditional_Operator), el cual devolverá checked al input y lo colocara como marcado
// si la propiedad realizada es true y caso contrario no lo hará.
// ** DONE n. Crear la función marcarRealizada la cual recibirá como parámetro un id y deberá
// buscar el elemento dentro del array y cambiar la propiedad realizada por el valor
// contrario al que ya posee y volver a pintar los elementos en pantalla para verlo
// reflejado.
// ** o. Crear un par de inputs para realizar filtro por texto y por notas realizadas.
// ** p. Crear una función que filtre por el estado realizada, la función deberá recibir como
// parámetro 1 array y devolver lo mismo pero filtrado por los elementos que tengan
// true en la propiedad realizada.
// ** q. Crear una función que filtre por texto, la cual recibirá como parámetro un array de
// notas y un texto. La misma deberá devolver un array filtrado por los elementos
// que incluyan el texto ingresado en el titulo o el texto de la nota. De no recibir texto
// deberá retornar el array recibido.
// ** r. Al cambiar el texto del input de búsqueda o cambiar el valor del checkbox se
// deberá ver reflejado en pantalla el resultado de los filtros antes mencionados. En
// ambos casos se deben contemplar los estados de los 2 filtros para poder tener un
// resultado coherente con lo que se ve en pantalla. Si filtro por texto deberá
// contemplar si el checkbox de realizadas esta o no checkeado, y si filtro por
// realizadas se deberá contemplar el texto que posea el input de búsqueda.
// Casos de ejemplo:
// 1 – Input vacio y checkbox false
// 2 – input vacio y checkbox true
// 3 – Input “ag” y checkbox vacio
// 4 – Input “ag” y checkbox true
// 5 – Input vacio y checkbox true

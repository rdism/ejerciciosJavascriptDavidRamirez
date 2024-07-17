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
        tarjeta.className = "card col m-3";
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

function filtrarNotasRealizadas(notas) {
    return notas.filter(nota => nota.realizada);
}

function filtrarPorTexto(notas, texto) {
    if (!texto) return notas;
    texto = texto.toLowerCase();
    return notas.filter(nota =>
        nota.titulo.toLowerCase().includes(texto) ||
        nota.texto.toLowerCase().includes(texto)
    );
}

let filtroRealizadas = document.getElementById('filtro-realizadas');
let filtroTexto = document.getElementById('filtro-texto');

filtroRealizadas.addEventListener('change', () => {
    actualizarFiltros();
});

filtroTexto.addEventListener('keyup', () => {
    actualizarFiltros();
})

function actualizarFiltros () {
    let notasFiltradas = notas;

    if (filtroRealizadas.checked) {
        notasFiltradas = filtrarNotasRealizadas(notasFiltradas);
    }

    let textoFiltro = filtroTexto.value.trim().toLowerCase();
    notasFiltradas = filtrarPorTexto(notasFiltradas, textoFiltro);

    pintarTarjetas(notasFiltradas)
}

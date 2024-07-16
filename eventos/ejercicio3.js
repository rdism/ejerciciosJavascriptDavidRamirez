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
    }
];

let idGlobal = 5;

function pintarTarjetas(notas) {
    let contenedor = document.getElementById('contenedortarjetas');
    // notas.length === 0 ? contenedor.innerHTML = "NO HAY NOTAS PARA MOSTRAR" :
    for (let i = 0; i < notas.length; i++) {
        let tarjeta = document.createElement("div")
        tarjeta.className = "card col"
        tarjeta.innerHTML = `
             <div class="card-body">
                 <h5 class="card-title">${notas[i].titulo}</h5>
                 <p class="card-text">${notas[i].texto}</p>
             </div>
             <div class="card-footer d-flex justify-content-between">
                 <span>${notas[i].realizada}</span>
                 <button onClick="borrarNota(${notas[i].id})" class="btn btn-light" id="borrar-nota">Borrar nota
                 </button>
                 <input onClick="marcarRealizada(${notas[i].id})" type="checkbox" ${notas[i].realizada ? "checked" : ""}>
             </div>`
        contenedor.appendChild(tarjeta);
    }
}

function agregarNota(titulo, texto) {
    let nota = {
        id: idGlobal,
        titulo: titulo,
        texto: texto,
        realizada: false
    };
    idGlobal++;
    notas.push(nota);
    pintarTarjetas(notas);
}

let botonguardar = document.getElementById("boton-guardar")

botonguardar.addEventListener("click", a => {
    let titulo = document.getElementById("titulo").value;
    let texto = document.getElementById("texto").value;
    if (titulo !== "" && texto !== "") {
        agregarNota(titulo, texto);
        document.getElementById("titulo").value = "";
    }
})


function borrarNota(id) {
    notas = notas.filter(nota => nota.id !== id);
    pintarTarjetas(notas);
}


document.getElementById('boton-borrar').addEventListener('click', function () {
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
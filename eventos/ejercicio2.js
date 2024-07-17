let dolar, peso, paridad
dolar = document.getElementById("dolar-input")
peso = document.getElementById("peso-input")
paridad = 1400

dolar.addEventListener('keyup', e => {
     peso.value = e.target.value * paridad
})

peso.addEventListener('keyup', e => {
    dolar.value = e.target.value / paridad
})
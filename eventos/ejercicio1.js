let boton = document.getElementById("calcular");

boton.addEventListener('click', a => {

  document.getElementById("resultado").value = (document.getElementById("peso").value / Math.pow((document.getElementById("altura").value * 0.01), 2)).toFixed(4)

  console.log(resultado.value)

})
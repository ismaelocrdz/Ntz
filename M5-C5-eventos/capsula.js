// 1. VARIABLES

const botonSumar            = document.querySelector("#suma")
const botonRestar           = document.querySelector("#resta")
const botonMultiplicar      = document.querySelector("#multiplicacion")
const botonDividir          = document.querySelector("#division")

const campoN1               = document.querySelector("#n1")
const campoN2               = document.querySelector("#n2")

const resultadoArea         = document.querySelector("#resultado")


// 2. EVENTOS

botonSumar.addEventListener("click", () => {

    // CAPTURAR LOS VALORES DE LOS CAMPOS DE TEXTO
    const campo1 = parseInt(campoN1.value)
    const campo2 = parseInt(campoN2.value)

    // OBTENER LA SUMA TOTAL
    const resultado = campo1 + campo2

    // MOSTRAR ESTO EN PANTALLA
    return resultadoArea.innerHTML = resultado

})
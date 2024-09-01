// 1. VARIABLES


const botoncrear        = document.querySelector("#boton-crear")
const botonesArea       = document.querySelector("#botones")
const seccionUnoArea    = document.querySelector("#seccion-uno")

const botonCambiarAzul          = document.createElement("button")
botonCambiarAzul.textContent    = "Cambiar color a azul"
botonCambiarAzul.id             = "boton-azul"



// 2. EVENTOS


botoncrear.addEventListener("click", () => {

    // GENEREMOS UN BOTÓN QUE PERMITA CAMBIAR A AZUL UN TEXTO

    botonesArea.appendChild(botonCambiarAzul)

    // QUITAR EL BOTÓN DE CREAR ELEMENTO
    botoncrear.remove()

    return seccionUnoArea.innerHTML = `
        <h1>Un título</h1>
        <p>Creamos un elemento</p>
    
    `

})


botonCambiarAzul.addEventListener("click", () => {

    return seccionUnoArea.style.color = "blue"


})



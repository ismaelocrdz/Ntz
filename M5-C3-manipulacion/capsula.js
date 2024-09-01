// CAPTURAR LA ETIQUETA VÍA DOM
const seccionUnoArea = document.querySelector("#seccion-uno")

// VERIFICAMOS QUE LO CAPTURAMOS CORRECTAMENTE
console.log(seccionUnoArea)

// CREAMOS UN ELEMENTO
const h1 = document.createElement("h1")

// GENERAMOS ATRIBUTOS Y CONTENIDO
h1.textContent = "Soy un título"
h1.setAttribute("class", "seccion")

// ADJUNTAMOS A LA SECCIÓN PADRE
seccionUnoArea.appendChild(h1)



// 1. CAPTURAR LA ETIQUETA

const zonaTrabajoTag = document.querySelector("#zona-trabajo")
const saludoTag = document.querySelector("#saludo")

console.log(zonaTrabajoTag)
console.log(saludoTag)


// 2. MODIFICACIÓN DE LA ETIQUETA

saludoTag.innerHTML = `
    <span>Hola soy Mike Nieva</span>
`
saludoTag.style.color = "blue"
saludoTag.style.fontFamily = "Arial"

saludoTag.setAttribute("id", "hello")


zonaTrabajoTag.innerHTML = `
    <ul>
        <li>Opción 1</li>
        <li>Opción 2</li>
        <li>Opción 3</li>
    </ul>
`
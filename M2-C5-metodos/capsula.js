// Métodos de Objeto 

// OBJECT.KEYS

const pais = {
    nombre: "México",
    poblacion: 100
}

// Devolver un arreglo
const arrPais = Object.keys(pais)
console.log(arrPais)


// OBJECT.ASSIGN

// a. FUSIONAR PROPIEDADES

const i1 = { speak: "English" }
const i2 = { habla: "Español" }
const i3 = { parla: "Italiano" }

const idiomas = Object.assign(i1, i2, i3)

// b. SÍNTESIS AL ÚLTIMO VALOR

const p1 = { nombre: "Perú" }
const p2 = { nombre: "México", comida: "Tacos" }
const p3 = { nombre: "Colombia" }
const p4 = { nombre: "Argentina", comida: "Carne" }

const paises = Object.assign(p1, p2, p3, p4)
console.log(paises)



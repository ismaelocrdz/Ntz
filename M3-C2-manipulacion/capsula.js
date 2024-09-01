// MANIPULACIÓN DE ARREGLOS

const personas = ["Mike", "Luisa", "Gerardo"]

// SACAR EL ÚLTIMO ELEMENTO DEL ARREGLO (POP)
personas.pop()
console.log(personas)

// EMPUJAR NUEVO ELEMENTO AL ARREGLO, AL FINAL
personas.push("Ernesto")
console.log(personas)

// SHIFTING - QUITAR EL PRIMER ELEMENTO DEL ARREGLO
personas.shift()
console.log(personas)

// UNSHIFT - AGREGA UN ELEMENTO AL INICIO DEL ARREGLO
personas.unshift("Renata")
console.log(personas)

// CAMBIAR EL VALOR DE UN ELEMENTO
personas[0] = "Fernanda"
console.log(personas)

// SLICE - SLICING

const nuevasPersonas = personas.slice(1,3)
console.log(nuevasPersonas)
console.log(personas)

// SPLICE - SPLICING

personas.splice(1, 2, "Mike")
console.log(personas)
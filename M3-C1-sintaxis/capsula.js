/*
ARREGLOS

    TIPO DE DATO

    PERMITIR ALMACENAR MÚLTIPLES DATOS EN UNA VARIABLE

    PUEDEN CONTENER MÁS DE UN VALOR AL SIMULTÁNEO

    CADA UNO DE ESOS VALORES LOS LLAMAREMOS "ELEMENTO"

*/

// CREACIÓN DE UN ARREGLO
//                   0       1        2 
const personas = ["Mike", "Luis", "Laura"]

console.log(personas)


// ACCESO A LOS ELEMENTOS
personas[0] // Mike
personas[1] // Luis
personas[2] // Laura

console.log(personas[4])

// SABER CUÁNTOS ELEMENTOS TIENE UN ARREGLO
console.log(personas.length)

// ACCEDER AL ÚLTIMO ELEMENTO DEL ARREGLO
console.log(personas[personas.length-1])

// EN QUÉ MOMENTO VALE LA PENA UTILIZAR ARREGLOS.
// CUANDO NECESITES AGRUPAR

// ¿UN ARREGLO DEBE DE TENER CON SUS ELEMENTOS EL MISMO TIPO DE DATO?

const elementos = [
    "Nombre",
    23,
    true,
   {
       pais: "México"
   } 
]

console.log(elementos)
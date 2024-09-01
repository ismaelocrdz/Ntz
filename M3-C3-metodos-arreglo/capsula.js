// forEach
// No devuelve nada, devuelve un undefined

const personas = ["Mike", "Daniela", "Sebastian"]

personas.forEach(function (e, i){
    // e => Obtener el elemento en el cual estamos situados en ese momento dentro del ciclo
    // i => Índice (0,1,2)
    personas[i] = `Hola ${e} - ${i}`
})

console.log(personas)

// .map

const paises = ["México", "Perú", "Colombia"]

const nuevosPaises = paises.map(function(e, i){
    // DEBE RETORNAR EL CAMBIO DE CADA ELEMENTO
    return `Yo soy de ${e}`
}) 

console.log(nuevosPaises)
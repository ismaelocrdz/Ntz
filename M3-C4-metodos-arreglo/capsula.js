// MÉTODOS DE ARREGLO

// FILTER
// A partir de un arreglo, encontrar ciertos elementos que cumplan con una condición

const numeros = [2,4,6,8]

const nuevosNumeros = numeros.filter(function (e) {
    // PASAR LA CONDICIÓN COMO RETORNO
    //     EXPRESIÓN - UN TRUE O UN FALSE
    return e <= 4
})


// REDUCE
// Un método de arreglo que nos permite acceder a cada elemento del arreglo y acumularlo/combinarlo con el objetivo de retornar un solo elemento (puede ser un tipo de dato diferente)


const serieNumeros = [10,20,30,40]

const total = serieNumeros.reduce(function (acumulado, valorActual) {
    console.log("valor actual:", valorActual)
    console.log("acumulado:", acumulado)
    
    return valorActual + acumulado

}, 0)

console.log(total)
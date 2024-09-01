// FUNCIONES

// BLOQUES DE CÓDIGO QUE NOS PERMITEN REUTILIZAR TANTAS VECES COMO NOSOTROS QUERAMOS

// 1. DECLARACIÓN
// PLANO DE LA FUNCIÓN

// LO QUE ESTÁ DENTRO DE LOS PARENTESIS EN LA DECLARACIÓN SE LES CONOCE COMO PARÁMETROS
function suma(valorA, valorB){
    console.log("Valor A:", valorA)
    console.log("Valor B:", valorB)
    return valorA + valorB
}


// 2. INVOCACIÓN
// EJECUTAR NUESTRA FUNCIÓN
// A LOS VALORES REALES QUE SE INTRODUCEN EN EL PARENTESIS DE LA INVOCACIÓN SE LES LLAMA ARGUMENTOS
console.log(suma(4,5))
console.log(suma(15,25))
console.log(suma(3,5))
console.log(suma(5,28))
console.log(suma(15,585))
console.log("Módulo 03 | Cápsula 04")
console.log("Manipulación de Arreglos")
console.log("\n")
console.log("Ejercicio 01")
console.log("A partir del arreglo, usa filter para obtener un nuevo arreglo que coincida con el valor 15")
console.log("\n")
const numbers=[1,5,7,8,10,15,32,55,59]
console.log(numbers)
const newNumbers=numbers.filter(function(e){
    return e==15
    }
)
console.log("New Numbers")
console.log(newNumbers)
console.log("\n")
console.log("Ejercicio 02")
console.log("A partir del arreglo, crea uno nuevo usando filter para obtener los números pares")
console.log("\n")
console.log(numbers)
const evenNumbers=numbers.filter(function(e){
    return e%2===0
    }
)
console.log(evenNumbers)
console.log("\n")
console.log("Ejercicio 03")
console.log("A partir del arreglo, crea uno nuevo usando reduce para obtener un nuevo arreglo que multiplique todos sus elementos")
//console.log("\n")
console.log("\n")
console.log(numbers)
const total=numbers.reduce(function(multiply,value){
    console.log("Número", value)
    console.log("Multiplicación", multiply)
    return value*multiply
    },10
)
console.log(total)

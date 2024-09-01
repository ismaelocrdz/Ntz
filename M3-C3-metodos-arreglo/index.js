console.log("Módulo 03")
console.log("Cápsula 03")
console.log("Manipulación de Arreglos")
console.log("\n")
console.log("Ejercicio 01")
console.log("Itera con forEach el arreglo siguiente, mostrando a través de console.log cada uno de sus elementos")
console.log("\n")
const marcas = ["Apple", "Microsoft", "Linux"]
marcas.forEach(function(x){
    console.log(x)
})
console.log("\n")
console.log("Ejercicio 02")
console.log("Con el siguiente arreglo y mediante map, multiplcia cada elemento por 10. Guarda el resultado en una variable llamada result. Para finalizar, muestra el resultado")
console.log("\n")
const numbers=[1,2,3,4,5]
console.log(numbers)
result=numbers.map(
    function (e){
        return `${e*10}`
    }
)
console.log(result)

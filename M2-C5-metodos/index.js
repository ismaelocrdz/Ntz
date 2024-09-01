console.log("\n")
console.log("Módulo 02")
console.log("Cápsula 05")
console.log("Métodos de Objeto")
console.log("\n")
console.log("Ejercicio 01")
console.log("Cars 01")
console.log("\n")
const cars={
    trademark:"VW",
    country:"México",
    factory:"Puebla"
}
Object.keys(cars)
console.log(Object.keys(cars))
const arrVWcars=Object.keys(cars)
console.log(arrVWcars)
console.log("\n")
console.log("Fusión de Propiedades")
const color01={Tiguan:"Red"}
const color02={Nivus:"Gray"}
const color03={Taos:"Black"}
console.log(Object.assign(color01,color02,color03))
const colors=Object.assign(color01,color02,color03)
console.log(colors)
console.log("\n")
console.log("Ejercicio 02")
console.log("Cars 02")
console.log("\n")
const vw01={model:"Tiguan",color:"Red"}
const vw02={model:"Nivus",color:"Gray"}
const vw03={model:"Taos",color:"Black"}
const modelColors=Object.assign(vw01,vw02,vw03)
console.log(modelColors)
console.log("\n")
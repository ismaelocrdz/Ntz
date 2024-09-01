console.log("\n")
console.log("Módulo 02")
console.log("Cápsula 03")
console.log("Recorrido de Objetos")
console.log("\n")
console.log("Ejercicio 01")
console.log("Soda")
console.log("\n")
let soda={
    gas:true,
    flavor:"cola",
    contMl:600
}
for(let property in soda){
    console.log(`La propiedad es: ${property} y su valor: ${soda[property]}`)
}
console.log("\n")
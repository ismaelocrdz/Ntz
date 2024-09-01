//Recorrido de Objetos
let computer={
    so:"MacOS",
    color:"Gris"
}
//Ciclo for...in
for(let property in computer){
    console.log(property)
    console.log(computer[property])
    console.log("\n")
}
let vocho={
    color:"blue",
    year:79    
}
console.log("Para facilitar la lectura haremos lo siguiente")
    console.log("Dentro del console.log escribiremos lo siguiente:")
    console.log("console.log(`La propiedad es: ${property} y su valor es: ${vocho[property]}`)")
    console.log("\n")
for(let property in vocho){    
    console.log(`La propiedad es: ${property} y su valor es: ${vocho[property]}`)
}
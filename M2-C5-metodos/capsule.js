console.log("Métodos de Objeto")
console.log("Object.keys")
console.log("permite devolver un arreglo")
const country={
    name:"México",
    population:100
}
Object.keys(country)
console.log(Object.keys(country))
console.log("\n")
console.log("Object.keys")
console.log("Éste se puede tomar para guardarlo dentro de una variable")
const arrCountry=Object.keys(country)
console.log(arrCountry)
console.log("\n")
console.log("Object.assign")
console.log("El cual nos permite dos cosas:")
console.log("1.-Fusionar Propiedades")
const l01={habla:"Español"}
const l02={parla:"Italiano"}
const l03={speak:"English"}
console.log(Object.assign(l01,l02,l03))
console.log("\n")
console.log("Al igual que con Object.keys, se le puede tomar para asignarlo a una variable para obtener la fusión de las propiedades")
const languages=Object.assign(l01,l02,l03)
console.log(languages)
console.log("\n")
console.log("y por último:")
console.log("2.-Síntesis al último valor")
const c01={nombre:"México",comida:"Tacos"}
const c02={nombre:"Italia"}
const c03={nombre:"Australia",comida:"Iced VoVo"}
const countries=Object.assign(c01,c02,c03)
console.log(countries)
console.log("\n")

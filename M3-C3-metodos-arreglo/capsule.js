console.log("\n")
console.log("Módulo 03")
console.log("Arreglos")
console.log("Cápsula 03")
console.log("forEach y Métodos de Arreglo I")
console.log("\n")
//console.log("Manipulación de arreglos")
console.log("Método forEach")
console.log("\n")
const people=["Ana Mier de Cilla","Lola Mento","Zacarías Flores del Campo"]
people.forEach(function(x){
    console.log(x)
})
people.forEach(function(x,i){
    people[i]=`Hola, ${people[i]}`
})
console.log(people)
console.log("\n")
console.log("Obtenemos el mismo resultado si sustituimos ${people[i]} por ${x}")
console.log("(Se cambia el nombre del arreglo y la palabra Hola para fines prácticos. Por ello es que no son los mismos nombres.)")
const otherPeople=["Susana Braga","Ana Tomía","Encarna Vales"]
console.log(otherPeople)
otherPeople.forEach(function(x,i){
    otherPeople[i]=`Adiós, ${x}`
})
console.log(otherPeople)
console.log("\n")
console.log("En este caso la letra 'x' es la variable en la que se almacenan los nombres. Podemos usar otra letra sin problema")
console.log("La letra 'i' hace referencia al índice. Es decir que, en este caso, apunta al índice (0,1,2). Esto dependerá del número de elementos que tenga el arreglo. Se aconseja el uso de 'i' por la referencia a la palabra Index")
console.log("\n")
const morePeople=["Susana Braga","Ana Tomía","Encarna Vales"]
console.log(morePeople)
console.log("Si a la expresión ${x} agregamos  - ${i}, obtendremos el número del índice de cada elemento")
morePeople.forEach(function(x,i){
    morePeople[i]=`Adiós, ${x} - ${i}`
})
console.log(morePeople)
console.log("\n")
console.log("Método map")
console.log("\n")
console.log("map nos permite hacer cambios en un arreglo sin afectar al original")
console.log("\n")
const countries=["México","Italia","Francia"]
console.log(countries)
const newCountries=countries.map(function(e,i){
    return `Mi país de origen es ${e}`
})
console.log(newCountries)
const otherCountries=newCountries.map(function(e,i){
    return `${e} - ${i}`
})
console.log("Inicia el experimento")
console.log(otherCountries)
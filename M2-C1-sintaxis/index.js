console.log("Módulo 02")
console.log("Cápsula 01")
console.log("Sintaxis de Objetos")
console.log("\n")
console.log("Ejercicio 01")
console.log("Objeto Mascota")
console.log("\n")

let pet={  
    name:"Pimienta",
    owner:"Yazmín",
    vaccine:true,
    race:"Tabby",
    age:8,
    division:{
      species:"cat",
      commonName:"domestic cat",
      scientificName:"Felis catus",
      class:"mammal",
      family:"felids",
      diet:"carnivorous"
    },
    cat:["Pimienta", "cat", "felids"],
  }
console.log("Nombre de la mascota")
console.log(pet.name)
console.log("Familia a la que pertenece")
console.log(pet.cat[2])
console.log("Nombre del dueño")
console.log(pet.owner)

console.log("\n")
console.log("Ejercicio 02")
console.log("Objeto School")
console.log("\n")

let school={
  name:"María Melo Machuca",
  availability:{
    morning:true,
    afternoon:false,
  },
  cost:12587
}
console.log("Dot Notation")
console.log("Dot Notacion: console.log(school.availability.morning)")
console.log("Dot Notacion: console.log(school.availability.afternoon)")
console.log(school.availability.morning)
console.log(school.availability.afternoon)
console.log("\n")
console.log("Bracket Notation")
console.log('Dot Notacion: console.log(school["availability"]["morning"]')
console.log(school["availability"]["morning"])
console.log('Dot Notacion: console.log(school["availability"]["afternoon"]')
console.log(school["availability"]["afternoon"])

console.log("\n")
console.log("Ejercicio 03")
console.log("Objeto Dog")
console.log("\n")

let dog={
  name:"Gogo",
  color:"gold",  
  bark: function(){
    console.log(dog.name,dog.color)
    return "Canino"
  }
}
console.log(dog)
console.log(dog.name)
console.log(dog.name,dog.color)
console.log(dog.bark())




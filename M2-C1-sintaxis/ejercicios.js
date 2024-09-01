/*
  JAVASCRIPT BÁSICO

  MÓDULO 2
  CÁPSULA 1. "SINTAXIS DE OBJETOS"
*/

//============EJERCICIOS============//
//==================================//
//==================================//


//==================================//
/* 
  EJERCICIO 1: CREA UN OBJETO "MASCOTA" QUE INCLUYA AL MENOS 5 PROPIEDADES. 
  DE PREFERENCIA, MEZCLA EL VALOR CON DIFERENTES TIPOS DE DATOS (STRINGS, NUMBER, BOOLEAN, OTRO OBJETO, UN ARREGLO)
*/
let pet={  
  name:"pimienta",
  owner:"Yazmín",
  vaccine:true,
  race:"Tabby",
  age:8,
  division:{
    species:"cat",
    commonName:"domestic cat",
    scientificName:"Felis catus",
    class:"mammal",
    family:"felids"
  },
  cat:["Pimienta", "cat", "felids"];
}
console.log(pet)


//================= =================//
/* 
  EJERCICIO 2: CREA UN OBJETO "SCHOOL" QUE INCLUYA 3 PROPIEDADES CON UN TIPO DE DATO ESPECÍFICO:
  A) NAME (STRING)
  B) AVAILABILITY (OBJECT)
    - MORNINGS (BOOLEAN)
    - AFTERNOONS (BOOLEAN)
  C) COST (NUMBER)

  UNA VEZ REALIZADO EL OBJETO, ACCEDE AL VALOR DE "MORNINGS" A TRAVÉS "DOT NOTATION" Y "BRACKET NOTATION". AMBOS.

*/
let school={
  name:"María Melo Machuca",
  availability:{
    morning:true,
    afternoon:false,
  },
  cost:12587
}

console.log(school.availability.morning)
console.log(school["availability"]["morning"])
console.log(school["availability"]["afternoon"])


//==================================//
/* 
  EJERCICIO 3: CREA UN OBJETO "PERRO" QUE CONTENGA 2 PROPIEDADES Y UN MÉTODO.
  A) NAME (STRING)
  B) COLOR (STRING)
  C) BARK (FUNCTION)
*/

let dog={
  name:"Gogo",
  color:"gold",
  sound:"bark",  
  bark: function(){
    console.log("Canino")
    return "Canino"
  }
}
console.log(dog)
console.log(dog.name)
console.log(dog.name,dog.color)
console.log(dog.bark())
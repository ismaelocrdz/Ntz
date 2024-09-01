console.log("Módulo 02, Cápsula 06")
console.log("Colaboración de Funciones")
console.log("\n")
console.log("Object Constructor")
console.log('Mediante una función podemos construir un Objeto, usando la palabra "new"')
function Person(name,age){
    //1.- Propiedades
    this.name=name
    this.age=age
    //2.- Métodos (Comportamientos)
    this.greeting=function(){
        return "¡Hola, Mi nombre es "+this.name+"!"
    }
}
console.log("\n")
console.log("Generando el Objeto 01")
const person01=new Person("Alma Marcela", 29)
console.log(person01)
console.log("Nombre:",person01.name)
console.log("Edad:",person01.age)
console.log(person01.greeting())
console.log("\n")
console.log("Generando el Objeto 02")
const person02=new Person("Aitor Menta", 34)
console.log(person02)
console.log("Nombre:",person02.name)
console.log("Edad:",person02.age)
console.log(person02.greeting())











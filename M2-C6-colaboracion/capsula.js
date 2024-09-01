// Colaboración con funciones

// OBJECT CONSTRUCTOR
/**
 * A través de una función, podemos "construir un objeto", utilizando la palabra "new".
 */

function Persona (nombre, edad) {

    // 1. PROPIEDADES
    this.nombre = nombre
    this.edad = edad

    // 2. MÉTODOS (COMPORTAMIENTOS)
    this.saludar = function(){
        return "Hola! Mi nombre es " + this.nombre
    }

}

// GENERAMOS NUESTRO PRIMER OBJETO
const persona1 = new Persona("mike", 34)

console.log(persona1)

console.log(persona1.nombre)
console.log(persona1.edad)

console.log(persona1.saludar())

// GENERAMOS NUESTRO SEGUNDO OBJETO
const persona2 = new Persona("alicia", 25)

console.log(persona2)

console.log(persona2.saludar())
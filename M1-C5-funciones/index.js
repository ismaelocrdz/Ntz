//Funciones
//Estas son bloques de código que nos permiten su reutilización tantas veces como lo necesitemos

//Una función está compuesta por dos partes. La primera se llama
//1.- Declaración
//Dentro de ésta, se encuentra el plano de la función, que no es sino el cómo habrá de funcionar la función, y cuáles serán las sentencias que se ejecutarán dentro de la misma.
function example(){
    console.log("Hola, soy una función")
}
// y la segunda parte que es la
//2.- Invocación, que es el llamado para la ejecución de la Función
example()
example()

function suma(valorA, valorB){
    //Dentro de una función, se debe aplicar siempre un retorno. Los retornos son el resultado de haber invocado a una función
    console.log("El valor de A es: ", valorA)
    console.log("El valor de B es: ",valorB)
    return valorA + valorB

}
//Los valores que se encuentran dentro del paréntesis se llaman Argumentos
console.log("El resultado de la suma de los valores A + B es:", suma(1,2))
console.log("El resultado de la suma de los valores A + B es:", suma(4,3))

console.log("\n")
console.log("Módulo 01")
console.log("Cápsula 05")
console.log("Funciones")
console.log("\n")
console.log("Ejercicio 01")

function sumar(num01, num02){
    console.log("El valor de 01 es:", num01)
    console.log("El valor de 02 es:",num02)
    return num01 + num02  
  }
  console.log("El resultado de la suma de los valores 01 + 02 es: ", sumar(5,19))
  console.log("El resultado de la suma de los valores 01 + 02 es: ", sumar(18,142))


  console.log("\n")
  console.log("Ejercicio 02")
  function sujeto(nombre, apellido){
    console.log("El nombre almacenado en la variable nombre es: ", nombre)
    console.log("El apellido almacenado en la variable apellido es: ",apellido)
    return nombre + apellido
  }
  
console.log("El nombre completo del sujeto es:", sujeto("Alma Marcela ","Silva de Alegría"))
console.log("El nombre completo del sujeto es:",sujeto("Elver ","Galarga"))

console.log("\n")
console.log("Ejercicio 03")

function alumno(name, lastName){
return name+lastName
  }
function promedio(mat01, mat02, mat03, mat04, mat05){
    console.log("Calificación de la materia 01: ", mat01)
    console.log("Calificación de la materia 02: ",mat02)
    console.log("Calificación de la materia 03: ",mat03)
    console.log("Calificación de la materia 04: ",mat04)
    console.log("Calificación de la materia 05: ",mat05)
    return ((mat01+mat02+mat03+mat04+mat05)/5)
  
  }
console.log("Las calificaciones de las materias son las siguientes:")
console.log("El promedio de las calificaciones de", alumno("Elver ","Galarga "),"es: ", promedio(71,77,98,54,99))
console.log("\n")
console.log("El promedio de las calificaciones de", alumno("Dolores ","Delano "),"es: ", promedio(90,85,80,99,100))
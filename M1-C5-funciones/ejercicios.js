/*
  NETZUN.COM
  INSTRUCTOR: MIKE NIEVA
  JAVASCRIPT BÁSICO

  MÓDULO 1
  CÁPSULA 5. "FUNCIONES"
*/

//============EJERCICIOS============//
//==================================//
//==================================//


//==================================//
/* 
  EJERCICIO 1: COMIENZA DECLARANDO UNA FUNCIÓN QUE SUME DOS VARIABLES. INCLUYE DOS PARÁMETROS Y QUE AMBOS SE SUMEN ENTRE ELLOS:
  A) NUMA. TIPO DE DATO NUMBER
  B) NUMB. TIPO DE DATO NUMBER

  UNA VEZ DECLARADA LA FUNCIÓN, RECUERDA INVOCARLA Y OBSERVAR EL RESULTADO CON UN CONSOLE.LOG().
*/
function suma(num01, num02){
  console.log("El valor de 01 es: ", num01)
  console.log("El valor de 02 es: ",num02)
  return num01 + num02

}
console.log("El resultado de la suma de los valores 01 + 02 es: ", suma(5,19))
console.log("El resultado de la suma de los valores 01 + 02 es: ", suma(18,142))

//================= =================//
/* 
  EJERCICIO 2: ESTABLECE UNA FUNCIÓN QUE DETERMINE DOS PARÁMETROS:
  A) NOMBRE. CON TIPO DE DATO STRING
  B) APELLIDO. CON TIPO DE DATO STRING

  Y, PERMITE QUE AMBOS SE CONCATENEN ENTRE ELLOS. UTILIZA EL OPERADOR DE SUMA PARA UNIR AMBOS TEXTOS. 
  RETORNA EL VALOR
*/

function sujeto(nombre, apellido){
  console.log("El nombre almacenado en la variable nombre es: ", nombre)
  console.log("El apellido almacenado en la variable apellido es:",apellido)
  return nombre + apellido
}
console.log("El nombre completo del sujeto es:", sujeto("Alma Marcela","Silva de Alegría"))

//==================================//
/* 
  EJERCICIO 3: ESTABLECE UNA FUNCIÓN QUE REALICE EL PROMEDIO DE 5 NÚMEROS. UTILIZA 5 PARAMETROS:
  A) CA. TIPO DE DATO NUMBER
  B) CB. TIPO DE DATO NUMBER
  C) CC. TIPO DE DATO NUMBER
  D) CD. TIPO DE DATO NUMBER
  E) CE. TIPO DE DATO NUMBER

  EL RESULTADO DEBE SER UN NÚMERO. RECUERDA AL INVOCAR, REVISAR TU RESULTADO CON CONSOLE.LOG().

*/
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
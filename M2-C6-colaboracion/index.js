console.log("Módulo 02")
console.log("Cápsula 06")
console.log("Colaboración con Funciones")
console.log("\n")
console.log("Ejercicio 01")
console.log("Car")
console.log("\n")
function car(trademark,color){
    this.trademark=trademark
    this.color=color
    this.counter=function(){
        return "Marca: "+trademark+"\n"+"color: "+color
    }
}
console.log("Ejercicio 02")
console.log("\n")
console.log(car)
console.log(car.trademark)
const car01=new car("Tiguan","Red")
console.log(car01)
console.log("Marca:",car01.trademark)
console.log("Color:",car01.color)
console.log("\n")
console.log(car01.counter())
console.log("\n")
const car02=new car("Nivus","Gray")
console.log(car02)
console.log("Marca:",car02.trademark)
console.log("Color:",car02.color)
console.log("\n")
console.log(car02.counter())
console.log("\n")
const car03=new car("Taos","Black")
console.log(car03)
console.log("Marca:",car03.trademark)
console.log("Color:",car03.color)
console.log("\n")
console.log(car03.counter())
console.log("\n")

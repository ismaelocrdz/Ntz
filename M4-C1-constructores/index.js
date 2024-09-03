console.log("\n")
console.log("Módulo 04 | Cápsula 01")
console.log("Constructores")
console.log("\n")
console.log("Ejercicio 01")
console.log('Construye una función cuyo objeto sea "Casa". Debe contar con 5 propiedades y 2 métodos')
function Home(tipo){
    this.tipo=tipo
    this.bedrooms=4
    this.bathrooms=2
    this.kitchen=1
    this.garage=1
    this.garden=1
    this.turnOnTheLights=function(){
        return "Estoy encendiendo las luces"
    }
    this.shutingTheDoors=function(){
        return "Estoy asegurando las puertas"
    }
}

//Agregamos línea
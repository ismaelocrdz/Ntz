console.log("\n")
console.log("Módulo 04 | Cápsula 01")
console.log("Constructores")
console.log("\n")
function Transporte(tipo){
    //Agregamos propiedades
    this.tipo=tipo
    this.llantas=4
    //Agregamos métodos
    this.acelerar=function(){
        return "Estoy acelerando"
    }
    this.agregarLlanta=function(){
        return this.llantas++
    }
}
const auto=new Transporte("Terrestre")
console.log(auto)
console.log(auto.acelerar())
auto.acelerar=function(){
    return "Voy a acelerar fuera de la función"
}
console.log(auto.acelerar())
Transporte.prototype.frenar=function(){
    return "Estoy frenando"
}
console.log(auto.frenar())
console.log(auto.llantas)
auto.agregarLlanta()
console.log(auto.llantas)
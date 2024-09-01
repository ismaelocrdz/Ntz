// CONSTRUCTORES

function Transporte (tipo){

    // Propiedades
    this.tipo = tipo
    this.llantas = 4



    // Métodos
    this.acelerar = function () {
        return "Estoy acelerando"
    }

    this.agregarLlanta = function () {
        return this.llantas++
    }

}

const carro = new Transporte("Terrestre")

console.log(carro)
console.log(carro.acelerar())

carro.acelerar = function () {
    return "Voy a acelerar fuera de la función"
}

console.log(carro.acelerar())


Transporte.prototype.frenar = function(){
    return "Estoy frenando"
}

console.log(carro.frenar())

console.log(carro.llantas)
carro.agregarLlanta()
carro.agregarLlanta()
carro.agregarLlanta()
console.log(carro.llantas)



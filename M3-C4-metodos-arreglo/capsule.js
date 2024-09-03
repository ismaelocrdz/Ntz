console.log("\n")
console.log("Módulo 03")
console.log("Cápsula 04")
console.log("Métodos de Arreglo II")
console.log("filter")
console.log("\n")
console.log("A partir de un arreglo, se buscan elementos que cumplan una condición y se incluyen en otro arreglo. El resto, quedan fuera")
const numbers=[2,4,6,8]
const newNumbers=numbers.filter(function (e){
    //Se pasa la función como retorno
    //La expresión debe arrojar un true o un false
    return e<=4
    }
)
console.log(newNumbers)
console.log("\n")
console.log("reduce")
console.log("\n")
console.log("Nos permite hacer un recorrido por cada uno de los elementos para finalmente acumularlos, combinarlos, con el objeto de retornar un solo elemento que bien puede ser un tipo de dato diferente")
const seriesNumbers=[10,20,30,40,50]
const total=seriesNumbers.reduce(function(sum, value){
    console.log("Valor actual:", value)
    console.log("Suma:", sum)
    return value+sum
    },0
)
console.log(total)
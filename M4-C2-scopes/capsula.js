// ALCANCE GLOBAL
var variable1 = "Soy una variable var"
const variable2 = "Soy una variable con const"



// 1. FUNCIÓN
function saludar(){

    

    // ALCANCE LOCAL
    function saludarNuevamente () {

        var variable3 = "Soy una variable var"
        const variable4 = "Soy una variable con const"

        

    }      
    
    console.log(variable3)
    console.log(variable4)
    
    saludarNuevamente()

}

    

saludar()

// 2. BLOQUE

if(true) {
    
    

}
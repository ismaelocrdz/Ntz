// OBJECT LITERALS

let casa = {
    color: "blanca",
    cuartos: 4,
    "Sistema Inteligente": true,
    interiores: {
        cochera: true,
        baños: {
            "espejo": true,
            regadera: {
                "version moderna": true,
                "version tradicional": false
            }
        }
    },
    alarmaPrendida: false, // PASAR DE FALSO A VERDADERO
    activarAlarma: function(){ // MÉTODOS
        console.log("Activo la alarma")
        return this.alarmaPrendida = true
    }
}

console.log(casa)
console.log(casa["Sistema Inteligente"])

console.log(casa.interiores.baños.regadera) // DOT NOTATION
// COMBINACIÓN DE DOT NOTATION CON BRACKET NOTATION
console.log(casa.interiores.baños.regadera["version tradicional"])
console.log(casa.activarAlarma())
console.log(casa)
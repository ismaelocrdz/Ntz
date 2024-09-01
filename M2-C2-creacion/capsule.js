//Object Literal
let casa={
    color:"blanca",
    rooms:4,
    "Smart System":true,
    interiores:{
        cochera:true,
        baños:{
            "espejo":true,
            regadera:{
                "version moderna":true,
                "version tradicional":false,
            }
        }
    },
    alarmOn:false,//¿Cómo lo paso a verdadero?
    activateAlarm:function(){//Agregamos este método
        console.log("Se activa la alarma")
        return this.alarmOn=true;

    }
}
console.log(casa)
console.log(casa["Smart System"])
console.log("\n")
console.log("Dot Notation: console.log(casa.interiores.baños.regadera)")
console.log(casa.interiores.baños.regadera)
console.log("\n")
console.log("Combinación de Dot Notation con Bracket Notation:")
console.log('console.log(casa.interiores.baños.regadera["version tradicional"])')
console.log(casa.interiores.baños.regadera["version tradicional"])
console.log("\n")
console.log(casa.activateAlarm())
console.log(casa)


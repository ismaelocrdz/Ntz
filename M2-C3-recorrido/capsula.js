// RECORRIDO DE OBJETOS

let computadora = {
    sistemaoperativo: "macOS",
    color: "gris"
}

// for...in
for(let propiedad in computadora){
    // console.log(propiedad)
    // console.log(computadora[propiedad])
    console.log(`La propiedad es: ${propiedad} y su valor es ${computadora[propiedad]}`)
}


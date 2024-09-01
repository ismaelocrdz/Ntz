// MANIPULACIÓN DE PROPIEDADES

let empresa = {
    nombre: "Corporativo LATAM",
    empleados: 100
}


// ADICIÓN DE PROPIEDADES
empresa.levantamientoCapital = true
console.log(empresa)

// BORRADO DE PROPIEDADES
// delete empresa.empleados
// console.log(empresa)


// MODIFICACIÓN DE PROPIEDADES
empresa.colaboradores = empresa.empleados
delete empresa.empleados
console.log(empresa)

//Manipulación de propiedades
let empresa={
    nombre:"Corporativo Matal",
    empleados:100
}
//Adición de propiedades
empresa.levantamientoCapital=true
console.log(empresa)
console.log("\n")

//Borrado de propiedades
//delete empresa.empleados
//console.log(empresa)
//console.log("\n")

//Modificación de propiedades
empresa.colaboradores=empresa.empleados
delete empresa.empleados
console.log(empresa)
console.log("\n")
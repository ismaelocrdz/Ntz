// OBJETOS

/**
 * TIPO DE DATO QUE NOS PERMITE ALMACENAR COLECCIONES DE DATOS.
 * NOS AYUDA A DESCRIBIR A UNA ENTIDAD REAL, CON SUS PROPIEDADES Y VALORES
 * PROPIEDADES -> STRING (TEXTO PLANO)
 * VALORES -> CUALQUIER OTRO TIPO DE DATO
 * 
 * 
 * 2 FORMAS:
 * A. OBJECT LITERALS
 * B. OBJECT CONSTRUCTORS
 */

let usuario = {
    nombre: "Mike",
    apellido: "Nieva",
    cliente: false,
    edad: 33,
    redes: {
        facebook: "/mikenieva",
        twitter: null
    },
    saludar: function(){ // MÉTODOS
        console.log("Hola")
        return "Hola"
    }
}

console.log(usuario)
console.log(usuario.nombre)
console.log(usuario.edad)

console.log(usuario.saludar)
console.log(usuario.saludar())

// ACCESO A PROPIEDADES DE UN OBJETO
console.log(usuario.redes.facebook) // DOT NOTATION
console.log(usuario["nombre"])  // BRACKET NOTATION
console.log(usuario["redes"]["facebook"])

//Objetos

/** Entidad independiente con propiedades y tipos. Permite agrupar datos relacionados y dividir el código en partes lógicas
 * Son una solución eficaz para crear programas orientados a objetos.
 * Se usan para describir una entidad real con sus
 * 
 * Propiedades -> String (Texto plano) y con 
 * 
 * Valores -> Cualquier otro tipo de dato
 * 
 * Para crear un objeto se deben considerar dos cosas
 * 1.- Object Literals 
 * */
console.log("Ejemplo 01")
let user01={
    /*Un objeto puede tener propiedades (Inicio)*/
    name:"Isma",
    lastName:"Ochoa",
    costumer:false,
    age:51,
    /*Un objeto puede tener propiedades (Final)*/
    /*Y puede tener también funciones (Inicio)*/
    /*A las funciones dentro de un objeto son llamados métodos */
    greet:function(){
        console.log("Hola")
        return "Hola"
    }
    /*Y puede tener también funciones (Final)*/
}
console.log(user01)
console.log(user01.name)
console.log(user01.age)
console.log(user01.greet)
console.log(user01.greet())
console.log("\n")

console.log("Ejemplo 02")
console.log("Objeto anidado dentro de un objeto")
let user02={    
    name:"Lola",
    lastName:"Meraz",
    costumer:true,
    age:33,
    /*Podemos anidar un objeto dentro de otro (Inicio) */
    socialMedia:{
        facebook:"/LolaMeraz",
        twitter:null
    },
    /*Podemos anidar un objeto dentro de otro (Final) */
    greet:function(){
        console.log("Hola")
        return "Hola"
    }
}
console.log(user02)
console.log(user02.name,user02.lastName)
console.log(user02.age)
console.log(user02.greet)
console.log(user02.greet())
//Acceso a las propiedades de un objeto
console.log(user02.socialMedia.facebook)//dot notation
console.log(user02["socialMedia"]["facebook"]["twitter"])
console.log("\n")
 /** 
 * 2.- Object Constructors
 */
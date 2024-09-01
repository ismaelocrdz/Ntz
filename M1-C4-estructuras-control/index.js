let op01=5+12
let op02=79-5
let op03=93*78
let op04=752/97

if(op02 > op03){
    console.log(op02)
}else{
    console.log(op03)
}

let result = 5>4
console.log(result)

let dia="Buenos días";
let tarde="Buenas tardes";
let noche="Buenas noches";
let hrDia=1159
let hrTarde=1759
let hrNoche=2359
if(hrDia > hrTarde){
  console.log(dia)
}else if (hrTarde > hrDia &&  hrTarde < hrNoche){
  console.log(tarde)
}else if(hrNoche>hrTarde){
    console.log(noche)
}else{
    console.log("No sé qué hora es")
}

let lang="Otro"
switch(lang){
  case "México":
    console.log("¡Viva México, Cabrones!")
    break;
  case "Francia":
    console.log("Vive la France")
    break;
  case "Grecia":
    console.log("Ζήτω η Ελλάδα")
    break;
  default:
    console.log("Nie rimaynintaqa  mówię w języku országnak vorbesc țării kraju")
}

let os = "linux"

switch(os){
    case "macOS":
        console.log("Tengo macOS")
        break;
    case "windows":
        console.log("Tengo Windows")
        break;
    default:
        console.log("Tengo otro sistema operativo")
}


// ESTRUCTURAS DE CONTROL

// IF

let daytime = "night"

if(daytime === "morning"){
    console.log("good morning")
} else if(daytime === "afternoon") {
    console.log("good afternoon")
} else {
    console.log("good night")
}


// SWITCH

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


const saludar = (nombre, callback) => {
    return callback(nombre)
}

saludar("Anahí", function (x) {
    return `${x} dice hola`
})




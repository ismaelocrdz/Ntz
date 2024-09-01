// 1. VARIABLES
const buttons           = document.querySelector("#buttons")
const mensaje           = document.querySelector("#mensaje")


// 2. EVENTOS

buttons.addEventListener("click", (event) => {

    console.log(event)
    console.log(event.currentTarget)
    console.log(event.target)

    console.log(event.target.attributes)
    console.log(event.target.attributes.propiedad.value)

    console.log(event.target.textContent)

    return mensaje.innerHTML = event.target.textContent


})

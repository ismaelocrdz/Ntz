// 1. VARIABLES
const form          = document.querySelector("#formulario")
const sendBtn       = document.querySelector("#enviar") 
const resultArea    = document.querySelector("#informe")


// 2. EVENTOS

sendBtn.addEventListener("click", (event) => {

    // DETENER LA RECARGA DE PÁGINA
    event.preventDefault()


    // ABSTRAER TODOS LOS DATOS EN VARIABLES

    // A. NOMBRE
    const name = form.name.value

    // B. EMAIL
    const email = form.email.value

    // C. FECHA DE NACIMIENTO
    const birthDate = form.birthDate.value


    // D. MÚSICA
    const music = form.music.checked
    let musicIsChecked

    if(music === true) {
        musicIsChecked = "Me encanta"
    } else {
        musicIsChecked = "Prefiero el silencio"
    }

    // E. POSTRES
    const dessert = form.dessert.checked
    let dessertIsChecked

    if(dessert) {
        dessertIsChecked = "Me gustan los postres"
    } else {
        dessertIsChecked = "No me gustan los postres"
    }

    // F. DECISIONES

    const selectedIndex = form.decisions.selectedIndex

    const option = form.decisions.options[selectedIndex]
    const optionText = option.text



    // FINALMENTE, MOSTRAR TODOS LLOS DATOS EN LA SECCIÓN DE INFORME

    return resultArea.innerHTML = `
        <div>
            <h1>Resultado</h1>
            <p>${name}</p>
            <p>${email}</p>
            <p>${birthDate}</p>
            <p>${musicIsChecked}</p>
            <p>${dessertIsChecked}</p>
            <p>${optionText}</p>

        </div>
    `
})

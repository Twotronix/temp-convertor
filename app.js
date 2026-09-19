const inputField = document.querySelector("#inputField")
const convertBtn = document.querySelector("#convertBtn")
const outputField = document.querySelector("#preview")
const drp1 = document.querySelector("#dropdown1")
const drp2 = document.querySelector("#dropdown2")
document.body.classList.toggle("celcius")

function updateTemp() {
    const drp1Val = drp1.value
    const drp2Val = drp2.value
    const startTemp = Number(inputField.value)
    let celctemp
    let finaltemp
    if (isNaN(startTemp)) {
        outputField.textContent = `Enter A Number`
    }
    if (!startTemp) {
        outputField.textContent = `Enter A Number`
    }
    if (drp1Val === "c") {celctemp = startTemp}
    else if (drp1Val === "f") {celctemp = (startTemp - 32) / 1.8}
    else if (drp1Val === "k") {celctemp = startTemp - 273}
    else if (drp1Val === "r") {celctemp = (startTemp - 491.67) / 1.8}

    if (drp2Val === "c") {finaltemp = celctemp}
    else if (drp2Val == "f") {finaltemp = (celctemp * 1.8) + 32}
    else if (drp2Val === "k") {finaltemp = celctemp + 273}
    else if (drp2Val === "r") {finaltemp = (celctemp * 1.8) + 491.67}

    outputField.textContent = `${finaltemp.toFixed(2)}°${drp2Val.toUpperCase()}`
}

convertBtn.addEventListener("click", () => {
    updateTemp()
    started = true
})


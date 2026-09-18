const inputField = document.querySelector("#inputField")
const convertBtn = document.querySelector("#convertBtn")
const outputField = document.querySelector("#preview")
const switchBtn = document.querySelector("#switch")
const indicator = document.querySelector("#indicator")
const drp1 = document.querySelector("#dropdown1")
const drp2 = document.querySelector("#dropdown2")
document.body.classList.toggle("normal")

let started = false

function updateTemp() {
    const drp1Val = drp1.value
    const drp2Val = drp2.value
    const way = String(drp1Val + drp2Val)
    if (way === "cf") {
        const text = (parseFloat(inputField.value) * 1.8) + 32
            if (isNaN(text)) {
                outputField.textContent = `Enter A Number!`
                return
            }
            if (typeof text == "number" && !Number.isNaN(text.toFixed(2))) { 
                outputField.textContent = `${text}°F`
            }

    }
    else if (way === "fc") {
        const text = (parseFloat(inputField.value) - 32) / 1.8
            if (typeof text == "number" && !Number.isNaN(text)) { 
                outputField.textContent = `${text.toFixed(2)}°C`
            }

    }
    else if (drp1Val === drp2Val) {
        outputField.textContent = `Use Seperate Units`
    }
}

convertBtn.addEventListener("click", () => {
    updateTemp()
    started = true
})


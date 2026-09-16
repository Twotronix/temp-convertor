const inputField = document.querySelector("#inputField")
const convertBtn = document.querySelector("#convertBtn")
const outputField = document.querySelector("#preview")
const switchBtn = document.querySelector("#switch")
const indicator = document.querySelector("#indicator")
let way = true
let started = false
switchBtn.addEventListener("click", () => {
    if (way) {
        way = false
        indicator.textContent = "Converting °F To °C"
    }
    else {
        way = true
        indicator.textContent = "Converting °C To °F"
    }
    if (started) {
        updateTemp()
    }
})

function updateTemp() {
    if (way) {
        const text = (parseFloat(inputField.value) * 1.8) + 32
            if (typeof text == "number" && !Number.isNaN(text)) { 
                outputField.textContent = `${text}°F`
            }
    }
    else {
        const text = (parseFloat(inputField.value) - 32) / 1.8
            if (typeof text == "number" && !Number.isNaN(text)) { 
                outputField.textContent = `${text.toFixed(2)}°C`
            }
    }
}

convertBtn.addEventListener("click", () => {
    updateTemp()
    started = true
})


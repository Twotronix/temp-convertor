const drop = document.querySelector("#dropdown1")

drop.addEventListener("change", () => {
    const selectedUnits = drop.value
    document.body.classList.remove("celcius", "fahrenheit", "kelvin", "rankine")

    if (selectedUnits === "c") {
        document.body.classList.add("celcius")
    }
    else if (selectedUnits === "f") {
        document.body.classList.add("fahrenheit")
    }
    else if (selectedUnits === "k") {
        document.body.classList.add("kelvin")
    }
    else if (selectedUnits === "r") {
        document.body.classList.add("rankine")
    }
})
const convertButton = document.querySelector(".convert-button")

function convertValues () {

    const valueToConvert = document.querySelector(".valuetoconvert").value
    const currencyToConvert = document.getElementById("currency-to-convert")
    const currencyConverted = document.getElementById("currency-converted")

    const dolarToday = 5.61

    convertValues = valueToConvert / dolarToday

    currencyToConvert.innerHTML = valueToConvert

    currencyConverted.innerHTML = convertValues

}

convertButton.addEventListener("click", convertValues)
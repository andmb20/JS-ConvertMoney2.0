const convertButton = document.querySelector(".convert-button")

function convertValues () {

    const valueToConvert = document.querySelector(".valuetoconvert").value
    const currencyToConvert = document.getElementById("currency-to-convert")
    const currencyConverted = document.getElementById("currency-converted")

    const dolarToday = 5.61

    convertValues = valueToConvert / dolarToday

    currencyToConvert.innerHTML = new Intl.NumberFormat('pt-BR',
        { style: 'currency', currency: 'BRL' 
        }).format(valueToConvert)

    currencyConverted.innerHTML = new Intl.NumberFormat('en-US',
        { style: 'currency', currency: 'USD' 
        }).format(convertValues)

}

convertButton.addEventListener("click", convertValues)
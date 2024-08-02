const convertButton = document.querySelector(".convert-button")
const currencyText = document.querySelector(".currency-text")



function convertValues() {

    const valueToConvert = document.querySelector(".valuetoconvert").value
    const currencyToConvert = document.getElementById("currency-to-convert")
    const currencyConverted = document.getElementById("currency-converted")

    const dolarToday = 5.61
    const euroToday = 6.13


    if (currencyText.value == "dolar") {
        currencyConverted.innerHTML = new Intl.NumberFormat('en-US',
            {
                style: 'currency', currency: 'USD'
            }).format(valueToConvert / dolarToday)

    }

    if (currencyText.value == "euro") {
        currencyConverted.innerHTML = new Intl.NumberFormat('de-DE',
            {
                style: 'currency', currency: 'EUR'
            }).format(valueToConvert / euroToday)

    }


    currencyToConvert.innerHTML = new Intl.NumberFormat('pt-BR',
        {
            style: 'currency', currency: 'BRL'
        }).format(valueToConvert)


}

function changeValues() {
    const currencyName = document.querySelector(".currency-name")
    const currencyImage = document.querySelector(".currency-img")
    
    if (currencyText.value == "dolar") {
        currencyName.innerHTML = "American Dollar"
        currencyImage.src = "./assets/dollar.png"
    }


}


currencyText.addEventListener("change", changeValues)
convertButton.addEventListener("click", convertValues)
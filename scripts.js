const convertButton = document.querySelector(".convert-button")

function convertValues () {

    const valueToConvert = document.querySelector(".valuetoconvert").value
    const dolarToday = 5.61

    convertValues = valueToConvert / dolarToday

    console.log(convertValues)

}

convertButton.addEventListener("click", convertValues)
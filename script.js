function convertTemperature() {
    var inputTemperature = document.getElementById("inputTemperature").value;
    var inputUnit = document.getElementById("inputUnit").value;
    var resultElement = document.getElementById("result");

    var celsius, fahrenheit, kelvin;

    if (inputUnit === "celsius") {
        celsius = parseFloat(inputTemperature);
        fahrenheit = celsiusToFahrenheit(celsius);
        kelvin = celsiusToKelvin(celsius);
    } else if (inputUnit === "fahrenheit") {
        fahrenheit = parseFloat(inputTemperature);
        celsius = fahrenheitToCelsius(fahrenheit);
        kelvin = celsiusToKelvin(celsius);
    } else if (inputUnit === "kelvin") {
        kelvin = parseFloat(inputTemperature);
        celsius = kelvinToCelsius(kelvin);
        fahrenheit = kelvinToFahrenheit(kelvin);
    }

    resultElement.innerHTML =
        "Celsius: " + celsius + "<br>" +
        "Fahrenheit: " + fahrenheit + "<br>" +
        "Kelvin: " + kelvin;


    resultElement.style.paddingTop = "20px";
}

function resetForm() {
    document.getElementById("inputTemperature").value = "";
    document.getElementById("inputUnit").value = "celsius";
    document.getElementById("result").innerHTML = "";
}

function celsiusToFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
}

function fahrenheitToCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
}

function celsiusToKelvin(celsius) {
    return celsius + 273.15;
}

function kelvinToCelsius(kelvin) {
    return kelvin - 273.15;
}

function kelvinToFahrenheit(kelvin) {
    return (kelvin * 9 / 5) - 459.67;
}

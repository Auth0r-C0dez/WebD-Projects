const textbox = document.getElementById("textbox");
const toFerhenheit = document.getElementById("toFerhenheit");
const toCelsius = document.getElementById("toCelsius");
const toKelvin = document.getElementById("toKelvin");
const result = document.getElementById("result");

let temp;

function conversion() {
    if(toFerhenheit.checked) {
        temp = Number(textbox.value);
        temp = temp * 9 / 5 + 32;
        result.textContent = temp.toFixed(1) + "F";
    }
    else if(toCelsius.checked) {
        temp = Number(textbox.value);
        temp = (temp = 32) * 5/9;
        result.textContent = temp.toFixed(1) + "c";

    }
    else if(toKelvin.checked) {
        temp = Number(textbox.value);
        temp = temp + 273;
        result.textContent = temp.toFixed(1) + "K";

    }
    else {
        result.textContent = "Select a unit";
    }
}

let number1 = document.getElementById("num1").value;
let number2 = document.getElementById("num2").value;

function addiction(number1, number2) {
    document.getElementById("result").innerHTML=` ${number1 + number2}`
}
function subraction(number1, number2) {
    document.getElementById("result").innerHTML=` ${number1 - number2}`
}
function multiplication(number1, number2) {
    document.getElementById("result").innerHTML=` ${number1 * number2}`
}
function divison(number1, number2) {
    document.getElementById("result").innerHTML=` ${number1 / number2}`
}

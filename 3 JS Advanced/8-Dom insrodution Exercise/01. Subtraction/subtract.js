function subtract() {
    let firstElement = document.getElementById("firstNumber");
    let secondElement = document.getElementById("secondNumber");

    let firstNumber = Number(firstElement.value);
    let secondNumber = Number(secondElement.value);

    let result = firstNumber - secondNumber;
    document.getElementById("result").textContent = result;
}
const calculator = {
    displayNumber: '0',
    operator: null,
    firstNumber: null,
    waitingForSecondNumber: false
};

let updateDisplay = () => {
    document.querySelector("#displayNumber").innerText = calculator.displayNumber;
}

const clearCalculator = () => {
    calculator.displayNumber = '0';
    calculator.operator = null;
    calculator.firstNumber = null;
    calculator.waitingForSecondNumber = false;
};

const inputDigit = (digit) => {
    calculator.displayNumber += digit;
};

const buttons = document.querySelectorAll(".button");
for (let button of buttons) {
    button.addEventListener("click", function(event) {
        // mendapatkan objek elemen yang diklik
        const target = event.target;
        inputDigit(target.innerText);
        updateDisplay();
    })
}
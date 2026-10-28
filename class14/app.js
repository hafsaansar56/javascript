var currentInput = "";
var firstNum = null;
var operator = null;

var display = document.getElementById('display');

function appendNumber(num) {
    currentInput += num;
    display.value = currentInput;
}

function setOperator(op) {
    if (currentInput === "") return;
    firstNum = Number(currentInput); 
    operator = op;
    currentInput = ""; 
}

function calculate() {
    if (firstNum === null || currentInput === "" || operator === null) return;
    var secondNum = Number(currentInput); 
    var result = 0;
    if (operator === '+') result = firstNum + secondNum;
    else if (operator === '-') result = firstNum - secondNum;
    else if (operator === '*') result = firstNum * secondNum;
    else if (operator === '/') {
    result = secondNum !== 0 ? firstNum / secondNum : 'Error';
}

    display.value = result;
    currentInput = result.toString(); 
    firstNum = null;
    operator = null;
}

function clearDisplay() {
    currentInput = "";
    firstNum = null;
    operator = null;
    display.value = "";
}
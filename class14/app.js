var display=document.getElementById("display")
var num1=""
var num2=""
var operator=""
var isSecondNumber=false
function addToDisplay(input){
    var isOperator = input === "+" || input === "-" || input === "*" || input === "/" || input === "%"
    if (num1 === "" && (input === "+" || input === "-")) {
        num1 += input
        display.value += input
        return;
    }
    if (num1 === "" && isOperator) {
        return; 
    }

    if (isOperator && isSecondNumber && num2 == "") {
        operator= input
        display.value= display.value.slice(0,-1)

    } else if (!isSecondNumber && !isOperator) {
        num1 += input
    } else if (!isSecondNumber && isOperator) {
        operator = input
        isSecondNumber = true
        console.log("Operator", operator);

    } else if (isSecondNumber && !isOperator) {
        num2 += input
        console.log("Num2", num2);

    }
    console.log("Num1", num1);

    display.value += input
}

function calculate(){
    var n1=Number(num1)
    var n2=Number(num2)
    var result=""
    if (operator === "/" && n2 === 0) {
        display.value = "Error: Division by 0"
        return;
    }
    if(operator==="+"){
        result=n1 + n2
    }else if(operator==="-"){
       result=n1 - n2
    }else if(operator==="*"){
       result=n1 * n2
    }else if(operator==="/"){
       result=n1 / n2
    } 
   display.value=result

    num1=result
    num2=""
    operator=""
    isSecondNumber=false
}

function clearDisplay(){
    display.value = ""
    num1 = ""
    num2 = ""
    operator = ""
    isSecondNumber = false
}
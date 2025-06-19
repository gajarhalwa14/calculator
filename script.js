let calculatorObj = {
    num1: "",
    num2: "",
    operation: "",
}

const display = document.querySelector("#display");
const bodyContainer = document.querySelector("#body-container");
bodyContainer.addEventListener("click", (event) => {
    handleInput(event.target.innerHTML, event.target.className);
    console.log("num1: " + calculatorObj.num1);
    console.log("num2: " + calculatorObj.num2);
    console.log("operation: " + calculatorObj.operation);
})

function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    return num1 / num2;
}

function operate(operation, num1, num2) {
    return operation(num1, num2);
}

function operateOnObj() {
    switch (calculatorObj.operation) {
        case "+":
            calculatorObj.num1 = operate(add, Number(calculatorObj.num1), Number(calculatorObj.num2)).toString();
            break;
        case "-":
            calculatorObj.num1 = operate(subtract, Number(calculatorObj.num1), Number(calculatorObj.num2)).toString();
            break;
        case "*":
            calculatorObj.num1 = (Math.round(operate(multiply, Number(calculatorObj.num1), Number(calculatorObj.num2)) * 1000) / 1000).toString();
            break;
        case "/":
            calculatorObj.num1 = (Math.round(operate(divide, Number(calculatorObj.num1), Number(calculatorObj.num2)) * 1000) / 1000).toString();
            break;
    }
    calculatorObj.num2 = "";
    calculatorObj.operation = "";
    display.textContent = calculatorObj.num1;
}

function handleInput(input, type) {
    switch (type) {
        case "number":
            if (calculatorObj.operation === "") {
                calculatorObj.num1 += input;
                display.textContent = calculatorObj.num1;
            }
            else {
                calculatorObj.num2 += input;
                display.textContent = calculatorObj.num2;
            }
            break;
        case "operation":
            if ((input === "=") && (calculatorObj.num1 !== "") && (calculatorObj.num2 != "") && (calculatorObj.operation !== "")) {
                // perform operation function if valid inputs are given
                operateOnObj();
            }
            else {
                if ((calculatorObj.operation !== "") && (calculatorObj.num2 !== "")) {
                    operateOnObj();
                    calculatorObj.operation = input;
                }
                else {
                    calculatorObj.operation = input;
                    display.textContent = calculatorObj.operation;
                }
            }
            break;
        case "remove":
            if (input === "AC") {
                calculatorObj.num1 = "";
                calculatorObj.num2 = "";
                calculatorObj.operation = "";
                display.textContent = "";
            }
            else {
                if (calculatorObj.operation === "") {
                    calculatorObj.num1 = calculatorObj.num1.substring(0, calculatorObj.num1.length - 2);
                    display.textContent = calculatorObj.num1;
                }
                else {
                    calculatorObj.num2 = calculatorObj.num2.substring(0, calculatorObj.num2.length - 2);
                    display.textContent = calculatorObj.num2;
                }
            }
            break;
    }

}



/*
<div id="clear" class="button">
                        <p class="button-text">AC</p>
                    </div>
                    <div id="delete" class="button">
                        <p class="button-text">DEL</p>
                    </div>
*/
const add = (operand1, operand2) => operand1 + operand2;
const subtract = (operand1, operand2) => operand1 - operand2;
const multiply = (operand1, operand2) => operand1 * operand2;
const divide = (operand1, operand2) => operand1 / operand2;
const mod = (operand1, operand2) => operand1 % operand2;
    
const operate = (operator, operand1, operand2) => {
    switch(operator) {
        case "+":
            calculatorAnswer = Math.round(add(Number(operand1),Number(operand2)) * 1000) / 1000;
            break;
        case "-":
            calculatorAnswer = Math.round(subtract(Number(operand1),Number(operand2)) * 1000) / 1000;
            break;
        case "x":
            calculatorAnswer = Math.round(multiply(Number(operand1),Number(operand2)) * 1000) / 1000;
            break;
        case "÷":
            calculatorAnswer = Math.round(divide(Number(operand1),Number(operand2)) * 1000) / 1000;
            break;
        case "%":
            calculatorAnswer = Math.round(mod(Number(operand1),Number(operand2)) * 1000) / 1000;
        case "":
            break;
    }
};

const displayNumbers = (number) => {
    const operations = document.querySelector(".operations");
    operations.textContent = number;

};

const displayOperator = (operator) => {
    const operations = document.querySelector(".operations");
    operations.textContent += ` ${operator} `;
    
};

const displayAnswer = (answer) => {
    const operations = document.querySelector(".operations");
    if(operatorChoice === "" || operandOne === "" || operandTwo === "") {
        operations.textContent = "";
        updateCalculatorVariables();
    } else {
        operations.textContent = Math.round(answer * 1000) / 1000;
    }
};

const displayExpression = (operator, operand1) => {
    const expression = document.querySelector(".expression");
    expression.textContent = `${operand1} ${operator}`;

    const operations = document.querySelector(".operations");
    operations.textContent = "";

    operators.forEach((op) => {
        op.style.pointerEvents = "none";
    });
};

const displayEntireExpression = (operator, operand1, operand2) => {
    const expression = document.querySelector(".expression");
    if(operator === "" || operand1 === "" || operand2 === "") {
        return;
    }
    expression.textContent = `${operand1} ${operator} ${operand2} =`;
};

const updateCalculatorVariables = () => {
    operandOne = calculatorAnswer.toString();
    operandTwo = "";
    operatorChoice = "";
    calculatorAnswer = "";
    decimalPoint.style.pointerEvents = "visible";
    operators.forEach((op) => {
        op.style.pointerEvents = "visible";
    });
};

const deleteValue = () => {
    const operations = document.querySelector(".operations");

    if(operations.textContent.endsWith(" ")) {
        operations.textContent = operations.textContent.substring(0, operations.textContent.length-1);
        operations.textContent = operations.textContent.substring(0, operations.textContent.length-1);
        operations.textContent = operations.textContent.substring(0, operations.textContent.length-1);
        operatorChoice = "";
    } else {
        operations.textContent = operations.textContent.substring(0, operations.textContent.length-1);
        if(operatorChoice === "") {
            operandOne = operations.textContent;
        } else if (operatorChoice !== "") {
            operandTwo = operations.textContent;
        }
    }
};

const clear = () => {
    const expression = document.querySelector(".expression");
    expression.textContent = "";
    const operations = document.querySelector(".operations");
    operations.textContent = "";
    updateCalculatorVariables();
};

const changeSign = () => {
    
    if(operandOne === "") {
        return;
    }
    
    if(operatorChoice === "") {
        operandOne *= -1;
        displayNumbers(operandOne);
    } else if(operatorChoice !== "") {
        operandTwo *= -1;
        displayAnswer(operandTwo);
    }
};

const addDecimalPoint = (decimal) => {
    
    if(operatorChoice !== "") {
        decimalPoint.style.pointerEvents = "visible";
    }
    
    if(operatorChoice === "") {
        if(operandOne.includes(".")) {
            decimalPoint.style.pointerEvents = "none";
        } else {
            operandOne += decimal;
            displayNumbers(operandOne);
        }
    } else if(operandTwo !== "") {
        if(operandTwo.includes(".")) {
            decimalPoint.style.pointerEvents = "none";
        } else {
            operandTwo += decimal;
            displayNumbers(operandTwo);
        }
    }

};

const updateOperand = (number, operand) => {
    if(operand.length === 1 && operand === "0") {
        operand = number;
    } else {
        operand += number;
    }

    return operand;
}

let operandOne = "";
let operandTwo = "";
let operatorChoice = "";
let calculatorAnswer = "";


const numbers = document.querySelectorAll(".number.btn");

numbers.forEach((number) => {
    number.addEventListener("click", (event) => {
        if(operatorChoice === "") {
            operandOne = updateOperand(event.target.textContent, operandOne);
            displayNumbers(operandOne);
        } else {
            operandTwo = Math.round(updateOperand(event.target.textContent, operandTwo) * 1000) / 1000;
            displayExpression(operatorChoice, operandOne);
            displayNumbers(operandTwo);
        }
    });
});

document.addEventListener("keydown", (event) => {
    if(event.key >= "0" && event.key <= "9") {
        if(operatorChoice === "") {
            operandOne = updateOperand(event.key, operandOne);
            displayNumbers(operandOne);
        } else {
            operandTwo = updateOperand(event.key, operandTwo);
            displayExpression(operatorChoice, operandOne);
            displayNumbers(operandTwo);
        }
    }
    if(["+", "-", "*", "/", "%"].includes(event.key)) {
        if(operandOne === "") {
            return;
        }

        if(operandTwo !== "") {
            return;
        }

        if(operatorChoice === "") {
            if(event.key === "*") {
                operatorChoice = "x";
                displayOperator(operatorChoice);    
            } else if (event.key === "/") {
                operatorChoice = "÷";
                displayOperator(operatorChoice);    
            } else {
                operatorChoice = event.key;
                displayOperator(operatorChoice);
            }
        } else if(operatorChoice !== "") {
            if(event.key === "*") {
                deleteValue();
                operatorChoice = "x";
                displayOperator(operatorChoice);    
            } else if (event.key === "/") {
                deleteValue();
                operatorChoice = "÷";
                displayOperator(operatorChoice);
            } else {
                deleteValue();
                operatorChoice = event.key;
                displayOperator(operatorChoice);
            }
        }
    }

    if(["=", "Enter"].includes(event.key)) {
        operate(operatorChoice, operandOne, operandTwo);
        displayAnswer(calculatorAnswer);
        displayEntireExpression(operatorChoice, operandOne, operandTwo);
        updateCalculatorVariables();
    }

    if(event.key === ".") {
        addDecimalPoint(event.key);
    }

    if(event.key === "Backspace") {
        deleteValue();
    }
    
});

const operators = document.querySelectorAll(".operator.btn"); 

operators.forEach((operator) => {
    operator.addEventListener("click", (event) => {
        if(operandOne === "") {
            return;
        }

        if(operatorChoice === "") {
            operatorChoice = event.target.textContent;
            displayOperator(operatorChoice);
        } else if(operatorChoice !== "") {
            deleteValue();
            operatorChoice = event.target.textContent;
            displayOperator(operatorChoice);
        }
    });
});

const evaluate = document.querySelector("#evaluate");

const deleteBtn = document.querySelector("#delete");
const clearBtn = document.querySelector("#clear");
const decimalPoint = document.querySelector("#decimal");
const changeSignBtn = document.querySelector("#sign");

evaluate.addEventListener("click", function() {
    operate(operatorChoice, operandOne, operandTwo);
    displayAnswer(calculatorAnswer);
    displayEntireExpression(operatorChoice, operandOne, operandTwo);
    updateCalculatorVariables();
});

deleteBtn.addEventListener("click", deleteValue);
clearBtn.addEventListener("click", clear);

decimalPoint.addEventListener("click", (event) => {
    addDecimalPoint(event.target.textContent);
});

changeSignBtn.addEventListener("click", changeSign);

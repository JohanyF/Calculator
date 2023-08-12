const add = (operand1, operand2) => {
    return operand1 + operand2;
};

const subtract = (operand1, operand2) => {
    return operand1 - operand2;
};

const multiply = (operand1, operand2) => {
    return operand1 * operand2;
};

const divide = (operand1, operand2) => {
    return operand1 / operand2;
};

const operate = (operator, operand1, operand2) => {

    switch(operator) {
        case "+":
            calculatorAnswer = add(Number(operand1), Number(operand2));
            break;
        case "-":
            calculatorAnswer = subtract(Number(operand1),Number(operand2));
            break;
        case "x":
            calculatorAnswer = multiply(Number(operand1),Number(operand2));
            break;
        case "÷":
            calculatorAnswer = divide(Number(operand1),Number(operand2));
            break;
    }
};

const displayNumbers = (number) => {
    const operations = document.querySelector(".operations");
    //operations.textContent += number;
    operations.textContent = number;

};

const displayOperator = (operator) => {
    const operations = document.querySelector(".operations");
    operations.textContent += ` ${operator} `;
    
};

const displayAnswer = (answer) => {
    const operations = document.querySelector(".operations");
    operations.textContent = answer;
};

const displayExpression = (operator, operand1) => {
    const expression = document.querySelector(".expression");
    expression.textContent = `${operand1} ${operator}`;

    const operations = document.querySelector(".operations");
    operations.textContent = "";
};

const displayEntireExpression = (operator, operand1, operand2) => {
    const expression = document.querySelector(".expression");
    expression.textContent = `${operand1} ${operator} ${operand2} =`;
};

const updateCalculatorVariables = () => {
    operandOne = calculatorAnswer;
    operandTwo = "";
    operatorChoice = "";
    calculatorAnswer = "";
    decimalPoint.style.pointerEvents = "visible";
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
            //operations.textContent = operations.textContent.substring(0, operations.textContent.length-1);
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
    if(operatorChoice === "") {
        operandOne *= -1;
        displayNumbers(operandOne);
    } else if(operatorChoice !== "") {
        operandTwo *= -1;
        displayAnswer(operandTwo)
    };
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

let operandOne = "";
let operandTwo = "";
let operatorChoice = "";
let calculatorAnswer = "";


const numbers = document.querySelectorAll(".number.btn");

numbers.forEach((number) => {
    number.addEventListener("click", (event) => {
        if(operatorChoice === "") {
            operandOne += event.target.textContent;
            displayNumbers(operandOne);
        } else {
            operandTwo += event.target.textContent;
            displayExpression(operatorChoice, operandOne);
            displayNumbers(operandTwo);
        }
    });
});

const operators = document.querySelectorAll(".operator.btn"); 

operators.forEach((operator) => {
    operator.addEventListener("click", (event) => {
        if(operatorChoice === "") {
            operatorChoice = event.target.textContent;
            displayOperator(operatorChoice);
            //displayExpression(operatorChoice, operandOne);
            

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

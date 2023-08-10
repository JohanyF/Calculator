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
    operations.textContent += number;
    
    let operandsArray = [];
    if(operatorChoice != undefined) {
        operandsArray = operations.textContent.split(" ");
    }

    operandOne = operandsArray[0];
    operandTwo = operandsArray[2];
};

const displayOperator = (operator) => {
    const operations = document.querySelector(".operations");
    
    if(operatorChoice === undefined) {
        operations.textContent += ` ${operator} `;
    
        operatorChoice = operator;
    }
};

const displayAnswer = (answer) => {
    const operations = document.querySelector(".operations");
    operations.textContent = answer;
};

const displayExpression = (operator, operand1, operand2) => {
    const expression = document.querySelector(".expression");
    expression.textContent = `${operand1} ${operator} ${operand2} =`;
};

const updateCalculatorVariables = () => {
    operandOne = calculatorAnswer;
    operandTwo = undefined;
    operatorChoice = undefined;
    calculatorAnswer = undefined;
};

const deleteValue = () => {
    const operations = document.querySelector(".operations");

    if(operations.textContent.endsWith(" ")) {
        operations.textContent = operations.textContent.substring(0, operations.textContent.length-1);
        operations.textContent = operations.textContent.substring(0, operations.textContent.length-1);
        operations.textContent = operations.textContent.substring(0, operations.textContent.length-1);
    } else {
        operations.textContent = operations.textContent.substring(0, operations.textContent.length-1);
    }


    if(operatorChoice !== undefined) {
        operatorChoice = undefined;
    }
};



let operandOne;
let operandTwo;
let operatorChoice;
let calculatorAnswer;


const zero = document.querySelector("#zero");
const one = document.querySelector("#one");
const two = document.querySelector('#two');
const three = document.querySelector('#three');
const four = document.querySelector('#four');
const five = document.querySelector('#five');
const six = document.querySelector('#six');
const seven = document.querySelector('#seven');
const eight = document.querySelector('#eight');
const nine = document.querySelector('#nine');

const addOperator = document.querySelector("#add");
const subtractOperator = document.querySelector("#subtract");
const multiplyOperator = document.querySelector("#multiply");
const divideOperator = document.querySelector("#divide");

const evaluate = document.querySelector("#evaluate");

const deleteBtn = document.querySelector("#delete");

zero.addEventListener("click", function (e) {
    displayNumbers(e.target.textContent);
});
one.addEventListener("click", function (e) {
    displayNumbers(e.target.textContent);
});
two.addEventListener("click", function (e) {
    displayNumbers(e.target.textContent)
});
three.addEventListener("click", function (e) {
    displayNumbers(e.target.textContent)
});
four.addEventListener("click", function (e) {
    displayNumbers(e.target.textContent)
});
five.addEventListener("click", function (e) {
    displayNumbers(e.target.textContent)
});
six.addEventListener("click", function (e) {
    displayNumbers(e.target.textContent)
});
seven.addEventListener("click", function (e) {
    displayNumbers(e.target.textContent)
});
eight.addEventListener("click", function (e) {
    displayNumbers(e.target.textContent)
});
nine.addEventListener("click", function (e) {
    displayNumbers(e.target.textContent)
});


addOperator.addEventListener("click", function (e) {
    displayOperator(e.target.textContent)
});
subtractOperator.addEventListener("click", function (e) {
    displayOperator(e.target.textContent)
});
multiplyOperator.addEventListener("click", function (e) {
    displayOperator(e.target.textContent)
});
divideOperator.addEventListener("click", function (e) {
    displayOperator(e.target.textContent)
});

evaluate.addEventListener("click", function() {
    operate(operatorChoice, operandOne, operandTwo);
    displayAnswer(calculatorAnswer);
    displayExpression(operatorChoice, operandOne, operandTwo);
    updateCalculatorVariables();
});

deleteBtn.addEventListener("click", deleteValue);

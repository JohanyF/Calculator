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
            add(operand1, operand2);
            break;
        case "-":
            subtract(operand1,operand2);
            break;
        case "*":
            multiply(operand1,operand2);
            break;
        case "/":
            divide(operand1,operand2);
            break;
    }
};

const displayNumbers = (test) => {
    const operations = document.querySelector(".operations");
    operations.textContent += test;
    
    operandOne = operations.textContent;

};



let operandOne;
let operandTwo;
let operatorChoice;
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
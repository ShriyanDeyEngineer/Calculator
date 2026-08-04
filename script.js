//functions
function operate(operator, num1, num2)
{
    //ensure appropriate data types are being utilized
    num1 = Number(num1);
    num2 = Number(num2);

    switch(operator) 
    {
        case '+': return add(num1, num2);
        case '-': return subtract(num1, num2);
        case '*': return multiply(num1, num2);
        case '/': return divide(num1, num2);
        default: return;
    }
}

function add(num1, num2){return num1 + num2;}

function subtract(num1, num2){return num1 - num2;}

function multiply(num1, num2){return num1 * num2;}

function divide(num1, num2){return num1 / num2;}


//Button functionality
/*const numberButtons = Array.from(document.querySelectorAll(".number-button"));

numberButtons.forEach(numberButton => {addEventListener('click', event => {
    document.querySelector("#calculator-screen").innerText = numberButton.innerText;
    console.log(numberButton.innerText);
});});*/
document.querySelectorAll(".number-button").forEach(numberButton => 
    numberButton.addEventListener('click', event => {
    document.querySelector("#calculator-screen").innerText = event.target.innerText;
}));
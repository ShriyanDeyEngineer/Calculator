//variable declarations
let memory = new Array(3);
let screenContent = document.querySelector("#calculator-screen");


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

function add(num1, num2){return (num1 + num2).toFixed(3);}

function subtract(num1, num2){return (num1 - num2).toFixed(3);}

function multiply(num1, num2){return (num1 * num2).toFixed(3);}

function divide(num1, num2){return (num2 == 0) ? "NOPE." : (num1 / num2).toFixed(3);}


//Button functionality
document.querySelector("#clear-button").addEventListener('click', event => {
    screenContent.innerText = "";
    memory.length = 0;
    memory.length = 3;
});

document.querySelectorAll(".number-button").forEach(numberButton => 
    numberButton.addEventListener('click', event => {
        //case where there is a digit in the first spot of memory and not an operator in memory or there are no digits 
        //in the first spot of the memory, inputting first number of the operation
        if((typeof(memory[0]) == "string" && typeof(memory[1]) != "string") || typeof(memory[0]) != "string")
        {
            screenContent.innerText += event.target.innerText;

            typeof(memory[0]) != "string" ? memory[0] = event.target.innerText : memory[0] += event.target.innerText;

            console.log(memory);
        }
        //case where there is an operator in the memory, inputting second number of the operation
        else if(typeof(memory[1] == "string"))
        {
            if(typeof(memory[2]) != "string")
            {
                screenContent.innerText = "";
                screenContent.innerText += event.target.innerText;
                memory[2] = event.target.innerText;
            }
            else
            {
                screenContent.innerText += event.target.innerText;
                memory[2] += event.target.innerText;
            }

            console.log(memory);
        }
}));

document.querySelectorAll(".operator-button").forEach(operatorButton => 
    operatorButton.addEventListener('click', event => {
        //case where num1 is in memory and an operator is ready to be included as well
        //using memory[2] in case user wants to change the selected operator before finishing the rest of the operation
        if(typeof(memory[0]) == "string" && typeof(memory[2]) != "string"){memory[1] = event.target.innerText;}

        //case where memory is filled with the three items needed for an operation 
        //(operator now acts as equal sign then replaces the previous operator in memory)
        else if(typeof(memory[2] == "string"))
        {
            screenContent.innerText = operate(memory[1], memory[0], memory[2]);
            memory.length = 0;
            memory.length = 3;
            memory[0] = screenContent.innerText;
            memory[1] = event.target.innerText;
        }

        console.log(memory);
}));

document.querySelector("#equals-button").addEventListener('click', event => {
    if(typeof(memory[2]) == "string") //only works when the memory is filled
    {
        screenContent.innerText = operate(memory[1], memory[0], memory[2]);
        memory.length = 0;
        memory.length = 3;
        memory[0] = screenContent.innerText;
        memory[1] = event.target.innerText;
    }
});

document.querySelector("#delete-button").addEventListener('click', event => {
    //case where the user can undo part (or the whole) of the first number entry
    if(typeof(memory[1]) != "string" && memory[0] != "")
    {
        screenContent.innerText = screenContent.innerText.slice(0, screenContent.innerText.length - 1);
        memory[0] = memory[0].slice(0, memory[0].length - 1);
        console.log(memory);
    }
    //case where the user can undo part (or the whole) of the second number entry
    else if(typeof(memory[1]) == "string" && memory[2] != "")
    {
        screenContent.innerText = screenContent.innerText.slice(0, screenContent.innerText.length - 1);
        memory[2] = memory[2].slice(0, memory[2].length - 1);
        console.log(memory);
    }
});

document.querySelector("#dot").addEventListener('click', event => {
    //case where there is a digit in the first spot of memory and not an operator in memory or there are no digits 
    //in the first spot of the memory, inputting first number of the operation
    if((typeof(memory[0]) == "string" && typeof(memory[1]) != "string") || typeof(memory[0]) != "string")
    {
        if(typeof(memory[0]) != "string") //allow the user to use the decimal point as a first input
        {
            screenContent.innerText = ".";
            memory[0] = ".";
        }
        //allow the user to use the decimal point as a non first input but only once per number 
        //(only one '.' in a memory slot for a number)
        else if(!memory[0].includes(".") && typeof(memory[0]) == "string")
        {
            screenContent.innerText += ".";
            memory[0] += ".";
        }

        console.log(memory);
    }
    //case where there is an operator in the memory, inputting second number of the operation
    else if(typeof(memory[1] == "string"))
    {
        if(typeof(memory[2]) != "string")
        {
            screenContent.innerText = ".";
            memory[2] = ".";
        }
        else if(!memory[2].includes(".") && typeof(memory[2]) == "string")
        {
            screenContent.innerText += ".";
            memory[2] += ".";
        }

        console.log(memory);
    }
});


//keyboard support







/*if(event.target.style.backgroundColor != "darkgray")
    {
        event.target.style.backgroundColor = "darkgray";
        console.log("clicked");
    }
    else if(event.target.style.backgroundColor === "darkgray")
    {
        event.target.style.backgroundColor = "";
        console.log("clicked2");
    }*/ //a code block to be used to show the user the currently selected button

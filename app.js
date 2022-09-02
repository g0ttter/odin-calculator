const mainWindow = document.querySelector('.main-window');
const display = document.querySelector('.display');
const buttonsInfo = [
    {
    button: "dot",
    displayed: ".",
    },
    {
    button: "erase",
    displayed: "←",    
    },
    {
    button: "delete",
    displayed: "C",    
    },
    {
    button: "divide",
    displayed: "÷",    
    },
    {
    button: "multiply",
    displayed: "×",    
     },
    {
    button: "minus",
    displayed: "−",    
    },
    {
    button: "plus",
    displayed: "+",    
    },
    {
    button: "power",
    displayed: "^x",
    },
    {
    button: "equals",
    displayed: "=",
    }
];

let tempNumber = 0;
let awaitedOperation;

function createButtons() {
    for(let i = 0; i < 19; i++){ 
        let createButton = document.createElement('button');
        if (i < 10) {
        createButton.textContent = i;
        createButton.className = 'number' + i;
        createButton.addEventListener("click", function () {digitInput(i)});
        } else if (i > 9) {
        createButton.textContent = buttonsInfo[i-10].displayed;
        createButton.className = buttonsInfo[i-10].button;
        createButton.style.backgroundColor = '#00308F';
        createButton.addEventListener("click", function () 
            {operationInput(buttonsInfo[i-10].button)});
        } 
        mainWindow.append(createButton);
    }
};

createButtons();

function digitInput(number) {
    if(display.textContent.length > 20) 
        alert("over20flow ._.");
     display.textContent += `${number}`;
}

function operationInput(operation) {
    if (operation == 'dot') {
        display.textContent += '.';
        return;
    }   
    if (operation == 'equals') {
        calculateResult();
        return;
    }   
    if (operation === 'erase') {
        display.textContent = display.textContent.slice(0, -1);
        return;
    }
    calculateResult();
    tempNumber = parseFloat(display.textContent, 10);
    awaitedOperation = operation;
    console.log(tempNumber);
    display.textContent = '';
}

function calculateResult() {
    if (awaitedOperation === 'plus')
        display.textContent = tempNumber + parseFloat(display.textContent, 10); 
    if (awaitedOperation === 'multiply')
        display.textContent = tempNumber * parseFloat(display.textContent, 10);
    if (awaitedOperation === 'divide') {
        if (parseFloat(display.textContent, 10) === 0)
            return alert("it's infinity but I'm not allowed to say it");
        display.textContent = Math.round(((tempNumber / parseFloat(display.textContent, 10)) + Number.EPSILON) * 100) / 100;
    }
        if (awaitedOperation === 'minus')
        display.textContent = tempNumber - parseFloat(display.textContent, 10);
    if (awaitedOperation === 'power')
        display.textContent = Math.pow(tempNumber, parseFloat(display.textContent, 10));
    if(display.textContent.length > 20) 
        alert("over20flow ._.");
    awaitedOperation = 0;
}
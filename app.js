const mainWindow = document.querySelector('.main-window');
const display = document.querySelector('.display');
const buttonsInfo = [
    {
    button: "delete",
    displayed: "C",
    },
    {
    button: "erase",
    displayed: "←",    
    },
    {
    button: "power",
    displayed: "^x",    
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
    displayed: "-",    
    },
    {
    button: "plus",
    displayed: "+",    
    },
    {
    button: "dot",
    displayed: ".",
    },
    {
    button: "equals",
    displayed: "=",
    }
];

let tempNumber;
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
        createButton.addEventListener("click", function () 
        {saveCurrentNumber(buttonsInfo[i-10].button)});
        } 
        mainWindow.append(createButton);
    }
};

 createButtons();

function digitInput(number) {
     display.textContent += `${number}`;
}
function saveCurrentNumber(operation) {
    if (operation == 'equals') {
        calculateResult();
        return;
    }
    tempNumber = parseInt(display.textContent, 10);
    display.textContent = '';
    awaitedOperation = operation;
}


function calculateResult() {
    if (awaitedOperation === 'plus') {
        display.textContent = tempNumber + parseInt(display.textContent, 10); 
    }
    console.log(tempNumber + ' test ' + awaitedOperation);
}

// function operationInput(operation) {
//     saveCurrentNumber();
//     if (operation === 'plus') 
//         saveCurrentNumber('plus');
//     if (operation === 'equals')
//         calculateResult();
//     return
// }

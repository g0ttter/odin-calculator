const mainWindow = document.querySelector('.main-window');
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
    button: "equals",
    displayed: "=",
    },
    {
    button: "dot",
    displayed: ".",
    }
];


function createButtons() {
    for(let i = 0; i < 19; i++){ 
        let createButton = document.createElement('button');
        if (i < 10) {
        createButton.textContent = i;
        createButton.className = 'number' + i;
        } else if (i > 9) {
        createButton.textContent = buttonsInfo[i-10].displayed;
        createButton.className = buttonsInfo[i-10].button;
        } mainWindow.append(createButton);
    }
};

createButtons();
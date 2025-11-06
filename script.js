let num1, num2, operator, tempNum, result;
let isSecondNumReady, firstOperatorSet, shouldClearDisplay;
isSecondNumReady = firstOperatorSet = shouldClearDisplay = false;

let disp = document.querySelector(".display");

let valToDisplay = document.createElement("p");

let clearBtn = document.querySelector(".clear-btn");

displayDigits();

clearBtn.addEventListener("click", clear);

let ops = document.querySelectorAll(".operator");
ops.forEach((op) => op.addEventListener("click", () => {
    let symbol = op.innerHTML;
    
    if(operator === undefined && symbol !== "=") {
        operator = symbol;
        // console.log(`op: ${operator}`);
        firstOperatorSet = true;
        shouldClearDisplay = true;
    } 
    
    else if (firstOperatorSet && symbol !== "=") {
        result = operate(operator, num1, num2);
        num1 = Math.round(result);
        num2 = undefined;
        operator = symbol;
        shouldClearDisplay = true;

        if(result === "Undefined") {
            alert("undefined");
            clear();
        } else {
            valToDisplay.textContent = num1;
        }
        
    }

    isSecondNumReady = true;
    // valToDisplay.textContent = "";


    
    if(symbol === "=" && num1 !== undefined && num2 !== undefined) {
        result = operate(operator, num1, num2);

        //check whether the denominator is 0 then throw undefined on the screen
        if(result === "Undefined") {
            alert("undefined");
            clear();
        } else {
            valToDisplay.textContent = Math.round(result);
        }

        shouldClearDisplay = true;
    }

    console.log(`operator: ${operator}`)
}));


function displayDigits() {
    let digits = document.querySelectorAll(".digit");


    digits.forEach((digit) => digit.addEventListener("click", () => {
        if(shouldClearDisplay) {
            valToDisplay.textContent = "";
            shouldClearDisplay = false;
        }
        
        switch(digit.innerHTML) {
            case "0":
                valToDisplay.textContent += "0";
                break;
            case "1":
                valToDisplay.textContent += "1";
                break;
            case "2":
                valToDisplay.textContent += "2";
                break;
            case "3":
                valToDisplay.textContent += "3";
                break;
            case "4":
                valToDisplay.textContent += "4";
                break;
            case "5":
                valToDisplay.textContent += "5";
                break;
            case "6":
                valToDisplay.textContent += "6";
                break;
            case "7":
                valToDisplay.textContent += "7";
                break;
            case "8":
                valToDisplay.textContent += "8";
                break;
            case "9":
                valToDisplay.textContent += "9";
                break;
        }
        
        tempNum = +valToDisplay.innerHTML;

        if(isSecondNumReady) {
            num2 = tempNum;
            // console.log(`num2: ${num2}`);
        } else { 
            num1 = tempNum; 
            // console.log(`num1: ${num1}`);
        }
    }));

    disp.appendChild(valToDisplay);
}

function clear() {
    num1 = num2 = operator = undefined; 
    isSecondNumReady = false;
    firstOperatorSet = false;
    valToDisplay.textContent = "";
}

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
    if(num1 === 0) {
        return 0;
    } else if(num2 === 0) {
        return "Undefined";
    }

    return num1 / num2;
}

function operate(operator, num1, num2) {
    switch(operator) {
        case "+": 
            return add(num1, num2);
        case "-": 
            return subtract(num1, num2);
        case "*": 
            return multiply(num1, num2);
        case "/": 
            return divide(num1, num2);
    }

}


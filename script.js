let num1, num2, operator, tempNum, result;
let firstNumSet, operatorSet, secondNumSet, shouldClearDisplay;
firstNumSet = operatorSet = shouldClearDisplay = secondNumSet = resultDisplayed = false;

let disp = document.querySelector(".display");

let valToDisplay = document.createElement("p");

let clearBtn = document.querySelector(".clear-btn");

displayDigits();

clearBtn.addEventListener("click", clearAll);

let ops = document.querySelectorAll(".operator");
ops.forEach((op) => op.addEventListener("click", () => {
    let symbol = op.innerHTML;
    
    if(!secondNumSet && operatorSet) return;

    if(operatorSet && resultDisplayed) {
        firstNumSet = true;
        resultDisplayed = false;
    } 

    else {
        if(!operatorSet && symbol !== "=") {
            operator = symbol;
            operatorSet = true;
            shouldClearDisplay = true;
        } 
        
        else if (operatorSet && symbol !== "=") {
            result = operate(operator, num1, num2);
            num1 = Number(result.toFixed(2));

            num2 = undefined;
            secondNumSet = false;

            operator = symbol;

            if(result === "undefined") {
                alert("Undefined");
                clearAll();
            } else {
                valToDisplay.textContent = num1;
            }

            shouldClearDisplay = true;
        }

        firstNumSet = true;

        if(symbol === "=" && firstNumSet && secondNumSet) {
            result = operate(operator, num1, num2);
            num1 = Number(result.toFixed(2));

            //check whether the denominator is 0 then throw undefined on the screen
            if(result === "undefined") {
                alert("Undefined");
                clearAll();
            } else {
                valToDisplay.textContent = num1;
                // valToDisplay.textContent = Number(result.toFixed(2));
            }

            shouldClearDisplay = true;
            resultDisplayed = true; 
            
            num2 = undefined;
            secondNumSet = false;

        }

        console.log(`num1: ${num1}`);
        console.log(`num2: ${num2}`);

        console.log(`operator: ${operator}`);
    }   
}));


function displayDigits() {
    let digits = document.querySelectorAll(".digit");


    digits.forEach((digit) => digit.addEventListener("click", () => {
        if(shouldClearDisplay) {
            valToDisplay.textContent = "";
            shouldClearDisplay = false;
        }

        if(resultDisplayed) {
            clearResult();
            resultDisplayed = false;
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

        if(firstNumSet) {
            num2 = tempNum;
            secondNumSet = true;
        } else { 
            num1 = tempNum; 
        }
    }));

    disp.appendChild(valToDisplay);
}

function clearAll() {
    clearResult();
    valToDisplay.textContent = "";
}

function clearResult() {
    num1 = num2 = operator = undefined; 
    firstNumSet = false;
    secondNumSet = false;
    operatorSet = false;
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
        return "undefined";
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


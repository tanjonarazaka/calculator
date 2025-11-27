let num1, num2, operator, tempNum, result, dotCounter;
let firstNumSet, operatorSet, secondNumSet, shouldClearDisplay, resultDisplayed;
firstNumSet = operatorSet = shouldClearDisplay = secondNumSet = resultDisplayed = false;

dotCounter = 0;

let disp = document.querySelector(".display");

let valToDisplay = document.createElement("p");

let clearBtn = document.querySelector(".clear-btn");

displayDigits();

clearBtn.addEventListener("click", clearAll);

let ops = document.querySelectorAll(".operator");
ops.forEach((op) => op.addEventListener("click", () => {
    let symbol = op.innerHTML;

    // If user hasn't typed num1 yet, do nothing (should not happen but safe)
    if(!firstNumSet) {
        firstNumSet = true;
        dotCounter = 0;
    }

    // Avoid issue with pressing oporator without operands
    if(!firstNumSet && symbol !== "=") return;

    // After showing a result, next operator uses that result as num1
    if(resultDisplayed) resultDisplayed = false;

    // CASE 1: Setting operator for the first time
    if(!operatorSet && symbol !== "=") {
        operator = symbol;
        operatorSet = true;
        shouldClearDisplay = true;
        return;
    } 


    // CASE 2: Consecutive operators (no num2 typed yet) 
    if(operatorSet && !secondNumSet && symbol !== "=") {
        operator = symbol;
        shouldClearDisplay = true;
        return;
    }


    // CASE 3: We have num1, operator, num2
    // User pressed another operator (NOT "=")
    // So: calculate intermediate result
    if (operatorSet && secondNumSet && symbol !== "=") {
        // calculate result of num1 operator num2
        result = operate(operator, num1, num2);

        // handle divide by zero
        if (result === "undefined") {
            alert("Undefined");
            clearAll();
            return;
        }

        num1 = Number(result.toFixed(2));
        valToDisplay.textContent = num1;

        // reset num2 for next input
        num2 = undefined;
        secondNumSet = false;

        dotCounter = 0;

        // store new operator
        operator = symbol;
        shouldClearDisplay = true;
        return;
    }

    // CASE 4: User pressed "="
    if (symbol === "=" && firstNumSet && secondNumSet) {
        result = operate(operator, num1, num2);

        if (result === "undefined") {
            alert("Undefined");
            clearAll();
            return;
        }

        num1 = Number(result.toFixed(2));
        valToDisplay.textContent = num1;
        
        resultDisplayed = true;
        operatorSet = false;
        
        num2 = undefined;
        secondNumSet = false;

        dotCounter = 0;

        shouldClearDisplay = true;
        return;
    }
}));

let backspace = document.querySelector(".backspace");
backspace.addEventListener("click", () => {
    if(valToDisplay.textContent !== ""){
        valToDisplay.textContent = valToDisplay.textContent.slice(0, -1);
    } else if(valToDisplay.textContent === "") {
        return;
    }

});


function displayDigits() {
    let digits = document.querySelectorAll(".digit");

    digits.forEach((digit) => digit.addEventListener("click", () => {
        if(shouldClearDisplay) {
            valToDisplay.textContent = "";
            shouldClearDisplay = false;
        }

        if(resultDisplayed) {
            clearResult();
            valToDisplay.textContent = "";
            resultDisplayed = false;
        }

        if(digit.innerHTML === "." && dotCounter === 0){
            dotCounter = 1;
        }
        else if(digit.innerHTML === "." && dotCounter > 0){
            return;
        }

        valToDisplay.textContent += digit.innerHTML;
        
        let current = Number(valToDisplay.textContent);

        if(firstNumSet) {
            num2 = current;
            secondNumSet = true;
        } else { 
            num1 = current; 
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
    dotCounter = 0;
    firstNumSet = false;
    secondNumSet = false;
    operatorSet = false;
    shouldClearDisplay = false;
    resultDisplayed = false;
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
    if(num2 === 0) {
        return "undefined";
    } else if(num1 === 0) {
        return 0;
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


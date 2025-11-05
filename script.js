let num1, num2, operator, tempNum, result, isSecondReady, firstOperatorReady;
isSecondReady = firstOperatorReady = false;


let disp = document.querySelector(".display");

let valToDisplay = document.createElement("p");

console.log(num1);

displayDigits();




let ops = document.querySelectorAll(".operator");
ops.forEach((op) => op.addEventListener("click", () => {
    let symbol = op.innerHTML;
    
    
    if(operator === undefined) {
        operator = symbol;
        // console.log(`op: ${operator}`);
        firstOperatorReady = true;
    } 
    
    else if (firstOperatorReady && symbol !== "=") {
        result = operate(operator, num1, num2);
        num1 = Math.round(result);
        // console.log(num1);
        operator = symbol;
    }

    isSecondReady = true;
    valToDisplay.textContent = "";


    
    if(symbol === "=" && num1 !== undefined && num2 !== undefined) {
        result = operate(operator, num1, num2);

        //check whether the denomitor is 0 then throw undefined on the screen
        if(result === "Undefined") valToDisplay.textContent = result;
        else valToDisplay.textContent = Math.round(result);
    }
}));

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

function displayDigits() {
    let digits = document.querySelectorAll(".digit");


    digits.forEach((digit) => digit.addEventListener("click", () => {
        
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

        if(isSecondReady) {
            num2 = tempNum;
            // console.log(`num2: ${num2}`);
        } else { 
            num1 = tempNum; 
            // console.log(`num1: ${num1}`);
        }
    }));

    disp.appendChild(valToDisplay);
}


let clearBtn = document.querySelector(".clear-btn");

clearBtn.addEventListener("click", () => {
    num1 = num2 = operator = undefined; 
    isSecondReady = false;
    firstOperatorReady = false;
    valToDisplay.textContent = "";
});



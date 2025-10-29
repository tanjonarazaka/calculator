let num1, num2, operator, tempVal;

let disp = document.querySelector(".display");

let valToDisplay = document.createElement("p");
valToDisplay.textContent = "";

// let ops = document.querySelectorAll("operator");
// ops.forEach((op) => op.addEventListener("click", () => {

// }));

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

    if(operator === "+") {
        return add(num1, num2);
    } else if(operator === "+") {
        return subtract(num1, num2);
    } else if(operator === "+") {
        return multiply(num1, num2);
    } else if(operator === "/") {
        return divide(num1, num2);
    }
}

function displayDigits() {
    let digits = document.querySelectorAll(".digit");


    digits.forEach((digit) => digit.addEventListener("click", () => {
        if(digit.innerHTML === "0") {
            valToDisplay.textContent += "0";
        } else if(digit.innerHTML === "1") {
            valToDisplay.textContent += "1";
        } else if(digit.innerHTML === "2") {
            valToDisplay.textContent += "2";
        } else if(digit.innerHTML === "3") {
            valToDisplay.textContent += "3";
        } else if(digit.innerHTML === "4") {
            valToDisplay.textContent += "4";
        } else if(digit.innerHTML === "5") {
            valToDisplay.textContent += "5";
        } else if(digit.innerHTML === "6") {
            valToDisplay.textContent += "6";
        } else if(digit.innerHTML === "7") {
            valToDisplay.textContent += "7";
        } else if(digit.innerHTML === "8") {
            valToDisplay.textContent += "8";
        } else if(digit.innerHTML === "9") {
            valToDisplay.textContent += "9";
        }
    }));

    tempVal = +valToDisplay.innerHTML;
    disp.appendChild(valToDisplay);


}

let clearBtn = document.querySelector(".clear-btn");

clearBtn.addEventListener("click", () => {
    valToDisplay.textContent = "";
});


displayDigits();
// console.log(tempVal);

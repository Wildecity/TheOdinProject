//variables

const display = document.querySelector("#display");
const numButtons = document.querySelectorAll(".btnNum");
const operationButtons = document.querySelectorAll(".btnOperation");
const btnDel = document.querySelector("#btnDel");
const btnClear = document.querySelector("#btnClear");
const btnSolve = document.querySelector("#btnSolve");

let temp = "";
let operator = "";
let previousNum = "";
let currentNum = "";
let result = "";

//operations

function add(num1, num2) {
  return parseFloat(num1) + parseFloat(num2);
}

function subtract(num1, num2) {
  return parseFloat(num1) - parseFloat(num2);
}

function multiply(num1, num2) {
  return parseFloat(num1) * parseFloat(num2);
}

function divide(num1, num2) {
  return parseFloat(num1) / parseFloat(num2);
}

// round function

function round(num) {
  return +(Math.round(num + "e+12") + "e-12");
}

// operate

function operate() {
  switch (operator) {
    case "+":
      previousNum = round(add(previousNum, currentNum));
      break;
    case "-":
      previousNum = round(subtract(previousNum, currentNum));
      break;
    case "*":
      previousNum = round(multiply(previousNum, currentNum));
      break;
    case "/":
      previousNum = round(divide(previousNum, currentNum));
  }
  display.value = previousNum;
}

// EVENTS

//Number buttons

numButtons.forEach((button) => {
  button.addEventListener("click", () => {
    if (currentNum.length >= 16) return;
    else if (button.textContent == "." && display.value.indexOf(".") != -1) {
      return;
    }
    currentNum += button.textContent;
    display.value = currentNum;
  });
});

//Operation buttons

operationButtons.forEach((button) => {
  button.addEventListener("click", () => {
    //para calcular solo 2 valores por vez si se concatenan operaciones
    if (previousNum != "" && currentNum != "") {
      operate();
      previousNum = display.value;
    } else if (currentNum === "") {
      operator = button.textContent;
    } else {
      previousNum = currentNum;
    }
    operator = button.textContent;
    currentNum = "";
  });
});

//Solve button

btnSolve.addEventListener("click", () => {
  if (previousNum === "" || currentNum === "") return;
  operate();
  currentNum = "";
});

//Delete button

btnDel.addEventListener("click", function () {
  currentNum = currentNum.slice(0, -1);
  display.value = currentNum;
});

//Clear button

btnClear.addEventListener("click", function () {
  currentNum = "";
  previousNum = "";
  operator = "";
  display.value = "";
});

// document.addEventListener("keydown", (e) => {
//   temp += e.key;
//   display.value = temp;
// });

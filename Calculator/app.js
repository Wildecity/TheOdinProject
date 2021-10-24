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
  return +num1 + +num2;
}

function subtract(num1, num2) {
  return +num1 - +num2;
}

function multiply(num1, num2) {
  return +num1 * +num2;
}

function divide(num1, num2) {
  return +num1 / +num2;
}

function operate() {
  switch (operator) {
    case "+":
      previousNum = add(previousNum, currentNum);
      break;
    case "-":
      previousNum = subtract(previousNum, currentNum);
      break;
    case "*":
      previousNum = multiply(previousNum, currentNum);
      break;
    case "/":
      previousNum = divide(previousNum, currentNum);
  }

  let digitosExp = (previousNum = Number(previousNum).toExponential(10));
  let digitosNum = (+previousNum).toString();

  if (digitosExp.length < digitosNum.length) {
    previousNum = digitosExp;
  } else {
    previousNum = +digitosNum;
  }
  display.value = previousNum;
}

function pressNumBtn(button) {
  if (currentNum.length >= 16) return;
  else if (button == "." && display.value.indexOf(".") != -1) {
    return;
  }
  currentNum += button;
  display.value = currentNum;
}

function pressOperationBtn(button) {
  if (previousNum != "" && currentNum != "") {
    operate();
    previousNum = display.value;
  } else if (currentNum === "") {
    operator = button;
  } else {
    previousNum = currentNum;
  }
  operator = button;
  currentNum = "";
}

// EVENTS

numButtons.forEach((button) => {
  button.addEventListener("click", () => pressNumBtn(button.textContent));
});

operationButtons.forEach((button) => {
  button.addEventListener("click", () => pressOperationBtn(button.textContent));
});

btnSolve.addEventListener("click", () => {
  if (previousNum === "" || currentNum === "") return;
  operate();
  currentNum = "";
});

btnDel.addEventListener("click", function () {
  if (currentNum == "") return;
  currentNum = currentNum.slice(0, -1);
  display.value = currentNum;
});

btnClear.addEventListener("click", function () {
  currentNum = "";
  previousNum = "";
  operator = "";
  display.value = "";
});

// Keyboard Support

document.addEventListener("keydown", (e) => {
  if (e.key == "Backspace") {
    btnDel.click();
  } else if (e.key == "Intro") {
    btnSolve.click();
  } else if (e.key == "Delete") {
    btnClear.click();
  } else if (isFinite(e.key) || e.key == ".") {
    pressNumBtn(e.key);
  } else if (e.key.search(/.*.\/.+.\-/)) {
    pressOperationBtn(e.key);
  }
});

let oldNum = "";
let currentNum = "";
let operation = "";
let result = "";
let display = document.querySelector("#display");
let numButtons = document.querySelectorAll(".btnNum");
let operationButtons = document.querySelectorAll(".btnOperation");
let btnDel = document.querySelector("#btnDel");
let btnClear = document.querySelector("#btnClear");
let btnSolve = document.querySelector("#btnSolve");

numButtons.forEach((button) => {
  button.addEventListener("click", function () {
    currentNum += button.innerText;
    display.value = currentNum;
  });
});

operationButtons.forEach((button) => {
  button.addEventListener("click", function () {
    if (oldNum == "") {
      oldNum = currentNum;
      currentNum = "";
      operation = button.innerHTML;
    } else {
      solve();
    }
  });
});

btnDel.addEventListener("click", function () {
  currentNum = currentNum.slice(0, -1);
  display.value = currentNum;
});

btnClear.addEventListener("click", function () {
  currentNum = "";
  oldNum = "";
  operation = "";
  display.value = "";
});

let solve = function () {
  switch (operation) {
    case "+":
      result = parseFloat(oldNum) + parseFloat(currentNum);
      display.value = result.toString();
      oldNum = result;
      break;

    case "-":
      currentNum = parseFloat(oldNum) - parseFloat(currentNum);
      display.value = currentNum.toString();
      oldNum = currentNum;
      break;

    case "*":
      currentNum = parseFloat(oldNum) * parseFloat(currentNum);
      display.value = currentNum.toString();
      oldNum = currentNum;
      break;

    case "/":
      currentNum = parseFloat(oldNum) / parseFloat(currentNum);
      display.value = currentNum.toString();
      oldNum = currentNum;
      break;
  }
};

btnSolve.addEventListener("click", solve);

// Cada vez que el usuario presiona un BOTON DE NUMERO se agrega al DISPLAY

// Cuando el usuario presiona un BOTON DE OPERACION se almacena ese numero en una VARIABLE y el tipo de operacion en otra VARIABLE
// Se limpia el DISPLAY
// El usuario ingresa OTRO NUMERO
// cuando presiona el boton IGUAL se almacena el segundo numero y se toma el primer valor y lo opera con el segundo valor.
// El tipo de operacion sera definida por el valor almacenado
// Se muestra el resultado en el display

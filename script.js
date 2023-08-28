const calcScreen = document.getElementById("calc-screen");
calcScreen.value = "0";
let operation;
let clearScreen = false;
let paramaterFirst = "";
let memo = null;

// digit buttons
function handleZero() {
  if (calcScreen.value === "0") {
    return;
  }
  calcScreen.value = calcScreen.value + "0";
}
function handleOne() {
  if (calcScreen.value === "0") {
    calcScreen.value = "";
  }
  if (clearScreen === true) {
    calcScreen.value = "";
    clearScreen = false;
  }
  calcScreen.value = calcScreen.value + "1";
}
function handleTwo() {
  if (calcScreen.value === "0") {
    calcScreen.value = "";
  }
  if (clearScreen === true) {
    calcScreen.value = "";
    clearScreen = false;
  }
  calcScreen.value = calcScreen.value + "2";
}
function handleThree() {
  if (calcScreen.value === "0") {
    calcScreen.value = "";
  }
  if (clearScreen === true) {
    calcScreen.value = "";
    clearScreen = false;
  }
  calcScreen.value = calcScreen.value + "3";
}
function handleFour() {
  if (calcScreen.value === "0") {
    calcScreen.value = "";
  }
  if (clearScreen === true) {
    calcScreen.value = "";
    clearScreen = false;
  }
  calcScreen.value = calcScreen.value + "4";
}
function handleFive() {
  if (calcScreen.value === "0") {
    calcScreen.value = "";
  }
  if (clearScreen === true) {
    calcScreen.value = "";
    clearScreen = false;
  }
  calcScreen.value = calcScreen.value + "5";
}
function handleSix() {
  if (calcScreen.value === "0") {
    calcScreen.value = "";
  }
  if (clearScreen === true) {
    calcScreen.value = "";
    clearScreen = false;
  }
  calcScreen.value = calcScreen.value + "6";
}
function handleSeven() {
  if (calcScreen.value === "0") {
    calcScreen.value = "";
  }
  if (clearScreen === true) {
    calcScreen.value = "";
    clearScreen = false;
  }
  calcScreen.value = calcScreen.value + "7";
}
function handleEight() {
  if (calcScreen.value === "0") {
    calcScreen.value = "";
  }
  if (clearScreen === true) {
    calcScreen.value = "";
    clearScreen = false;
  }
  calcScreen.value = calcScreen.value + "8";
}
function handleNine() {
  if (calcScreen.value === "0") {
    calcScreen.value = "";
  }
  if (clearScreen === true) {
    calcScreen.value = "";
    clearScreen = false;
  }
  calcScreen.value = calcScreen.value + "9";
}

// operation buttons
function handleDivide() {
  operation = "/";
  paramaterFirst = calcScreen.value;
  clearScreen = true;
}
function handlePlus() {
  operation = "+";
  paramaterFirst = calcScreen.value;
  clearScreen = true;
}
function handleMultiply() {
  operation = "*";
  paramaterFirst = calcScreen.value;
  clearScreen = true;
}
function handleMinus() {
  operation = "-";
  paramaterFirst = calcScreen.value;
  clearScreen = true;
}
function handlePercent() {
  operation = "%";
  paramaterFirst = calcScreen.value;
  clearScreen = true;
}

function handleEquals() {
  switch (operation) {
    case "/":
      calcScreen.value = Number(paramaterFirst) / Number(calcScreen.value);
      clearScreen = true;
      break;
    case "*":
      calcScreen.value = Number(paramaterFirst) * Number(calcScreen.value);
      clearScreen = true;
      break;
    case "-":
      calcScreen.value = Number(paramaterFirst) - Number(calcScreen.value);
      clearScreen = true;
      break;
    case "+":
      calcScreen.value = Number(paramaterFirst) + Number(calcScreen.value);
      clearScreen = true;
      break;
    case "%":
      calcScreen.value =
        (Number(paramaterFirst) / 100) * Number(calcScreen.value);
      clearScreen = true;
      break;
  }
}

//other buttons
function handleDot() {
  if (clearScreen === true) {
    calcScreen.value = "0";
    clearScreen = false;
  }
  if (calcScreen.value.includes(".")) {
    return;
  }
  calcScreen.value = `${calcScreen.value}.`;
}
function handleMemoMinus() {
  memo = "-" + calcScreen.value;
  clearScreen = true;
}
function handleMemoPlus() {
  memo = calcScreen.value;
  clearScreen = true;
}
function handleMemoCall() {
  if (!memo) {
    return;
  }
  calcScreen.value = memo;
}
function handleRoot() {
  calcScreen.value = Math.sqrt(Number(calcScreen.value));
}
function handleClear() {
  calcScreen.value = "0";
}
function handleAllClear() {
  calcScreen.value = "0";
  operation = null;
  clearScreen = false;
  paramaterFirst = "";
  memo = "";
}
function handleDeleteLastChar() {
  if (calcScreen.value.length < 2) {
    calcScreen.value = "0";
    return;
  }
  calcScreen.value = calcScreen.value.slice(0, -1);
}

// Keyboard controls
document.addEventListener("keydown", (e) => {
  if (e.key === "1") {
    handleOne();
  }
});
document.addEventListener("keydown", (e) => {
  if (e.key === "2") {
    handleTwo();
  }
});
document.addEventListener("keydown", (e) => {
  if (e.key === "3") {
    handleThree();
  }
});
document.addEventListener("keydown", (e) => {
  if (e.key === "4") {
    handleFour();
  }
});
document.addEventListener("keydown", (e) => {
  if (e.key === "5") {
    handleFive();
  }
});
document.addEventListener("keydown", (e) => {
  if (e.key === "6") {
    handleSix();
  }
});
document.addEventListener("keydown", (e) => {
  if (e.key === "7") {
    handleSeven();
  }
});
document.addEventListener("keydown", (e) => {
  if (e.key === "8") {
    handleEight();
  }
});
document.addEventListener("keydown", (e) => {
  if (e.key === "9") {
    handleNine();
  }
});
document.addEventListener("keydown", (e) => {
  if (e.key === "0") {
    handleZero();
  }
});
document.addEventListener("keydown", (e) => {
  if (e.key === "%") {
    handlePercent();
  }
});
document.addEventListener("keydown", (e) => {
  if (e.key === "/") {
    handleDivide();
  }
});
document.addEventListener("keydown", (e) => {
  if (e.key === "+") {
    handlePlus();
  }
});
document.addEventListener("keydown", (e) => {
  if (e.key === "*") {
    handleMultiply();
  }
});
document.addEventListener("keydown", (e) => {
  if (e.key === "-") {
    handleMinus();
  }
});
document.addEventListener("keydown", (e) => {
  if (e.key === "Backspace") {
    handleDeleteLastChar();
  }
});
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    handleClear();
  }
});
document.addEventListener("keydown", (e) => {
  if (e.key === ".") {
    handleDot();
  }
});

document.addEventListener("keydown", (e) => {
  console.log(e);
});

let body = document.querySelector("body");
let container = document.createElement("div");
container.className = "container";
body.append(container);
let display = document.createElement("div");
let buttons = document.createElement("div");
display.className = "display";
buttons.className = "btns";
container.append(display);
container.append(buttons);
let inputs = [
  1,
  2,
  3,
  "+",
  4,
  5,
  6,
  "-",
  7,
  8,
  9,
  "/",
  ".",
  0,
  "=",
  "*",
  "Clear",
];
let operator = "=";
let number = 0;
for (let data of inputs) {
  let btn = document.createElement("button");
  btn.innerHTML = data;
  btn.className = "digits";
  buttons.append(btn);
  btn.addEventListener("click", logic);
}
function logic() {
  let data = this.innerHTML;
  let inputData = display.innerHTML;
  if (data === ".") {
    if (!inputData.includes(".")) {
      display.innerHTML = inputData + data;
    }
  } else if (data == "Clear") {
    display.innerHTML = "";
    operator = "=";
    number = 0;
  } else if (data == "+") {
    if (inputData.length > 0 && operator === "=") {
      number = Number.parseFloat(inputData);
      operator = "+";
      display.innerHTML = null;
    }
  } else if (data == "-") {
    if (operator === "=") {
      if (inputData.length > 0) {
        number = Number.parseFloat(inputData);
        operator = "-";
        display.innerHTML = null;
      } else {
        display.innerHTML = data;
      }
    }
  } else if (data == "/") {
    if (inputData.length > 0 && operator === "=") {
      number = Number.parseFloat(inputData);
      operator = "/";
      display.innerHTML = null;
    }
  } else if (data == "*") {
    if (inputData.length > 0 && operator === "=") {
      number = Number.parseFloat(inputData);
      operator = "*";
      display.innerHTML = null;
    }
  } else if (data == "=") {
    if (operator == "+" && inputData.length > 0) {
      display.innerHTML = (number + Number.parseFloat(inputData)).toFixed(2);
      operator = "=";
    } else if (operator == "-" && inputData.length > 0) {
      display.innerHTML = (number - Number.parseFloat(inputData)).toFixed(2);
      operator = "=";
    } else if (operator == "/" && inputData.length > 0) {
      display.innerHTML = (number / Number.parseFloat(inputData)).toFixed(2);
      operator = "=";
    } else if (operator == "*" && inputData.length > 0) {
      display.innerHTML = (number * Number.parseFloat(inputData)).toFixed(2);
      operator = "=";
    }
  } else {
    display.innerHTML = inputData + data;
  }
}

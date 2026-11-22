console.log("Welcome to the Calculator Project by Vishu.");

const input = document.querySelector(".input input");
const btns = Array.from(document.querySelectorAll(".btn"));
let isError = false;

function evaluate() {
  const expression = input.value;
  let result = null;

  try {
    result = eval(expression.replaceAll("×", "*").replaceAll("÷", "/"));
    input.value = result;
  } catch (e) {
    isError = true;
    input.value = "Error";
  }
}

const handleInput = (e) => {
  if (isError) {
    isError = false;
    input.value = "";
  }

  if (e.target.innerText.trim() == "=") {
    evaluate();
  } else if (e.target.innerText == "AC") {
    input.value = "";
  } else if (e.target.innerText == "C") {
    input.value = input.value.substring(0, input.value.length - 1);
  } else {
    input.value += e.target.innerText;
  }
};

for (const btn of btns) {
  btn.addEventListener("click", handleInput);
}

document.addEventListener("keydown", (e) => {
  const type = e.code.toLowerCase();

  if (
    !type.startsWith("digit") &&
    !type.startsWith("numpad") &&
    type !== "minus" &&
    type !== "equal" &&
    type !== "backspace" &&
    type !== "delete" &&
    type !== "enter"
  )
    return;

  e.preventDefault();

  let key = e.key.toLowerCase();

  if (isError) {
    isError = false;
    input.value = "";
  }
  if (key == "enter" || key == "=") {
    evaluate();
  } else if (key == "delete") {
    input.value = "";
  } else if (key == "backspace") {
    input.value = input.value.substring(0, input.value.length - 1);
  } else {
    input.value += key;
  }
});
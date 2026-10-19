console.log("Welcome to the Calculator Project by Vishu");

const input = document.querySelector(".input input");
const btns = Array.from(document.querySelectorAll(".btn"));
let isError = false;

function evaluate() {
  try {
    const result = eval(input.value.replaceAll("×", "*").replaceAll("÷", "/"));
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
  } else if (e.target.innerText == "C") {
    input.value = "";
  } else {
    input.value += e.target.innerText;
  }
};

for (const btn of btns) {
  btn.addEventListener("click", handleInput);
}

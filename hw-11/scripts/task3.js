const inputRoot = document.querySelector(".input-task3");
const input = inputRoot.children[0];

input.addEventListener("focusin", onInputFocusHandle);
input.addEventListener("focusout", outInputFocusHandle);

function onInputFocusHandle() {
  input.classList.add("valid-input");
}

function outInputFocusHandle(e) {
  input.classList.remove("valid-input");

  const inputedValue = e.target.value;

  if (!inputedValue) {
    return;
  }

  inputedValue > 0 ? validPriceHandler(inputedValue) : nonValidPriceHandler();
}

function validPriceHandler(price) {
  input.classList.remove("non-valid-input");

  if (inputRoot.lastChild.tagName === "DIV") {
    inputRoot.removeChild(inputRoot.lastChild);
  }

  const span = `<span>${price}</span>`;
  const btn = `<button type=button class='delete-button'>X</button>`;

  const resultMarkup = `<div>${span} ${btn}</div>`;

  if (inputRoot.firstChild.tagName === "DIV") {
    inputRoot.removeChild(inputRoot.firstChild);
  }

  inputRoot.insertAdjacentHTML("afterbegin", resultMarkup);
  input.style.color = "green";

  const btnRef = document.querySelector(".delete-button");

  btnRef.addEventListener("click", () => {
    inputRoot.removeChild(inputRoot.firstChild);
    input.value = "";
  });
}

function nonValidPriceHandler() {
  const text = `<div>Please enter correct price</div>`;

  if (inputRoot.firstChild.tagName === "DIV") {
    inputRoot.removeChild(inputRoot.firstChild);
  }

  input.classList.add("non-valid-input");
  inputRoot.insertAdjacentHTML("beforeend", text);
  input.style.color = "red";
}

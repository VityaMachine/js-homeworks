const [...inputs] = document.querySelector(".inputs-task2").children;

inputs.forEach((el) => {
  el.addEventListener("focusout", inputHandler);
});

function inputHandler(e) {
  const inputedData = e.target.value;
  const targetLength = parseInt(e.target.dataset.length);

  inputedData.length === targetLength
    ? validField(e.target)
    : nonValidField(e.target);
}

function validField(field) {
  field.classList.remove("non-valid-input");
  field.classList.add("valid-input");
}

function nonValidField(field) {
  field.classList.remove("valid-input");
  field.classList.add("non-valid-input");
}

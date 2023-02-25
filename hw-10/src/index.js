const displayRef = document.querySelector(".display");
const displayNumRef = displayRef.firstElementChild;
const keyboardRef = document.querySelector(".keys");

displayNumRef.value = 0;

keyboardRef.addEventListener("click", keyboardHandler);

let valueA,
  valueB,
  oldValueB,
  mathActionOld = null,
  mathActionNew = null,
  resultValue,
  equalAction = false,
  memory = 0,
  showMemory = false;

  
if (localStorage.getItem('memory')) {
  memory = localStorage.getItem('memory');

  displayRef.children[0].classList.remove("displayInput-withoutM");
  displayRef.children[1].classList.remove("displayInput-M-disabled");

  displayRef.children[0].classList.add("displayInput-withM");
  displayRef.children[1].classList.add("displayInput-M");
}


function keyboardHandler(e) {
  if (e.target.type !== "button") {
    return;
  }

  const inputedValue = e.target.value;

  if (inputedValue === "m+") {
    writeMemory();

    valueA = undefined;
    valueB = undefined;
    oldValueB = undefined;
    resultValue = undefined;
    mathActionOld = null;
    mathActionNew = null;

    return;
  }

  if (inputedValue === "m-") {
    clearMemory();
  }

  if (inputedValue === "mrc") {
    if (showMemory) {
      clearMemory();

      displayNumRef.value = 0;

      return;
    }

    displayNumRef.value = memory;

    showMemory = true;

    valueA = undefined;
    valueB = undefined;
    oldValueB = undefined;
    resultValue = undefined;
    mathActionOld = null;
    mathActionNew = null;

    return;
  }

  if (inputedValue !== "mrc") {
    showMemory = false;
  }

  // clear logic
  if (inputedValue === "C") {
    clearBtnHandler();
  }

  // equeal Logic
  if (inputedValue === "=") {
    mathActionOld = mathActionNew;

    calculateResult();

    equalAction = true;
  }

  // action logic
  if (
    inputedValue === "+" ||
    inputedValue === "-" ||
    inputedValue === "*" ||
    inputedValue === "/"
  ) {
    mathActionOld = mathActionNew;

    mathActionNew = inputedValue;

    if (!equalAction) {
      calculateResult();

      equalAction = false;
    }
  }

  // value A logic
  if (!mathActionNew && valueA) {
    if (!Number.isNaN(parseInt(inputedValue)) || inputedValue === ".") {
      if (valueA === "0" && inputedValue === "0") {
        return;
      }

      if (valueA.includes(".") && inputedValue === ".") {
        return;
      }

      valueA += inputedValue;
    }

    valueA && !resultValue
      ? (displayNumRef.value = valueA)
      : (displayNumRef.value = 0);
  }

  if (!mathActionNew && !valueA) {
    if (!Number.isNaN(parseInt(inputedValue)) || inputedValue === ".") {
      inputedValue === "." ? (valueA = "0.") : (valueA = inputedValue);
    }

    valueA && !resultValue
      ? (displayNumRef.value = valueA)
      : (displayNumRef.value = 0);
  }

  // value B logic
  if (mathActionNew && valueB) {
    if (!Number.isNaN(parseInt(inputedValue)) || inputedValue === ".") {
      if (valueB === "0" && inputedValue === "0") {
        return;
      }

      if (valueB.includes(".") && inputedValue === ".") {
        return;
      }

      valueB += inputedValue;
    }

    valueB ? (displayNumRef.value = valueB) : (displayNumRef.value = valueA);
  }

  if (mathActionNew && !valueB) {
    if (!Number.isNaN(parseInt(inputedValue)) || inputedValue === ".") {
      inputedValue === "." ? (valueB = "0.") : (valueB = inputedValue);
    }

    valueB ? (displayNumRef.value = valueB) : (displayNumRef.value = valueA);
  }

  if (valueA && valueB) {
    keyboardRef.children[4].children[3].disabled = false;
  }
}

function clearBtnHandler() {
  valueA = undefined;
  valueB = undefined;
  oldValueB = undefined;
  resultValue = undefined;
  mathActionOld = null;
  mathActionNew = null;
}

function calculateAction(action, value1, value2) {
  const num1 = value1 ? Number.parseFloat(value1) : 0;
  const num2 = value2 ? Number.parseFloat(value2) : 0;

  if (value2) {
    oldValueB = value2;
  }

    if (action === "/" && num2 === 0) {
    return "E";
  }


  let result;

  switch (action) {
    case "+":
      result = num1 + num2;
      break;

    case "-":
      result = num1 - num2;
      break;

    case "*":
      result = num1 * num2;
      break;

    case "/":
      result = num1 / num2;

      break;
  }

  return result;
}

function calculateResult() {
  if (mathActionOld === mathActionNew) {
    if (valueA && !valueB && oldValueB) {
      resultValue = calculateAction(mathActionNew, valueA, oldValueB);
      valueA = resultValue;
    }

    if (valueA && valueB) {
      resultValue = calculateAction(mathActionNew, valueA, valueB);

      valueA = resultValue;
      valueB = undefined;
    }
  }

  if (mathActionOld !== mathActionNew) {
    if (valueA && !valueB && oldValueB) {
      resultValue = calculateAction(mathActionOld, valueA, oldValueB);
      valueA = resultValue;
    }

    if (valueA && valueB) {
      resultValue = calculateAction(mathActionOld, valueA, valueB);

      valueA = resultValue;
      valueB = undefined;
    }
  }
}

function clearMemory() {
  displayRef.children[0].classList.add("displayInput-withoutM");
  displayRef.children[1].classList.add("displayInput-M-disabled");

  displayRef.children[0].classList.remove("displayInput-withM");
  displayRef.children[1].classList.remove("displayInput-M");

  memory = null;

  displayNumRef.value = 0;

  localStorage.removeItem('memory')
}

function writeMemory() {
  displayRef.children[0].classList.remove("displayInput-withoutM");
  displayRef.children[1].classList.remove("displayInput-M-disabled");

  displayRef.children[0].classList.add("displayInput-withM");
  displayRef.children[1].classList.add("displayInput-M");

  resultValue ? (memory = resultValue) : (memory = valueA);

  localStorage.setItem('memory', memory)

}

// function showValues() {
//   console.log("value A: ", valueA);
//   console.log("value B: ", valueB);
//   console.log("value old B: ", oldValueB);
//   console.log("mathActionOld: ", mathActionOld);
//   console.log("mathActionNew: ", mathActionNew);
//   console.log("resultValue: ", resultValue);
//   console.log("equalAction: ", equalAction);
//   console.log("memory: ", memory);
//   console.log("showMemory: ", showMemory);
// }

// showValues();

const bodyRef = document.getElementsByTagName("body")[0];
const rootRef = document.querySelector(".regex-root");
const inputRef = document.querySelector(".phone-input");
const btnRef = document.querySelector("button[data-action=check]");

inputRef.addEventListener("change", inputHandler);
btnRef.addEventListener("click", btnHandler);

let inputedNumber;
const pattern = /\b\d{3}-\d{3}-\d{2}-\d{2}\b/;

function inputHandler(e) {
  inputedNumber = e.target.value;
}

function btnHandler() {
  const checkRes = pattern.test(inputedNumber);

  if (checkRes) {
    if (rootRef.children[0].nodeName === "DIV") {
      rootRef.removeChild(rootRef.children[0]);
    }

    bodyRef.style.backgroundColor = "rgba(0, 255, 0, 0.5)";

    setTimeout(() => {
      document.location =
        "https://media.makeameme.org/created/thats-what-winning.jpg";
    }, 1000);
  } else {
    console.dir(rootRef);

    if (rootRef.children[0].nodeName === "DIV") {
      return;
    }

    const errorMarkup = `<div style="color: red">Wrong phone format</div>`;
    rootRef.insertAdjacentHTML("afterbegin", errorMarkup);
  }
}

const [...inputs] = document.querySelector(".inputs-task1").children;
const paragraph = document.getElementById("test");

inputs.forEach((el) => {
  el.addEventListener("focusout", inputHandler);
});

let name, surname, city, prevName, prevSurname, prevCity;

function inputHandler(e) {
  if (e.target.name === "name") {
    name = e.target.value;
  }

  if (e.target.name === "surname") {
    surname = e.target.value;
  }

  if (e.target.name === "city") {
    city = e.target.value;
  }

  checkChangedField();

  prevName = name;
  prevSurname = surname;
  prevCity = city;
}

function checkChangedField() {
  if (name !== prevName) {
    printChangedData("Name", name);
  }

  if (surname !== prevSurname) {
    printChangedData("Surname", surname);
  }

  if (city !== prevCity) {
    printChangedData("City", city);
  }
}

function printChangedData(fieldName, text) {
  paragraph.innerText = `${fieldName} changed to ${text}`;
}

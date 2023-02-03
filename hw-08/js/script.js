// Get elements from DOM
const mainBtn = document.getElementById("button");
const root = document.getElementById("root");

// Create elements using JS
const inputField = document.createElement("input");
inputField.type = "number";
inputField.classList.add("circle-count");

const inputTitle = document.createElement("h4");
inputTitle.classList.add("input-title");
inputTitle.textContent = "Write circle radius (in pixels)";

const br = document.createElement("br");

const paintBtn = document.createElement("button");
paintBtn.classList.add("paint-btn");
paintBtn.hidden = true;

const circlesRoot = document.createElement("div");
circlesRoot.classList.add("circles-root");

// add Listeners
mainBtn.addEventListener("click", makeBaseMarkup);
inputField.addEventListener("input", getRadius);
paintBtn.addEventListener("click", makeCirclesMarckup);

// create global variables
let radius;

let circlesArr = [];

// page functions
function makeBaseMarkup() {
  root.append(inputTitle, inputField, br, paintBtn, circlesRoot);

  mainBtn.disabled = true;
}

function getRandomColor() {
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);

  return `rgb(${r}, ${g}, ${b})`;
}

function createCircle(radius, color) {
  const circle = document.createElement("div");

  circle.style.display = "inline-block";

  circle.style.width = `${radius}px`;
  circle.style.height = `${radius}px`;

  circle.style.backgroundColor = color;
  circle.style.borderRadius = "50%";

  return circle;
}

function getRadius(e) {
  radius = parseInt(e.target.value);

  paintBtn.hidden = false;

  if (isNaN(radius)) {
    paintBtn.disabled = true;
    paintBtn.textContent = "Wrond radius (Must be more then 0)";
    return;
  }

  paintBtn.disabled = false;
  paintBtn.textContent = `Paint circles with radius ${radius}px`;
}

function makeCirclesMarckup() {
  if (radius <= 0) {
    return;
  }
  circlesArr = [];

  for (let i = 1; i <= 100; i++) {
    const color = getRandomColor();
    const circle = createCircle(radius, color);

    circlesArr.push(circle);
  }
}



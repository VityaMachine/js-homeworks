let task = document.querySelector(".task-2");

let title = "<h3>Завдання 2 (Заповнений рівнобедрений трикутник)</h3>";

task.innerHTML += title;

let triangle = "";

for (let i = 0; i < 5; i++) {
  for (let j = i + 1; j < 5; j++) {
    triangle += "&nbsp;";
  }

  for (let k = 1 + i; k > 0; k--) {
    triangle += "*";
  }

  triangle += "<br>";
}

task.innerHTML += triangle;

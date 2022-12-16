let task = document.querySelector(".task-3");

let title = "<h3>Завдання 3 (Заповнений прямокутний трикутник)</h3>";

task.innerHTML += title;

let triangle = "";

for (let i = 0; i < 5; i++) {

  for (let k = 1 + i; k > 0; k--) {
    triangle += "*";
  }

  triangle += "<br>";
}

task.innerHTML += triangle;

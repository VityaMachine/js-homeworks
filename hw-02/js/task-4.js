let task = document.querySelector(".task-4");

let title = "<h3>Завдання 4 (Заповнений ромб)</h3>";

task.innerHTML += title;

let rhombus = "";

for (let i = 0; i < 5; i++) {
  for (let j = i + 1; j < 5; j++) {
    rhombus += "&nbsp;";
  }

  for (let k = i + 1; k > 0; k--) {
    rhombus += "*";
  }

  rhombus += "<br>";
}

for (let i = 0; i < 5; i++) {
  for (let j = i + 1; j > 0; j--) {
    rhombus += "&nbsp;";
  }

  for (let k = i + 1; k < 5; k++) {
    rhombus += "*";
  }

  rhombus += "<br>";
}

task.innerHTML += rhombus;

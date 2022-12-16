let task = document.querySelector(".task-1");

let title = "<h3>Завдання 1 (Порожній прямокутник)</h3>";

task.innerHTML += title;

let rectangle = "";

for (let i = 1; i <= 10; i++) {
  if (i === 1 || i === 10) {
    for (let j = 1; j <= 8; j++) {
      rectangle += "*";
    }
  } else {
    rectangle += "*";

    /*По факту, якщо допустити що кожен символ займає однакову кількість місця,
    то наступна умова має бути 

    for (let j = 1; j <= 8 - 2; j++)
    
    проте зроблено із значенням 14 для більш гарного відображення    
    */

    for (let j = 1; j <= 14 - 2; j++) {
      rectangle += "&nbsp;";
    }

    rectangle += "*";
  }

  rectangle += "<br>";
}

task.innerHTML += rectangle;

console.log(rectangle);

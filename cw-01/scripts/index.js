var userName = prompt("Введіть ім'я");
var userSurname = prompt("Введіть прізвище");
var userAge = prompt("Введіть свій вік");

var numbers = [];

while (numbers.length < 3) {
  var inputedValue = prompt(`Введіть значення числа ${numbers.length + 1}`);

  if (!isNaN(parseFloat(inputedValue))) {
    numbers.push(parseFloat(inputedValue));
  } else alert("невірний формат даних");
}

var numbersSum = numbers.reduce(
  function(sum, elem) {
    return sum + elem
  }, 0
) 
var avgNumber = numbersSum / numbers.length;

var header = `<hearer class="header">Header</hearer>`;
var nav = `<nav class="nav">Nav</nav>`;
var section = `<section class="section">
                Section
                <div>
                    Дані про користувача
                    <div>
                      Ім'я: ${userName}
                    </div>
                    <div>
                      Прізвище: ${userSurname}
                    </div>
                    <div>
                      Вік: ${userAge}
                    </div>
                    <div>
                      Середнє значення введених чисел: ${avgNumber}
                    </div>                    
                </div>
              </section>`;

var main = '<main class="main">' + nav + section + "</main>";

var footer = `<footer class="footer">Footer</footer>`;

var markup = header + main + footer;

document.write(markup);

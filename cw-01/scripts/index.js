var userName = prompt("Введіть ім'я");
var userSurname = prompt("Введіть прізвище");
var userAge = prompt("Введіть свій вік");

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
                </div>
              </section>`;

var main = '<main class="main">' + nav + section + "</main>";

var footer = `<footer class="footer">Footer</footer>`;

var markup = header + main + footer;

document.write(markup);

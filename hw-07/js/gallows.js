// Создаем массив со словами
const words = ["программа", "макака", "прекрасный", "оладушек"];

const word = words[Math.floor(Math.random() * words.length)];
// Создаем итоговый массив
const answerArray = [];

word.split("").forEach((el, idx) => (answerArray[idx] = "_"));

let remainingLetters = word.length;

while (remainingLetters > 0) {
  // Показываем состояние игры
  alert(answerArray.join(" "));
  // Запрашиваем вариант ответа
  const guess = prompt("Угадайте букву, или нажмите Отмена для выхода из игры.");
  if (guess === null) {
    // Выходим из игрового цикла
    break;
  } else if (guess.length !== 1) {
    alert("Пожалуйста, введите одиночную букву.");
  } else {
    // Обновляем состояние игры
    for (let j = 0; j < word.length; j++) {
      if (word[j] === guess) {
        answerArray[j] = guess;
        remainingLetters--;
      }
    }
  }
  // Конец игрового цикла
}

alert(answerArray.join(" "));
alert("Отлично! Было загадано слово " + word);

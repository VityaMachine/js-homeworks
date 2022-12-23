// task 1


console.log("Результат завдання 1:");

function map(cbFunction, array) {
  return cbFunction(array);
}

// task 1 callbak's
function numX2(array) {
  let errorRes = "";
  const newArray = [];

  for (let i = 0; i <= array.length - 1; i++) {
    try {
      if (!isNaN(parseFloat(array[i]))) {
        newArray.push(array[i] * 2);
      } else {
        throw new Error("Невірний формат даних");
      }
    } catch (error) {
      errorRes = error.message;
    }
  }

  if (errorRes.length > 0) {
    return errorRes;
  } else {
    return newArray;
  }
}

function reverse(array) {
  return array.reverse();
}

const task1Array1 = [1, 2, 3, 4, 5];

const task1Array2 = ["Kyiv", "Cherkasy", "Lviv", "Uzhgorod"];

const res1 = map(numX2, task1Array1);
const res2 = map(numX2, task1Array2); // Виклик помилки
const res3 = map(reverse, task1Array2);

console.log(res1);
console.log(res2);
console.log(res3);

// task 2

/*
original function

function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    return confirm("Родители разрешили?");
  }
}
*/

console.log("Результат завдання 2:");

const checkAge = (age) => age > 18 ? true : confirm("Родители разрешили?")

const age1 = 15;
const age2 = 25;

console.log(checkAge(age1));
console.log(checkAge(age2));





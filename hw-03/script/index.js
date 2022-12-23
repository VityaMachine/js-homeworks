// const refs = {
//   task1: document.querySelector(".task-1"),
//   task2: document.querySelector(".task-2"),
//   task3: document.querySelector(".task-3"),
//   task4: document.querySelector(".task-4"),
//   task5: document.querySelector(".task-6"),
//   task6: document.querySelector(".task-7"),
//   task7: document.querySelector(".task-8"),
//   task9: document.querySelector(".task-9"),
//   task10: document.querySelector(".task-10"),
//   task11: document.querySelector(".task-11"),
//   task12: document.querySelector(".task-12"),
//   task13: document.querySelector(".task-13"),
//   task14: document.querySelector(".task-14"),
//   task15: document.querySelector(".task-15"),
//   task16: document.querySelector(".task-16"),
//   task17: document.querySelector(".task-17"),
//   task18: document.querySelector(".task-18"),
// };

// task 1

const t1Arr1 = ["a", "b", "c"];
const t1Arr2 = [1, 2, 3];

const res1 = t1Arr1.concat(t1Arr2);

console.log("Результат завдання 1:", res1);

// task 2

const t2Arr = ["a", "b", "c"];

t2Arr.push(1);
t2Arr.push(2);
t2Arr.push(3);

console.log("Результат завдання 2:", t2Arr);

// task 3

const t3Arr = [1, 2, 3];

t3Arr.reverse();

console.log("Результат завдання 3:", t3Arr);

// task 4

const t4Arr = [1, 2, 3];

t4Arr.push(4);
t4Arr.push(5);
t4Arr.push(6);

console.log("Результат завдання 4:", t4Arr);

// task 5

const t5Arr = [1, 2, 3];

t5Arr.unshift(6);
t5Arr.unshift(5);
t5Arr.unshift(4);

console.log("Результат завдання 5:", t5Arr);

// task 6

const t6Arr = ["js", "css", "jq"];

console.log("Результат завдання 6:", t6Arr[0]);

// task 7

const t7Arr = [1, 2, 3, 4, 5];

const res7 = t7Arr.slice(0, 3);

console.log("Результат завдання 7:", res7);

// task 8

const t8Arr = [1, 2, 3, 4, 5];

t8Arr.splice(1, 2);

console.log("Результат завдання 8:", t8Arr);

// task 9

const t9Arr = [1, 2, 3, 4, 5];

t9Arr.splice(2, 0, 10);

console.log("Результат завдання 9:", t9Arr);

// task 10

const t10Arr = [3, 4, 1, 2, 7];

t10Arr.sort();

console.log("Результат завдання 10:", t10Arr);

// task 11

const t11Arr = ["Привіт, ", "світ", "!"];

const res11 = t11Arr.join(" ");

console.log("Результат завдання 11:", res11);

// task 12

const t12Arr = ["Привіт, ", "світ", "!"];

t12Arr[0] = "Пока, ";

console.log("Результат завдання 12:", t12Arr);

// task 13

const t13Arr1 = new Array(1, 2, 3, 4, 5);
const t13Arr2 = [1, 2, 3, 4, 5];

console.log("Результат завдання 13.1 (new Array):", t13Arr1);
console.log("Результат завдання 13.2 ( [] ):", t13Arr2);

// task14
const t14Arr = [
  ["блакитний", "червоний", "зелений"],
  ["blue", "red", "green"],
];

console.log("Результат завдання 14:", t14Arr[0][0] + " " + t14Arr[1][0]);

// task 15

const t15Arr = ["a", "b", "c", "d"];

const res15 = t15Arr.slice(0, 2).join("+") + "," + t15Arr.slice(2, 4).join("+");

console.log("Результат завдання 15:", res15);

// task 16
let t16count;

let t16Arr = [];

while (isNaN(parseFloat(t16count))) {
  t16count = prompt("Введіть кількість елементів масиву (Завдання 16)");

  if (!isNaN(parseFloat(t16count))) {
    for (let i = 0; i <= parseFloat(t16count); i++) {
      t16Arr.push(i);

      console.log(`Результат завдання 16: Елемент ${i} = ${t16Arr[i]}`);
    }
  } else {
    alert("невірний формат даних");
  }

  console.log("Результуючий масив завдання 16:", t16Arr);
}

// task 17

const elem17 = document.querySelector(".task-17");

let res17p = "";
let res17s = "";

for (let i = 0; i < t16Arr.length; i++) {
  if (t16Arr[i] % 2 && t16Arr[i] > 0) {
    // res17p.push(t16Arr[i])

    res17p += `<p>${i}</p>`;
  } else {
    res17s += `<span style="background-color: red">${i}</span>`;
  }
}

elem17.innerHTML += res17p;
elem17.innerHTML += res17s;

console.log("Результат завдання 17 на сторінці нижче завдання");

// task 18

const elem18 = document.querySelector(".task-18");

const t18Arr = ["Капуста", "Ріпа", "Редиска", "Морковка"];

const t18res = t18Arr.join(", ");

elem18.innerHTML = t18res;

console.log("Результат завдання 18 на сторінці нижче завдання");

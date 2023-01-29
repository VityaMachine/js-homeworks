class Worker {
  constructor(name, surname, rate, days) {
    this.name = name;
    this.surname = surname;
    this.rate = rate;
    this.days = days;
  }

  getSalary() {
    console.log(
      `Worker ${this.name} ${this.surname} worked ${this.days} with rate ${
        this.rate
      } and have salary ${this.rate * this.days}`
    );
  }
}

const worker1 = new Worker("Name1", "Surname1", 2000, 10);
const worker2 = new Worker("Name2", "Surname2", 5000, 30);

console.warn("Task 1 (worker and salary)");
worker1.getSalary();
worker2.getSalary();

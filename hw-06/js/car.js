class Car {
  constructor(carName, carClass, weight, driver, engine) {
    if (!(typeof carName === "string")) {
      throw new Error("wrong car name type");
    }

    if (!(typeof carClass === "string")) {
      throw new Error("wrong car class type");
    }

    if (!(typeof weight === "number")) {
      throw new Error("wrong car weight type");
    }

    if (!(typeof driver === "object")) {
      throw new Error("wrong car driver type");
    }

    if (!(typeof engine === "object")) {
      throw new Error("wrong car engine type");
    }

    this.carName = carName;
    this.carClass = carClass;
    this.weight = weight;
    this.driver = driver;
    this.engine = engine;
  }

  start() {
    console.log("Поїхали");
  }

  stop() {
    console.log("Зупиняємося");
  }

  turnRight() {
    console.log("Поворот праворуч");
  }

  turnLeft() {
    console.log("Поворот ліворуч");
  }

  toString() {
    const text = `
    Автомобіль ${this.carName} класу ${this.carClass} з вагою ${this.weight} 
    має двигун ${this.engine.model} з загальною потужністю ${this.engine.power} кінських сил. 
    Керує даним автомобілем водій ${this.driver.fullName} з водійським досвідом ${this.driver.drvExpirience} років 
    `;

    console.log(text);
  }
}

class Engine {
  constructor(power, model) {
    if (!typeof power === "number") {
      throw new Error("wrong engine power type");
    }

    if (!typeof model === "string") {
      throw new Error("wrong model type");
    }

    this.power = power;
    this.model = model;
  }
}

class Driver {
  constructor(fullName, drvExpirience) {
    if (!(typeof fullName === "string")) {
      throw new Error("wrong fullname type");
    }

    if (!(typeof drvExpirience === "number")) {
      throw new Error("wrong driver expirience type");
    }

    if (drvExpirience < 0) {
      throw new Error("driver expirience can't be less then 0 year");
    }

    this.fullName = fullName;
    this.drvExpirience = drvExpirience;
  }
}

class Lorry extends Car {
  constructor(props, weightValue) {
    super(...props);

    if (!(typeof weightValue === "number")) {
      throw new Error("wrong car weightValue type");
    }

    this.weightValue = weightValue;
  }
}

class SportCar extends Car {
  constructor(props, maxSpeed) {
    super(...props);

    if (!(typeof maxSpeed === "number")) {
      throw new Error("wrong car weightValue type");
    }

    this.maxSpeed = maxSpeed;
  }
}

console.warn("Task 4 (Car)");

const driver1 = new Driver("Driver Vitya", 12);

const engine1 = new Engine(105, "VW CAYC TDI 1.6L");

const car1 = new Car("Seat Leon", "Basic", 1375, driver1, engine1);
const car2 = new SportCar(["Lotus Elise", "Sport", 1375, driver1, engine1], 250);

car1.toString();
``
console.log(car2);

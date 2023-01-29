class Animal {
  constructor(food, location) {
    this.food = food;
    this.location = location;
  }

  makeNoise() {
    console.log(`${this} спить`);
  }
}

class Dog extends Animal {
  constructor(...props) {
    super(...props);
    this.animal = "Dog";
  }

  makeNoise() {
    console.log(`${this.animal} спить`);
  }
}

class Cat extends Animal {
  constructor(props) {
    super(...props);
    this.animal = "Cat";
  }

  makeNoise() {
    console.log(`${this.animal} спить`);
  }
}

class Horse extends Animal {
  constructor(props) {
    super(...props);
    this.animal = "Horse";
  }

  makeNoise() {
    console.log(`${this.animal} спить`);
  }
}

class AnimalDoctor {
  treatAnimal(animal) {
    // console.log(animal);

    return `${animal.animal} located at ${animal.location} and eat ${animal.food}`;
  }

  visitDoctor(animal) {
    console.log(
      `Animal ${animal.animal} comes to doctor and ${this.treatAnimal(animal)}`
    );
  }
}

const main = () => {
  const dog = new Dog("Meat", "Yard");
  const cat = new Cat("Milk", "House");
  const horse = new Horse("Grass", "Field");

  const doctor = new AnimalDoctor();

  const animals = [dog, cat, horse];

  animals.forEach((animal) => doctor.visitDoctor(animal));
};

main();

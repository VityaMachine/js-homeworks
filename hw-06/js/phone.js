class Phone {
  constructor(number, model, weight) {
    this.number = number;
    this.model = model;
    this.weight = weight;
  }

  receiveCall(name) {
    console.log(`Телефонує ${name}`)
  }

  getNumber() {
    return this.number;
  }

}


const phone1 = new Phone("111-111-111", "Samsung", 200);
const phone2 = new Phone("222-222-333", "Xiaomi", 300);
const phone3 = new Phone("333-333-333", "iPhone", 400);


console.warn("Task 3 (Phone)");
console.log(phone1);
console.log(phone2);
console.log(phone3);

phone1.receiveCall("Gabi")
console.log(phone1.getNumber())

phone2.receiveCall("Alex")
console.log(phone2.getNumber())

phone3.receiveCall("Martin")
console.log(phone3.getNumber())





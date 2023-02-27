import { userSlectTopping, showPriceAndToppings } from "./functions.js";
import {
  pizzaBasic,
  pizzaSelectUser,
  sizeRef,
  sauceRef,
  toppingRef,
  addedToppings,
  addedSauce,
  nameFieldRef,
  phoneFieldRef,
  emailFieldRef,
  //   addedSauce,
} from "./index.js";

export function clickInputSize(e) {
  if (e.target.tagName === "INPUT") {
    userSlectTopping(e.target.value);
  }
}

export function resetBtnHandler(e) {
  const basicChild = pizzaBasic.children[0];

  pizzaBasic.replaceChildren(basicChild);

  pizzaSelectUser.size = "";
  pizzaSelectUser.topping = [];
  pizzaSelectUser.sauce = "";
  pizzaSelectUser.price = 0;
  addedToppings.splice(0, addedToppings.length);
  addedSauce.splice(0, addedSauce.length);

  const [...sizeBtns] = sizeRef.children;

  sizeBtns.forEach((el) => (el.children[0].checked = false));

  sauceRef.innerHTML = "";
  toppingRef.innerHTML = "";

  showPriceAndToppings(pizzaSelectUser);
}

export function orderPizza(e) {
  const phoneRegex = /\+\d{12}/;
  const validatePhone = phoneRegex.test(phoneFieldRef.value);

  const emailRegex = /^[A-Za-z0-9_!#$%&'*+\/=?`{|}~^.-]+@[A-Za-z0-9.-]+$/;
  const validateEmail = emailRegex.test(emailFieldRef.value);

  if (nameFieldRef.value.length === 0) {
    alert(`Перевірте корректність ім'я`);
    return;
  }

  if (!validatePhone) {
    alert(`Перевірте корректність телефону`);
    return;
  }

  if (!validateEmail) {
    alert(`Перевірте корректність електронної пошти`);
    return;
  }

  if (pizzaSelectUser.size.length === 0) {
    alert("Вибреріть розмір піцци");
    return;
  }

  if (pizzaSelectUser.sauce.length === 0) {
    alert("Вибреріть соус");
    return;
  }

  if (pizzaSelectUser.topping.length === 0) {
    alert("Додайте хоча б 1 топінг");
    return;
  }

  console.log(pizzaSelectUser);

  alert(`Шановний ${nameFieldRef.value} \n 
           за номером ${phoneFieldRef.value} ви замовили наступну піццу \n
           Розмір: ${pizzaSelectUser.size.name} з соусом ${
    pizzaSelectUser.sauce.productName
  } 
           та наступними топінгами: ${pizzaSelectUser.topping
             .map((el) => el.productName)
             .join(", ")} \n
           `);

  window.location.href = window.location.href + "thank-you";
}

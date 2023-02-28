import {
  clickInputSize,
  dragstartHandler,
  dragendHandler,
  dragenterHandler,
  dragoverHandler,
  resetBtnHandler,
  dropHandler,
  orderPizza,
} from "./functionEvent.js";


export const sizeRef = document.getElementById("pizza");
export const priceRef = document.getElementById("price");
export const sauceRef = document.getElementById("sauce");
export const toppingRef = document.getElementById("topping");

export const nameFieldRef = document.querySelector("input[name=name]");
export const phoneFieldRef = document.querySelector("input[name=phone]");
export const emailFieldRef = document.querySelector("input[name=email]");

sizeRef.addEventListener("click", clickInputSize);

const clearBtnRef = document.querySelector(".button[type=reset]");
clearBtnRef.addEventListener("click", resetBtnHandler);

const orderBtnRef = document.querySelector(".button[id=btnSubmit]");
orderBtnRef.addEventListener("click", orderPizza);

const [...dragbleElements] = document.querySelectorAll(".draggable");
export const pizzaBasic = document.querySelector(".table");

export const addedToppings = [],
  addedSauce = [];

dragbleElements.forEach((el) => {
  el.addEventListener("dragstart", dragstartHandler, false);
});

dragbleElements.forEach((el) => {
  el.addEventListener("dragend", dragendHandler, false);
});

pizzaBasic.addEventListener("dragenter", dragenterHandler, false);

pizzaBasic.addEventListener("dragover", dragoverHandler, false);

pizzaBasic.addEventListener("drop", dropHandler, false);

export const pizzaSelectUser = {
  size: "",
  topping: [],
  sauce: "",
  price: 0,
};

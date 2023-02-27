import {
  clickInputSize,
  resetBtnHandler,
  orderPizza,
} from "./functionEvent.js";

import { userSlectTopping } from "./functions.js";

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
// export let ;

dragbleElements.forEach((el) => {
  el.addEventListener(
    "dragstart",
    function (e) {
      this.style.border = "3px dotted #000";

      e.dataTransfer.effectAllowed = "move";

      e.dataTransfer.setData("ElementId", this.id);
      e.dataTransfer.setData("ImgUrl", this.src);
    },
    false
  );
});

dragbleElements.forEach((el) => {
  el.addEventListener(
    "dragend",
    function (e) {
      this.style.border = "";
    },
    false
  );
});

pizzaBasic.addEventListener(
  "dragenter",
  function (e) {
    this.style.border = "3px dotted #ebcc4e";
    this.style.borderRadius = "15px";
  },
  false
);

pizzaBasic.addEventListener(
  "dragover",
  function (e) {
    if (e.preventDefault) {
      e.preventDefault();
    }

    return false;
  },
  false
);

pizzaBasic.addEventListener(
  "drop",
  function (e) {
    if (e.preventDefault) e.preventDefault();
    if (e.stopPropagation) e.stopPropagation();

    this.style.border = "";
    const id = e.dataTransfer.getData("ElementId");
    const imgUrl = e.dataTransfer.getData("ImgUrl");
    const img = document.createElement("img");

    if ("sauceClassicsauceBBQsauceRikotta".includes(id)) {
      img.className = "draggable";
      img.src = imgUrl;
      img.zIndex = 20;

      addedSauce.push(img);

      if (this.children.length === 1) {
        this.append(...addedSauce);
      }

      if (this.children.length > 1) {
        this.replaceChildren(
          pizzaBasic.children[0],
          ...addedSauce,
          ...addedToppings
        );
      }
    }

    if ("moc1moc2moc3telyavetch1vetch2".includes(id)) {
      img.className = "draggable";
      img.src = imgUrl;
      img.zIndex = 30;

      addedToppings.push(img);

      if (this.children.length === 1) {
        this.append(img);
      }

      if (this.children.length > 1) {
        if (addedSauce.length === 0) {
          this.replaceChildren(pizzaBasic.children[0], ...addedToppings);

          userSlectTopping(id);
          return false;
        }

        this.replaceChildren(
          pizzaBasic.children[0],
          ...addedSauce,
          ...addedToppings
        );
      }
    }

    userSlectTopping(id);

    return false;
  },
  false
);

export const pizzaSelectUser = {
  size: "",
  topping: [],
  sauce: "",
  price: 0,
};

import {
  clickInputSize,
//   clickSauceAdd,
//   clickToppingAdd,
} from "./functionEvent.js";

import { userSlectTopping } from "./functions.js";

// export const sizeRef = document.getElementById("pizza");
export const priceRef = document.getElementById("price");
export const sauceRef = document.getElementById("sauce");
export const toppingRef = document.getElementById("topping");

const [...dragbleElements] = document.querySelectorAll(".draggable");
const pizzaBasic = document.querySelector(".table");

const addedToppings = [];
let addedSauce;

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

      addedSauce = img;

      if (this.children.length === 1) {
        this.append(img);
      }

      if (this.children.length > 1) {
        this.replaceChildren(
          pizzaBasic.children[0],
          addedSauce,
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

      if (!addedSauce) {
        this.replaceChildren(
            pizzaBasic.children[0], 
            ...addedToppings);
        return;
      }

      if (this.children.length > 1) {
        this.replaceChildren(
          pizzaBasic.children[0],
          addedSauce,
          ...addedToppings
        );
      }
    }

    userSlectTopping(id);

    return false;
  },
  false
);

document.getElementById("pizza").addEventListener("click", clickInputSize);



export const pizzaSelectUser = {
  size: "",
  topping: [],
  sauce: "",
  price: 0,
};

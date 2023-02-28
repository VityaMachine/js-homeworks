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


export function dragstartHandler(e) {
  this.style.border = "3px dotted #000";

  e.dataTransfer.effectAllowed = "move";

  e.dataTransfer.setData("ElementId", this.id);
  e.dataTransfer.setData("ImgUrl", this.src);
}

export function dragendHandler(e) {
  this.style.border = "";
}

export function dragenterHandler(e) {
  
  e.preventDefault();
  this.style.border = "3px dotted #ebcc4e";
  this.style.borderRadius = "15px";
}

export function dragoverHandler(e) {
  e.preventDefault();

  return false;
}

export function dropHandler(e) {
  
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

    addedSauce.length = 0;

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

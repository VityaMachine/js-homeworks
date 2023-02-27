import { pizzaSelectUser, priceRef, sauceRef, toppingRef } from "./index.js";
import pizza from "./pizza.js";

function userSlectTopping(topping) {
  //size = "big"
  if ("smallmidbig".includes(topping)) {
    pizzaSelectUser.size = pizza.size.find((el) => {
      return el.name === topping;
    });
  } else if ("moc1moc2moc3telyavetch1vetch2".includes(topping)) {
    /* Додано перевірку на те, що такий топінг вже доданий */

    if (!pizzaSelectUser.topping.some((el) => el.name === topping)) {
      pizzaSelectUser.topping.push(
        pizza.topping.find((el) => el.name === topping)
      );
    }
  } else if ("sauceClassicsauceBBQsauceRikotta".includes(topping)) {
    pizzaSelectUser.sauce = pizza.sauce.find((el) => el.name === topping);
  }

  pizzaSelectUser.price = calculatePrice(pizzaSelectUser);

  showPriceAndToppings(pizzaSelectUser);
}

function calculatePrice(pizza) {
  let price = 0;
  if (pizza.sauce !== "") {
    price += pizza.sauce.price;
  }
  if (pizza.topping.length > 0) {
    price += pizza.topping.reduce((a, b) => {
      return a + b.price;
    }, 0);
  }
  if (pizza.size !== "") {
 
    if(!pizza.size) {
        return;
    }

    price += pizza.size.price;
  }

  return price;
}

 export function showPriceAndToppings(pizza) {

    
  priceRef.innerText = `${pizza.price} UAH`;

  if (pizza.sauce) {
    if (sauceRef.children.length > 0) {
      sauceRef.removeChild(sauceRef.children[0]);
    }
    sauceRef.insertAdjacentHTML(
      "afterbegin",
      `<div>${pizza.sauce.productName} (${pizza.sauce.price} UAH)</div>`
    );
  }

  if (pizza.topping.length > 0) {
    const markupToppings = pizza.topping.map((el) => {
      const wrapper = document.createElement("div");

      const text = document.createElement("span");
      text.innerText = `${el.productName} (${el.price} UAH)`;
    
      wrapper.append(text);

      return wrapper;
    });

    toppingRef.replaceChildren(...markupToppings);
  }
}

// function deleteTopping(name, toppingArray) {
//   const newArray = toppingArray.filter((el) => el.name !== name);

//   pizzaSelectUser.topping = newArray;


//   pizzaSelectUser.price = calculatePrice(pizzaSelectUser);
//   showPriceAndToppings(pizzaSelectUser);
// }

export { userSlectTopping };

import { mainPage } from "./pages/main.js";

import { linkHandler } from "./eventHandlers.js";

export const root = document.getElementById("root");

root.insertAdjacentHTML("afterbegin", mainPage);

const menuItems = [...root.children[0].children];

menuItems.forEach((el) => el.addEventListener("click", linkHandler));

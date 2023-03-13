import { root } from "./index.js";

import { showPage } from "./functions.js";

import { PAGE_MAIN, PAGE_USERS } from "./constants.js";

import { mainPage } from "./pages/main.js";
import { usersContainer } from "./pages/userList.js";

export const linkHandler = (e) => {
  e.preventDefault();

  const link = e.target.href;

  if (link.includes(PAGE_MAIN)) {
    showPage(root, PAGE_MAIN);
  }

  if (link.includes(PAGE_USERS)) {
    showPage(root, usersContainer);

    const linkHome = document.querySelector(".menu-container a");

    linkHome.addEventListener("click", homeLinkHandler);
  }
};

const homeLinkHandler = (e) => {
  e.preventDefault();

  showPage(root, mainPage, PAGE_MAIN);
};

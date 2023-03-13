import { PAGE_MAIN, PAGE_USERS } from "./constants.js";

import { linkHandler } from "./eventHandlers.js";

export const showPage = (root, page, pageType) => {
  root.innerHTML = "";

  if (pageType === PAGE_MAIN) {
    root.insertAdjacentHTML("afterbegin", page);

    const menuItems = [...root.children[0].children];

    menuItems.forEach((el) => el.addEventListener("click", linkHandler));

    return;
  }

  root.append(page);
};

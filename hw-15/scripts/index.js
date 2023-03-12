import { PAGE_LOGIN, PAGE_REGISTER, PAGE_NOT_FOUND } from "./constants.js";
import { showPage } from "./functions.js";
import { hashchangeHandler } from "./eventHandlers.js";

export const root = document.getElementById("root");

const path = window.location.href;
const pathArr = path.split("#");


window.addEventListener('hashchange', hashchangeHandler)


if (pathArr[1] === PAGE_REGISTER) {
  showPage(root, PAGE_REGISTER);
}

if (pathArr[1] === PAGE_LOGIN || pathArr.length === 1) {
  showPage(root, PAGE_LOGIN);
}

if(pathArr.length > 1 && !pathArr.includes(PAGE_LOGIN) && !pathArr.includes(PAGE_REGISTER)) {
    showPage(root, PAGE_NOT_FOUND)
}
import {
  PAGE_LOGIN,
  PAGE_REGISTER,
  PAGE_NOT_FOUND,
  PAGE_USER,
} from "./constants.js";
import { showPage } from "./functions.js";
import { hashchangeHandler } from "./eventHandlers.js";

export const root = document.getElementById("root");

const path = window.location.href;
const pathArr = path.split("#");

const logginedUser = localStorage.getItem("loginedUser");

window.addEventListener("hashchange", hashchangeHandler);

if (
  logginedUser &&
  (pathArr[1] === PAGE_REGISTER || pathArr[1] === PAGE_LOGIN)
) {
  window.location.hash = "#" + PAGE_USER;
}

if (pathArr[1] === PAGE_USER && !logginedUser) {
  alert("No loggined user. You will be redirect to login page");

  window.location.hash = "#" + PAGE_LOGIN;
}

if (pathArr[1] === PAGE_REGISTER && !logginedUser) {
  showPage(root, PAGE_REGISTER);
}

if (
  !logginedUser &&
  (pathArr[1] === PAGE_LOGIN || pathArr.length === 1 || pathArr[1] === "")
) {
  showPage(root, PAGE_LOGIN);
}

if (pathArr[1] === PAGE_USER && logginedUser) {
  showPage(root, PAGE_USER);
}

if (
  pathArr.length > 1 &&
  pathArr[1] !== "" &&
  !pathArr.includes(PAGE_LOGIN) &&
  !pathArr.includes(PAGE_REGISTER) &&
  !pathArr.includes(PAGE_USER)
) {
  showPage(root, PAGE_NOT_FOUND);
}

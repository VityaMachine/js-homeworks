import {
  showPage,
  validateRegistrationData,
  validateIsUserRegistered,
} from "./functions.js";
import { PAGE_LOGIN, PAGE_REGISTER } from "./constants.js";

export const hashchangeHandler = (e) => {
  const newLink = e.newURL;

 

  window.location.replace(newLink);
  window.location.reload();

  console.log(newLink); 
};

export const regRefHandler = (e) => {
  e.preventDefault();

  const originUrl = window.location.origin;
  const pathNameUrl = window.location.pathname;

  const newUrl = originUrl + pathNameUrl + `#${PAGE_REGISTER}`;

  window.location.href = newUrl;
};

export const regBtnHandler = (e) => {
  e.preventDefault();

  const data = new FormData(e.target);
  const elementsArr = [...data.entries()];

  const dataObj = {};

  elementsArr.forEach((el) => (dataObj[el[0]] = el[1]));

  const errorFields = validateRegistrationData(dataObj);

  if (errorFields.length !== 0) {
    const formElements = [...e.target];

    formElements.forEach((el) => {
      if (errorFields.includes(el.name)) {
        el.classList.add("non-valid-input");

        el.addEventListener("click", handleClickInput);
      }
    });

    return;
  }

  delete dataObj.rePassword;

  const users = localStorage.getItem("registeredUsers");
  const usersArr = JSON.parse(users);

  if (users) {
    const isRegistered = validateIsUserRegistered(usersArr, dataObj);

    if (isRegistered) {
      alert(`user with email ${dataObj.email} is already registered`);
    } else {
      localStorage.setItem(
        "registeredUsers",
        JSON.stringify([...usersArr, dataObj])
      );

      alert("Registration finished");
    }
  } else {
    localStorage.setItem("registeredUsers", JSON.stringify([dataObj]));

    alert("Registration finished");
  }

  window.location.hash = "#" + PAGE_LOGIN;
};

export const loginBtnHandler = (e) => {
  e.preventDefault();

  console.log("login");
};

const handleClickInput = (e) => {
  e.target.classList.remove("non-valid-input");
};

import {
  getFormData,
  validateRegistrationData,
  validateIsUserRegistered,
  validateLoginData,
} from "./functions.js";
import { PAGE_LOGIN, PAGE_REGISTER, PAGE_USER } from "./constants.js";

export const hashchangeHandler = (e) => {
  const newLink = e.newURL;

  window.location.replace(newLink);
  window.location.reload();
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

  const data = getFormData(e.target);

  const errorFields = validateRegistrationData(data);

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

  delete data.rePassword;

  const users = localStorage.getItem("registeredUsers");
  const usersArr = JSON.parse(users);

  if (users) {
    const isRegistered = validateIsUserRegistered(usersArr, data);

    if (isRegistered) {
      alert(`user with email ${data.email} is already registered`);
    } else {
      localStorage.setItem(
        "registeredUsers",
        JSON.stringify([...usersArr, data])
      );

      alert("Registration finished");
    }
  } else {
    localStorage.setItem("registeredUsers", JSON.stringify([data]));

    alert("Registration finished");
  }

  window.location.hash = "#" + PAGE_LOGIN;
};

export const loginBtnHandler = (e) => {
  e.preventDefault();

  const data = getFormData(e.target);

  const isValidLoginData = validateLoginData(data);

  const usersArray = JSON.parse(localStorage.getItem("registeredUsers"));

  if (!usersArray) {
    alert(
      "Have no registered users. You can be first. You will redirect to registration page"
    );

    window.location.hash = "#" + PAGE_REGISTER;
  } else {
    if (!isValidLoginData) {
      return;
    }

    const foundedUser = usersArray.find((el) => el.email === data.email);

    if (!foundedUser) {
      alert(`User with email ${data.email} not found`);
      return;
    }

    if (foundedUser.password !== data.password) {
      alert("Wrong password");
      return;
    }

    localStorage.setItem("loginedUser", JSON.stringify(foundedUser));

    alert("Succesful login");

    window.location.hash = "#" + PAGE_USER;
  }
};

export const logoutBtnHandler = (e) => {
  delete localStorage.loginedUser;

  window.location.hash = "#" + PAGE_LOGIN;
};

const handleClickInput = (e) => {
  e.target.classList.remove("non-valid-input");
};

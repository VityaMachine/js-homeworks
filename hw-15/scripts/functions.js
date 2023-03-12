import { PAGE_LOGIN, PAGE_REGISTER, PAGE_NOT_FOUND } from "./constants.js";
import { imgLogin, formLogin } from "./pages/login.js";
import { imgRegister, formRegister } from "./pages/register.js";
import { notFoundMarkup } from "./pages/notFound.js";

export function showPage(root, pageType) {
  root.innerHTML = "";

if( pageType === PAGE_LOGIN || pageType === PAGE_REGISTER) {
  const mainContainer = document.createElement("div");
  mainContainer.classList.add("container");

  const imgContainer = document.createElement("div");
  imgContainer.classList.add("image-container");
  imgContainer.classList.add("half-page");

  const formContainer = document.createElement("div");
  formContainer.classList.add("form-container");
  formContainer.classList.add("half-page");

  if (pageType === PAGE_LOGIN) {
    imgContainer.append(imgLogin);
    formContainer.append(formLogin);
  }

  if (pageType === PAGE_REGISTER) {
    imgContainer.append(imgRegister);
    formContainer.append(formRegister);
  }

  mainContainer.append(imgContainer, formContainer);
  root.append(mainContainer);
}

if(pageType === PAGE_NOT_FOUND) {
  root.insertAdjacentHTML('afterbegin', notFoundMarkup)
}


}

export function validateRegistrationData(data) {
  let errorFields = [];

  if (data.name.length < 4) {
    errorFields.push("name");
    alert("Name must be longer then 4 symbols");
  }

  if (data.parentsName.length < 4) {
    errorFields.push("parentsName");
    alert("Parent Name must be longer then 4 symbols");
  }

  const emailRegex = /^[A-Za-z0-9_!#$%&'*+\/=?`{|}~^.-]+@[A-Za-z0-9.-]+$/;
  const validateEmail = emailRegex.test(data.email);

  if (!validateEmail) {
    errorFields.push("email");
    alert("Wrong email");
  }

  const phoneRegex = /\+\d{12}/;
  const validatePhone = phoneRegex.test(data.mobileNumber);

  if (!validatePhone) {
    errorFields.push("mobileNumber");
    alert("Wrong mobile number");
  }

  if (data.password.length < 8 || data.password !== data.rePassword) {
    errorFields.push("password");
    errorFields.push("rePassword");
    alert(
      "Password must be longer then 8 symbols or reentered password is not equal"
    );
  }

  const validateHomePhone = phoneRegex.test(data.homeNumber);

  if (!validateHomePhone) {
    errorFields.push("homeNumber");
    alert("Wrong home number");
  }

  return errorFields;
}

export function validateIsUserRegistered (usersArray, newUser) {
 
  const result = usersArray.some(el => el.email === newUser.email)

  return result;

}

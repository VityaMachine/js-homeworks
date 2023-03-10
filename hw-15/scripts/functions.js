import { PAGE_LOGIN, PAGE_REGISTER } from "./constants.js";
import { imgLogin, formLogin } from "./pages/login.js";
import { imgRegister, formRegister } from "./pages/register.js";

export function showPage(root, pageType) {

  root.innerHTML = '';  

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

  if(pageType === PAGE_REGISTER) {

    imgContainer.append(imgRegister);
    formContainer.append(formRegister);

  }


  mainContainer.append(imgContainer, formContainer);
  root.append(mainContainer);
}

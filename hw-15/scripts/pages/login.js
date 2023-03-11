import { PAGE_REGISTER } from "../constants.js";
import { root } from "../index.js";
import { showPage } from "../functions.js";

const imgUrl = "./src/images/login.png";

// creating login page markup
const imgLogin = document.createElement("img");
imgLogin.classList.add("page-image");
imgLogin.alt = "Login page logo";
imgLogin.src = imgUrl;

const formLogin = document.createElement("form");
formLogin.classList.add("form");

const formInputsMarkup = `
    <h3 class="form-title">Login</h3>
        <div class="input-box">
            <span>Email</span>
            <input type="email" name="email"> 
        </div>
        <div class="input-box">
            <span>Password</span>
            <input type="password" name="password"> 
        </div>
`;

formLogin.insertAdjacentHTML("afterbegin", formInputsMarkup);

const linkContainer = document.createElement("div");
linkContainer.classList.add("link-container");

const linkText = document.createElement("span");
linkText.innerText = "Not a user? ";

const registerLink = document.createElement("a");
registerLink.classList.add("register-link");
registerLink.href = "#";
registerLink.innerText = "Register now";
registerLink.addEventListener("click", (e) => {
  e.preventDefault();

  const originUrl = window.location.origin;
  const pathNameUrl = window.location.pathname;

  const newUrl = originUrl + pathNameUrl + `#${PAGE_REGISTER}`;

  window.location.href = newUrl;

  showPage(root, PAGE_REGISTER);
});

linkContainer.append(linkText, registerLink);

formLogin.append(linkContainer);
// finished login page markup

export { imgLogin, formLogin };
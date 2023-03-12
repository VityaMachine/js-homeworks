import { root } from "../index.js";
import { regRefHandler, loginBtnHandler } from "../eventHandlers.js";

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
registerLink.addEventListener("click", regRefHandler);

linkContainer.append(linkText, registerLink);

formLogin.append(linkContainer);

const btnLogin = document.createElement('button');
btnLogin.classList.add('button')
btnLogin.type = 'submit';
btnLogin.innerText = 'LOGIN';




formLogin.append(btnLogin)

formLogin.addEventListener('submit', loginBtnHandler)



export { imgLogin, formLogin };

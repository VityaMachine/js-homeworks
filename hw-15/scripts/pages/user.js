import { logoutBtnHandler } from "../eventHandlers.js";

const user = localStorage.getItem("loginedUser");

const data = JSON.parse(user);

function getMarkup(data) {
  if (data) {
    const dataToShow = data;

    delete dataToShow.password;

    const dtsArray = Object.entries(dataToShow);

    const container = document.createElement("div");
    container.classList.add("user-container");

    const elementsArr = dtsArray.map(
      (el) =>
        `
      <div class="user-item">
        <span class="user-key">${el[0]}</span>
        :&nbsp;
        <span class="user-value">${el[1]}</span>
      </div>
        `
    );

    container.insertAdjacentHTML("afterbegin", elementsArr.join(""));

    const logoutBtn = document.createElement("button");
    logoutBtn.innerText = "LOGOUT";
    logoutBtn.classList.add('button')
    logoutBtn.addEventListener("click", logoutBtnHandler);

    container.append(logoutBtn);

    return container;
  }
}

export const userMarkup = getMarkup(data);

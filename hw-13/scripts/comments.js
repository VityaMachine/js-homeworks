import getServerData from "./utils/serverDataGetter.js";
import paginator from "./utils/paginator.js";

const rootRef = document.querySelector(".comments-root");
const paginationControlsRef = document.querySelector(".pagination");
const loaderRef = document.querySelector(".loader");
const pageNumberRef = paginationControlsRef.children[1];
const prevBtnRef = document.querySelector("button[data-action=prev]");
const nextBtnRef = document.querySelector("button[data-action=next]");

prevBtnRef.addEventListener("click", paginationBtnsHandler);
nextBtnRef.addEventListener("click", paginationBtnsHandler);

let pageNum = 1;

const urlComments = "https://jsonplaceholder.typicode.com/comments";

function commentsHandler(data, page) {
  const dataRes = paginator(data, page, 10);

  console.log(dataRes);

  if (dataRes.total_pages > 1) {
    paginationControlsRef.classList.remove("hide-pagination");
    pageNumberRef.textContent = dataRes.page;
  }

  if (dataRes.page === 1) {
    prevBtnRef.disabled = true;
  }

  if (dataRes.page > 1 && dataRes.page < dataRes.total_pages) {
    prevBtnRef.disabled = false;
    nextBtnRef.disabled = false;
  }

  if (dataRes.page === dataRes.total_pages) {
    nextBtnRef.disabled = true;
  }

  const dataToShow = dataRes.data;

  const markup = dataToShow
    .map((el) => {
      return `
        <div class="card" style="width: 50rem;">
        <div class="card-body">
          <h5 class="card-title">${el.name}</h5>
          <p class="card-text">${el.body}</p>
          <a href="mailto: ${el.email}" class="card-link">${el.email}</a>
        
        </div>
      </div>
        `;
    })
    .join("");

  rootRef.innerHTML = markup;
}

getServerData(urlComments, (data) => commentsHandler(data, pageNum), loaderRef);

function paginationBtnsHandler(e) {
  if (e.target.dataset.action === "next") {
    pageNum += 1;
    getServerData(
      urlComments,
      (data) => commentsHandler(data, pageNum),
      loaderRef
    );
  }

  if (e.target.dataset.action === "prev") {
    pageNum -= 1;
    getServerData(
      urlComments,
      (data) => commentsHandler(data, pageNum),
      loaderRef
    );
  }
}

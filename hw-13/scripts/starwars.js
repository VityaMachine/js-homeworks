import getServerData from "./utils/serverDataGetter.js";

const root = document.querySelector('.star-wars-root')
const loaderRef = document.querySelector('.loader')

const urlSWHeroes = "https://swapi.dev/api/people/";

function requestHandler(data) {
  const dataArray = data.results;

  const markup = dataArray
    .map((el, idx) => {
      return `
        <div class="card" style="width: 18rem;">
        <img src="https://starwars-visualguide.com/assets/img/characters/${
          idx + 1
        }.jpg" class="card-img-top" alt="${el.name}">
        <div class="card-body">
          
            <div><strong>${el.name}</strong></div>
            <div><small>${el.gender}</small></div>
            <div><small>${el.height}</small></div>
            <div><small>${el.skin_color}</small></div>
            <div><small>${el.birth_year}</small></div>
        </div>
      </div>`;
    })
    .join("");

  root.innerHTML = markup
}

getServerData(urlSWHeroes, requestHandler, loaderRef);

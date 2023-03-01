const root = document.querySelector('.star-wars-root')
const loader = document.querySelector('.loader')

const urlSWHeroes = "https://swapi.dev/api/people/";

function getServerData(url, callback) {
  const ajax = new XMLHttpRequest();


  ajax.open("get", url);
  ajax.send();
  ajax.addEventListener("readystatechange", () => {
    if (ajax.readyState === 4 && ajax.status >= 200 && ajax.status < 300) {
        loader.classList.add('hide-loader')  
      callback(JSON.parse(ajax.response));
    } else if (ajax.readyState === 4) {
      throw new Error(
        `Помилка у запиті на сервер : ${ajax.status} / ${ajax.statusText}`
      );
    }
  });
}

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

getServerData(urlSWHeroes, requestHandler);

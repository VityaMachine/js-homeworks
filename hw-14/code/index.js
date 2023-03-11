/*
Зробити програму з навігаційним меню яке буде показувати один з варіантів. 

Курс валют НБУ з датою на який день, 

героїв зоряних війн, 

список справ з https://jsonplaceholder.typicode.com/ 
//виводити які з можливістю редагування при натискані 
*/

const planetResArray = [];

const req = async (url) => {
  document.querySelector(".box_loader").classList.add("show");
  const data = await fetch(url);
  return await data.json();
};

const nav = document.querySelector(".nav").addEventListener("click", (e) => {
  if (e.target.dataset.link === "nbu") {
    req(
      "https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json"
    ).then((info) => {
      show(info);
    });
  } else if (e.target.dataset.link === "star") {
    req("https://swapi.dev/api/planets/").then((info) => {
      planetResArray.length = 0;
      getPlanetsData(info);
    });

    // вивести всі 60 планет з https://swapi.dev/api/planets/
  } else if (e.target.dataset.link === "todo") {
    req("https://jsonplaceholder.typicode.com/todos").then((info) => {
      show(info);
    });
  } else {
  }
});

function show(data = []) {
  if (!Array.isArray(data)) return;

  // console.log(data);

  const tbody = document.querySelector("tbody");
  tbody.innerHTML = "";

  const newArr = data.map(
    (
      { txt, rate, exchangedate, title, completed, name, diameter, population },
      i
    ) => {
      return {
        id: i + 1,
        name: txt || title || name,
        info1: rate || diameter || completed,
        info2: exchangedate || population || "тут пусто",
      };
    }
  );

  newArr.forEach(({ name, id, info1, info2 }) => {
    tbody.insertAdjacentHTML(
      "beforeend",
      `
        <tr> 
        <td>${id}</td>
        <td>${name}</td>
        <td>${info1}</td>
        <td>${info2}</td>
        </tr>
        `
    );
  });

  document.querySelector(".box_loader").classList.remove("show");
}

function getPlanetsData(data) {
  if (typeof data !== "object" && Array.isArray(data) && data === null) return;

  const nextPageLink = data.next;

  data.results.forEach(({ name, diameter, population }) => {
    planetResArray.push({
      id: planetResArray.length + 1,
      name,
      diameter,
      population,
    });
  });

  if (nextPageLink) {
    req(nextPageLink).then((info) => {
      getPlanetsData(info);
    });
  }

  if (!nextPageLink) {
    show(planetResArray);
  }
}

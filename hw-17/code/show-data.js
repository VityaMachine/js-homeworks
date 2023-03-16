import { hideModalWindowEvent, showModalWindow } from "./events.js";
import { createEditProductInput, createProductElement } from "./methods.js";

const pathnameStr = window.location.pathname.slice(1, -1);

console.log(pathnameStr);

let data = null;

function updateData(updateType, newData) {
  if (updateType === "get") {
    if (pathnameStr.includes("restoran")) {
      const lsData = [...JSON.parse(localStorage.restorationBD)];
      data = [];
      lsData.forEach((el) => {
        data.push(el);
      });
    }

    if (pathnameStr.includes("store")) {
      const lsData = [...JSON.parse(localStorage.storeBD)];
      data = [];
      lsData.forEach((el) => {
        data.push(el);
      });
    }

    if (pathnameStr.includes("video")) {
      const lsData = [...JSON.parse(localStorage.videoBD)];
      data = [];
      lsData.forEach((el) => {
        data.push(el);
      });
    }
  }

  if (updateType === "set") {
    if (pathnameStr.includes("restoran")) {
      localStorage.restorationBD = JSON.stringify(newData);
      data = newData;
    }
    if (pathnameStr.includes("store")) {
      localStorage.storeBD = JSON.stringify(newData);
      data = newData;
    }

    if (pathnameStr.includes("video")) {
      localStorage.videoBD = JSON.stringify(newData);
      data = newData;
    }
  }
}

updateData("get");

// Перевірка на те чи отримали ми масив
if (!Array.isArray(data)) throw new Error("Ми отримали не масив!!!");

function showListProduct(data) {
  const table = document.querySelector("table");
  if (table.querySelector("tbody")) {
    table.querySelector("tbody").remove();
  }
  const tbody = document.createElement("tbody");
  table.append(tbody);

  if (pathnameStr.includes("restoran") || pathnameStr.includes("store")) {
    const tableD = data.map((e, i) => {
      const { productName, quantity, date, productPrice } = e;
      const tr = createProductElement("tr");
      const tds = [
        createProductElement("td", undefined, i + 1),
        createProductElement("td", undefined, productName),
        createProductElement("td", undefined, quantity),
        createProductElement("td", undefined, productPrice),
        createProductElement("td", undefined, "<span class='icon'>&#128221;</span>", undefined, editClickEvent, e),
        createProductElement("td", undefined, quantity > 0 ? "&#9989;" : "&#10060;"),
        createProductElement("td", undefined, date),
        createProductElement("td", undefined, "<span class='icon'>&#128465;</span>", undefined, deleteClickEvent, e),
      ];
      tr.append(...tds);
      return tr;
    });

    tbody.append(...tableD);
  }

  if(pathnameStr.includes("video")) {
    const tableD = data.map((e, i) => {
      const { videoName, date, videoLink } = e;
      const tr = createProductElement("tr");
      const tds = [
        createProductElement("td", undefined, i + 1),
        createProductElement("td", undefined, videoName),
        createProductElement("td", undefined, date),
        createProductElement("td", undefined, videoLink),
        createProductElement("td", undefined, "<span class='icon'>&#128221;</span>", undefined, editClickEvent, e),
        createProductElement("td", undefined, "<span class='icon'>&#128465;</span>", undefined, deleteClickEvent, e),
      ]
      tr.append(...tds);
      return tr;
    })

    tbody.append(...tableD);

  }


  updateData("get");
}
showListProduct(data);

function editClickEvent(e) {
  // e - event || productObject
  const mw = document.querySelector(".modal-window");

  mw.innerHTML = "";

  const product = Object.entries(e).map(([key, value], id) => {
    return createEditProductInput(value, key, id);
  });

  const div = createProductElement("div", "btn-edit-product");
  const save = createProductElement(
    "button",
    "save-product",
    "Зберегти",
    undefined,
    saveProduct,
    e
  );
  div.append(save);

  mw.append(...product, div);
  showModalWindow();
}

function saveProduct(oldObject) {
  // console.log(oldObject);

  hideModalWindowEvent();
  const newObj = {
    id: oldObject.id,
    date: oldObject.date,
  };

  const inputs = document.querySelectorAll(".modal-window input");

  console.log(inputs);

  inputs.forEach((el) => {
    if (el.key === "stopList") return;
    newObj[el.key] = el.value;
  });
  newObj.stopList = newObj.quantity > 0 ? false : true;

  const arr = data;
  const index = arr.findIndex((el) => {
    return el.id === oldObject.id;
  });
  arr.splice(index, 1, newObj);

  updateData("set", arr);
  showListProduct(data);
}

function deleteClickEvent(e) {
  const idToDelete = e.id;

  deleteProduct(idToDelete);
}

function deleteProduct(productId) {
  const newData = data.filter((el) => el.id !== productId);
  updateData("set", newData);
  showListProduct(data);
}

const DOM_ROOT = document.getElementById("root");

const documentObj = {
  title: "",
  body: "",
  footer: "",
  date: "",
  application: {
    title: "",
    body: "",
    footer: "",
    date: "",
  },

  fillData: () => {
    documentObj.title = prompt("Введіть назву документу");
    documentObj.body = prompt("Введіть тіло документу");
    documentObj.footer = prompt("Введіть футер документу");
    documentObj.date = new Date();

    documentObj.application.title = prompt("Введіть назву додатку");
    documentObj.application.body = prompt("Введіть тіло додатку");
    documentObj.application.footer = prompt("Введіть футер додатку");
    documentObj.application.date = new Date();
  },

  showData: () => {
    DOM_ROOT.innerHTML = `
    <div>
        <h2>Назва документу: ${documentObj.title}</h2>
        <div>Тіло документу: ${documentObj.body}</div>
        <div>Футер документу: ${documentObj.footer}</div>
        <div>Дата документу: ${documentObj.date}</div>   
    </div>

    <div>
        <h2>Назва додатку: ${documentObj.application.title}</h2>
        <div>Тіло додатку: ${documentObj.application.body}</div>
        <div>Футер додатку: ${documentObj.application.footer}</div>
        <div>Дата додатку: ${documentObj.application.date}</div>   
    </div>`;
  },
};

documentObj.fillData();
documentObj.showData();

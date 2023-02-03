function createDomElement(tagName, colorStyle, className = "full-width") {
  const element = document.createElement(tagName);
  const textElement = document.createElement("span");
  textElement.textContent = tagName;
  textElement.addEventListener("click", changeContent);

  element.append(textElement);
  element.classList.add(colorStyle);
  element.classList.add(className);

  return element;
}

function changeContent(e) {
  const element = e.target;
  const currentText = element.textContent;
  const inputField = document.createElement("input");

  inputField.setAttribute("placeholder", currentText);
  inputField.classList.add("input");
  inputField.addEventListener("keydown", setText);

  element.textContent = "";

  element.append(inputField);
  inputField.focus();
}

function setText(e) {
  if (e.key !== "Enter") {
    return;
  }

  const placeholder = e.target.placeholder;

  const newText = e.target.value;

  const parent = e.target.parentNode;

  parent.textContent = newText.length === 0 ? placeholder : newText;
}

window.onload = () => {
  const body = document.getElementsByTagName("body")[0];

  // header
  const mainHeader = createDomElement("header", "black");
  const headerNav = createDomElement("nav", "blue");
  mainHeader.append(headerNav);

  // main
  const main = document.createElement("main");
  main.classList.add("main", "full-width");


  // section Left
  const sectionLeft = createDomElement("section", "black", "left-section");
  const sectLeftHeader = createDomElement("header", "blue");

  sectionLeft.append(sectLeftHeader);

  for (let i = 1; i <= 2; i++) {
    const article = createDomElement("article", "blue");
    const artHeader = createDomElement("header", "green");
    const artPFull = createDomElement("p", "green");

    const artDiv = document.createElement("div");
    artDiv.classList.add("art-div");

    if (i === 1) {
      const artPSemi = createDomElement("p", "green", "semi-width");
      const artAside = createDomElement("aside", "green", "semi-width");
      artDiv.append(artPSemi, artAside);
    }

    if (i > 1) {
      const artP2 = createDomElement("p", "green", "div-p");
      artDiv.append(artP2);
    }

    const artFooter = createDomElement("footer", "green");

    article.append(artHeader, artPFull, artDiv, artFooter);

    sectionLeft.append(article);
  }

  const sectLeftFooter = createDomElement("footer", "blue");

  sectionLeft.append(sectLeftFooter);

  main.append(sectionLeft);


  // section Right
  const sectionRight = createDomElement("section", "black", "right-section");
  const sectRightHeader = createDomElement("header", "blue");

  const sectRightNav = createDomElement('nav', 'blue', 'right-nav')

  sectionRight.append(sectRightHeader, sectRightNav);

  main.append(sectionRight);


  // footer
  const mainFooter = createDomElement('footer', 'black')


  body.append(mainHeader, main, mainFooter);
};

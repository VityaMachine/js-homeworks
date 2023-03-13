import { PAGE_MAIN } from "../constants.js";


const usersContainer = document.createElement('div');
usersContainer.classList.add('container');

const menuContainer = document.createElement('div');
menuContainer.classList.add('menu-container');

const menuTitle = document.createElement('h4');
const menuLink = document.createElement('a');
menuLink.href = PAGE_MAIN;
menuLink.innerText = "Back to main menu"


menuTitle.append(menuLink)
menuContainer.append(menuTitle);


const table = document.createElement('table');
const tHead = document.createElement('thead');

const tableRowsArr = ['Name', 'Username', 'Email', 'City', 'Phone', 'Company Name']
const thArr = tableRowsArr.map(el => (
    `<th class="table-head-item">${el}</th>`
))

tHead.insertAdjacentHTML('afterbegin', thArr.join(''))

table.append(tHead)

usersContainer.append(menuContainer, table)


export {
    usersContainer
}

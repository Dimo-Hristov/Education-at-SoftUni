// import * as api from './api/users.js';

const main = document.querySelector('main');

const homePage = document.getElementById('homePage');
const registerPage = document.getElementById('registerPage');
const loginPage = document.getElementById('loginPage');
const catalogPage = document.getElementById('dashboard-holder');
const detailsPage = document.getElementById('detailsPage');
const createPage = document.getElementById('createPage');
document.getElementById('views').remove();

const links = {
    '/': homePage,
    '/catalog': catalogPage,
    '/register': registerPage,
    '/login': loginPage,
    '/details': detailsPage,
    '/create': createPage,
}

window.showSection = (name) => {
    const section = links[name];
    main.replaceChildren(section)
}


import { showView } from './router.js';



const routes = {
    '/': homePage,
    '/login': loginPage,
    '/register': registerPage,
    '/create': createPage,
    '/logout': logoutPage
}


document.querySelector('nav').addEventListener('click', onNavigate)

function onNavigate(ev) {
    if (ev.target.tagName == 'A' && ev.target.href) {
        ev.preventDefault();
        const url = new URL(ev.target);
        const path = url.pathname

        const view = routes[path]
        if (typeof view == 'function') {
            view()
        }

    }
}

const homeSection = document.querySelector('#home-page');
const loginSection = document.querySelector('#form-login');
const registerSection = document.querySelector('#form-sign-up');
const createSection = document.querySelector('#add-movie');
const editSection = document.querySelector('#edit-movie');
const detailSection = document.querySelector('#movie-example');



function homePage() {
    showView(homeSection)
}

function loginPage() {
    showView(loginSection)
}

function registerPage() {
    showView(registerSection)
}

function createPage() {
    showView(createSection)
}
function editPage() {
    showView(editSection)
}
function detailPage() {
    showView(detailSection)
}

function logoutPage() {
    alert('Successful logout')
}


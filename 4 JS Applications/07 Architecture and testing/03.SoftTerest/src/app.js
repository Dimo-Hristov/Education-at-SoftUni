import { showHome } from "../views/home.js";
import { showLogin } from "../views/login.js";
import { showRegister } from "../views/register.js";
import { showCatalog } from "../views/catalog.js";
import { showDetails } from "../views/details.js";
import { showCreate } from "../views/create.js";


const main = document.querySelector('main');


document.getElementById('views').remove();

const links = {
    '/': showHome,
    '/catalog': showCatalog,
    '/register': showRegister,
    '/login': showLogin,
    '/details': showDetails,
    '/create': showCreate,
}
const context = {
    showSection
}

window.showHome = () => {

    showHome(context)
}

function showSection(section) {
    main.replaceChildren(section)
}


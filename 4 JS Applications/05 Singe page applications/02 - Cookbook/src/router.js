import { renderHome } from './pages/home.js';
import { renderLogin } from './pages/login.js';
import { renderLogout } from './pages/logout.js';
import { renderRegister } from './pages/register.js';
import { renderCreate } from './pages/create.js';
import { render404 } from './pages/404.js';

const routes = {
    '/': renderHome,
    '/login': renderLogin,
    '/register': renderRegister,
    '/create': renderCreate,
    '/logout': renderLogout,
}

export function router(path) {
    hideContent();
    
    const renderer = routes[path] || render404;
    renderer();
}

function hideContent() {
    const mainContent = document.querySelector('.main-content');
    for (const section of mainContent.children) {
        section.style.display = 'none';
    }
}
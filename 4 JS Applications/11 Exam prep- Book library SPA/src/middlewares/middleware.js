import { render } from '../../node_modules/lit-html/lit-html.js';
import { navigationView } from '../views/navigationView.js';
import { loginView } from '../views/loginView.js';
import { registerView } from '../views/registerView.js';

const headerRoot = document.getElementById('site-header');
const mainRoot = document.getElementById('site-content');

export const renderNavigation = (ctx, next) => {
    render(navigationView(ctx), headerRoot);
    next();
}

export const renderloginView = (ctx, next) => {
    render(loginView(ctx), mainRoot)
    next()
}

export const renderRegisterView = (ctx, next) => {
    render(registerView(ctx), mainRoot);
    next()
}
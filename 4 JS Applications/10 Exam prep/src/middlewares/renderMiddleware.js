import { render } from '../../node_modules/lit-html/lit-html.js';
import { navigationView } from '../views/navigationView.js';

const headerRoot = document.getElementById('header-nav');
const mainRoot = document.getElementById('main-content');

const renderLoginTemplate = (templateResult) => {
    render(templateResult, mainRoot)
}

const renderHomeTemplate = (templateResult) => {
    render(templateResult, mainRoot)
}

export const renderNavigation = (ctx, next) => {
    render(navigationView(ctx), headerRoot)
    next();
}

export const renderHome = (ctx, next) => {
    ctx.render = renderHomeTemplate
    next();
}

export const renderLogin = (ctx, next) => {
    ctx.render = renderLoginTemplate;
    next()
}
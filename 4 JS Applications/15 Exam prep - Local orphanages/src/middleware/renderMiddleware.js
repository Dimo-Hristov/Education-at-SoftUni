import { render } from '../../node_modules/lit-html/lit-html.js';
import page from '../../node_modules/page/page.mjs'
import { navigationView } from '../../views/navigationView.js';

const headerElement = document.querySelector('.header-content');
const contentElement = document.querySelector('.main-content')

const ctxRender = (templateResult) => {
    render(templateResult, contentElement)
}

export const renderNavBar = (ctx, next) => {
    render(navigationView(ctx), headerElement);
    next();
}

export const renderContentMiddleware = (ctx, next) => {
    ctx.render = ctxRender;
    next();
}

export const redirectMiddleware = (ctx, next) => {
    ctx.redirect = (path) => page.redirect(path)
    next();
}
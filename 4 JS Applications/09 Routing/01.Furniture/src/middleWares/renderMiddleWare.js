import { render } from '../../node_modules/lit-html/lit-html.js'
const root = document.querySelector('#root');
const ctxRender = (templateResult) => render(templateResult, root);

export const renderMiddleWare = (ctx, next) => {

    ctx.render = ctxRender;

    next();
}
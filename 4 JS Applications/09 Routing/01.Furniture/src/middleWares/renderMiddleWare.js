import { render } from '../../node_modules/lit-html/lit-html.js'
import { layoutView } from '../views/layoutView.js'
const root = document.querySelector('#root');
const ctxRender = (templateResult) => render(layoutView(templateResult), root);

export const renderMiddleWare = (ctx, next) => {

    ctx.render = ctxRender;

    next();
}
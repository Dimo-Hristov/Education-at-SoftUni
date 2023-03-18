import { render } from '../../node_modules/lit-html/lit-html.js';
import { navigationView } from '../views/navigationView.js';

const headerRoot = document.querySelector('.header-content')


export const renderNavBar = (ctx, next) => {
    render(navigationView(ctx), headerRoot);
    next();
}
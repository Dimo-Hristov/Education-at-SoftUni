import page from '../node_modules/page/page.mjs';
import { renderHome, renderNavigation, renderLogin } from './middlewares/renderMiddleware.js';
import { homeView } from './views/homeView.js';
import { loginView } from './views/loginView.js';

page(renderNavigation)
page(renderLogin)
page(renderHome)

page('/', homeView);
page('/login', loginView)


page.start();
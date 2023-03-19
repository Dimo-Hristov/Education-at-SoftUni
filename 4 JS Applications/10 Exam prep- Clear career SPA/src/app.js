import page from '../node_modules/page/page.mjs'
import { authMiddleware } from './middleware/authMiddleware.js';
import { renderContentMiddleware, renderNavBar } from './middleware/renderMiddleware.js';
import { homeView } from "./views/homeView.js";
import { loginView } from './views/loginView.js';

page(authMiddleware);
page(renderNavBar);
page(renderContentMiddleware);

page('/', homeView);
page('/login', loginView)


page.start();
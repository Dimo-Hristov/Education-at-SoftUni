import page from '../node_modules/page/page.mjs';
import { renderNavigation, renderloginView } from './middlewares/middleware.js';
import { loginView } from './views/loginView.js';


page(renderNavigation);
page(renderloginView);

page('/login', loginView)
page.start();
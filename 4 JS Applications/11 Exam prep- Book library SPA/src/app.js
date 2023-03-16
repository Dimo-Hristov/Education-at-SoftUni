import page from '../node_modules/page/page.mjs';
import { renderNavigation, renderloginView, renderRegisterView } from './middlewares/middleware.js';
import { loginView } from './views/loginView.js';
import { registerView } from './views/registerView.js';


page(renderNavigation);
page(renderloginView);
page(renderRegisterView)


page('/login', loginView);
page('/register', registerView)

page.start();
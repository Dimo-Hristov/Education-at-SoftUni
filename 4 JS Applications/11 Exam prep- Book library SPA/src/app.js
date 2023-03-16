import page from '../node_modules/page/page.mjs';
import { renderNavigation, renderloginView, renderRegisterView, renderDashboardView } from './middlewares/middleware.js';
import { dashboardView } from './views/dashboardView.js';
import { loginView } from './views/loginView.js';
import { registerView } from './views/registerView.js';


page(renderNavigation);
page(renderloginView);
page(renderRegisterView);
page(renderDashboardView);


page('/login', loginView);
page('/register', registerView)
page('/dashboard', dashboardView)

page.start();
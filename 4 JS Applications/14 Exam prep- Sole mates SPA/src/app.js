import page from '../node_modules/page/page.mjs'
import { authMiddleware } from './middleware/authMiddleware.js';
import { redirectMiddleware, renderContentMiddleware, renderNavBar } from './middleware/renderMiddleware.js';


page(authMiddleware);
page(renderNavBar);
page(renderContentMiddleware);
page(redirectMiddleware);

// page('/', homeView);
// page('/login', loginView);
// page('/register', registerView);
// page('/logout', logoutUser);
// page('/dashboard', dashboardView);
// page('/create', createView);
// page('/details/:id', detailsView);
// page('/edit/:id', editView);
// page('/delete/:id', deleteOffer)


page.start();
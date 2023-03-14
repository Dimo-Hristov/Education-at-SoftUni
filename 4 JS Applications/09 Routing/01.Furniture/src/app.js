import page from '../node_modules/page/page.mjs';
import { homeView } from './views/homeView.js';
import { loginView } from './views/loginView.js';


page('/', renderMiddleWare, homeView);
page('/login', loginView)

page.start();
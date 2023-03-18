import page from '../node_modules/page/page.mjs'
import { renderNavBar } from './middleware/renderMiddleware.js';
import { homeView } from "./views/homeView.js";

page(renderNavBar);

page('/', homeView);


page.start();
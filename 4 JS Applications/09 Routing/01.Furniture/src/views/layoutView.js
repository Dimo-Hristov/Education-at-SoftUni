import { html } from '../../node_modules/lit-html/lit-html.js';
import { navigationView } from './navigationView.js';


export const layoutTemplate = (content) => html`
<nav>
    ${navigationView()}
</nav>
<main>
    ${content}
</main>
`
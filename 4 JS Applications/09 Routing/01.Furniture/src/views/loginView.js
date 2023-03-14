import { html } from '../../node_modules/lit-html/lit-html.js';

const loginTemplate = () => html`
<h1>Login Page</h1>
`

export const loginView = (ctx) => {
    ctx.render(loginTemplate())
}

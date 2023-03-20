import { html } from '../../node_modules/lit-html/lit-html.js';

const userLinks = html`
<div class="user">
    <a href="/add">Add Product</a>
    <a href="/logout">Logout</a>
</div>
`;

const guestLinks = html`
<div class="guest">
    <a href="/login">Login</a>
    <a href="/register">Register</a>
</div>
`

const navTemplate = (user) => html`
<!-- Navigation -->
<a id="logo" href="/"><img id="logo-img" src="./images/logo.png" alt="" /></a>

<nav>
    <div>
        <a href="/dashboard">Products</a>
    </div>
    ${user ?
    userLinks
    : guestLinks}
</nav>
`;

export const navigationView = (ctx) => {
    const user = ctx.user
    return navTemplate(user)
}
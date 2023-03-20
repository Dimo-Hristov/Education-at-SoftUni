import { html } from '../../node_modules/lit-html/lit-html.js';

const userLinks = html`
<div class="user">
    <a href="#">Add Product</a>
    <a href="#">Logout</a>
</div>
`;

const guestLinks = html`
<div class="guest">
    <a href="#">Login</a>
    <a href="#">Register</a>
</div>
`

const navTemplate = (user) => html`
<!-- Navigation -->
<a id="logo" href="/"><img id="logo-img" src="./images/logo.png" alt="" /></a>

<nav>
    <div>
        <a href="#">Products</a>
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
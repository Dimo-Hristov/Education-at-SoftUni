import { html } from '../../node_modules/lit-html/lit-html.js';


const userLink = html`
<div class="user">
    <a href="#">Create Offer</a>
    <a href="#">Logout</a>
</div>
`;

const guestLink = html`
<div class="guest">
    <a href="#">Login</a>
    <a href="#">Register</a>
</div>
`

const navigationTemplate = (user) => html`
<a id="logo" href="/"><img id="logo-img" src="./images/logo.jpg" alt="" /></a>

<nav>
    <div>
        <a href="#">Dashboard</a>
    </div>

    ${user ?
        userLink
        : guestLink}
</nav>
`;

export const navigationView = (ctx) => {
    return navigationTemplate(ctx.user);
}
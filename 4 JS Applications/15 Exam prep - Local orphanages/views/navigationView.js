import { html } from '../node_modules/lit-html/lit-html.js';

const userLinks = html`
<!-- Logged-in users -->
<div id="user">
    <a href="/posts">My Posts</a>
    <a href="/create">Create Post</a>
    <a href="/logout">Logout</a>
</div>
`;

const guestLinks = html`
<!-- Guest users -->
<div id="guest">
    <a href="/login">Login</a>
    <a href="/register">Register</a>
</div>
`;

const navTemplate = (user) => html`
<!-- Navigation -->
<h1><a href="/">Orphelp</a></h1>

<nav>
    <a href="/">Dashboard</a>
    ${user
    ? userLinks
    : guestLinks}
</nav>
`;

export const navigationView = (ctx) => {
    return navTemplate(ctx.user)
}
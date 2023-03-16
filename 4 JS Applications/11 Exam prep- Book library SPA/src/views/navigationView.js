import { html } from "../../node_modules/lit-html/lit-html.js";

const userLink = (user) => html`
<!-- Logged-in users -->
<div id="user">
    <span>Welcome, ${user.email}</span>
    <a class="button" href="my-books">My Books</a>
    <a class="button" href="add-book">Add Book</a>
    <a class="button" href="/logout">Logout</a>
</div>
`;

const guestLink = html`
<!-- Guest users -->
<div id="guest">
    <a class="button" href="/login">Login</a>
    <a class="button" href="/register">Register</a>
</div>
`;

const navTemplate = (user) => html`
<header id="site-header">
    <!-- Navigation -->
    <nav class="navbar">
        <section class="navbar-dashboard">
            <a href="/dashboard">Dashboard</a>
            ${user
            ? userLink(user)
            : guestLink}
        </section>
    </nav>
</header>
`;

export const navigationView = (ctx) => {
    const serializedUser = JSON.parse(localStorage.getItem('user'))
    return navTemplate(serializedUser)
}

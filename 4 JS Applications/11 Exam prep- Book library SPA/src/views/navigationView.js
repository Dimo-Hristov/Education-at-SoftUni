import { getUser } from "../api/api.js";
import { html, render } from '../../node_modules/lit-html/lit-html.js';
const HeaderRoot = document.getElementById('site-header');
const mainRoot = document.getElementById('site-content')

const guestView = () => html`
<div id="guest">
    <a class="button" href="/login">Login</a>
    <a class="button" href="/register">Register</a>
</div>
`;

const userView = (user) => html`
<div id="user">
    <span>Welcome, ${user.email}</span>
    <a class="button" href="/my-books">My Books</a>
    <a class="button" href="/add-book">Add Book</a>
    <a class="button" href="/logout">Logout</a>
</div>
`


const navigationTemplate = (user) => html` 
<nav class="navbar">
    <section class="navbar-dashboard">
        <a href="/">Dashboard</a>
        ${user ?
        userView(user)
        : guestView()}
    </section>
</nav>
`


export const updateNav = (ctx, next) => {
    //attach render and page to ctx
    ctx.render = renderer.bind({}, '', mainRoot);

    //render navbar
    let user = getUser();
    render(navigationTemplate(user), HeaderRoot)
    next();
}

function renderer(templateResult, mainRoot) {
    render(templateResult, mainRoot);
}


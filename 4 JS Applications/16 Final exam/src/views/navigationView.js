import { html } from "../../node_modules/lit-html/lit-html.js";

const userLinks = html`
 <!-- Logged-in users -->
 <div class="user">
      <a href="/create">Add Fruit</a>
      <a href="/logout">Logout</a>
    </div>
`;

const guestLinks = html`
 <!-- Guest users -->
 <div class="guest">
      <a href="/login">Login</a>
      <a href="/register">Register</a>
    </div>
`;

const navTemplate = (user) => html`
  <!-- Navigation -->
  <a id="logo" href="/"><img id="logo-img" src="./images/logo.png" alt="" /></a>

  <nav>
    <div>
      <a href="/dashboard">Fruits</a>
      <a href="/search">Search</a>
    </div>

    ${user
        ? userLinks
        : guestLinks}
  </nav>
`;

export const navigationView = (ctx) => {
    return navTemplate(ctx.user)
}

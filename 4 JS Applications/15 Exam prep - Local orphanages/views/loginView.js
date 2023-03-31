import { html } from '../node_modules/lit-html/lit-html.js';
import { loginUser } from '../src/api/users.js';

const loginTemplate = (submitHandler) => html`
<section id="login-page" class="auth">
    <form id="login" @submit=${submitHandler}>
        <h1 class="title">Login</h1>

        <article class="input-group">
            <label for="login-email">Email: </label>
            <input type="email" id="login-email" name="email">
        </article>

        <article class="input-group">
            <label for="password">Password: </label>
            <input type="password" id="password" name="password">
        </article>

        <input type="submit" class="btn submit-btn" value="Log In">
    </form>
</section>
`;

export const loginView = (ctx) => {
    const submitHandler = (e) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const email = formData.get('email');
        const password = formData.get('password');

        if (email == '' || password == '') {
            alert('All field must be fullfiled');
            return;
        }

        const data = {
            email,
            password
        }

        loginUser(data, ctx)
    }

    ctx.render(loginTemplate(submitHandler))
}
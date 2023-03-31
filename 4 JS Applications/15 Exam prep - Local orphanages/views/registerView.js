import { html } from '../node_modules/lit-html/lit-html.js';
import { registerUser } from '../src/api/users.js';

const registerTemplate = (submitHanlder) => html`
<section id="register-page" class="auth">
    <form id="register" @submit=${submitHanlder}>
        <h1 class="title">Register</h1>

        <article class="input-group">
            <label for="register-email">Email: </label>
            <input type="email" id="register-email" name="email">
        </article>

        <article class="input-group">
            <label for="register-password">Password: </label>
            <input type="password" id="register-password" name="password">
        </article>

        <article class="input-group">
            <label for="repeat-password">Repeat Password: </label>
            <input type="password" id="repeat-password" name="repeatPassword">
        </article>

        <input type="submit" class="btn submit-btn" value="Register">
    </form>
</section>
`;

export const registerView = (ctx) => {
    const submitHanlder = (e) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const email = formData.get('email');
        const password = formData.get('password');
        const rePass = formData.get('repeatPassword');

        if (email == '' || password == '' || rePass == '') {
            alert('All field must be fullfiled');
            return;
        }

        if (password !== rePass) {
            alert('Passwords do not match');
            return;
        }

        const data = {
            email,
            password
        }

        registerUser(data, ctx);

    }

    ctx.render(registerTemplate(submitHanlder))
}
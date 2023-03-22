import { html } from '../../node_modules/lit-html/lit-html.js';
import { loginUser } from '../api/users.js';

const loginTemplate = (submitHanlder) => html`
    <section id="login">
        <div class="form">
            <h2>Login</h2>
            <form class="login-form" @submit=${submitHanlder}>
                <input type="text" name="email" id="email" placeholder="email" />
                <input type="password" name="password" id="password" placeholder="password" />
                <button type="submit">login</button>
                <p class="message">
                    Not registered? <a href="/register">Create an account</a>
                </p>
            </form>
        </div>
    </section>
`;

export const loginView = (ctx) => {
    const submitHandler = (e) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const email = formData.get('email').trim();
        const password = formData.get('password').trim();

        if (email == '' || password == '') {
            alert('All field must be fullfiled');
            return;
        }

        const data = {
            email,
            password
        }

        loginUser(data, ctx);
    }
    ctx.render(loginTemplate(submitHandler))
}
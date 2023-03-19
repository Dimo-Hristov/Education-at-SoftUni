import { html } from '../../node_modules/lit-html/lit-html.js';
import { registerUser } from '../api/users.js';

const registerTemplate = (submitHandler) => html`
<section id="register">
    <div class="form">
        <h2>Register</h2>
        <form class="login-form" @submit=${submitHandler}>
            <input type="text" name="email" id="register-email" placeholder="email" />
            <input type="password" name="password" id="register-password" placeholder="password" />
            <input type="password" name="re-password" id="repeat-password" placeholder="repeat password" />
            <button type="submit">register</button>
            <p class="message">Already registered? <a href="/login">Login</a></p>
        </form>
    </div>
</section>
`;

export const registerView = (ctx) => {
    const submitHanlder = (e) => {
        e.preventDefault()
        const formData = new FormData(e.currentTarget);
        const email = formData.get('email').trim();
        const password = formData.get('password').trim();
        const rePass = formData.get('re-password').trim();

        if (email == '' || password == '' || rePass == '') {
            alert('All field must be fullfiled');
            return
        }

        if (password !== rePass) {
            alert('Password\'s dont match!');
            return
        }

        const data = {
            email,
            password
        }
        registerUser(data);
    }


    ctx.render(registerTemplate(submitHanlder));
}
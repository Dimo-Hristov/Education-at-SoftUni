import { html } from "../../node_modules/lit-html/lit-html.js";
import * as authService from '../services/authService.js';


const registerTemplate = (submitHandler) => html` 
    <!-- Register Page (Only for Guest users) -->
    <section id="register">
        <div class="form">
            <h2>Register</h2>
            <form class="login-form" @submit=${submitHandler}>
                <input type="text" name="email" id="register-email" placeholder="email" />
                <input type="password" name="password" id="register-password" placeholder="password" />
                <input type="password" name="re-password" id="repeat-password" placeholder="repeat password" />
                <button type="submit">register</button>
                <p class="message">Already registered? <a href="#">Login</a></p>
            </form>
        </div>
    </section>
`;

export const registerView = (ctx) => {
    const submitHanlder = (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const email = formData.get('email');
        const password = formData.get('password');
        const rePassword = formData.get('re-password');

        if (password != rePassword) {
            alert('Passwords dont match!');
            return
        }

        authService.register(email, password)
            .then(() => {
                ctx.page.redirect('/');
            })
            .catch(error => alert(error))
    }

    ctx.render(registerTemplate(submitHanlder))
}
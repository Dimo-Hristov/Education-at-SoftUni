import { html } from "../../node_modules/lit-html/lit-html.js";
import * as userService from '../services/userService.js';

const registerTemplate = (submitHanlder) => html`
<!-- Register Page ( Only for Guest users ) -->
<section id="register-page" class="register">
    <form id="register-form" action="" method="" @submit=${submitHanlder}>
        <fieldset>
            <legend>Register Form</legend>
            <p class="field">
                <label for="email">Email</label>
                <span class="input">
                    <input type="text" name="email" id="email" placeholder="Email">
                </span>
            </p>
            <p class="field">
                <label for="password">Password</label>
                <span class="input">
                    <input type="password" name="password" id="password" placeholder="Password">
                </span>
            </p>
            <p class="field">
                <label for="repeat-pass">Repeat Password</label>
                <span class="input">
                    <input type="password" name="confirm-pass" id="repeat-pass" placeholder="Repeat Password">
                </span>
            </p>
            <input class="button submit" type="submit" value="Register">
        </fieldset>
    </form>
</section>
`;


export const registerView = (ctx) => {
    const submitHandler = (e) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);


        const email = formData.get('email').trim();
        const password = formData.get('password').trim();
        const rePassword = formData.get('confirm-pass');


        if (email == '' || password == '' || rePassword == '') {
            alert('All field must be fullfiled!')
            return
        }

        if (password !== rePassword) {
            alert('Password\'s do not match');
            return
        }

        const data = {
            email,
            password
        }


        userService.register(data)
    }


    return registerTemplate(submitHandler)
}
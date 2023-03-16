import { html } from "../../node_modules/lit-html/lit-html.js";
import * as userService from '../services/userService.js'

const loginTemplate = (submitHandler) => html`
<!-- Login Page ( Only for Guest users ) -->
<section id="login-page" class="login">
    <form id="login-form" action="" method="" @submit=${submitHandler}>
        <fieldset>
            <legend>Login Form</legend>
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
            <input class="button submit" type="submit" value="Login">
        </fieldset>
    </form>
</section>
`

export const loginView = (ctx) => {
    const submitHandler = (e) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);

        const data = {
            email: formData.get('email').trim(),
            password: formData.get('password').trim()
        }

        if (data.email == '' || data.password == '') {
            alert('All field must be fullfiled!')
            return
        }

        userService.login(data)
    }


    return loginTemplate(submitHandler)
}
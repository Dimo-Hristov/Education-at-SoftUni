import { html, render } from '../../node_modules/lit-html/lit-html.js';
import { registerUser } from '../api.js';
import { updateNav } from '../app.js';
import page from '../../node_modules/page/page.mjs'

const registerTemplate = html`
<section id="register-page" class="register">
    <form id="register-form" action="" method="" @submit=${submitHandler}>
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

`
function submitHandler(e) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const email = formData.get('email').trim();
    const password = formData.get('password').trim();
    const rePassword = formData.get('confirm-pass').trim();

    if (password !== rePassword) {
        alert('Password do not match');
        return
    }

    if (email == '' || password == '' || rePassword == '') {
        alert('All field must be fullfiled');
        return
    }

    const data = {
        email,
        password
    }

    registerUser(data)
        .then(res => {
            if (!res.ok) {
                throw new Error('Response error')
            }
            return res.json()
        })
        .then(user => {
            localStorage.setItem('user', JSON.stringify(user))
        })
        .catch(err => {
            throw new Error(err.message)
        })

    updateNav();
    page.redirect('/')

}

export const registerView = () => {
    render(registerTemplate, document.getElementById('site-content'))
}
import { html, render } from '../../node_modules/lit-html/lit-html.js';
import { loginUser } from '../api.js';
import { updateNav } from '../app.js';
import page from '../../node_modules/page/page.mjs'

const logintemplate = html`
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
function submitHandler(e) {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const email = formData.get('email').trim();
    const password = formData.get('password').trim();

    if (email == '' || password == '') {
        alert('All field must be fullfiled');
        return
    }
    const data = {
        email,
        password
    }

    loginUser(data)
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
        });
    updateNav()
    page.redirect('/')
}

export const loginView = () => {
    render(logintemplate, document.getElementById('site-content'));
}

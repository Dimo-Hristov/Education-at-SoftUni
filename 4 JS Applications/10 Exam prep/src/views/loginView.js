import { html } from "../../node_modules/lit-html/lit-html.js";


const loginTemplate = (submitHanlder) => html`
<!-- Login Page (Only for Guest users) -->
<section id="login">
    <div class="form">
        <h2>Login</h2>
        <form class="login-form" @submit=${submitHanlder}>
            <input type="text" name="email" id="email" placeholder="email" />
            <input type="password" name="password" id="password" placeholder="password" />
            <button type="submit">login</button>
            <p class="message">
                Not registered? <a href="#">Create an account</a>
            </p>
        </form>
    </div>
</section>
`

export const loginView = (ctx) => {
    const submitHanlder = (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const email = formData.get('email');
        const password = formData.get('password');
        console.log(email, password);
    }

    ctx.render(loginTemplate(submitHanlder))
}


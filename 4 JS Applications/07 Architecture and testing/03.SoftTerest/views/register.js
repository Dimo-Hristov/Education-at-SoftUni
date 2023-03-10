import { register } from "../src/api/users.js";

const section = document.getElementById('registerPage');
const form = section.querySelector('form');
form.addEventListener('submit', onSubmit);

let ctx = null;

export function showRegister(context) {
    ctx = context;
    context.showSection(section)
}

async function onSubmit(e) {
    e.preventDefault();
    const formdata = new FormData(form);

    const email = formdata.get('email');
    const password = formdata.get('password');

    await register(email, password);
    form.reset()
    ctx.updateNav();
    ctx.goTo('/');
}
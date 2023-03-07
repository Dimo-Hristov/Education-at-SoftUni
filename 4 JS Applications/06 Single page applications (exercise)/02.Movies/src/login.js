import { updateAuth } from "./auth.js";
import { showView } from "./util.js";

const homeSection = document.querySelector('#home-page');
const loginSection = document.querySelector('#form-login');
const loginBtn = loginSection.querySelector('button[type="submit"]');
loginBtn.addEventListener('click', loginUser)

export function loginPage() {
    showView(loginSection)
}

const loginForm = loginSection.querySelector('#login-form');

function loginUser(e) {
    e.preventDefault();
    const form = new FormData(loginForm)

    const email = form.get('email');
    const password = form.get('password');

    const url = 'http://localhost:3030/users/login'

    fetch(url, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({
            email,
            password
        })
    })
        .then(res => {
            if (!res.ok) {
                throw new Error('Response error')
            }
            return res.json()
        })
        .then(user => {
            localStorage.setItem('user', JSON.stringify(user))
            updateAuth();
            showView(homeSection);
        })
}





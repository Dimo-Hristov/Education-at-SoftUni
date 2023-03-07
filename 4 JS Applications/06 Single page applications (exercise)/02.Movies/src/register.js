import { showView } from "./util.js";
import { updateAuth } from "./auth.js";

const registerSection = document.querySelector('#form-sign-up');
const registerForm = registerSection.querySelector('form');
const homeSection = document.querySelector('#home-page');

const submitBtn = registerSection.querySelector('button[type="submit"]');
submitBtn.addEventListener('click', registerUser);

export function registerPage() {
    showView(registerSection)
}



function registerUser(e) {
    e.preventDefault();

    const form = new FormData(registerForm);
    const email = form.get('email').trim()
    const password = form.get('password').trim()
    const rePassword = form.get('repeatPassword').trim()

    if (!email || !password || !rePassword) {
        alert('All fields must be fulfilled')
        return;
    }

    if (password !== rePassword) {
        alert('Password\'s do not match')
        return;
    }

    if (password.length < 6) {
        alert('Password should be at least 6 characters long');
        return
    }
    const url = 'http://localhost:3030/users/register';


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
                throw new error('Server response error!')
            }
            res.json();
        })
        .then(user => {
            localStorage.setItem('user', JSON.stringify(user));
            updateAuth();
            alert('Succesful login')
        })
        .catch(error => console.log((error.message)))

    showView(homeSection)
}
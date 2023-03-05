const registerSection = document.querySelector('.register');
const registerForm = registerSection.querySelector('form');
const submitButton = registerSection.querySelector("input[type='submit']");
submitButton.addEventListener('click', e => registerPerson(e));

export function renderRegister() {
    registerSection.style.display = 'block';

}



function registerPerson(e) {
    e.preventDefault()
    const formData = new FormData(registerForm);

    const email = formData.get('email');
    const password = formData.get('password');
    const rePass = formData.get('rePass');

    if (!email || !password || !rePass) {
        alert('All fields must be fulfilled');
        return;
    }

    if (password !== rePass) {
        alert('Password\'s do not match');
        return;
    }

    let data = {
        email,
        password
    }

    const url = 'http://localhost:3030/users/register';
    fetch(url, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(data)
    })
        .then(res => {
            if (!res.ok) {
                throw new Error('server response error')
            }
            return res.json()
        })
        .then(data => alert('Successful register'))
        .catch(error => alert(error.message))
}
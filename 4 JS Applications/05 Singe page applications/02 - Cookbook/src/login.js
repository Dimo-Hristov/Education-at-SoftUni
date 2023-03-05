const loginSection = document.querySelector('.login');
const loginForm = loginSection.querySelector('form')

loginForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const email = formData.get('email');
    const password = formData.get('password');

    fetch('http://localhost:3030/users/login', {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify({
            email,
            password,
        })
    })
        .then(res => res.json())
        .then(user => {
            localStorage.setItem('user', JSON.stringify(user))
            alert('Successfully login')
        })
        .catch(error => alert(error.message))
})

export function renderLogin() {
    loginSection.style.display = 'block';

}
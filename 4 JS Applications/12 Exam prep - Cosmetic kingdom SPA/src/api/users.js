import * as api from './api.js';

const endpoints = {
    login: '/users/login',
    register: '/users/register',
    logout: '/users/logout',
}

export const loginUser = (data, ctx) => {
    api.post(endpoints.login, data)
        .then(user => {
            localStorage.setItem('user', JSON.stringify(user));
            ctx.redirect('/dashboard');
        })
        .catch(err => {
            alert(err.message)
        })

}

export const registerUser = (data, ctx) => {
    api.post(endpoints.register, data)
        .then(user => {
            localStorage.setItem('user', JSON.stringify(user));
            ctx.redirect('/dashboard');
        })
        .catch(err => {
            alert(err.message);
        });
}

export const logoutUser = (ctx) => {
    api.get(endpoints.logout)
        .then(() => {
            localStorage.removeItem('user');
            ctx.redirect('/dashboard')
        })
        .catch(err => alert(err.message))
}
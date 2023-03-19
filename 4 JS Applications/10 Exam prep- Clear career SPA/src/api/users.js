import * as api from './api.js';
import page from '../../node_modules/page/page.mjs';

const endpoints = {
    login: '/users/login',
    register: '/users/register',
    logout: '/users/logout',
}

export const loginUser = (data) => {
    api.post(endpoints.login, data)
        .then(user => {
            localStorage.setItem('user', JSON.stringify(user));
            page.redirect('/dashboard');
        })
        .catch(err => {
            alert(err.message)
        })

}

export const registerUser = (data) => {
    api.post(endpoints.register, data)
        .then(user => {
            localStorage.setItem('user', JSON.stringify(user));
            page.redirect('/dashbaord');
        })
        .catch(err => {
            throw new Error(err.message);
        });
}

export const logoutUser = () => {
    api.get(endpoints.logout)
        .then(() => {
            localStorage.removeItem('user');
            page.redirect('/dashboard')
        })
}
import { logoutUser } from "../api.js";
import page from '../../node_modules/page/page.mjs';
import { updateNav } from '../app.js';

export const logoutView = () => {
    const accesstoken = JSON.parse(localStorage.getItem('user')).accessToken;

    logoutUser(accesstoken)
        .then(res => {
            if (res.status == 204) {
                localStorage.removeItem('user');
                updateNav();
                page.redirect('/')
            } else {
                throw new Error(res.message)
            }

        })
        .catch(err => {
            throw new Error(err.message);
        })
}
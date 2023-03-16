import * as userSrvice from '../services/userService.js';

export const logoutView = (ctx) => {
    userSrvice.logout()
        .then(() => {
            ctx.page.redirect('/')
        })
}
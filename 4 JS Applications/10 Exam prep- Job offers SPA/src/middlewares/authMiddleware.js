import * as authService from '../services/authService.js'

export const authMiddleware = (ctx, next) => {
    ctx.user = authService.getUser();

    next();
}
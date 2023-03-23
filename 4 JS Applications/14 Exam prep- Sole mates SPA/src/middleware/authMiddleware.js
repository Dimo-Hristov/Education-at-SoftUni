import { getUser } from "../api/api.js";

export const authMiddleware = (ctx, next) => {
    const user = getUser();

    if (user) {
        ctx.user = user;
    } else {
        ctx.user = undefined;
    }
    next();
}
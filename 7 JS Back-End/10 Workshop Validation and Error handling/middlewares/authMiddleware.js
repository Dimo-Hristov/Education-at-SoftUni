const jwt = require('../lib/jwt');
const { SECRET } = require('../config/config');

exports.auth = async (req, res, next) => {
    const token = req.cookies['auth'];


    if (token) {
        // validate token
        try {
            const user = await jwt.verify(token, SECRET);
            req.user = user;

            res.locals.user = user;
            res.locals.isAuthenticated = true;

            next();
        } catch (err) {
            res.clearCookie('auth');
            res.redirect('/user/login');
        }
    } else {
        next();
    }
}

exports.isAuth = (req, res, next) => {
    if (!req.user) {
        return res.redirect('/user/login');
    }

    next();
}

exports.isGuest = (req, res, next) => {
    if (req.user) {
        res.redirect('/');
    }

    next();
}
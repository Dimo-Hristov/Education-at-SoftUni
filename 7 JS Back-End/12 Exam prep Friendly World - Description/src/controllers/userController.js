const router = require('express').Router();
const userService = require('../services/userService');
const { extractErrorMsgs } = require('../utils/errorHandler')

router.get('/login', (req, res) => {
    res.render('user/login');
});

router.post('/login', async (req, res) => {
    const { email, password } = req.body;

    try {
        const token = await userService.login(email, password);

        res.cookie('token', token, { httpOnly: true })
        res.redirect('/');

    } catch (error) {
        const errorMessages = extractErrorMsgs(error);
        res.status(404).render('user/login', { errorMessages });
    }


});

router.get('/register', (req, res) => {
    res.render('user/register');
});


router.post('/register', async (req, res) => {
    const {
        email,
        password,
        rePassword,
    } = req.body;

    try {
        await userService.register(
            {
                email,
                password,
                rePassword,
            })

        res.redirect('/');

    } catch (error) {
        const errorMessages = extractErrorMsgs(error);

        // If email already exists in database replace the error message with custom message
        if (error.code === 11000 && error.keyPattern && error.keyPattern.email) {
            errorMessages.splice(0, 1, 'Email already exists')
        }

        res.status(404).render('user/register', { errorMessages });

    }


});

router.get('/logout', (req, res) => {
    res.clearCookie('token');
    res.redirect('/')
});


module.exports = router;
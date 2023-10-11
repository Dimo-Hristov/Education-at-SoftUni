const router = require('express').Router();
const userManager = require('../managers/userManager');


router.get('/register', (req, res) => {
    res.render('user/register')
});

router.post('/register', async (req, res) => {
    const { username, password, repeatPassword } = req.body;

    await userManager.register({ username, password, repeatPassword });

    res.redirect('/user/login');
});

//  TODO validate if user exists

router.get('/login', (req, res) => {
    res.render('user/login');
});

router.post('/login', async (req, res) => {
    const { username, password } = req.body;

    const token = await userManager.login(username, password);

    res.cookie('auth', token, { httpOnly: true });

    res.redirect('/');
});

router.get('/logout', (req, res) => {
    res.clearCookie('auth');
    res.redirect('/')
})

module.exports = router;
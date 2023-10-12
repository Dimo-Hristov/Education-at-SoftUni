const router = require('express').Router();
const userManager = require('../managers/userManager');
const { isAuth, isGuest } = require('../middlewares/authMiddleware');


router.get('/register', isGuest, (req, res) => {
    res.render('user/register');
});

router.post('/register', isGuest, async (req, res) => {
    const { username, password, repeatPassword } = req.body;


    try {
        await userManager.register({ username, password, repeatPassword });
        res.redirect('/user/login');
    } catch (err) {
        const firstErrorMessage = Object.values(err.errors)[0].message
        res.status(404).render('user/register', { errorMessage: firstErrorMessage });
    }

});


router.get('/login', isGuest, (req, res) => {
    res.render('user/login');
});

router.post('/login', isGuest, async (req, res) => {
    const { username, password } = req.body;

    const token = await userManager.login(username, password);

    res.cookie('auth', token, { httpOnly: true });

    res.redirect('/');
});

router.get('/logout', isAuth, (req, res) => {
    res.clearCookie('auth');
    res.redirect('/')
})

module.exports = router;
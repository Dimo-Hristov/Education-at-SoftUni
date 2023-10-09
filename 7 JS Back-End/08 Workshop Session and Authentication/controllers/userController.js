const router = require('express').Router();
const userManager = require('../managers/userManager')

router.get('/register', (req, res) => {
    res.render('user/register')
});

router.post('/register', async (req, res) => {
    const { username, password, repeatPassword } = req.body;

    await userManager.register({ username, password, repeatPassword });

    res.redirect('/user/login');
})

module.exports = router;
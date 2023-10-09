const router = require('express').Router();

router.get('/register', (req, res) => {
    res.render('user/register')
});

router.post('/register', (req, res) => {
    const { username, password, repeatPassword } = req.body;

    console.log(username, password, repeatPassword);

    res.redirect('/user/login');
})

module.exports = router;
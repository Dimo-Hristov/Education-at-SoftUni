const router = require('express').Router();

router.get('/login', (req, res) => {
    res.render('user/login');
});

router.post('/login', (req, res) => {
    const { email, password } = req.body;
    console.log(email + password);


    res.redirect('/')

});

router.get('/register', (req, res) => {
    res.render('user/register');
});


router.post('/register', (req, res) => {
    const {
        firstName,
        lastName,
        email,
        password,
        rePassword,
    } = req.body

    res.redirect('/users/login')
});


module.exports = router;
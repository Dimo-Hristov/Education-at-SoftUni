const router = require('express').Router();

router.get('/', (req, res) => {
    res.render('home');
});

router.get('/dashboard', (req, res) => {
    res.render('dashboard')
})

router.get('/404', (req, res) => {
    res.render('404');
})

module.exports = router;
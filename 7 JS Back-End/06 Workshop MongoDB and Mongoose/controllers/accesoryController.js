const router = require('express').Router();

router.get('/create', (req, res) => {
    res.render('accesory/create');
});

router.post('/create', (req, res) => {
    const body = req.body;

    console.log(body);

    // TODO: add accesory data to database

    res.redirect('/')
})

module.exports = router;
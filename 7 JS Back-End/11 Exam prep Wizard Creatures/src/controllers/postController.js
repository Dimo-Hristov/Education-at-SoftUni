const router = require('express').Router();


router.get('/create', (req, res) => {
    res.render('post/create')
});

router.get('/all-posts', (req, res) => {
    res.render('post/all-posts')
});

router.get('/edit', (req, res) => {
    res.render('post/edit')
});

router.get('/details', (req, res) => {
    res.render('post/details')
});

module.exports = router;
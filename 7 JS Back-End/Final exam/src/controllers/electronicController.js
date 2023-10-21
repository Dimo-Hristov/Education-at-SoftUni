const router = require('express').Router();

router.get('/create', (req, res) => {
    res.render('electronic/create')
    console.log(' ola');
});


module.exports = router;
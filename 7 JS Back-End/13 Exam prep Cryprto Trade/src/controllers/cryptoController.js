const router = require('express').Router();

router.get('/create', (req, res) => {
    res.render('crypto/create')
})






module.exports = router
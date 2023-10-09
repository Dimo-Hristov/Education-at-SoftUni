const router = require('express').Router();

router.get('/register', () => {
    res.render('/register')
})

module.exports = router
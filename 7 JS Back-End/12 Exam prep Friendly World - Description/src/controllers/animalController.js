const router = require('express').Router();

router.get('/create', (req, res) => {
    try {
        res.render('animal/create')
    } catch (error) {

    }
});


module.exports = router;
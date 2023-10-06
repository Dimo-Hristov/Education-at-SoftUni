const router = require('express').Router();

router.get('/create', (req, res) => {
    res.render('accesory/create');
});

module.exports = router;
const router = require('express').Router();

router.get('/create', (req, res) => {
    res.render('crypto/create')
});

router.post('/create', (req, res) => {
    const {
        name,
        image,
        price,
        description,
        paymentMethod,
    } = req.body;

    console.log(name,
        image,
        price,
        description,
        paymentMethod,);
})






module.exports = router
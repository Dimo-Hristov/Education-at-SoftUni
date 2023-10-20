const router = require('express').Router();
const cryptoService = require('../services/cryptoService');
const { extractErrorMsgs } = require('../utils/errorHandler');

router.get('/create', (req, res) => {
    res.render('crypto/create')
});

router.post('/create', async (req, res) => {



    try {
        const owner = req.user._id

        const {
            name,
            image,
            price,
            description,
            paymentMethod,
        } = req.body;

        await cryptoService.createOffer({
            name,
            image,
            price,
            description,
            paymentMethod,
            owner,
        });

        res.redirect('/crypto/catalog');

    } catch (error) {
        const cryptoData = req.body;

        const errorMessages = extractErrorMsgs(error);
        res.status(404).render('crypto/create', { errorMessages, cryptoData });

    }
});

router.get('/catalog', (req, res) => {
    res.render('crypto/catalog')
})






module.exports = router
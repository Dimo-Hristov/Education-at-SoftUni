const router = require('express').Router();
const electronicService = require('../services/electronicService');
const { extractErrorMsgs } = require('../utils/errorHandler')

router.get('/create', (req, res) => {
    res.render('electronic/create')
});

router.post('/create', async (req, res) => {
    const eletronicData = req.body;

    try {
        const ownerId = req.user._id;
        eletronicData['owner'] = ownerId;
        await electronicService.addOffer(eletronicData);
        res.redirect('/eletronics/catalog')

    } catch (error) {
        const errorMessages = extractErrorMsgs(error);
        res.status(404).render('user/login', { errorMessages });
    }
});

router.get('/catalog', async (req, res) => {

    try {
        const offers = await electronicService.getAllOffers().lean();
        const isEmpty = offers.length < 1;

        res.render('electronic/catalog', { offers, isEmpty })

    } catch (error) {
        const errorMessages = extractErrorMsgs(error);
        res.status(404).render('user/login', { errorMessages });
    }
});

router.get('/:offerId/details', async (req, res) => {

    try {
        const offerId = req.params.offerId;
        const offer = await electronicService.getOneOffer(offerId).lean()

        res.render('electronic/details', { offer });

    } catch (error) {
        const errorMessages = extractErrorMsgs(error);
        res.status(404).render('user/login', { errorMessages });
    }

});


module.exports = router;
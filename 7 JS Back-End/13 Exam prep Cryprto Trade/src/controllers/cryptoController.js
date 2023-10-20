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

router.get('/catalog', async (req, res) => {
    try {
        const offers = await cryptoService.getAllOffers().lean();
        const isEmpty = offers.length < 1;

        res.render('crypto/catalog', { offers, isEmpty });

    } catch (error) {
        const errorMessages = extractErrorMsgs(error);
        res.status(404).render('crypto/catalog', { errorMessages });
    }
});

router.get('/:offerId/details', async (req, res) => {

    try {
        const currentUserId = req.user?._id.toString()
        const offerId = req.params.offerId;
        const post = await cryptoService.getOne(offerId).lean();
        const isOwner = currentUserId === post.owner.toString();
        const hasBought = post.customers.some(x => x.toString() === currentUserId);


        res.render('crypto/details', { post, isOwner, hasBought });

    } catch (error) {
        const errorMessages = extractErrorMsgs(error);
        res.status(404).render('crypto/catalog', { errorMessages });
    }
});

router.get('/:offerId/buy', async (req, res) => {


    try {
        const userId = req.user._id;
        const offerId = req.params.offerId;

        await cryptoService.buyCrypto(userId, offerId);
        res.redirect(`/crypto/${offerId}/details`);

    } catch (error) {
        const errorMessages = extractErrorMsgs(error);
        res.status(404).render('crypto/catalog', { errorMessages });
    }
});

router.get('/:offerId/delete', async (req, res) => {

    try {
        const offerId = req.params.offerId;

        await cryptoService.deleteOffer(offerId);
        res.redirect('/crypto/catalog');

    } catch (error) {
        const errorMessages = extractErrorMsgs(error);
        res.status(404).render('crypto/catalog', { errorMessages });
    }
})




module.exports = router;
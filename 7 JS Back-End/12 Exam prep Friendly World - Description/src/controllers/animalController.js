const router = require('express').Router();
const { extractErrorMsgs } = require('../utils/errorHandler');
const animalService = require('../services/animalService');

router.get('/create', (req, res) => {

    try {
        res.render('animal/create');
    } catch (error) {
        const errorMessages = extractErrorMsgs(error);
        res.status(404).render('user/login', { errorMessages });
    }
});

router.post('/create', async (req, res) => {
    const owner = req.user._id
    const animalData = { ...req.body, owner }

    try {


        await animalService.create(animalData);

        res.redirect('/dashboard');

    } catch (error) {
        const errorMessages = extractErrorMsgs(error);
        res.status(404).render('animal/create', { errorMessages, animalData });

    }
});

router.get('/:animalId/details', async (req, res) => {

    const animalId = req.params.animalId;

    try {
        const animal = await animalService.getOne(animalId).lean();
        const isOwner = animal.owner.toString() === req.user?._id;

        res.render('animal/details', { animal, isOwner });

    } catch (error) {
        const errorMessages = extractErrorMsgs(error);
        res.status(404).render('dashboard', { errorMessages });
    }
})


module.exports = router;
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
        const userId = req.user?._id;

        const animal = await animalService.getOne(animalId).lean();
        const isOwner = animal.owner.toString() === userId;
        const hasVoted = animal.donations.some(x => x.user.toString() === userId)


        res.render('animal/details', { animal, isOwner, hasVoted });

    } catch (error) {
        const errorMessages = extractErrorMsgs(error);
        res.status(404).render('/dashbaord', { errorMessages });
    }
});

router.get('/:animalId/donate', async (req, res) => {
    const animalId = req.params.animalId;
    const userId = req.user?._id

    try {
        await animalService.donate(animalId, userId);

        res.redirect(`/animals/${animalId}/details`);

    } catch (error) {
        const errorMessages = extractErrorMsgs(error);
        res.status(404).render('/dashbaord', { errorMessages });
    }

});

router.get('/:animalId/delete', async (req, res) => {
    const animalId = req.params.animalId;

    try {
        await animalService.deleteOne(animalId);

        res.redirect('/dashboard');
    } catch (error) {
        const errorMessages = extractErrorMsgs(error);
        res.status(404).render('dashboard', { errorMessages });
    }
});

router.get('/:animalId/edit', async (req, res) => {

    try {
        const animal = await animalService.getOne(req.params.animalId).lean();

        res.render('animal/edit', { animal });

    } catch (error) {
        const errorMessages = extractErrorMsgs(error);
        res.status(404).render('animal/edit', { errorMessages });
    }
});

router.post('/:animalId/edit', async (req, res) => {
    const editedData = req.body;
    const animalId = req.params.animalId;

    try {
        await animalService.updateOne(animalId, editedData);

        res.redirect(`/animals/${animalId}/details`)

    } catch (error) {
        const errorMessages = extractErrorMsgs(error);
        res.status(404).render('animal/edit', { errorMessages, animal: editedData });
    }
})


module.exports = router;
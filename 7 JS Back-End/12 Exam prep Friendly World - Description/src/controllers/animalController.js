const router = require('express').Router();
const { extractErrorMsgs } = require('../utils/errorHandler');
const animalService = require('../services/animalService');
const { isGuest, isAuth } = require('../middlewares/authMiddleare');

router.get('/create', isAuth, (req, res) => {

    try {
        res.render('animal/create');
    } catch (error) {
        const errorMessages = extractErrorMsgs(error);
        res.status(404).render('user/login', { errorMessages });
    }
});

router.post('/create', isAuth, async (req, res) => {
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

router.get('/:animalId/donate', isAuth, async (req, res) => {
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
    try {
        const animalId = req.params.animalId;
        const userId = req.user?._id;

        const animal = await animalService.getOne(animalId).lean();
        const isOwner = animal.owner.toString() === userId;


        if (isOwner) {
            await animalService.deleteOne(animalId);

            res.redirect('/dashboard');
        } else {
            throw new Error('You dont have permisions to delete this page')
        }

    } catch (error) {
        const errorMessages = extractErrorMsgs(error);
        res.status(404).render('dashboard', { errorMessages });
    }
});

router.get('/:animalId/edit', async (req, res) => {
    try {
        const animalId = req.params.animalId;
        const userId = req.user?._id;

        const animal = await animalService.getOne(animalId).lean();
        const isOwner = animal.owner.toString() === userId;

        if (isOwner) {
            res.render('animal/edit', { animal });
        } else {
            throw new Error('You dont have permisions to edit this page')
        }



    } catch (error) {
        const errorMessages = extractErrorMsgs(error);
        res.status(404).render('animal/edit', { errorMessages });
    }
});

router.post('/:animalId/edit', async (req, res) => {
    try {

        const animalId = req.params.animalId;
        const userId = req.user?._id;

        const animal = await animalService.getOne(animalId).lean();
        const isOwner = animal.owner.toString() === userId;

        const editedData = req.body;

        if (isOwner) {
            await animalService.updateOne(animalId, editedData);
            res.redirect(`/animals/${animalId}/details`)
        } else {
            throw new Error('You dont have permisions to update this page')
        }



    } catch (error) {
        const errorMessages = extractErrorMsgs(error);
        res.status(404).render('animal/edit', { errorMessages, animal: editedData });
    }
})


module.exports = router;
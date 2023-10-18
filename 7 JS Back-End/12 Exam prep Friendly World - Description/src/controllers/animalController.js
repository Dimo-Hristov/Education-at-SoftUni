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
})


module.exports = router;
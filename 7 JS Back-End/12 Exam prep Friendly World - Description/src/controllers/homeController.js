const router = require('express').Router();
const animalService = require('../services/animalService');
const { extractErrorMsgs } = require('../utils/errorHandler');

router.get('/', async (req, res) => {

    try {

        const animalsList =
            await animalService.getAll().lean();

        const lastThreeAnimals = animalsList.reverse().slice(0, 3)


        const isEmpty = lastThreeAnimals.length < 1

        res.render('home', { lastThreeAnimals, isEmpty });

    } catch (error) {
        const errorMessages = extractErrorMsgs(error);
        res.status(404).render('home', { errorMessages });
    }

});

router.get('/dashboard', async (req, res) => {

    try {
        const listOfAnimals = await animalService.getAll().lean();
        const isEmpty = listOfAnimals.length < 1;

        res.render('dashboard', { listOfAnimals, isEmpty });

    } catch (error) {
        const errorMessages = extractErrorMsgs(error);
        res.status(404).render('dashboard', { errorMessages });
    }
})

router.get('/404', (req, res) => {
    res.render('404');
})

module.exports = router;
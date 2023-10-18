const router = require('express').Router();
const { extractErrorMsgs } = require('../utils/errorHandler')

router.get('/create', (req, res) => {

    try {
        res.render('animal/create');
    } catch (error) {
        const errorMessages = extractErrorMsgs(error);
        res.status(404).render('user/login', { errorMessages });
    }
});

router.post('/create', async (req, res) => {

    try {
        const animal = req.body;
        await animalService.create(animal)

    } catch (error) {


    }
})


module.exports = router;
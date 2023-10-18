const router = require('express').Router();
const homeController = require('./controllers/homeController');
const userControler = require('./controllers/userController');
const animalControler = require('./controllers/animalController');


router.use(homeController);
router.use('/users', userControler);
router.use('/animals', animalControler)

router.get('*', (req, res) => {
    res.redirect('/404')
})


module.exports = router;
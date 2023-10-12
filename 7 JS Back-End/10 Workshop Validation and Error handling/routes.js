const router = require('express').Router();

const homeController = require('./controllers/homeController');
const cubeController = require('./controllers/cubeController');
const accesorryController = require('./controllers/accesoryController');
const userController = require('./controllers/userController');


router.use(homeController);
router.use('/cubes', cubeController);
router.use('/accesories', accesorryController);
router.use('/user', userController)
router.get('*', (req, res) => {
    res.redirect('/404')
});

module.exports = router;
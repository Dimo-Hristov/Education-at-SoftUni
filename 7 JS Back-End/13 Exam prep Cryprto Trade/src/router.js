const router = require('express').Router();
const homeController = require('./controllers/homeController');
const userControler = require('./controllers/userController');
const cryptoController = require('./controllers/cryptoController');

// TODO add endpoints with controllers here...

router.use(homeController);
router.use('/users', userControler);
router.use('/crypto', cryptoController)

router.get('*', (req, res) => {
    res.redirect('/404')
})


module.exports = router;
const router = require('express').Router();
const homeController = require('./controllers/homeController');
const userControler = require('./controllers/userController');
const animalControler = require('./controllers/animalController');

// TODO add endpoints with controllers here...

router.use(homeController);
router.use('/users', userControler);
router.use('/animals', animalControler)

// router.get('*', (req, res) => {
//     res.redirect('/404')
// })


module.exports = router;
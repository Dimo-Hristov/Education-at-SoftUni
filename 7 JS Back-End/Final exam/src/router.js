const router = require('express').Router();
const homeController = require('./controllers/homeController');
const userController = require('./controllers/userController');
const electronicController = require('./controllers/electronicController');

// TODO add endpoints with controllers here...

router.use(homeController);
router.use('/users', userController);
router.use('/electronics', electronicController)

// router.get('*', (req, res) => {
//     res.redirect('/404')
// })


module.exports = router;
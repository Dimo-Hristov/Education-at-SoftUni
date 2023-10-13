const router = require('express').Router();
const homeController = require('./controllers/homeController');
const userControler = require('./controllers/userController')

// TODO add endpoints with controllers here...

router.use(homeController);
router.use('/users', userControler)


module.exports = router;
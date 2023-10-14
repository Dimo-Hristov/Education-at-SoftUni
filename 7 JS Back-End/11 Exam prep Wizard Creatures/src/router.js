const router = require('express').Router();
const homeController = require('./controllers/homeController');
const userControler = require('./controllers/userController');
const postController = require('./controllers/postController');

// TODO add endpoints with controllers here...

router.use(homeController);
router.use('/users', userControler);
router.use('/posts', postController)

router.get('*', (req, res) => {
    res.redirect('/404')
})


module.exports = router;
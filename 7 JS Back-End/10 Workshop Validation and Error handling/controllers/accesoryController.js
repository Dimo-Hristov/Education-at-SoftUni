const router = require('express').Router();
const { isAuth } = require('../middlewares/authMiddleware');
const accesoryManager = require('../managers/accesoryManager')

router.get('/create', isAuth, (req, res) => {
    res.render('accesory/create');
});

router.post('/create', isAuth, async (req, res) => {
    const { name, description, imageUrl } = req.body;

    await accesoryManager.create({ name, description, imageUrl });

    res.redirect('/')
});

module.exports = router;
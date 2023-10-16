const router = require('express').Router();
const userService = require('../services/userService');
const postService = require('../services/postService');
const { extractErrorMsgs } = require('../utils/errorHandler');
const { isAuth, isGuest } = require('../middlewares/authMiddleare');

router.get('/login', isGuest, (req, res) => {
    res.render('user/login');
});

router.post('/login', isGuest, async (req, res) => {
    const { email, password } = req.body;

    try {
        const token = await userService.login(email, password);

        res.cookie('token', token, { httpOnly: true })
        res.redirect('/');

    } catch (error) {
        const errorMessages = extractErrorMsgs(error);
        res.status(404).render('user/login', { errorMessages });
    }


});

router.get('/register', isGuest, (req, res) => {
    res.render('user/register');
});


router.post('/register', isGuest, async (req, res) => {
    const userData = req.body;

    try {
        await userService.register(userData);

        const token = await userService.login(email, password);
        res.cookie('token', token, { httpOnly: true });

        res.redirect('/');

    } catch (error) {
        const errorMessages = extractErrorMsgs(error);

        // If email already exists in database replace the error message with custom message using array.splice()
        if (error.code === 11000 && error.keyPattern && error.keyPattern.email) {
            errorMessages.splice(0, 1, 'Email already exists')
        }

        res.status(404).render('user/register', { errorMessages });

    }
});

router.get('/profile', isAuth, async (req, res) => {


    try {
        const userId = req.user?._id
        let myPosts = await postService.findMyPosts(userId)
        const isEmpty = myPosts.length < 1


        myPosts = myPosts.map(post => {
            const plainPost = post.toObject();
            return {
                ...plainPost,
                votesCount: plainPost.votes.length,
            };
        });

        console.log(myPosts);


        res.render('user/profile', { myPosts, isEmpty });

    } catch (error) {

        const errorMessages = extractErrorMsgs(error);
        res.status(404).render('user/profile', { errorMessages });
    }
})

router.get('/logout', isAuth, (req, res) => {
    res.clearCookie('token');
    res.redirect('/')
});


module.exports = router;
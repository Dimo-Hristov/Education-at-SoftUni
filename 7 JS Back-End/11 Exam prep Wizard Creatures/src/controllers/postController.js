const router = require('express').Router();
const postService = require('../services/postService');
const { extractErrorMsgs } = require('../utils/errorHandler')


router.get('/create', (req, res) => {
    res.render('post/create')
});

router.post('/create', async (req, res) => {
    const creatureData = {
        name,
        species,
        skinColor,
        eyeColor,
        image,
        description,
    } = req.body

    creatureData['owner'] = req.user._id;



    try {
        await postService.addCreature(creatureData);
        res.redirect('/posts/all-posts');
    } catch (error) {
        const errorMessages = extractErrorMsgs(error);
        res.status(404).render('post/create', { errorMessages });
    }

})

router.get('/all-posts', async (req, res) => {

    try {

        const allPosts = await postService.getAllPosts().lean();
        const isEmpty = allPosts.length === 0

        res.render('post/all-posts', { allPosts, isEmpty });

    } catch (error) {

        const errorMessages = extractErrorMsgs(error);
        res.status(404).render('post/all-posts', { errorMessages });
    }

});

router.get('/:postId/details', async (req, res) => {


    try {
        const postId = req.params.postId;
        const post = await postService.getOne(postId).lean();

        res.render('post/details', { post });

    } catch (error) {

        const errorMessages = extractErrorMsgs(error);
        res.status(404).render('post/all-posts', { errorMessages });
    }


});

router.get('/edit', (req, res) => {
    res.render('post/edit')
});

router.get('/details', (req, res) => {
    res.render('post/details')
});

module.exports = router;
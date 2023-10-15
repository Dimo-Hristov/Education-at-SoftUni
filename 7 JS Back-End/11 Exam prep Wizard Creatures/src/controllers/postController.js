const router = require('express').Router();
const postService = require('../services/postService');
const userService = require('../services/userService');
const { extractErrorMsgs } = require('../utils/errorHandler');
const { isAuth } = require('../middlewares/authMiddleare')


router.get('/create', isAuth, (req, res) => {
    res.render('post/create')
});

router.post('/create', isAuth, async (req, res) => {
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
        const currentUserId = req.user?._id;
        const postId = req.params.postId;
        const post = await postService.getOne(postId).lean();
        const postAuthor = await userService.getUserById(post.owner).lean();


        const isAuthor = currentUserId?.toString() === post.owner.toString();
        const hasVoted = post.votes.some(x => x.user?.toString() === currentUserId?.toString());


        const votesCount = post.votes.length;
        const isVoted = votesCount > 0;
        const votedUsers = [];

        for (const vote of post.votes) {
            const user = await userService.getUserById(vote.user).lean();
            votedUsers.push(user)
        }

        res.render('post/details', { post, isAuthor, postAuthor, hasVoted, votesCount, isVoted, votedUsers });

    } catch (error) {

        const errorMessages = extractErrorMsgs(error);
        res.status(404).render('post/all-posts', { errorMessages });
    }


});

router.get('/:postId/vote', isAuth, async (req, res) => {


    try {
        const userId = req.user?._id;
        const postId = req.params.postId;

        await postService.vote(postId, userId);
        res.redirect(`/posts/${postId}/details`);

    } catch (error) {
        const errorMessages = extractErrorMsgs(error);
        res.status(404).redirect(`/posts/${postId}/details`, { errorMessages });
    }
})

router.get('/:postId/delete', isAuth, async (req, res) => {

    try {
        const postId = req.params.postId
        await postService.deleteCreature(postId);

        res.redirect('/posts/all-posts')

    } catch (error) {
        const errorMessages = extractErrorMsgs(error);
        res.status(404).redirect(`/posts/${postId}/details`, { errorMessages });
    }

})

router.get('/:postId/edit', isAuth, async (req, res) => {

    try {
        const postId = req.params.postId
        const post = await postService.getOne(postId).lean();

        res.render('post/edit', { post });

    } catch (error) {

        const errorMessages = extractErrorMsgs(error);
        res.status(404).render(`post/edit`, { errorMessages });

    }
});

router.post('/:postId/edit', isAuth, async (req, res) => {
    const postId = req.params.postId;
    const editedPost = req.body

    try {

        await postService.updateCreature(postId, editedPost);
        res.redirect(`/posts/${postId}/details`)

    } catch (error) {
        const errorMessages = extractErrorMsgs(error);
        res.status(404).render(`post/edit`, { errorMessages, post: editedPost });
    }
});

module.exports = router;
const router = require('express').Router();
const cubeManager = require('../managers/cubeManager');
const accesoryManager = require('../managers/accesoryManager');

router.get('/create', (req, res) => {
    res.render('create')
});

router.post('/create', async (req, res) => {
    const { name,
        description,
        imageUrl,
        difficultyLevel, } = req.body;

    await cubeManager.create(
        {
            name,
            description,
            imageUrl,
            difficultyLevel: Number(difficultyLevel),
        }
    );


    res.redirect('/')
});

router.get('/:cubeId/details', async (req, res) => {
    const cubeId = req.params.cubeId;
    const cube = await cubeManager.find(cubeId).lean()

    console.log(cube);

    if (!cube) {
        return res.redirect('404')
    }

    res.render('details', { cube });
});

router.get('/:cubeId/attach-accesory', async (req, res) => {
    const cube = await cubeManager.find(req.params.cubeId).lean();
    const accesories = await accesoryManager.getAll().lean();

    const hasAccesories = accesories.length > 0

    res.render('accesory/attach', { cube, accesories, hasAccesories })
});

router.post('/:cubeId/attach-accesory', async (req, res) => {
    const { accesory } = req.body;
    const cubeId = req.params.cubeId;

    await cubeManager.attachAccesory(cubeId, accesory);

    res.redirect(`/cubes/${cubeId}/attach-accesory`)
})


module.exports = router
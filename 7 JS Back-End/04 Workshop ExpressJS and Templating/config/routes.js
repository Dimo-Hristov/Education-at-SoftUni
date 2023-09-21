// TODO: Require Controllers...

module.exports = (app) => {
    app.get('/', (req, res) => {
        res.render('index', { layout: false })
    })

    app.get('/about', (req, res) => {
        res.render('about', { layout: false })
    });

    app.get('/create', (req, res) => {
        res.render('create', { layout: false })
    })

    app.get('/details/:id', (req, res) => {
        console.log(req.params);
        res.render('details', { layout: false })
    })

    app.get('*', (req, res) => {
        res.render('404', { layout: false })
    })
};
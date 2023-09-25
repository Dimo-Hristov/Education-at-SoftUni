// TODO: Require Controllers...

module.exports = (app) => {



    app.get('/create', (req, res) => {
        res.render('create')
    })

    app.get('/details/:id', (req, res) => {
        console.log(req.params);
        res.render('details')
    })

    app.get('*', (req, res) => {
        res.render('404')
    })
};
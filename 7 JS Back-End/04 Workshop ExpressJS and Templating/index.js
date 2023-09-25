const env = process.env.NODE_ENV || 'development';
const homeController = require('./controllers/homeController');
const cubeController = require('./controllers/cubeController')

const config = require('./config/config')[env];
const app = require('express')();

require('./config/express')(app);

app.use(homeController);
app.use('/cubes', cubeController);
app.get('*', (req, res) => {
    res.redirect('/404')
})

app.listen(config.port, console.log(`Listening on port ${config.port}! Now its up to you...`));
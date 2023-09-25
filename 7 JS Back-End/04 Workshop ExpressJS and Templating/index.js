const env = process.env.NODE_ENV || 'development';
const homeController = require('./controllers/homeController')

const config = require('./config/config')[env];
const app = require('express')();

require('./config/express')(app);
require('./config/routes')(app);

app.use(homeController)

app.listen(config.port, console.log(`Listening on port ${config.port}! Now its up to you...`));
const express = require('express');
const handlebars = require('express-handlebars');
const bodyParser = require('body-parser');
const path = require('path');
const cookieParser = require('cookie-parser');

module.exports = (app) => {

    //TODO: Setup the view engine
    app.engine('hbs', handlebars.engine({ extname: 'hbs' }));
    app.set('view engine', 'hbs');
    app.set('views', path.join(__dirname, '..', 'views'));


    //TODO: Setup the body parser
    const bodyParser = express.urlencoded({ extended: false })
    app.use(bodyParser);

    // TODO: Setup cookier-parser
    app.use(cookieParser());

    //TODO: Setup the static files
    app.use(express.static('./04 Workshop ExpressJS and Templating/static'));

};
const express = require("express");
const handlebars = require('express-handlebars')
const path = require("path");
const app = express();


//add handlebars to express
app.engine('hbs', handlebars.engine({ extname: 'hbs' }));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));


//Add third party middleware
const bodyParser = express.urlencoded({ extended: false });
app.use(bodyParser);


// static files directory middleware
app.use(express.static('./03 ExpressJS and Templating/public'));

// Middlewares
app.use((req, res, next) => {
    console.log("Middleware 1");
    next();
});

app.use((req, res, next) => {
    console.log(`HTTP Request ${req.method}: ${req.path}`);
    next();
});

//Express Router - Actions

app.get("/", (req, res) => {
    // res.send("Hello from express");
    res.render('home');
});

app.get('/about', (req, res) => {
    res.render('about')
})

app.get("/cats", (req, res) => {
    res.render('cats')
});

app.get("/cats/:catId", (req, res) => {
    const catId = Number(req.params.catId);
    if (!catId) {
        res.status(404).send("Cannot find cat");
        return;
    }
    console.log(req.params);
    res.send(`Request with parameter = ${catId} `);
});

app.post("/cats", (req, res) => {
    console.log(req.body);
    res.status(201).send("Cat hard been created");
});

app.get("/download", (req, res) => {
    // download the file
    // res.download('./03 ExpressJS and Templating/manual.jpg');
    // if we want to attack more responses use .attachment, need to end()
    // res.attachment('./03 ExpressJS and Templating/manual.jpg');
    // res.end();
    //open the file in the browser tab
    // res.sendFile(path.resolve(__dirname, 'manual.jpg'))
});

app.get("/old-route", (req, res) => {
    res.redirect("/cats");
});

// not found request should be always in the end.
app.get("/*", (req, res) => {
    res.status(404).send("Not found!");
});

app.listen(5000, () => console.log("Server is listening on port 5000..."));

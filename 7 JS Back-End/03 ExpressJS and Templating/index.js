const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('Hello from express');
});

app.get('/cats', (req, res) => {
    res.send('This page contains cats')
});

app.get('/cats/:catId', (req, res) => {
    const catId = Number(req.params.catId)
    if (!catId) {
        res.status(404).send('Cannot find cat');
        return
    }
    console.log(req.params);
    res.send(`Request with parameter = ${catId}`)
});

app.post('/cats', (req, res) => {
    res.status(201).send('Cat hard been created')
});

app.get('/download', (req, res) => {
    // download the file
    res.download('./03 ExpressJS and Templating/manual.jpg');

    // if we want to attack more responses use .attachment, need to end()
    // res.attachment('./03 ExpressJS and Templating/manual.jpg');
    // res.end();



});


// not found request should be always in the end.
app.get('/*', (req, res) => {
    res.status(404).send('Not found!')
});

app.listen(5000, () => console.log('Server is listening on port 5000...'));
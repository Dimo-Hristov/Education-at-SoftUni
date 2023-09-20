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
    res.download('./03 ExpressJS and Templating/manual.jpg');
});


// not found request should be always in the end.
app.get('/*', (req, res) => {
    res.status(404).send('Not found!')
});

app.listen(5000, () => console.log('Server is listening on port 5000...'));
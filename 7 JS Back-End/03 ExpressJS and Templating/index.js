const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('Hello from express');
});

app.get('/cats', (req, res) => {
    res.send('This page contains cats')
})

app.post('/cats', (req, res) => {
    res.status(201).send('Cat hard been created')
})

app.get('/*', (req, res) => {
    res.status(404).send('Not found!')
})

app.listen(5000, () => console.log('Server is listening on port 5000...'));
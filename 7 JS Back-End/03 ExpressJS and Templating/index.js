const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('Hello from express');
});

app.get('/cats', (req, res) => {
    res.send('This page contains cats')
})

app.listen(5000, () => console.log('Server is listening on port 5000...'));
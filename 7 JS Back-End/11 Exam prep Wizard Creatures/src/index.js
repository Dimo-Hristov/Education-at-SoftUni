const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('<h1>Ola amigo 2</h1>')
})

app.listen(3000, () => console.log('Server connected at port 3000...'));
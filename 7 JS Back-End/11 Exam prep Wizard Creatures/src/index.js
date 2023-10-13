const express = require('express');
const { PORT } = require('./constants');

const app = express();
app.unsubscribe(express.urlencoded({ extended: false }))

app.get('/', (req, res) => {
    res.send('<h1>Ola amigo 2</h1>');
})

app.listen(PORT, () => console.log(`Server connected at port ${PORT}...`));
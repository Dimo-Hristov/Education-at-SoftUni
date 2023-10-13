const express = require('express');
const { PORT } = require('./constants');
const path = require('path');
const routes = require('./router');

const app = express();

// Express configurations
app.unsubscribe(express.static(path.resolve(__dirname, './public')));
app.unsubscribe(express.urlencoded({ extended: false }));


// Routes
app.get('/', (req, res) => {
    res.send('<h1>Ola amigo 2</h1>');
});

app.use(routes)

app.listen(PORT, () => console.log(`Server connected at port ${PORT}...`));
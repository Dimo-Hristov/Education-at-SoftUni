const express = require('express');
const cookieParser = require('cookie-parser');
const { v4: uuid } = require('uuid');

const app = express();

app.get('/', (req, res) => {
    let id = uuid();

    const cookie = req.header('Cookie');
    if (cookie) {
        const [key, value] = cookie.split('=');
        id = value;
    } else {
        res.cookie('userId', id);
    }

    res.send(`Hello user - ${id}`);
});

app.listen(5000, () => console.log('Server is running'))
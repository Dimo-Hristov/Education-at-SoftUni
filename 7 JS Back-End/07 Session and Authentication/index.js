const express = require('express');
const cookieParser = require('cookie-parser');
const { v4: uuid } = require('uuid');

const app = express();

app.use(cookieParser())

app.get('/', (req, res) => {
    let id = uuid();

    const userId = req.cookies['userId'];

    if (userId) {
        id = userId;
    } else {
        res.cookie('userId', id);
    }

    res.send(`Hello user - ${id}`);
});

app.listen(5000, () => console.log('Server is running'))
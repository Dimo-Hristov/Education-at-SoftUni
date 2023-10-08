const express = require('express');
const { v4: uuid } = require('uuid');

const app = express();

app.get('/', (req, res) => {
    const id = uuid();

    console.log(req.header('Cookie'));


    res.header('Set-Cookie', `userId=${id}`);

    res.send(`Hello user - ${id}`);
});

app.listen(5000, () => console.log('Server is running'))
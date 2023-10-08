const express = require('express');
const cookieParser = require('cookie-parser');
const { v4: uuid } = require('uuid');
const bcrypt = require('bcrypt');

const app = express();

app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));


app.get('/', (req, res) => {
    let id = undefined;

    const userId = req.cookies['userId'];


    if (userId) {
        id = userId;

    } else {
        id = uuid();
        res.cookie('userId', id, { httpOnly: true });
    }

    res.send(`Hello user - ${id}`);
});

app.get('/login', (req, res) => {
    res.send(`
        <form method="POST">
    <label for="username">Username</label>
    <input type="text" name="username" id="username" />
    <label for="password">Password</label>
    <input type="password" name="password" id="password" />
    <input type="submit" value="Login" />
    </form>`)
});

app.post('/login', async (req, res) => {
    const { username, password } = req.body;

    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);



    res.send(hash);
})

app.listen(5000, () => console.log('Server is running'))
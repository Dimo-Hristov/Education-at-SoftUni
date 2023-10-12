const express = require('express');
const validator = require('validator')

const { isAgeValid } = require('./utils/validations');
const { validateName } = require('./middlewares/middlewares');

const app = express();

app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
    res.send(`
    <form method="POST">
  <label for="name">Name</label>
  <input type="text" name="name" id="name" />

  <label for="age">Age</label>
  <input type="number" name="age" id="age" />

  <label for="password">Password</label>
  <input type="password" name="password" id="password" />

  <input type="submit" />
</form>`);
});

app.post('/', validateName, (req, res) => {
    const { name, age, password } = req.body;
    //  three types of validation
    // in the action if is specific
    // in util if we use it a couple of times
    // in middleware if we use it a lot
    // next step is using libraries.

    if (!isAgeValid(age)) {
        return res.send('invalid age!');
    }

    if (!validator.isStrongPassword(password)) {
        return res.send('Weak password')
    }

    res.send('Successfull operation');
});

app.listen(5000, () => console.log('Server is listening on port 5000....'));
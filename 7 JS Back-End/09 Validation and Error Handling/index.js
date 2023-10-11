const express = require('express');

const app = express();

app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
    res.send(`
    <form method="POST">
  <label for="name">Name</label>
  <input type="text" name="name" id="name" />

  <label for="age">Age</label>
  <input type="number" name="age" id="age" />
  <input type="submit" />
</form>`);
});

app.post('/', (req, res) => {
    const { name, age } = req.body;

    console.log(name, age);

    if (!name || name.length <= 3) {
        return res.send('invalid name!');
    }

    if (!age || age < 0) {
        return res.send('invalid age!');
    }

    res.send('Successfull operation');
});

app.listen(5000, () => console.log('Server is listening on port 5000....'));
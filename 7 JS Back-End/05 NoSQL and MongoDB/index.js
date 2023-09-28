const mongoose = require('mongoose');

const Cat = require('./models/Cat')

async function connectDb() {
    await mongoose.connect('mongodb://localhost:27017/test');
    console.log('Database connected....');


    const newCat = new Cat({
        name: 'Gosho',
        age: 15,
        breed: 'kuche'
    });

    await newCat.save();

}
connectDb();
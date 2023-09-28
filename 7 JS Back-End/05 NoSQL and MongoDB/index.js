const mongoose = require('mongoose');

const Cat = require('./models/Cat')

async function connectDb() {
    await mongoose.connect('mongodb://localhost:27017/test');
    console.log('Database connected....');


    const cats = await Cat.find();

    cats.forEach(cat => cat.greet())

}
connectDb();
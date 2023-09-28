const mongoose = require('mongoose');

const Cat = require('./models/Cat')

async function connectDb() {
    await mongoose.connect('mongodb://localhost:27017/test');
    console.log('Database connected....');


    const cats = await Cat.find();

    //virtual function
    // cats.forEach(cat => cat.greet());

    //virtual property
    // cats.forEach(cat => console.log(cat.info));

    //static request
    const result = await Cat.giveMeCats();
    console.log(result);

}
connectDb();
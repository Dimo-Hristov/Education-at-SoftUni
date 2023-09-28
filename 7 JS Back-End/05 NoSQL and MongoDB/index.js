const mongoose = require('mongoose');

const Cat = require('./models/Cat')

async function connectDb() {
    await mongoose.connect('mongodb://localhost:27017/test');
    console.log('Database connected....');


    //virtual function
    // cats.forEach(cat => cat.greet());

    //virtual property
    // cats.forEach(cat => console.log(cat.info));

    //static request
    // const result = await Cat.giveMeCats();
    // console.log(result);

    // CRUD OPERATIONS

    // Read

    // const cats = await Cat.find({ age: 21 })
    // const cat = await Cat.findById('651536a71711eb8377f46edf')

    //FindOne takes the first match !
    // const cat = await Cat.findOne({ breed: 'Pes' })
    // console.log(cat);

}
connectDb();
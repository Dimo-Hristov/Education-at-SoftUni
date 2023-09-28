const mongoose = require('mongoose');

async function connectDb() {
    await mongoose.connect('mongodb://localhost:27017/test');
    console.log('Database connected....');




}
connectDb();
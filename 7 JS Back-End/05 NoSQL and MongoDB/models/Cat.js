const mongoose = require('mongoose');

const catSchema = new mongoose.Schema({
    name: String,
    age: Number,
    breed: String
});

catSchema.methods.greet = function () {
    console.log(`Hello i am ${this.name} and i am ${this.age} yars old`);
};

const Cat = mongoose.model('Cat', catSchema);

module.exports = Cat;
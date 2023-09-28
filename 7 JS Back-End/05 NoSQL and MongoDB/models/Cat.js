const mongoose = require('mongoose');

const catSchema = new mongoose.Schema({
    name: String,
    age: Number,
    breed: String
});
// virtual function
catSchema.methods.greet = function () {
    console.log(`Hello i am ${this.name} and i am ${this.age} yars old`);
};
//virtual property
catSchema.virtual('info').get(function () {
    return `My name is ${this.name} and i am ${this.breed} breed`
})
//static request
catSchema.static('giveMeCats', function () {
    return this.find();
})

const Cat = mongoose.model('Cat', catSchema);

module.exports = Cat;
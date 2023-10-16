const mongoose = require('mongoose');

const creatureSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name is requried'],
        minLength: [2, 'Name should be at least 3 characters long']
    },
    species: {
        type: String,
        required: [true, 'Species is requried'],
        minLength: [3, 'Species should be at least 3 characters long']
    },
    skinColor: {
        type: String,
        required: [true, 'Skin color is requried'],
        minLength: [3, 'Skin color should be at least 3 characters long'],
    },
    eyeColor: {
        type: String,
        required: [true, 'Eye color is requried'],
        minLength: [3, 'Eye color should be at least 3 characters long']
    },
    image: {
        type: String,
        required: [true, 'Image is requried'],
        validate: {
            validator: function (value) {
                return /^(https?:\/\/)/mg.test(value);
            },
            message: 'Image url should start with https:// or http://'
        },
    },
    description: {
        type: String,
        required: [true, 'description is requried'],
        minLength: [5, 'Description should be at least 5 characters long'],
        maxLength: [500, 'Description maximum characters is 500']
    },
    votes: [
        {
            user: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'User',
            }
        }
    ],
    owner: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: [true, 'Please login to add creature'] },
});


const Creature = mongoose.model('Creature', creatureSchema);

module.exports = Creature;
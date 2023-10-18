const mongoose = require('mongoose');

const animalSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name is required'],
        minLength: [2, 'Name should be at least 2 characters long']
    },
    years: {
        type: String,
        required: [true, 'Years is required'],
        minLength: [1, 'Minimum years: 1'],
        maxLength: [100, 'Maximum years: 100'],
    },
    kind: {
        type: String,
        required: [true, 'Kind is required'],
        minLength: [3, 'Kind should be at least 3 characters long']
    },
    image: {
        type: String,
        required: [true, 'Image is required'],
        validate: {
            validator: function (value) {
                return /^(https?:\/\/)/mg.test(value);
            },
            message: 'Image url should start with https:// or http://'
        },
    },
    need: {
        type: String,
        required: [true, 'Need is required'],
        minLength: [3, 'Need should be at least 3 characters long'],
        maxLength: [20, 'Need should be no longer than 20 characters']
    },
    location: {
        type: String,
        required: [true, 'Location is required'],
        minLength: [5, 'Location should be at least 5 characters long'],
        maxLength: [15, 'Location should be maximum 15 characters long']
    },
    description: {
        type: String,
        required: [true, 'Description is required'],
        minLength: [5, 'Description should be at least 5 characters long'],
        maxLength: [50, 'Description should be maximum 50 characters long']
    },
    donations: [
        {
            user: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'User'
            }
        }
    ],
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        rerquired: true
    }
});

const Animal = mongoose.model('Animal', animalSchema);
module.exports = Animal;
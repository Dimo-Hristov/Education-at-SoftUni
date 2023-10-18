const mongoose = require('mongoose');

const animalSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name is required']
    },
    years: {
        type: String,
        required: [true, 'Years is required']
    },
    kind: {
        type: String,
        required: [true, 'Kind is required']
    },
    image: {
        type: String,
        required: [true, 'Image is required']
    },
    need: {
        type: String,
        required: [true, 'Need is required']
    },
    location: {
        type: String,
        required: [true, 'Location is required']
    },
    description: {
        type: String,
        required: [true, 'Description is required']
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
    }
});

const Animal = mongoose.model('Animal', animalSchema);
module.exports = Animal;
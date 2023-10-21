const mongoose = require('mongoose');

const electronicSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name is required'],
        minLength: [10, 'Name should be at lest 10 characters long'],
    },
    type: {
        type: String,
        required: [true, 'Type is required'],
        minLength: [2, 'Type should be at lest 3 characters long'],
    },
    damages: {
        type: String,
        required: [true, 'Damages is required'],
        minLength: [10, 'Damages should be at lest 3 characters long'],
    },
    image: {
        type: String,
        required: ['Image is required'],
        validate: {
            validator: function (value) {
                return /^(https?:\/\/)/mg.test(value);
            },
            message: 'Image url should start with https:// or http://'
        },
    },
    description: {
        type: String,
        required: [true, 'Description is required'],
        minLength: [10, 'Description should be at lest 3 characters long'],
        maxLength: [200, 'Maximum characters allowed is 200'],
    },
    production: {
        type: Number,
        required: true,
        min: [1900, 'Production should be between 1900 and 2023'],
        max: [1900, 'Production should be between 1900 and 2023'],
    },
    exploitation: {
        type: Number,
        required: [true, 'Exploitation is required'],
        validate: {
            validator: (value) => {
                return value > 0;
            },
            message: 'Exploitation must be a positive number.'
        }
    },
    price: {
        type: Number,
        requried: [true, 'Price is required'],
        validate: {
            validator: (value) => {
                return value > 0;
            },
            message: 'Price must be a positive number.'
        }
    },
    buyingList: [
        {
            userId: {
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

const Electronic = mongoose.model('Electronic', electronicSchema);
module.exports = Electronic;
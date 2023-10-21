const mongoose = require('mongoose');

const electronicSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    damages: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    production: {
        type: Number,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    exploitation: {
        type: Number,
        required: true
    },
    price: {
        type: Number,
        requried: true
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
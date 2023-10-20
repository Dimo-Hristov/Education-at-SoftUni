const mongoose = require('mongoose');

const cryptoSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minLength: [2, 'Name should be at least 2 characters long']
    },
    image: {
        type: String,
        required: true,
        validate: {
            validator: function (value) {
                return /^(https?:\/\/)/mg.test(value);
            },
            message: 'Image url should start with https:// or http://'
        },
    },
    price: {
        type: Number,
        required: true,
        validate: {
            validator: function (value) {
                return value >= 0
            },
            message: 'Price should be a posotive number'
        }
    },
    description: {
        type: String,
        required: true,
        minLength: [10, 'Description should be at least 10 characters long']
    },
    paymentMethod: {
        type: String,
        required: true,
        enum: ['crypto-wallet', 'credit-card', 'debit-card', 'paypal'],
    },
    customers: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }],
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
});

const Crypto = mongoose.model('Crypto', cryptoSchema);
module.exports = Crypto;
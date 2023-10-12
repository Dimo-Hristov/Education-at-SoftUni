const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, 'Username is required'],
        minLength: [5, 'Password should be at least 5 characters long'],
        maxLength: 20,
        match: /^[A-Za-z-0-9]+$/,
        unique: true,

    },
    password: {
        type: String,
        validate: {
            validator: function (value) {
                return /^[A-Za-z-0-9]+$/.test(value);
            },
            message: `Invalid password characters`,
        },
        minLength: 8,

    },
});

userSchema.virtual('repeatPassword')
    .set(function (value) {
        if (value !== this.password) {
            throw new mongoose.MongooseError('Passwords do not match!')
        }
    });

userSchema.pre('save', async function () {
    const hash = await bcrypt.hash(this.password, 10);

    this.password = hash;
});


const User = mongoose.model('User', userSchema);

module.exports = User;
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, 'Username name is requried'],
        minLength: [5, 'Username should be at least 5 characters long']
    },
    email: {
        type: String,
        required: [true, 'Email is requried'],
        unique: true,
        minLength: [10, 'Email should be at least 10 characters long']
    },
    password: {
        type: String,
        required: [true, 'Password is requried'],
        minLength: [4, 'Password should be at least 4 characters long']
    },
});

userSchema.virtual('rePassword').set(function (value) {
    if (value !== this.password) {
        throw new Error('Password missmatch!');
    }
});

userSchema.pre('save', async function () {
    const hash = await bcrypt.hash(this.password, 10);
    this.password = hash;
})



const User = mongoose.model('User', userSchema);
module.exports = User;
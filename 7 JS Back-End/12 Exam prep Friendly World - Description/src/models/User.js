const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: [true, 'Email is requried'],
        unique: true,
    },
    password: { type: String, required: [true, 'Password is requried'] },
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
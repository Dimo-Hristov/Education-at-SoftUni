const User = require("../models/User");
const bcrypt = require('bcrypt');

exports.register = (userData) => User.create(userData);

exports.login = async (email, password) => {
    const user = await User.findOne({ email });

    //  validate user
    if (!user) {
        return new Error('Invalid email or password!');
    }

    // validate password
    const isValid = await bcrypt.compare(password, user.password);

    if (!isValid) {
        return new Error('Invalid email or password!');
    }

    return user;
};
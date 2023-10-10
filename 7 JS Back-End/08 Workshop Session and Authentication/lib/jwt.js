const { promisify } = require('util');
const jsonwebtoken = require('jsonwebtoken');

const jwt = {
    gign: promisify(jsonwebtoken.sign),
    verify: promisify(jsonwebtoken.verify),
};

module.exports = jwt;
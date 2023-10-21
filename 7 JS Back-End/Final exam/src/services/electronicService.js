const Electronic = require('../models/Electronic');

exports.addPost = (eletronicData) => Electronic.create(eletronicData);
const Electronic = require('../models/Electronic');

exports.addOffer = (eletronicData) => Electronic.create(eletronicData);
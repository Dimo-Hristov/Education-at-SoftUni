const Crypto = require('../models/Crypto');

exports.createOffer = (offerData) => Crypto.create(offerData);
const Crypto = require('../models/Crypto');

exports.createOffer = (offerData) => Crypto.create(offerData);

exports.getAllOffers = () => Crypto.find();

exports.getOne = (offerId) => Crypto.findById(offerId).populate();

exports.buyCrypto = (userId, postId) => Crypto.findByIdAndUpdate(postId, {
    $push: { customers: userId }
});

exports.deleteOffer = (offerId) => Crypto.findByIdAndDelete(offerId);
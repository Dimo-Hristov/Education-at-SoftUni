const Electronic = require('../models/Electronic');

exports.addOffer = (eletronicData) => Electronic.create(eletronicData);

exports.getAllOffers = () => Electronic.find();

exports.getOneOfferPopulated = (offerId) => Electronic.findById(offerId)

exports.getOneOffer = (offerId) => Electronic.findById(offerId).populate();

exports.buyEletronic = (offerId, userId) => Electronic.findByIdAndUpdate(offerId, { $push: { 'buyingList': { userId } } })
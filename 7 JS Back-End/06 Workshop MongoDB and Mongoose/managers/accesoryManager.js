const Accesory = require('../models/Accesory');

exports.getAll = () => Accesory.find();

exports.create = (accesoryData) => Accesory.create(accesoryData);

exports.getAvailable = (accesoryIds) => Accesory.find({ _id: { $nin: accesoryIds } })

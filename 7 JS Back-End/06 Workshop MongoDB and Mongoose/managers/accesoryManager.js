const Accesory = require('../models/Accesory');

exports.getAll = () => Accesory.find();

exports.create = (accesoryData) => Accesory.create(accesoryData);
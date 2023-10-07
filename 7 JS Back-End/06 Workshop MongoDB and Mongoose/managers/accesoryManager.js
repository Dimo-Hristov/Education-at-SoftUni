const Accesory = require('../models/accesory');

exports.getAll = () => Accesory.find();

exports.create = (accesoryData) => Accesory.create(accesoryData);
const Animal = require('../models/Animal');

exports.create = (animalData) => Animal.create(animalData);
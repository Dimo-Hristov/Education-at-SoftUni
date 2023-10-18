const Animal = require('../models/Animal');

exports.create = (animalData) => Animal.create(animalData);

exports.getAll = () => Animal.find();

exports.getOne = (animalId) => Animal.findById(animalId);

exports.donate = (animalId, userId) => Animal.findByIdAndUpdate(
    animalId,
    { $push: { 'donations': { user: userId } } }
);

exports.deleteOne = (animalId) => Animal.findByIdAndDelete(animalId);

exports.updateOne = (animalId, updatedData) => Animal.findByIdAndUpdate(animalId, updatedData, { runValidators: true })
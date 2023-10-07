const mongoose = require('mongoose');

const cubeSchema = new mongoose.Schema({
    name: String,
    description: String,
    imageUrl: String,
    difficultyLevel: Number,
    accersories: [{
        type: mongoose.Types.ObjectId,
        ref: 'Accesory'
    }]
});

const Cube = mongoose.model('Cube', cubeSchema);

module.exports = Cube;
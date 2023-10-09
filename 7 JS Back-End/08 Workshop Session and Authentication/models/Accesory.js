const mongoose = require('mongoose');

const accesorySchema = new mongoose.Schema({
    name: String,
    description: String,
    imageUrl: String
});

const Accesory = mongoose.model('Accesory', accesorySchema);

module.exports = Accesory
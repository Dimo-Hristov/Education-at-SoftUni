const mongoose = require('mongoose');

const creatureSchema = new mongoose.Schema({
    name: { type: String, required: [true, 'Name is requried'] },
    species: { type: String, required: [true, 'Species is requried'] },
    skinColor: { type: String, required: [true, 'Skin color is requried'] },
    eyeColor: { type: String, required: [true, 'Eye color is requried'] },
    image: { type: String, required: [true, 'Image is requried'] },
    description: { type: String, required: [true, 'description is requried'] },
    votes: [
        {
            user: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'User',
            }
        }
    ],
    owner: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: [true, 'Please login to add creature'] },
});


const Creature = mongoose.model('Creature', creatureSchema);

module.exports = Creature;
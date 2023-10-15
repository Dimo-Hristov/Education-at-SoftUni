const mongoose = require('mongoose');

const creatureSchema = new mongoose.Schema({
    name: { type: String, requried: [true, 'Name is requried'] },
    species: { type: String, requried: [true, 'Species is requried'] },
    skinColor: { type: String, requried: [true, 'Skin color is requried'] },
    eyeColor: { type: String, requried: [true, 'Eye color is requried'] },
    image: { type: String, requried: [true, 'Image is requried'] },
    description: { type: String, requried: [true, 'description is requried'] },
    votes: [
        {
            user: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'User',
            }
        }
    ],
    owner: { type: mongoose.Schema.Types.ObjectIdr, ref: 'User' },
});


const Creature = mongoose.model('Creature', creatureSchema);

module.exports = Creature;
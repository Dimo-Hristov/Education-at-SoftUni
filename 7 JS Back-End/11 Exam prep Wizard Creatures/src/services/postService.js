const Creature = require('../models/Creature');


exports.addCreature = (creatureData) => Creature.create(creatureData);
